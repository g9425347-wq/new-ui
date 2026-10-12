import { FC, Fragment, memo, useEffect, useMemo, useState } from "react";
import { resolveInfraNode } from "../InfraIcon/infraCatalog";
import type { InfraCategory } from "../InfraIcon/infraCatalog";
import { infraIconBody } from "../InfraIcon/infraIconPaths";
import { useTheme } from "@mui/material";

export interface Vulnerability {
	uid: string;
	statusUid: string;
}

export interface PathNode {
	assetUid: string;
	assetDescription: string;
	criticalityUid: string;
	criticality: string;
	exposureLevelUid: string;
	exposureLevel: string;
	assetTypeUid: string;
	assetType: string;
	/** Platform scope the asset lives in — `aws`, `azure`, `gcp`, `on_prem`. */
	platformUid?: string;
	platform?: string;
	relationship?: string;
	riskScore: number;
	vulnerabilityUids: string[];
	vulnerabilities?: Vulnerability[];
}

export interface PathEdge {
	sourceAssetUid: string;
	sourceAsset: string;
	targetAssetUid: string;
	targetAsset: string;
	relationshipTypeUid: string;
	relationshipType: string;
}

export interface Step extends PathNode {
	stepNumber: number;
	region?: string;
	action?: string[];
	detail?: string[];
}

export interface AttackPathProps {
	steps: Step[];
	onChange?: (node: PathNode) => void;
	/** Shows only the circular nodes, hiding the detail callouts. Omit to let the component manage its own state. */
	collapsed?: boolean;
	/** Fired when the collapse toggle is used, whether or not `collapsed` is supplied. */
	onCollapsedChange?: (collapsed: boolean) => void;
	/** The UID of the currently selected node. Omit to let the component manage its own state. */
	selectedNodeUid?: string | null;
	/** Fired when a node is selected or deselected, whether or not `selectedNodeUid` is supplied. */
	onSelectedNodeChange?: (nodeUid: string | null) => void;
}

const ellipsis = {
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
} as const;

const exposureColor = (theme: any, level: string): string => {
	const map: Record<string, string> = {
		HIGH: theme.palette.error.main,
		MEDIUM: theme.palette.warning.main,
		LOW: theme.palette.success.main,
		NONE: theme.palette.text.disabled,
	};
	return map[level?.toUpperCase()] ?? theme.palette.text.disabled;
};

const criticalityColor = (theme: any, level: string): string => {
	const map: Record<string, string> = {
		CRITICAL: theme.palette.priority.critical,
		HIGH: theme.palette.priority.high,
		MEDIUM: theme.palette.priority.medium,
		LOW: theme.palette.priority.low,
	};
	return map[level?.toUpperCase()] ?? theme.palette.text.disabled;
};

const CATEGORY_LABEL: Record<InfraCategory, string> = {
	compute: "Compute",
	network: "Network",
	identity: "Identity & Access",
	messaging: "Messaging",
	storage_data: "Storage & Data",
};

const SHORT_LABELS: Record<string, string> = {
	internet_gateway: "IGW",
	nat_gateway: "NAT",
	virtual_network: "VPC",
	vpc: "VPC",
	vpc_subnet: "Subnet",
	subnet: "Subnet",
	route_table: "Route",
	network_acl: "NACL",
	security_group: "SG",
	ec2_security_group: "SG",
	public_ip: "IP",
	ec2_instance: "EC2",
	iam_role: "Role",
	iam_user: "User",
	iam_policy: "Policy",
	sqs_queue: "SQS",
	sns_topic: "SNS",
	s3_bucket: "S3",
	load_balancer: "LB",
};

const activeVulnCount = (node: PathNode): number =>
	node.vulnerabilities
		? node.vulnerabilities.filter(
				(v) => v.statusUid === "OPEN" || v.statusUid === "ASSIGN"
		  ).length
		: node.vulnerabilityUids?.length ?? 0;

const shortLabel = (node: PathNode): string => {
	const raw = (node.assetType || node.assetTypeUid || "").trim();
	if (!raw) return "";

	const known = SHORT_LABELS[raw.toLowerCase().replace(/[\s\-.]+/g, "_")];
	if (known) return known;

	const words = raw.split(/[\s_-]+/).filter(Boolean);
	if (words.length > 1 && raw.length > 12) {
		return words
			.map((w) => w[0])
			.join("")
			.toUpperCase();
	}
	return raw.length > 12 ? raw.slice(0, 11) + "…" : raw;
};

// Tokens come from theme.palette.attackPath (LightTheme / DarkTheme)
type ApTokens = Record<string, any>;

const NodeCircle: FC<{
	node: PathNode;
	isEntry: boolean;
	isTarget: boolean;
	isSelected: boolean;
	tokens: ApTokens;
	onClick: () => void;
}> = ({ node, isEntry, isTarget, isSelected, tokens, onClick }) => {
	const infra = resolveInfraNode(
		node.assetTypeUid || node.assetType,
		node.platformUid || node.platform
	);
	const label = shortLabel(node);

	const variant = isEntry
		? {
				bg: tokens.entryBg,
				border: tokens.entryBorder,
				text: tokens.entryBorder,
		  }
		: isTarget
		? {
				bg: tokens.targetBg,
				border: tokens.targetBorder,
				text: tokens.targetBorder,
		  }
		: {
				bg: tokens.nodeBgDefault,
				border: tokens.nodeBorderDefault,
				text: tokens.nodeTextDefault,
		  };

	return (
		<div
			onClick={onClick}
			title={`${node.assetType} — ${node.assetDescription} (${node.assetUid})`}
			css={(theme: any) => ({
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "1px",
				width: `${tokens.nodeSize}px`,
				height: `${tokens.nodeSize}px`,
				flexShrink: 0,
				borderRadius: "50%",
				padding: tokens.nodePadding,
				backgroundColor: isSelected ? tokens.bgCalloutActive : variant.bg,
				border: `${tokens.nodeBorderWidth} solid ${
					isSelected ? tokens.accentColor : variant.border
				}`,
				color: variant.text,
				fontFamily: theme.typography?.fontFamily ?? "inherit",
				textAlign: "center",
				cursor: "pointer",
				transform: isSelected ? tokens.nodeSelectedScale : "scale(1)",
				zIndex: isSelected ? 5 : 2,
				transition: tokens.nodeTransition,
				boxShadow: isSelected
					? `0 0 0 4px ${tokens.accentColor}${tokens.selectedRing}, ${tokens.shadowHover}`
					: tokens.shadowSm,
				"&:hover": {
					transform: isSelected
						? tokens.nodeSelectedHoverScale
						: tokens.nodeHoverScale,
					borderColor: tokens.accentColor,
					boxShadow: tokens.shadowHover,
				},
			})}
		>
			<InfraIconGlyph
				iconKey={infra.iconKey}
				size={label ? tokens.nodeIconSize : tokens.nodeIconSizeNoLabel}
				strokeWidth={tokens.iconStrokeWidth}
			/>
			{label && (
				<span
					css={{
						fontSize: tokens.nodeLabelFontSize,
						fontWeight: tokens.nodeLabelFontWeight,
						lineHeight: tokens.nodeLabelLineHeight,
						letterSpacing: tokens.nodeLabelLetterSpacing,
						wordBreak: "break-word",
					}}
				>
					{label}
				</span>
			)}
		</div>
	);
};

const InfraIconGlyph: FC<{
	iconKey: string;
	size: number;
	strokeWidth: number;
}> = ({ iconKey, size, strokeWidth }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={strokeWidth}
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden
		css={{ display: "block", flexShrink: 0 }}
		dangerouslySetInnerHTML={{ __html: infraIconBody(iconKey) }}
	/>
);

const Callout: FC<{
	step: Step;
	below: boolean;
	isSelected: boolean;
	tokens: ApTokens;
	onClick: () => void;
}> = ({ step, below, isSelected, tokens, onClick }) => {
	const infra = resolveInfraNode(
		step.assetTypeUid || step.assetType,
		step.platformUid || step.platform
	);
	const vulns = activeVulnCount(step);

	return (
		<div
			css={{
				position: "absolute",
				left: "50%",
				...(below ? { top: "100%" } : { bottom: "100%" }),
				width: `${tokens.calloutWidth}px`,
				zIndex: isSelected ? 4 : 1,
				display: "flex",
				flexDirection: below ? "column" : "column-reverse",
				alignItems: "center",
				boxSizing: "border-box",
				transform: "translateX(-50%)",
			}}
		>
			<div
				css={{
					width: tokens.calloutConnectorWidth,
					height: `${tokens.calloutGap}px`,
					flexShrink: 0,
					backgroundColor: isSelected
						? tokens.accentColor
						: tokens.borderSubtle,
				}}
			/>
			<div
				onClick={onClick}
				css={(theme: any) => ({
					boxSizing: "border-box",
					width: "100%",
					padding: tokens.calloutPadding,
					backgroundColor: isSelected
						? tokens.bgCalloutActive
						: tokens.calloutBg,
					border: `${tokens.calloutBorderWidth} solid ${
						isSelected ? tokens.accentColor : tokens.borderSubtle
					}`,
					borderRadius: tokens.calloutRadius,
					boxShadow: isSelected
						? `0 0 0 3px ${tokens.accentColor}${tokens.selectedRing}, ${tokens.shadowHover}`
						: tokens.shadowSm,
					fontFamily: theme.typography?.fontFamily ?? "inherit",
					fontSize: tokens.calloutFontSize,
					lineHeight: tokens.calloutLineHeight,
					color: tokens.textPrimary,
					cursor: "pointer",
					transition: tokens.calloutTransition,
					wordBreak: "break-word",
					"&:hover": {
						borderColor: tokens.borderHover,
						boxShadow: tokens.shadowHover,
					},
				})}
			>
				<div
					css={{
						fontWeight: 700,
						color: tokens.textPrimary,
						...ellipsis,
					}}
				>
					{step.region ? `${step.region}:${step.assetType}` : step.assetType}
				</div>
				{step.assetDescription && (
					<div
						css={{
							color: tokens.textSecondary,
							...ellipsis,
						}}
					>
						{step.assetDescription}
					</div>
				)}
				{step.criticality && (
					<div
						css={(theme: any) => ({
							color: criticalityColor(theme, step.criticalityUid),
							fontWeight: 600,
						})}
					>
						{step.criticality}
					</div>
				)}
				{step.exposureLevel && (
					<div
						css={(theme: any) => ({
							color: exposureColor(theme, step.exposureLevelUid),
							fontWeight: 600,
						})}
					>
						Exp: {step.exposureLevel}
					</div>
				)}
				{step.relationship && (
					<div
						css={{
							color: tokens.textSecondary,
							...ellipsis,
						}}
					>
						{step.relationship}
					</div>
				)}
				{infra.category && (
					<div
						css={{
							color: tokens.textSecondary,
							...ellipsis,
						}}
					>
						{CATEGORY_LABEL[infra.category]}
					</div>
				)}
				<div
					css={{
						color: tokens.textPrimary,
						fontWeight: 600,
						fontFamily: tokens.calloutMonoFont,
						...ellipsis,
					}}
				>
					{step.assetUid}
				</div>
				{vulns > 0 && (
					<div
						css={{
							color: tokens.errorColor,
							fontWeight: 600,
							marginTop: "1px",
						}}
					>
						{vulns} active vuln{vulns > 1 ? "s" : ""}
					</div>
				)}
			</div>
		</div>
	);
};

const EdgeConnector: FC<{ edge: PathEdge; tokens: ApTokens }> = ({
	edge,
	tokens,
}) => (
	<div
		css={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			boxSizing: "border-box",
			width: "100%",
			padding: "0 2px",
			gap: "4px",
		}}
	>
		<span
			title={edge.relationshipType}
			css={(theme: any) => ({
				fontSize: tokens.edgeFontSize,
				fontFamily: theme.typography?.fontFamily ?? "inherit",
				fontWeight: tokens.boldWeight,
				color: tokens.textSecondary,
				letterSpacing: tokens.edgeLetterSpacing,
				maxWidth: "100%",
				textAlign: "center",
				lineHeight: tokens.edgeLineHeight,
				...ellipsis,
				backgroundColor: tokens.edgeBadgeBg,
				padding: tokens.edgeBadgePadding,
				borderRadius: tokens.edgeBadgeRadius,
				border: `1px solid ${tokens.edgeBadgeBorder}`,
			})}
		>
			{edge.relationshipType}
		</span>
		<div css={{ display: "flex", alignItems: "center", width: "100%" }}>
			<div
				css={{
					width: 0,
					height: 0,
					borderTop: `${tokens.edgeArrowHalf} solid transparent`,
					borderBottom: `${tokens.edgeArrowHalf} solid transparent`,
					borderRight: `${tokens.edgeArrowLength} solid ${tokens.borderSubtle}`,
				}}
			/>
			<div
				css={{
					flex: 1,
					height: tokens.edgeLineHeightPx,
					backgroundColor: tokens.borderSubtle,
				}}
			/>
		</div>
	</div>
);

const CollapseToggle: FC<{
	collapsed: boolean;
	tokens: ApTokens;
	onClick: () => void;
}> = ({ collapsed, tokens, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		title={collapsed ? "Expand path details" : "Collapse path details"}
		aria-pressed={collapsed}
		css={{
			position: "absolute",
			top: "10px",
			right: "10px",
			zIndex: 4,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: tokens.toggleSize,
			height: tokens.toggleSize,
			flexShrink: 0,
			borderRadius: tokens.toggleRadius,
			border: `1px solid ${tokens.borderSubtle}`,
			backgroundColor: tokens.bgCard,
			color: tokens.accentColor,
			padding: 0,
			cursor: "pointer",
			transition: tokens.toggleTransition,
			boxShadow: tokens.shadowSm,
			"&:hover": {
				backgroundColor: tokens.bgCallout,
				borderColor: tokens.borderHover,
				boxShadow: tokens.shadowHover,
			},
		}}
	>
		<svg
			width={tokens.toggleIconSize}
			height={tokens.toggleIconSize}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={tokens.toggleIconStroke}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
			css={{
				display: "block",
				transform: collapsed ? "none" : "rotate(180deg)",
				transition: tokens.toggleIconTransition,
			}}
		>
			{" "}
			<polyline points="7 8 12 13 17 8" />
			<polyline points="7 15 12 20 17 15" />
		</svg>
	</button>
);

export const AttackPath: FC<AttackPathProps> = memo(
	({
		steps,
		onChange,
		collapsed,
		onCollapsedChange,
		selectedNodeUid,
		onSelectedNodeChange,
	}) => {
		const theme = useTheme() as any;
		const apTokens: ApTokens = theme.palette.attackPath;
		// Half the width the callout overhangs its circle by, so the container's side padding can clear it.
		const calloutOverhang = (apTokens.calloutWidth - apTokens.nodeSize) / 2;

		const pathNodes: PathNode[] = [...steps];

		const pathEdges: PathEdge[] = steps.slice(1).map((step, idx) => ({
			sourceAssetUid: steps[idx].assetUid,
			sourceAsset: steps[idx].assetDescription,
			targetAssetUid: step.assetUid,
			targetAsset: step.assetDescription,
			relationshipTypeUid: "",
			relationshipType: step.relationship ?? "Unknown",
		}));

		const [internalSelectedUid, setInternalSelectedUid] = useState<
			string | null
		>(pathNodes[0]?.assetUid ?? null);
		const [internalCollapsed, setInternalCollapsed] = useState(false);
		const currentSelectedUid = selectedNodeUid ?? internalSelectedUid;
		const isCollapsed = collapsed ?? internalCollapsed;

		useEffect(() => {
			if (pathNodes[0]) {
				onChange?.(pathNodes[0]);
			}
		}, []);

		const toggleCollapsed = () => {
			const next = !isCollapsed;
			if (collapsed === undefined) {
				setInternalCollapsed(next);
			}
			onCollapsedChange?.(next);
		};

		const select = (node: PathNode) => {
			const next = currentSelectedUid === node.assetUid ? null : node.assetUid;
			if (selectedNodeUid === undefined) {
				setInternalSelectedUid(next);
			}
			onSelectedNodeChange?.(next);
			onChange?.(node);
		};

		const lastIdx = pathNodes.length - 1;

		const columns = steps
			.map((_, idx) =>
				idx === 0
					? `${apTokens.nodeSize}px`
					: `minmax(20px, 1fr) ${apTokens.nodeSize}px`
			)
			.join(" ");

		return (
			<div
				css={(theme: any) => ({
					fontFamily: theme.typography?.fontFamily ?? "inherit",
					width: "100%",
					boxSizing: "border-box",
				})}
			>
				<div
					css={{
						position: "relative",
						width: "100%",
						height: isCollapsed ? "auto" : apTokens.containerHeight,
						overflow: "hidden",
						padding: `2.5rem ${calloutOverhang + 24}px`,
						backgroundColor: apTokens.bgCard,
						borderRadius: apTokens.containerRadius,
						border: `1px solid ${apTokens.borderSubtle}`,
						boxShadow: apTokens.shadowSm,
						boxSizing: "border-box",
						display: "flex",
						alignItems: "center",
						transition: apTokens.containerTransition,
					}}
				>
					<CollapseToggle
						collapsed={isCollapsed}
						tokens={apTokens}
						onClick={toggleCollapsed}
					/>
					<div
						css={{
							display: "grid",
							gridTemplateColumns: columns,
							alignItems: "center",
							justifyItems: "center",
							width: "100%",
							boxSizing: "border-box",
							padding: isCollapsed ? `${apTokens.collapsedPadding}px` : "0 4px",
						}}
					>
						{steps.map((step, idx) => {
							const nodeCol = 1 + idx * 2;
							const above = idx % 2 === 0;
							const isSelected = currentSelectedUid === step.assetUid;

							return (
								<Fragment key={`${step.assetUid}-${idx}`}>
									{idx > 0 && (
										<div
											css={{
												gridColumn: nodeCol - 1,
												width: "100%",
												alignSelf: "center",
											}}
										>
											<EdgeConnector
												edge={pathEdges[idx - 1]}
												tokens={apTokens}
											/>
										</div>
									)}

									<div
										css={{
											gridColumn: nodeCol,
											position: "relative",
											padding: "6px 0",
										}}
									>
										<NodeCircle
											node={step}
											isEntry={idx === 0}
											isTarget={idx === lastIdx && lastIdx > 0}
											isSelected={isSelected}
											tokens={apTokens}
											onClick={() => select(step)}
										/>
										{!isCollapsed && (
											<Callout
												step={step}
												below={!above}
												isSelected={isSelected}
												tokens={apTokens}
												onClick={() => select(step)}
											/>
										)}
									</div>
								</Fragment>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
);

export default AttackPath;
