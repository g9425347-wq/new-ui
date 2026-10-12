import {
	FC,
	memo,
	useState,
	useMemo,
	useRef,
	useEffect,
	useLayoutEffect,
	useCallback,
} from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import type { Step } from "./AttackPath";
import { Dialog } from "../Dialog/Dialog";
import { Icon } from "../Icon/Icon";
import { resolveInfraNode, infraNodeDataUri } from "../InfraIcon/infraCatalog";
import { useTheme } from "@mui/material";

export interface AttackPathGraphProps {
	steps: Step[];
	height?: number | string;
	width?: number | string;
	logoUrl?: string;
	onNodeClick?: (assetUid: string) => void;
	onVulnerabilityClick?: (vulnerabilityUid: string) => void;
}

const MIN_FOLD_LENGTH = 4;
const TARGET_ASPECT = 1.6;
const ASSET_SPACING_X = 1000;
const ASSET_ZIGZAG_Y = 80;
const ROW_GAP = 210;
const VULN_RADIUS = 165;
const VULN_RADIUS_STAGGER = 46;
const VULN_ARC_DEG = 150;
const VULN_STEP_DEG = 96;
const ASSET_SIZE = 160;
const VULN_SIZE = 80;

const ASSET_FONT_SIZE = 40;
const ASSET_LINE_HEIGHT = 1.25;
const ASSET_TEXT_MAX_WIDTH = 170;
const ASSET_TEXT_MARGIN_Y = 7;
const VULN_COUNT_FONT_SIZE = 30;
const VULN_COUNT_GAP = 6;
const LABEL_MARGIN = 76;

const toRad = (deg: number) => (deg * Math.PI) / 180;

interface AssetPosition {
	x: number;
	y: number;
	side: number;
}

function fanReach(count: number): number {
	if (count === 0) return ASSET_SIZE / 2 + LABEL_MARGIN;
	const maxRadius =
		VULN_RADIUS +
		(count > 1 ? VULN_RADIUS_STAGGER : 0) +
		Math.max(0, count - 4) * 12;
	return maxRadius + VULN_SIZE / 2 + LABEL_MARGIN;
}

function chooseRowCount(count: number): number {
	if (count <= MIN_FOLD_LENGTH) return 1;

	const rowExtent = 2 * (ASSET_ZIGZAG_Y + fanReach(0));
	const pitch = rowExtent + ROW_GAP;

	let best = 1;
	let bestError = Infinity;
	for (let rows = 1; rows <= count; rows++) {
		const perRow = Math.ceil(count / rows);
		const w = (perRow - 1) * ASSET_SPACING_X;
		const h = (rows - 1) * pitch + rowExtent;
		const error = Math.abs(Math.log(w / h / TARGET_ASPECT));
		if (error < bestError) {
			bestError = error;
			best = rows;
		}
	}
	return best;
}

function layoutAssets(steps: Step[], expanded: Set<string>): AssetPosition[] {
	const rowCount = chooseRowCount(steps.length);
	const perRow = Math.ceil(steps.length / rowCount);
	const half = ASSET_SIZE / 2 + LABEL_MARGIN;

	const placed = steps.map((step, idx) => {
		const row = Math.floor(idx / perRow);
		const col = idx % perRow;
		const side = idx % 2 === 0 ? -1 : 1;
		const dy = side * ASSET_ZIGZAG_Y;
		const reach = fanReach(
			expanded.has(step.assetUid) ? step.vulnerabilities?.length ?? 0 : 0
		);

		return {
			row,
			x: (row % 2 === 1 ? perRow - 1 - col : col) * ASSET_SPACING_X,
			dy,
			side,
			top: dy - (side === -1 ? reach : half),
			bottom: dy + (side === 1 ? reach : half),
		};
	});

	const rowY: number[] = [0];
	for (let row = 1; row < rowCount; row++) {
		const prev = placed.filter((p) => p.row === row - 1);
		const inRow = placed.filter((p) => p.row === row);
		const prevBottom = rowY[row - 1] + Math.max(...prev.map((p) => p.bottom));
		const thisTop = Math.min(...inRow.map((p) => p.top));
		rowY[row] = prevBottom + ROW_GAP - thisTop;
	}

	return placed.map((p) => ({ x: p.x, y: rowY[p.row] + p.dy, side: p.side }));
}

function vulnPosition(
	asset: AssetPosition,
	index: number,
	count: number
): { x: number; y: number } {
	const centreDeg = asset.side * 90;
	const arcDeg =
		count > 1 ? Math.min(VULN_ARC_DEG, (count - 1) * VULN_STEP_DEG) : 0;
	const stepDeg = count > 1 ? arcDeg / (count - 1) : 0;
	const angle = toRad(centreDeg - arcDeg / 2 + index * stepDeg);
	const radius =
		VULN_RADIUS +
		(index % 2) * VULN_RADIUS_STAGGER +
		Math.max(0, count - 4) * 12;
	return {
		x: asset.x + radius * Math.cos(angle),
		y: asset.y + radius * Math.sin(angle),
	};
}

function truncate(str: string, max: number): string {
	return str.length > max ? str.slice(0, max - 1) + "…" : str;
}

const vulnCountId = (assetUid: string) => `count::${assetUid}`;

function captionHeight(label: string): number {
	const perLine = Math.max(
		1,
		Math.floor(ASSET_TEXT_MAX_WIDTH / (ASSET_FONT_SIZE * 0.62))
	);
	let lines = 1;
	let used = 0;
	for (const word of label.split(/\s+/)) {
		if (used === 0) used = word.length;
		else if (used + 1 + word.length <= perLine) used += 1 + word.length;
		else {
			lines++;
			used = word.length;
		}
	}
	return lines * ASSET_FONT_SIZE * ASSET_LINE_HEIGHT;
}

const isActiveStatus = (statusUid?: string): boolean =>
	statusUid === "OPEN" || statusUid === "ASSIGN";
const isLive = (cy: cytoscape.Core | null): cy is cytoscape.Core =>
	!!cy && !cy.destroyed();

type GraphTokens = Record<string, any>;

const severityColor = (
	tokens: GraphTokens,
	level?: string,
	fallback: string = tokens.severityFallback
): string => tokens.severity[(level ?? "").toUpperCase()] ?? fallback;

const riskColor = (tokens: GraphTokens, score: number): string =>
	score >= 9
		? tokens.severity.CRITICAL
		: score >= 7
		? tokens.severity.HIGH
		: score >= 4
		? tokens.severity.MEDIUM
		: score > 0
		? tokens.severity.LOW
		: tokens.severity.NONE;

const escapeHtml = (value: unknown): string =>
	String(value ?? "").replace(
		/[&<>"']/g,
		(ch) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
			}[ch] as string)
	);

const tooltipRow = (
	label: string,
	value: string,
	color: string,
	labelColor: string
): string =>
	`<div style="display:flex;gap:16px;justify-content:space-between;align-items:baseline;margin-top:5px">` +
	`<span style="color:${labelColor};white-space:nowrap">${label}</span>` +
	`<span style="color:${color};font-weight:600;text-align:right">${value}</span>` +
	`</div>`;

function assetTooltip(d: any, tokens: GraphTokens): string {
	const vulns: { uid: string; statusUid: string }[] = d.vulnerabilities ?? [];
	const active = vulns.filter((v) => isActiveStatus(v.statusUid));

	const chips = vulns
		.slice(0, 8)
		.map((v) => {
			const color = isActiveStatus(v.statusUid)
				? tokens.vulnActiveBorder
				: tokens.vulnResolvedBorder;
			const bg = isActiveStatus(v.statusUid)
				? tokens.vulnActiveFill
				: tokens.vulnResolvedFill;
			return (
				`<span style="display:inline-block;margin:3px 4px 0 0;padding:1px 7px;border-radius:6px;` +
				`border:1px solid ${color};background:${bg};color:${color};font-size:10px;font-weight:600">${escapeHtml(
					v.uid
				)}</span>`
			);
		})
		.join("");
	const more =
		vulns.length > 8
			? `<span style="color:${tokens.legendText};font-size:10px"> +${
					vulns.length - 8
			  } more</span>`
			: "";

	const role = d.isEntry
		? "Entry point"
		: d.isTarget
		? "Target"
		: `Step ${d.stepNumber}`;

	return (
		`<div style="min-width:250px;max-width:340px">` +
		`<div style="font-size:13px;font-weight:700;color:${
			tokens.assetLabel
		};word-break:break-all">${escapeHtml(d.assetUid)}</div>` +
		`<div style="margin-top:2px;font-size:10px;font-weight:600;letter-spacing:.4px;text-transform:uppercase;color:${tokens.legendText}">${role}</div>` +
		(d.assetDescription
			? `<div style="margin-top:7px;font-size:11px;line-height:1.45;color:${
					tokens.legendText
			  }">${escapeHtml(d.assetDescription)}</div>`
			: "") +
		`<div style="margin-top:9px;padding-top:8px;border-top:1px solid ${tokens.borderSubtle}">` +
		tooltipRow(
			"Type",
			escapeHtml(d.assetType || "—"),
			tokens.assetLabel,
			tokens.legendText
		) +
		(d.platformLabel
			? tooltipRow(
					"Platform",
					escapeHtml(d.platformLabel),
					tokens.assetLabel,
					tokens.legendText
			  )
			: "") +
		tooltipRow(
			"Criticality",
			escapeHtml(d.criticality || d.criticalityUid || "—"),
			severityColor(
				tokens,
				d.criticalityUid || d.criticality,
				tokens.legendText
			),
			tokens.legendText
		) +
		tooltipRow(
			"Exposure",
			escapeHtml(d.exposureLevel || d.exposureLevelUid || "—"),
			severityColor(
				tokens,
				d.exposureLevelUid || d.exposureLevel,
				tokens.legendText
			),
			tokens.legendText
		) +
		tooltipRow(
			"Risk score",
			escapeHtml(d.riskScore ?? 0),
			riskColor(tokens, Number(d.riskScore) || 0),
			tokens.legendText
		) +
		tooltipRow(
			"Relationship",
			escapeHtml(d.relationship || "—"),
			tokens.assetLabel,
			tokens.legendText
		) +
		tooltipRow(
			"Vulnerabilities",
			vulns.length === 0 ? "None" : `${vulns.length} · ${active.length} active`,
			active.length > 0 ? tokens.vulnActiveBorder : tokens.assetLabel,
			tokens.legendText
		) +
		`</div>` +
		(vulns.length > 0
			? `<div style="margin-top:7px">${chips}${more}</div>`
			: "") +
		`</div>`
	);
}

function vulnTooltip(d: any, tokens: GraphTokens): string {
	const color = isActiveStatus(d.statusUid)
		? tokens.vulnActiveBorder
		: tokens.vulnResolvedBorder;
	return (
		`<div style="min-width:180px">` +
		`<div style="font-size:12px;font-weight:700;color:${
			tokens.assetLabel
		};word-break:break-all">${escapeHtml(d.vulnUid)}</div>` +
		`<div style="margin-top:8px;padding-top:7px;border-top:1px solid ${tokens.borderSubtle}">` +
		tooltipRow(
			"Status",
			escapeHtml(d.statusUid || "—"),
			color,
			tokens.legendText
		) +
		tooltipRow(
			"Asset",
			escapeHtml(d.parentAssetUid),
			tokens.assetLabel,
			tokens.legendText
		) +
		`</div></div>`
	);
}

export const AttackPathGraph: FC<AttackPathGraphProps> = memo(
	({
		steps,
		height = "100vh",
		width = "100%",
		logoUrl,
		onNodeClick,
		onVulnerabilityClick,
	}) => {
		const theme = useTheme() as any;
		const THEME_TOKENS: GraphTokens = theme.palette.attackPathGraph;

		const [expandedAssets, setExpandedAssets] = useState<Set<string>>(
			new Set()
		);
		const [fullScreen, setFullScreen] = useState(false);
		const [hoverCard, setHoverCard] = useState<{
			html: string;
			x: number;
			y: number;
			radius: number;
		} | null>(null);
		const [cardPos, setCardPos] = useState<{
			left: number;
			top: number;
		} | null>(null);
		const cardRef = useRef<HTMLDivElement | null>(null);

		const cyRef = useRef<cytoscape.Core | null>(null);
		const containerRef = useRef<HTMLDivElement | null>(null);
		const laidOut = useRef(false);
		const callbacksRef = useRef({ onNodeClick, onVulnerabilityClick });
		callbacksRef.current = { onNodeClick, onVulnerabilityClick };

		const elements = useMemo(() => {
			const els: cytoscape.ElementDefinition[] = [];
			const positions = layoutAssets(steps, expandedAssets);

			steps.forEach((step, idx) => {
				const vulns = step.vulnerabilities ?? [];
				const activeCount = vulns.filter((v) =>
					isActiveStatus(v.statusUid)
				).length;
				const isExpanded = expandedAssets.has(step.assetUid);
				const isEntry = idx === 0;
				const isTarget = idx === steps.length - 1 && steps.length > 1;
				const pos = positions[idx];

				const size =
					ASSET_SIZE +
					Math.min(Math.max(step.riskScore ?? 0, 0), 10) * 1.6 +
					(isEntry || isTarget ? 6 : 0);

				const fill = isExpanded
					? THEME_TOKENS.assetExpandedFill
					: isEntry
					? THEME_TOKENS.entryFill
					: isTarget
					? THEME_TOKENS.targetFill
					: THEME_TOKENS.assetFill;
				const stroke = isExpanded
					? THEME_TOKENS.assetExpandedBorder
					: isEntry
					? THEME_TOKENS.entryBorder
					: isTarget
					? THEME_TOKENS.targetBorder
					: THEME_TOKENS.assetBorder;

				const infra = resolveInfraNode(
					step.assetTypeUid || step.assetType,
					step.platformUid || step.platform
				);
				const glyphColor = isEntry
					? THEME_TOKENS.entryBorder
					: isTarget
					? THEME_TOKENS.targetBorder
					: THEME_TOKENS.assetGlyph;

				const caption = truncate(step.assetUid, 26);
				const captionDir = pos.side === -1 ? 1 : -1;

				els.push({
					data: {
						id: step.assetUid,
						type: "asset",
						icon: infraNodeDataUri(
							infra.iconKey,
							glyphColor,
							infra.platformBadge,
							infra.platformColor
						),
						platformLabel: infra.platformLabel,
						label: caption,
						size,
						fill,
						stroke,
						borderWidth: isExpanded || isEntry ? 3 : 2,
						assetUid: step.assetUid,
						assetDescription: step.assetDescription,
						criticality: step.criticality,
						criticalityUid: step.criticalityUid,
						exposureLevel: step.exposureLevel,
						exposureLevelUid: step.exposureLevelUid,
						assetType: step.assetType,
						relationship: step.relationship,
						riskScore: step.riskScore,
						vulnerabilities: vulns,
						stepNumber: idx + 1,
						isEntry,
						isTarget,
						fanUp: pos.side === -1 ? 1 : 0,
					},
					position: { x: pos.x, y: pos.y },
				});

				if (activeCount > 0) {
					const offset =
						size / 2 +
						ASSET_TEXT_MARGIN_Y +
						captionHeight(caption) +
						VULN_COUNT_GAP +
						(VULN_COUNT_FONT_SIZE * ASSET_LINE_HEIGHT) / 2;

					els.push({
						data: {
							id: vulnCountId(step.assetUid),
							type: "vulnCount",
							label: `● ${activeCount} vuln${activeCount === 1 ? "" : "s"}`,
							assetUid: step.assetUid,
						},
						position: { x: pos.x, y: pos.y + captionDir * offset },
						selectable: false,
						grabbable: false,
					});
				}

				if (isExpanded) {
					vulns.forEach((vuln, vi) => {
						const active = isActiveStatus(vuln.statusUid);
						const vulnNodeId = `vuln::${vuln.uid}`;
						const vpos = vulnPosition(pos, vi, vulns.length);

						els.push({
							data: {
								id: vulnNodeId,
								type: "vuln",
								label: truncate(vuln.uid, 22),
								fill: active
									? THEME_TOKENS.vulnActiveFill
									: THEME_TOKENS.vulnResolvedFill,
								stroke: active
									? THEME_TOKENS.vulnActiveBorder
									: THEME_TOKENS.vulnResolvedBorder,
								active: active ? 1 : 0,
								vulnUid: vuln.uid,
								statusUid: vuln.statusUid,
								parentAssetUid: step.assetUid,
								fanUp: pos.side === -1 ? 1 : 0,
							},
							position: { x: vpos.x, y: vpos.y },
						});

						els.push({
							data: {
								id: `edge::${step.assetUid}::${vuln.uid}`,
								source: step.assetUid,
								target: vulnNodeId,
								type: "vuln",
								color: active
									? THEME_TOKENS.vulnEdge
									: THEME_TOKENS.vulnResolvedBorder,
								active: active ? 1 : 0,
							},
						});
					});
				}

				if (idx > 0) {
					els.push({
						data: {
							id: `edge::${steps[idx - 1].assetUid}::${step.assetUid}`,
							source: steps[idx - 1].assetUid,
							target: step.assetUid,
							type: "path",
							label: truncate(step.relationship ?? "Unknown", 22),
						},
					});
				}
			});

			return els;
		}, [steps, expandedAssets, THEME_TOKENS]);

		const stylesheet: cytoscape.StylesheetStyle[] = useMemo(
			() => [
				{
					selector: 'node[type="asset"]',
					style: {
						shape: "ellipse",
						width: "data(size)",
						height: "data(size)",
						"background-color": "data(fill)",
						"border-color": "data(stroke)",
						"border-width": "data(borderWidth)",
						"underlay-shape": "ellipse",
						"overlay-shape": "ellipse",
						"underlay-color": "data(stroke)",
						"underlay-padding": 5,
						"underlay-opacity": THEME_TOKENS.underlayOpacity,
						label: "data(label)",
						color: THEME_TOKENS.assetLabel,
						"font-size": ASSET_FONT_SIZE,
						"font-weight": 700,
						"text-valign": "bottom",
						"text-halign": "center",
						"text-margin-y": ASSET_TEXT_MARGIN_Y,
						"text-wrap": "wrap",
						"text-max-width": `${ASSET_TEXT_MAX_WIDTH}px`,
						"line-height": ASSET_LINE_HEIGHT,
						"background-image": "data(icon)",
						"background-fit": "none",
						"background-width": "55%",
						"background-height": "55%",
						"background-position-x": "50%",
						"background-position-y": "50%",
						"background-image-opacity": 1,
					},
				},
				{
					selector: 'node[type="vulnCount"]',
					style: {
						width: 1,
						height: 1,
						"background-opacity": 0,
						"border-width": 0,
						events: "no",
						label: "data(label)",
						color: THEME_TOKENS.vulnCountLabel,
						"font-size": VULN_COUNT_FONT_SIZE,
						"font-weight": 700,
						"text-valign": "center",
						"text-halign": "center",
					},
				},
				{
					selector: 'node[type="vuln"]',
					style: {
						shape: "ellipse",
						width: VULN_SIZE,
						height: VULN_SIZE,
						"background-color": "data(fill)",
						"border-color": "data(stroke)",
						"border-width": 2,
						"underlay-shape": "ellipse",
						"overlay-shape": "ellipse",
						"underlay-color": "data(stroke)",
						"underlay-padding": 5,
						"underlay-opacity": 0,
						label: "data(label)",
						color: THEME_TOKENS.vulnLabel,
						"font-size": 40,
						"font-weight": 700,
						"text-valign": "bottom",
						"text-halign": "center",
						"text-margin-y": 6,
						"text-wrap": "wrap",
						"text-max-width": "150px",
					},
				},
				{
					selector: 'edge[type="path"]',
					style: {
						width: 3,
						"line-color": THEME_TOKENS.arrowColor,
						"curve-style": "bezier",
						"control-point-step-size": 60,
						"source-arrow-shape": "circle",
						"source-arrow-color": THEME_TOKENS.arrowColor,
						"arrow-scale": 0.9,
						"target-arrow-shape": "triangle",
						"target-arrow-color": THEME_TOKENS.arrowColor,
						label: "data(label)",
						color: THEME_TOKENS.edgeLabelText,
						"font-size": 25,
						"text-margin-y": -1,
						"font-weight": 700,
						"text-background-color": THEME_TOKENS.edgeLabelBg,
						"text-background-opacity": 1,
						"text-background-padding": "4px",
						"text-background-shape": "roundrectangle",
						"text-border-color": THEME_TOKENS.border,
						"text-border-width": 1,
						"text-border-opacity": 1,
					},
				},
				{
					selector: 'edge[type="vuln"]',
					style: {
						width: 2,
						"line-color": "data(color)",
						"line-style": "dashed",
						"line-dash-pattern": [6, 4],
						"curve-style": "bezier",
						"control-point-step-size": 40,
						opacity: THEME_TOKENS.vulnEdgeOpacity,
						"target-arrow-shape": "triangle",
						"target-arrow-color": "data(color)",
						"arrow-scale": 0.8,
					},
				},
				{
					selector: 'node[type="asset"][!fanUp]',
					style: { "text-valign": "top", "text-margin-y": -7 },
				},
				{
					selector: 'node[type="vuln"][?fanUp]',
					style: { "text-valign": "top", "text-margin-y": -6 },
				},
				{
					selector: 'node[type="vuln"][?active]',
					style: { "underlay-opacity": THEME_TOKENS.underlayOpacity },
				},
				{
					selector: 'edge[type="vuln"][?active]',
					style: { opacity: 0.95 },
				},
				{
					selector: ".faded",
					style: {
						opacity: 0.15,
						"text-opacity": 0.15,
						"underlay-opacity": 0,
					},
				},
				{
					selector: "node.highlighted",
					style: {
						"underlay-opacity": THEME_TOKENS.highlightOpacity,
						"underlay-padding": 10,
					},
				},
				{
					selector: "edge.highlighted",
					style: { width: 5 },
				},
			],
			[THEME_TOKENS]
		);

		const initialLayout = useMemo(
			() => ({ name: "preset", fit: true, padding: 60, animate: false }),
			[]
		);
		const layout = useMemo(
			() => ({
				name: "preset",
				fit: true,
				padding: 60,
				animate: true,
				animationDuration: 350,
			}),
			[]
		);

		const clearHover = useCallback(() => {
			setHoverCard(null);
			const cy = cyRef.current;
			if (isLive(cy)) cy.elements().removeClass("faded highlighted");
		}, []);

		useLayoutEffect(() => {
			if (!hoverCard) {
				setCardPos(null);
				return;
			}
			const card = cardRef.current;
			const container = containerRef.current;
			if (!card || !container) return;

			const margin = 10;
			const { clientWidth: cw, clientHeight: ch } = container;
			const w = card.offsetWidth;
			const h = card.offsetHeight;

			const left = Math.max(
				margin,
				Math.min(hoverCard.x - w / 2, cw - w - margin)
			);

			const above = hoverCard.y - hoverCard.radius - h - 12;
			const below = hoverCard.y + hoverCard.radius + 12;
			const top =
				above >= margin
					? above
					: Math.max(margin, Math.min(below, ch - h - margin));

			setCardPos({ left, top });
		}, [hoverCard]);

		const handleCy = useCallback(
			(cy: cytoscape.Core) => {
				if (cyRef.current === cy) return;
				cyRef.current = cy;
				laidOut.current = false;

				cy.on("mouseover", "node", (evt) => {
					const node = evt.target as cytoscape.NodeSingular;
					const d = node.data();

					const keep = node.closedNeighborhood();
					const captions = keep
						.nodes('[type="asset"]')
						.reduce(
							(acc, a) => acc.union(cy.getElementById(vulnCountId(a.id()))),
							cy.collection()
						);
					cy.elements().difference(keep.union(captions)).addClass("faded");
					keep.addClass("highlighted");

					const pos = node.renderedPosition();
					setHoverCard({
						html:
							d.type === "asset"
								? assetTooltip(d, THEME_TOKENS)
								: vulnTooltip(d, THEME_TOKENS),
						x: pos.x,
						y: pos.y,
						radius: (node.renderedHeight() || 0) / 2,
					});
				});

				cy.on("mouseout", "node", clearHover);
				cy.on("pan zoom drag", clearHover);

				cy.on("tap", "node", (evt) => {
					const d = (evt.target as cytoscape.NodeSingular).data();
					if (d.type === "asset") {
						setExpandedAssets((prev) => {
							const next = new Set(prev);
							if (next.has(d.assetUid)) {
								next.delete(d.assetUid);
							} else {
								next.add(d.assetUid);
							}
							return next;
						});
						callbacksRef.current.onNodeClick?.(d.assetUid);
					} else if (d.type === "vuln") {
						callbacksRef.current.onVulnerabilityClick?.(d.vulnUid);
					}
				});
			},
			[clearHover, THEME_TOKENS]
		);

		useEffect(() => {
			const cy = cyRef.current;
			if (!isLive(cy)) return;
			if (!laidOut.current) {
				laidOut.current = true;
				return;
			}
			clearHover();
			cy.resize();
			cy.layout(layout as any).run();
		}, [elements, fullScreen, layout, clearHover]);

		useEffect(
			() => () => {
				cyRef.current = null;
				laidOut.current = false;
			},
			[]
		);

		const legendItems = [
			{
				label: "Entry point",
				fill: THEME_TOKENS.entryFill,
				border: THEME_TOKENS.entryBorder,
			},
			{
				label: "Asset",
				fill: THEME_TOKENS.assetFill,
				border: THEME_TOKENS.assetBorder,
			},
			{
				label: "Target",
				fill: THEME_TOKENS.targetFill,
				border: THEME_TOKENS.targetBorder,
			},
			{
				label: "Active vuln",
				fill: THEME_TOKENS.vulnActiveFill,
				border: THEME_TOKENS.vulnActiveBorder,
			},
			{
				label: "Resolved vuln",
				fill: THEME_TOKENS.vulnResolvedFill,
				border: THEME_TOKENS.vulnResolvedBorder,
			},
		];

		const getGraph = () => (
			<div
				ref={containerRef}
				css={{
					borderRadius: fullScreen ? 0 : THEME_TOKENS.containerRadius,
					border: fullScreen ? "none" : `1px solid ${THEME_TOKENS.border}`,
					backgroundColor: THEME_TOKENS.bg,
					overflow: "hidden",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					height: fullScreen
						? "100%"
						: typeof height === "number"
						? `${height}px`
						: height,
					width: fullScreen
						? "100%"
						: typeof width === "number"
						? `${width}px`
						: width,
					boxShadow: fullScreen ? "none" : THEME_TOKENS.legendShadow,
					fontFamily: theme.typography.fontFamily,
				}}
			>
				{/* Full-screen toggle */}
				{!fullScreen && (
					<div
						css={{
							position: "absolute",
							top: THEME_TOKENS.toggle.top,
							left: THEME_TOKENS.toggle.left,
							zIndex: 10,
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: THEME_TOKENS.toggle.size,
							height: THEME_TOKENS.toggle.size,
							borderRadius: THEME_TOKENS.toggle.radius,
							backgroundColor: THEME_TOKENS.surface,
							border: `1px solid ${THEME_TOKENS.border}`,
							color: THEME_TOKENS.legendText,
							boxShadow: THEME_TOKENS.buttonShadow,
							transition: THEME_TOKENS.transition,
							"&:hover": {
								color: THEME_TOKENS.assetBorder,
								borderColor: THEME_TOKENS.assetBorder,
								backgroundColor: THEME_TOKENS.buttonHoverBg,
							},
						}}
						onClick={() => setFullScreen(true)}
					>
						<Icon name="full-screen" fontSize="medium" />
					</div>
				)}

				{/* Legend */}
				<div
					css={{
						position: "absolute",
						top: THEME_TOKENS.legend.top,
						right: THEME_TOKENS.legend.right,
						zIndex: 10,
						display: "flex",
						gap: THEME_TOKENS.legend.gap,
						alignItems: "center",
						padding: THEME_TOKENS.legend.padding,
						borderRadius: THEME_TOKENS.legend.radius,
						backgroundColor: THEME_TOKENS.legendBg,
						border: `1px solid ${THEME_TOKENS.border}`,
						boxShadow: THEME_TOKENS.legendShadow,
						backdropFilter: THEME_TOKENS.legend.blur,
						fontSize: THEME_TOKENS.legend.fontSize,
						fontWeight: THEME_TOKENS.legend.fontWeight,
						color: THEME_TOKENS.legendText,
					}}
				>
					{legendItems.map(({ label, fill, border }) => (
						<span
							key={label}
							css={{
								display: "flex",
								alignItems: "center",
								gap: THEME_TOKENS.legend.itemGap,
							}}
						>
							{" "}
							<span
								css={{
									width: THEME_TOKENS.legend.dotSize,
									height: THEME_TOKENS.legend.dotSize,
									borderRadius: "50%",
									backgroundColor: fill,
									display: "inline-block",
									border: `${THEME_TOKENS.legend.dotBorderWidth} solid ${border}`,
								}}
							/>
							{label}
						</span>
					))}
				</div>

				<CytoscapeComponent
					elements={elements as any}
					stylesheet={stylesheet as any}
					layout={initialLayout as any}
					cy={handleCy}
					minZoom={0.15}
					maxZoom={2.5}
					wheelSensitivity={0.2}
					style={{
						height: "100%",
						width: "100%",
						flex: 1,
						backgroundColor: THEME_TOKENS.bg,
					}}
				/>

				{/* Hover card */}
				{hoverCard && (
					<div
						css={{
							position: "absolute",
							left: 0,
							top: 0,
							zIndex: 20,
							pointerEvents: "none",
							maxWidth: THEME_TOKENS.card.maxWidth,
							boxSizing: "border-box",
							padding: THEME_TOKENS.card.padding,
							borderRadius: THEME_TOKENS.card.radius,
							border: `1px solid ${THEME_TOKENS.border}`,
							backgroundColor: THEME_TOKENS.surface,
							boxShadow: THEME_TOKENS.cardShadow,
							color: THEME_TOKENS.assetLabel,
							fontSize: THEME_TOKENS.card.fontSize,
							lineHeight: THEME_TOKENS.card.lineHeight,
						}}
						ref={cardRef}
						style={{
							left: cardPos?.left ?? 0,
							top: cardPos?.top ?? 0,
							visibility: cardPos ? "visible" : "hidden",
						}}
						dangerouslySetInnerHTML={{ __html: hoverCard.html }}
					/>
				)}
			</div>
		);

		return fullScreen ? (
			<Dialog
				fullScreen
				closeHandler={() => setFullScreen(false)}
				header="ATTACK PATH GRAPH"
				logoUrl={logoUrl}
				padding={false}
			>
				{getGraph()}
			</Dialog>
		) : (
			getGraph()
		);
	}
);

export default AttackPathGraph;
