/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	FC,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";
import { Icon } from "../Icon/Icon";
import { Typography } from "../..";
import { useTheme } from "@mui/material";

cytoscape.use(fcose);

type Tokens = Record<string, any>;

function buildTypeColorMap(
	assetTypes: AssetTypeLookup[],
	palette: string[]
): Map<string, string> {
	const map = new Map<string, string>();
	assetTypes.forEach((t, i) => {
		map.set(t.value, palette[i % palette.length]);
	});
	return map;
}

// ── Interfaces ────────────────────────────────────────────────────────────────
export interface AssetTypeLookup {
	label: string;
	value: string;
}

export interface AssetNode {
	uid: string;
	description: string;
	criticalityUid: string;
	criticality: string;
	assetTypeUid: string;
	assetType: string;
	assetStatusUid: string;
	assetStatus: string;
	exposureLevelUid: string | null;
	exposureLevel: string | null;
	ipAddress: string | null;
	hostName: string | null;
}

export interface AssetEdge {
	sourceAssetUid: string;
	targetAssetUid: string;
	relationshipTypeUid: string;
}

export interface AssetGraphProps {
	nodes: AssetNode[];
	edges: AssetEdge[];
	assetTypes: AssetTypeLookup[];
	height?: number | string;
	width?: number | string;
	logoUrl?: string;
	onNodeClick?: (node: AssetNode) => void;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function truncate(str: string, max: number): string {
	return str && str.length > max ? str.slice(0, max - 1) + "…" : str ?? "";
}

// ── Tooltip component ─────────────────────────────────────────────────────────
interface TooltipProps {
	node: AssetNode;
	pos: { x: number; y: number };
	nodeColor: string;
	themeTokens: Tokens;
	onClose: () => void;
	onShowMore: () => void;
}

const Tooltip: FC<TooltipProps> = ({
	node,
	pos,
	nodeColor,
	themeTokens,
	onClose,
	onShowMore,
}) => {
	const t = themeTokens.tooltip;
	return (
		<div
			css={{
				position: "absolute",
				left: pos.x + 14,
				top: pos.y - 8,
				zIndex: 100,
				minWidth: t.minWidth,
				maxWidth: t.maxWidth,
				backgroundColor: themeTokens.tooltipBg,
				border: `1px solid ${themeTokens.tooltipBorder}`,
				borderRadius: t.borderRadius,
				padding: t.padding,
				boxShadow: themeTokens.tooltipShadow,
				color: themeTokens.tooltipText,
				fontFamily: "inherit",
				fontSize: t.fontSize,
				pointerEvents: "auto",
				backdropFilter: t.blur,
			}}
		>
			{/* Header */}
			<div
				css={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					marginBottom: 10,
				}}
			>
				<div
					css={{
						display: "flex",
						alignItems: "flex-start",
						gap: 8,
						maxWidth: t.titleMaxWidth,
					}}
				>
					<span
						css={{
							width: t.dotSize,
							height: t.dotSize,
							marginTop: 5,
							borderRadius: "50%",
							backgroundColor: nodeColor,
							boxShadow: `0 0 10px ${nodeColor}`,
							flexShrink: 0,
						}}
					/>

					<span
						css={{
							fontWeight: t.titleFontWeight,
							fontSize: t.titleFontSize,
							lineHeight: t.titleLineHeight,
							wordBreak: "break-word",
						}}
					>
						{node.description}
					</span>
				</div>

				<span
					onClick={onClose}
					css={{
						cursor: "pointer",
						color: themeTokens.tooltipSubText,
						marginLeft: 8,
						width: t.closeSize,
						height: t.closeSize,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: t.closeRadius,
						fontSize: t.closeFontSize,
						lineHeight: 1,
						transition: t.transition,
						"&:hover": {
							color: themeTokens.tooltipText,
							backgroundColor: themeTokens.tooltipCloseHover,
						},
					}}
				>
					×
				</span>
			</div>

			{/* Asset type */}
			<span
				css={{
					display: "inline-flex",
					alignItems: "center",
					fontSize: t.typeFontSize,
					fontWeight: 600,
					backgroundColor: nodeColor + t.typeBgAlpha,
					color: nodeColor,
					border: `1px solid ${nodeColor}${t.typeBorderAlpha}`,
					padding: t.typePadding,
					borderRadius: t.typeRadius,
					marginBottom: 12,
				}}
			>
				{node.assetType}
			</span>

			{/* Details */}
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 8,
					marginBottom: 14,
					padding: t.gridPadding,
					borderRadius: t.gridRadius,
					backgroundColor: themeTokens.tooltipGridBg,
					border: `1px solid ${themeTokens.tooltipGridBorder}`,
				}}
			>
				<Row
					label="Criticality"
					value={node.criticality}
					tokens={themeTokens}
				/>

				{node.exposureLevel && (
					<Row
						label="Exposure"
						value={node.exposureLevel}
						tokens={themeTokens}
					/>
				)}
			</div>

			{/* Show more */}
			<div
				onClick={() => {
					onShowMore();
					onClose();
				}}
				css={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: 6,
					padding: t.buttonPadding,
					borderRadius: t.buttonRadius,
					border: `1px solid ${nodeColor}${t.typeBorderAlpha}`,
					backgroundColor: nodeColor + t.buttonBgAlpha,
					color: nodeColor,
					fontSize: t.buttonFontSize,
					fontWeight: 600,
					cursor: "pointer",
					transition: t.transition,
					"&:hover": {
						backgroundColor: nodeColor + t.buttonBgHoverAlpha,
						borderColor: nodeColor + t.buttonBorderHoverAlpha,
						transform: "translateY(-1px)",
					},
				}}
			>
				Show More Details
				<span>→</span>
			</div>
		</div>
	);
};

const Row: FC<{
	label: string;
	value: string;
	color?: string;
	tokens: Tokens;
}> = ({ label, value, color, tokens }) => (
	<div
		css={{
			display: "flex",
			flexDirection: "column",
			gap: 3,
			minWidth: 0,
		}}
	>
		<span
			css={{
				fontSize: tokens.tooltip.rowLabelFontSize,
				color: tokens.tooltipSubText,
				textTransform: "uppercase",
				letterSpacing: tokens.tooltip.rowLabelLetterSpacing,
				fontWeight: 600,
			}}
		>
			{label}
		</span>

		<span
			css={{
				fontSize: tokens.tooltip.rowValueFontSize,
				fontWeight: 600,
				color: color ?? tokens.tooltipText,
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
			}}
		>
			{value}
		</span>
	</div>
);

const LegendHeading: FC<{ text: string; tokens: Tokens }> = ({
	text,
	tokens,
}) => (
	<span
		css={{
			fontSize: tokens.legend.headingFontSize,
			fontWeight: tokens.legend.headingFontWeight,
			textTransform: "uppercase",
			letterSpacing: tokens.legend.headingLetterSpacing,
			color: tokens.tooltipSubText,
			marginBottom: 2,
		}}
	>
		{text}
	</span>
);

const STATUS_LEGEND = [
	{ label: "Active", shape: "circle" },
	{ label: "New", shape: "rectangle" },
	{ label: "Review", shape: "diamond" },
];

// Shared "floating pill" surface used by the legend button and the stats badge
const getFloatingPill = (t: Tokens) =>
	({
		padding: t.pill.padding,
		borderRadius: t.pill.borderRadius,
		backgroundColor: t.legendBg,
		border: `1px solid ${t.legendBorder}`,
		backdropFilter: t.pill.blur,
		boxShadow: t.legendShadow,
	} as const);

// ── Legend ────────────────────────────────────────────────────────────────────
const Legend: FC<{
	themeTokens: Tokens;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}> = ({ themeTokens, onMouseEnter, onMouseLeave }) => {
	const floatingPill = getFloatingPill(themeTokens);
	return (
		<div
			css={{
				position: "absolute",
				bottom: 14,
				left: 14,
				zIndex: 10,
				display: "flex",
				gap: 8,
				alignItems: "center",
				cursor: "pointer",
				color: themeTokens.legendText,
				...floatingPill,
				transition: themeTokens.pill.transition,
				"&:hover": {
					color: themeTokens.legendTextHover,
					borderColor: themeTokens.legendBorderHover,
					backgroundColor: themeTokens.legendBgHover,
				},
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Icon name="view" color="inherit" fontSize="small" />

			<Typography
				css={{
					color: "inherit",
					fontWeight: themeTokens.pill.fontWeight,
				}}
				fontSize={themeTokens.pill.legendFontSize}
			>
				Key Guide
			</Typography>
		</div>
	);
};

// ── Layout ────────────────────────────────────────────────────────────────────
const CY_LAYOUT = {
	name: "fcose",
	quality: "default",
	randomize: true,
	animate: true,
	animationDuration: 600,
	fit: true,
	padding: 80,
	nodeDimensionsIncludeLabels: true,
	uniformNodeDimensions: false,
	nodeRepulsion: () => 600000,
	idealEdgeLength: () => 160,
	edgeElasticity: () => 0.35,
	nestingFactor: 0.1,
	gravity: 0.15,
	gravityRange: 3.8,
	numIter: 2500,
	tile: true,
	tilingPaddingVertical: 20,
	tilingPaddingHorizontal: 20,
};

// ── Main component ────────────────────────────────────────────────────────────
export const AssetGraph: FC<AssetGraphProps> = memo(
	({
		nodes,
		edges,
		assetTypes,
		height = 600,
		width = "100%",
		logoUrl,
		onNodeClick,
	}) => {
		const [selectedNode, setSelectedNode] = useState<AssetNode | null>(null);
		const [tooltipPos, setTooltipPos] = useState<{
			x: number;
			y: number;
		} | null>(null);
		const [showLegend, setShowLegend] = useState(false);

		const containerRef = useRef<HTMLDivElement>(null);
		const cyRef = useRef<cytoscape.Core | null>(null);
		const onNodeClickRef = useRef(onNodeClick);

		useEffect(() => {
			onNodeClickRef.current = onNodeClick;
		}, [onNodeClick]);

		const theme = useTheme() as any;
		const THEME_TOKENS: Tokens = theme.palette.assetGraph;
		const cy = THEME_TOKENS.cy;

		const colorMap = useMemo(
			() => buildTypeColorMap(assetTypes, THEME_TOKENS.typePalette),
			[assetTypes, THEME_TOKENS]
		);

		const stylesheet = useMemo(
			() => [
				{
					selector: "node",
					style: {
						"background-color": "data(color)",
						"border-color": "data(borderColor)",
						"border-width": cy.nodeBorderWidth,
						width: cy.nodeSize,
						height: cy.nodeSize,
						label: "data(label)",
						color: THEME_TOKENS.assetLabel,
						"font-size": cy.nodeFontSize,
						"font-weight": cy.nodeFontWeight,
						"text-valign": "bottom",
						"text-halign": "center",
						"text-margin-y": cy.nodeLabelMargin,
						"text-wrap": "wrap",
						"text-max-width": cy.nodeLabelMaxWidth,
						"font-family": "inherit",
						shape: "ellipse",
					} as any,
				},
				{
					selector: 'node[assetStatusUid="NEW"]',
					style: { shape: "rectangle" } as any,
				},
				{
					selector: 'node[assetStatusUid="REVIEW"]',
					style: { shape: "diamond" } as any,
				},
				{
					selector: 'node[assetStatusUid="REJECT"]',
					style: { shape: "triangle" } as any,
				},
				{
					selector: "node:selected",
					style: {
						"border-width": cy.nodeSelectedBorderWidth,
						"border-color": THEME_TOKENS.selectedBorder,
						"background-color": "data(colorSelected)",
					} as any,
				},
				{
					selector: "edge",
					style: {
						width: cy.edgeWidth,
						"line-color": THEME_TOKENS.edgeColor,
						"target-arrow-color": THEME_TOKENS.edgeColor,
						"target-arrow-shape": "triangle",
						"curve-style": "bezier",
						label: "data(label)",
						color: THEME_TOKENS.edgeLabelText,
						"font-size": cy.edgeFontSize,
						"text-rotation": "autorotate",
						"text-background-color": THEME_TOKENS.edgeLabelBg,
						"text-background-opacity": 1,
						"text-background-padding": cy.edgeLabelPadding,
						"text-background-shape": "roundrectangle",
						"font-family": "inherit",
						opacity: cy.edgeOpacity,
					} as any,
				},
				{
					selector: "edge:selected",
					style: { width: cy.edgeSelectedWidth, opacity: 1 } as any,
				},
			],
			[THEME_TOKENS, cy]
		);

		const elements: cytoscape.ElementDefinition[] = useMemo(
			() => [
				...nodes.map((n) => {
					const color = colorMap.get(n.assetTypeUid) ?? THEME_TOKENS.unknown;
					return {
						data: {
							id: n.uid,
							label: truncate(n.description, 22),
							color,
							colorSelected: color + cy.selectedColorAlpha,
							borderColor: color,
							...n,
						},
					};
				}),
				...edges.map((e, i) => ({
					data: {
						id: `edge-${i}`,
						source: e.sourceAssetUid,
						target: e.targetAssetUid,
						label: e.relationshipTypeUid,
					},
				})),
			],
			[nodes, edges, colorMap, THEME_TOKENS]
		);

		const handleCyReady = useCallback((cy: cytoscape.Core) => {
			if (cyRef.current === cy) return;

			cyRef.current = cy;

			cy.on("tap", "node", (evt) => {
				const cyNode = evt.target;
				const nodeData = cyNode.data() as AssetNode;
				const renderedPos = cyNode.renderedPosition();

				const containerRect = containerRef.current?.getBoundingClientRect();

				const x = Math.min(renderedPos.x, (containerRect?.width ?? 600) - 300);
				const y = Math.max(renderedPos.y - 80, 10);

				setSelectedNode(nodeData);
				setTooltipPos({ x, y });
			});

			cy.on("tap", (evt) => {
				if (evt.target === cy) {
					setSelectedNode(null);
					setTooltipPos(null);
				}
			});
		}, []);

		useEffect(() => {
			if (cyRef.current && nodes.length > 0) {
				cyRef.current.layout(CY_LAYOUT as any).run();
			}
		}, [nodes, edges]);

		const graphHeight = typeof height === "number" ? `${height}px` : height;
		const graphWidth = typeof width === "number" ? `${width}px` : width;

		return (
			<div
				ref={containerRef}
				css={{
					position: "relative",
					background: THEME_TOKENS.bgGradient,
					borderRadius: THEME_TOKENS.containerRadius,
					border: `1px solid ${THEME_TOKENS.border}`,
					overflow: "hidden",
					height: graphHeight,
					width: graphWidth,
					boxShadow: THEME_TOKENS.shadow,
				}}
			>
				{/* Graph ambient grid */}
				<div
					css={{
						position: "absolute",
						inset: 0,
						pointerEvents: "none",
						opacity: 1,
						backgroundImage: `
                            linear-gradient(${THEME_TOKENS.gridLines} 1px, transparent 1px),
                            linear-gradient(90deg, ${THEME_TOKENS.gridLines} 1px, transparent 1px)
                        `,
						backgroundSize: THEME_TOKENS.gridSize,
						maskImage: THEME_TOKENS.gridMask,
					}}
				/>

				{/* Node count badge */}
				<div
					css={{
						position: "absolute",
						top: 14,
						right: 14,
						zIndex: 10,
						display: "flex",
						alignItems: "center",
						gap: 7,
						...getFloatingPill(THEME_TOKENS),
						fontSize: THEME_TOKENS.pill.statsFontSize,
						fontWeight: THEME_TOKENS.pill.fontWeight,
						color: THEME_TOKENS.legendText,
					}}
				>
					{" "}
					<span
						css={{
							width: THEME_TOKENS.pill.dotSize,
							height: THEME_TOKENS.pill.dotSize,
							borderRadius: "50%",
							backgroundColor: THEME_TOKENS.statusDot,
							boxShadow: THEME_TOKENS.statusDotGlow,
						}}
					/>
					{nodes.length} assets
					<span css={{ color: THEME_TOKENS.statsDivider }}>•</span>
					{edges.length} connections
				</div>

				<CytoscapeComponent
					elements={elements}
					stylesheet={stylesheet}
					layout={CY_LAYOUT as any}
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
						zIndex: 1,
					}}
					cy={handleCyReady}
					minZoom={0.2}
					maxZoom={4}
				/>

				{/* Inline tooltip */}
				{selectedNode && tooltipPos && (
					<Tooltip
						node={selectedNode}
						pos={tooltipPos}
						nodeColor={
							colorMap.get(selectedNode.assetTypeUid) ?? THEME_TOKENS.unknown
						}
						themeTokens={THEME_TOKENS}
						onShowMore={() => onNodeClickRef.current?.(selectedNode)}
						onClose={() => {
							setSelectedNode(null);
							setTooltipPos(null);
						}}
					/>
				)}

				<Legend
					themeTokens={THEME_TOKENS}
					onMouseEnter={() => setShowLegend(true)}
					onMouseLeave={() => setShowLegend(false)}
				/>

				{/* Legend details */}
				{showLegend && (
					<div
						css={{
							position: "absolute",
							bottom: 52,
							left: 14,
							zIndex: 10,
							display: "flex",
							flexDirection: "column",
							gap: 10,
							padding: THEME_TOKENS.legend.padding,
							borderRadius: THEME_TOKENS.legend.borderRadius,
							backgroundColor: THEME_TOKENS.legendBg,
							border: `1px solid ${THEME_TOKENS.border}`,
							backdropFilter: THEME_TOKENS.legend.blur,
							boxShadow: THEME_TOKENS.legendShadow,
							fontSize: THEME_TOKENS.legend.fontSize,
							color: THEME_TOKENS.legendText,
							minWidth: THEME_TOKENS.legend.minWidth,
						}}
						onMouseEnter={() => setShowLegend(true)}
						onMouseLeave={() => setShowLegend(false)}
					>
						{/* Asset Types */}
						<div
							css={{
								display: "flex",
								flexDirection: "column",
								gap: 7,
							}}
						>
							<LegendHeading text="Asset Types" tokens={THEME_TOKENS} />

							{assetTypes.map(({ label, value }) => (
								<span
									key={value}
									css={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										color: THEME_TOKENS.assetLabel,
									}}
								>
									<span
										css={{
											width: THEME_TOKENS.legend.dotSize,
											height: THEME_TOKENS.legend.dotSize,
											borderRadius: "50%",
											backgroundColor:
												colorMap.get(value) ?? THEME_TOKENS.unknown,
											boxShadow: `0 0 7px ${
												colorMap.get(value) ?? THEME_TOKENS.unknown
											}`,
											display: "inline-block",
											flexShrink: 0,
										}}
									/>
									{label}
								</span>
							))}
						</div>

						{/* Divider */}
						<span
							css={{
								width: "100%",
								height: 1,
								backgroundColor: THEME_TOKENS.border,
							}}
						/>

						{/* Status */}
						<div
							css={{
								display: "flex",
								flexDirection: "column",
								gap: 7,
							}}
						>
							<LegendHeading text="Status" tokens={THEME_TOKENS} />

							{STATUS_LEGEND.map(({ label, shape }) => (
								<span
									key={label}
									css={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										color: THEME_TOKENS.assetLabel,
									}}
								>
									<span
										css={{
											display: "inline-block",
											backgroundColor: THEME_TOKENS.edgeColor,
											boxShadow: `0 0 6px ${THEME_TOKENS.edgeColor}${THEME_TOKENS.legend.dotGlowAlpha}`,
											...THEME_TOKENS.legend.shapes[shape],
										}}
									/>
									{label}
								</span>
							))}
						</div>
					</div>
				)}
			</div>
		);
	}
);

export default AssetGraph;
