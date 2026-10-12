import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ReactECharts from "echarts-for-react";
import _ from "lodash";

import { SearchBar } from "../SearchBar/SearchBar";
import { Icon } from "../Icon/Icon";
import { Dialog } from "../Dialog/Dialog";

export interface Node {
	key: string;
	name: string;
	value?: string;
	children: Node[];
	itemStyle?: {
		color: string;
	};
}

export interface Props {
	data: Node;
	darkMode?: boolean;
	height: number | string;
	width: number | string;
	logoUrl?: string;
	permissions?: string[];
	onChange?(text: Node): any;
}

interface LegendItem {
	permission: string;
	label: string;
	color: string;
}

export const TreeGraph: FC<Props> = memo(
	({
		data,
		darkMode = false,
		height,
		width,
		onChange,
		logoUrl,
		permissions = [],
	}) => {
		const theme = useTheme() as any;
		const tokens = theme.treeGraph;

		const [search, setSearch] = useState("");
		const [fullScreen, setFullScreen] = useState(false);
		const [searchOn, setSearchOn] = useState(false);
		const [showGraphKey, setShowGraphKey] = useState(false);
		const [newTree, setNewTree] = useState<Node>({} as Node);

		/*
		 * -------------------------------------------------------------
		 * Legend configuration
		 * -------------------------------------------------------------
		 */

		const legendItems = useMemo<LegendItem[]>(
			() => [
				{
					permission: "AL_VIEWALERTS",
					label: "Alerts",
					color: tokens.colors.alerts,
				},
				{
					permission: "IN_VIEWINCIDENTS",
					label: "Incidents",
					color: tokens.colors.incidents,
				},
				{
					permission: "CR_VIEWCHANGEREQUESTS",
					label: "Change Requests",
					color: tokens.colors.changeRequests,
				},
				{
					permission: "VU_VIEWVULNERABILITY",
					label: "Vulnerabilities",
					color: tokens.colors.vulnerabilities,
				},
				{
					permission: "CO_VIEWCOMPLIANCE",
					label: "Compliance Gaps",
					color: tokens.colors.compliance,
				},
				{
					permission: "CM_VIEWCMDB",
					label: "CMDBs",
					color: tokens.colors.cmdb,
				},
			],
			[tokens],
		);

		const visibleLegendItems = useMemo(
			() =>
				legendItems.filter(({ permission }) =>
					permissions.includes(permission),
				),
			[legendItems, permissions],
		);

		/*
		 * -------------------------------------------------------------
		 * Node label
		 * -------------------------------------------------------------
		 */

		const formatNodeLabel = useCallback((params: Node) => {
			if (!params.value) {
				return params.name;
			}

			const value =
				params.value.length > 30
					? `${params.value.substring(0, 27)}...`
					: params.value;

			return `${params.name}\n${value}`;
		}, []);

		/*
		 * -------------------------------------------------------------
		 * Search tree
		 * -------------------------------------------------------------
		 */

		const buildSubTree = useCallback(
			(root: Node): Node | null => {
				if (!search) {
					return root;
				}

				const searchValue = search.toLowerCase();

				if (
					root.value?.toLowerCase().includes(searchValue) ||
					root.name.toLowerCase().includes(searchValue)
				) {
					return root;
				}

				const newChildren: Node[] = [];

				root.children?.forEach((child: Node) => {
					const newChild = buildSubTree(child);

					if (newChild) {
						newChildren.push(child);
					}
				});

				if (newChildren.length > 0) {
					root.children = newChildren;
					return root;
				}

				return null;
			},
			[search],
		);

		/*
		 * -------------------------------------------------------------
		 * Chart events
		 * -------------------------------------------------------------
		 */

		const onChartClick = useCallback(
			(params: any) => {
				if (onChange) {
					onChange(params.data);
				}
			},
			[onChange],
		);

		const onEvents = useMemo(
			() => ({
				click: onChartClick,
			}),
			[onChartClick],
		);

		/*
		 * -------------------------------------------------------------
		 * ECharts configuration
		 * -------------------------------------------------------------
		 */

		const options = useMemo(
			() => ({
				darkMode,

				tooltip: {
					trigger: tokens.tooltip.trigger,
					triggerOn: tokens.tooltip.triggerOn,

					backgroundColor: tokens.colors.surface,
					borderColor: tokens.colors.border,
					borderWidth: tokens.tooltip.borderWidth,
					padding: tokens.tooltip.padding,

					textStyle: {
						color: tokens.colors.textPrimary,
						fontSize: tokens.typography.tooltipFontSize,
						fontWeight: tokens.typography.tooltipFontWeight,
						fontFamily: tokens.typography.fontFamily,
					},

					extraCssText: `
                        box-shadow: ${tokens.shadow.tooltip};
                        border-radius: ${tokens.tooltip.borderRadius};
                    `,
				},

				series: [
					{
						type: "tree",

						data: [newTree],

						symbolSize: tokens.chart.symbolSize,

						top: tokens.chart.top,
						left: tokens.chart.left,
						bottom: tokens.chart.bottom,
						right: tokens.chart.right,

						label: {
							position: tokens.chart.labelPosition,

							verticalAlign: tokens.chart.labelVerticalAlign,

							align: tokens.chart.labelAlign,

							show: true,

							fontFamily: tokens.typography.fontFamily,

							fontSize: tokens.typography.labelFontSize,

							fontWeight: tokens.typography.labelFontWeight,

							color: tokens.colors.textPrimary,

							formatter: formatNodeLabel,
						},

						leaves: {
							label: {
								position: tokens.chart.leafLabelPosition,

								verticalAlign:
									tokens.chart.leafLabelVerticalAlign,

								align: tokens.chart.leafLabelAlign,

								fontFamily: tokens.typography.fontFamily,

								fontSize: tokens.typography.labelFontSize,

								fontWeight: tokens.typography.labelFontWeight,

								color: tokens.colors.textPrimary,
							},
						},

						lineStyle: {
							color: tokens.colors.borderHover,

							curveness: tokens.chart.lineCurveness,

							width: tokens.chart.lineWidth,
						},

						tooltip: {
							trigger: tokens.tooltip.trigger,

							formatter: (params: Node) => {
								if (!params.value) {
									return;
								}

								return `
                                    <div
                                        style="
                                            max-width: ${tokens.tooltip.contentMaxWidth};
                                            max-height: ${tokens.tooltip.contentMaxHeight};
                                            white-space: pre-wrap;
                                            overflow: ${tokens.tooltip.contentOverflow};
                                            text-overflow: ${tokens.tooltip.contentTextOverflow};
                                            line-height: ${tokens.typography.tooltipLineHeight};
                                            font-size: ${tokens.typography.tooltipFontSize};
                                            font-family: ${tokens.typography.fontFamily};
                                        "
                                    >
                                        ${params.value}
                                    </div>
                                `;
							},
						},

						initialTreeDepth: searchOn
							? tokens.chart.searchTreeDepth
							: tokens.chart.initialTreeDepth,

						expandAndCollapse: true,

						animationDuration: tokens.chart.animationDuration,

						animationDurationUpdate:
							tokens.chart.animationDurationUpdate,
					},
				],
			}),
			[darkMode, newTree, searchOn, tokens, formatNodeLabel],
		);

		/*
		 * -------------------------------------------------------------
		 * Main graph container
		 * -------------------------------------------------------------
		 */

		const graphContainerStyle = useMemo(
			() => ({
				backgroundColor: tokens.colors.background,

				height:
					height && !fullScreen ? height : tokens.layout.chartHeight,

				width: width && !fullScreen ? width : tokens.layout.chartWidth,

				display: "flex",

				flexDirection: "column" as const,

				position: "relative" as const,

				border: !fullScreen
					? `${tokens.layout.borderWidth} solid ${tokens.colors.border}`
					: "none",

				borderRadius: !fullScreen
					? tokens.layout.borderRadius
					: tokens.layout.fullscreenBorderRadius,

				overflow: "hidden" as const,

				boxSizing: "border-box" as const,

				fontFamily: tokens.typography.fontFamily,
			}),
			[tokens, height, width, fullScreen],
		);

		/*
		 * -------------------------------------------------------------
		 * Legend marker
		 * -------------------------------------------------------------
		 */

		const renderLegendMarker = useCallback(
			(color: string, outlined = false) => (
				<div
					style={{
						height: tokens.legend.markerSize,

						width: tokens.legend.markerSize,

						borderRadius: "50%",

						backgroundColor: outlined
							? tokens.colors.surface
							: color,

						border: outlined
							? `${tokens.legend.markerBorderWidth} solid ${color}`
							: undefined,

						boxSizing: "border-box",
					}}
				/>
			),
			[tokens],
		);

		/*
		 * -------------------------------------------------------------
		 * Legend item
		 * -------------------------------------------------------------
		 */

		const renderLegendItem = useCallback(
			({ label, color }: LegendItem) => (
				<div
					key={label}
					style={{
						display: "flex",

						alignItems: "center",

						justifyContent: "space-between",

						padding: tokens.legend.itemPadding,

						borderRadius: tokens.legend.itemBorderRadius,
					}}
				>
					<span
						style={{
							fontSize: tokens.typography.legendFontSize,

							fontWeight: tokens.typography.legendFontWeight,

							color: tokens.colors.legendLabel,
						}}
					>
						{label}
					</span>

					<div
						style={{
							display: "flex",

							alignItems: "center",

							gap: tokens.legend.markerGap,
						}}
					>
						{renderLegendMarker(color)}

						{renderLegendMarker(color, true)}
					</div>
				</div>
			),
			[tokens, renderLegendMarker],
		);

		/*
		 * -------------------------------------------------------------
		 * Static legend items
		 * -------------------------------------------------------------
		 */

		const staticLegendItems = useMemo(
			() => [
				{
					label: "Leaf Nodes",
					color: tokens.colors.leafNodes,
				},
				{
					label: "Notes",
					color: tokens.colors.notes,
				},
			],
			[tokens],
		);

		/*
		 * -------------------------------------------------------------
		 * Graph
		 * -------------------------------------------------------------
		 */

		const getGraph = () => (
			<div style={graphContainerStyle}>
				{/*
				 * Top toolbar
				 */}

				<div
					style={{
						position: "absolute",

						top: tokens.layout.toolbarTop,

						left: tokens.layout.toolbarLeft,

						right: tokens.layout.toolbarRight,

						display: "flex",

						justifyContent: "space-between",

						alignItems: "center",

						zIndex: tokens.zIndex.toolbar,

						pointerEvents: "none",
					}}
				>
					<div
						style={{
							width: tokens.layout.searchWidth,

							pointerEvents: "auto",
						}}
					>
						<SearchBar onChange={setSearch} />
					</div>

					{!fullScreen && (
						<button
							type="button"
							onClick={() => setFullScreen(true)}
							style={{
								width: tokens.control.fullscreenWidth,

								height: tokens.control.fullscreenHeight,

								display: "inline-flex",

								alignItems: "center",

								justifyContent: "center",

								borderRadius: tokens.control.borderRadius,

								border: `${tokens.layout.borderWidth} solid ${tokens.colors.border}`,

								backgroundColor: tokens.colors.surface,

								color: tokens.colors.textSecondary,

								boxShadow: tokens.shadow.small,

								cursor: "pointer",

								outline: "none",

								pointerEvents: "auto",

								transition: tokens.control.transition,
							}}
						>
							<Icon
								name="full-screen"
								fontSize="small"
								color="inherit"
							/>
						</button>
					)}
				</div>

				{/*
				 * Chart
				 */}

				<div
					style={{
						flex: tokens.layout.chartFlex,

						width: tokens.layout.chartWidth,

						minHeight: tokens.layout.chartMinHeight,
					}}
				>
					<ReactECharts
						option={options}
						style={{
							height: tokens.layout.chartHeight,

							width: tokens.layout.chartWidth,
						}}
						onEvents={onEvents}
					/>
				</div>

				{/*
				 * Graph key
				 */}

				<div
					style={{
						position: "absolute",

						bottom: tokens.layout.graphKeyBottom,

						left: tokens.layout.graphKeyLeft,

						zIndex: tokens.zIndex.graphKey,
					}}
				>
					<div
						role="button"
						tabIndex={0}
						onClick={() => setShowGraphKey((previous) => !previous)}
						onMouseEnter={() => setShowGraphKey(true)}
						onMouseLeave={() => setShowGraphKey(false)}
						style={{
							display: "inline-flex",

							alignItems: "center",

							gap: tokens.graphKey.gap,

							padding: tokens.graphKey.padding,

							borderRadius: tokens.graphKey.borderRadius,

							backgroundColor: showGraphKey
								? tokens.colors.accentSurface
								: tokens.colors.surface,

							border: `${tokens.layout.borderWidth} solid ${
								showGraphKey
									? tokens.colors.accent
									: tokens.colors.border
							}`,

							color: showGraphKey
								? tokens.colors.accent
								: tokens.colors.keyText,

							boxShadow: tokens.shadow.small,

							cursor: "pointer",

							userSelect: "none",

							transition: tokens.graphKey.transition,
						}}
					>
						<Icon name="view" color="inherit" fontSize="small" />

						<span
							style={{
								fontSize: tokens.typography.keyFontSize,

								fontWeight: tokens.typography.keyFontWeight,

								letterSpacing:
									tokens.typography.keyLetterSpacing,

								lineHeight: tokens.typography.keyLineHeight,
							}}
						>
							Keys
						</span>
					</div>

					{showGraphKey && (
						<div
							onMouseEnter={() => setShowGraphKey(true)}
							onMouseLeave={() => setShowGraphKey(false)}
							style={{
								position: "absolute",

								bottom: tokens.layout.legendBottom,

								left: tokens.layout.legendLeft,

								backgroundColor: tokens.colors.surface,

								borderRadius: tokens.legend.borderRadius,

								border: `${tokens.layout.borderWidth} solid ${tokens.colors.border}`,

								boxShadow: tokens.shadow.card,

								padding: tokens.legend.padding,

								minWidth: tokens.layout.legendMinWidth,

								display: "flex",

								flexDirection: "column",

								gap: tokens.legend.gap,

								zIndex: tokens.zIndex.legend,
							}}
						>
							{/*
							 * Legend header
							 */}

							<div
								style={{
									display: "flex",

									alignItems: "center",

									justifyContent: "space-between",

									paddingBottom:
										tokens.legend.headerPaddingBottom,

									marginBottom:
										tokens.legend.headerMarginBottom,

									borderBottom: `${tokens.layout.borderWidth} solid ${tokens.colors.legendDivider}`,
								}}
							>
								<span
									style={{
										fontSize:
											tokens.typography
												.legendHeaderFontSize,

										fontWeight:
											tokens.typography
												.legendHeaderFontWeight,

										textTransform: "uppercase",

										letterSpacing:
											tokens.typography
												.legendHeaderLetterSpacing,

										color: tokens.colors.legendHeader,
									}}
								>
									Graph Key
								</span>

								<span
									style={{
										fontSize:
											tokens.typography
												.legendHintFontSize,

										color: tokens.colors.legendHint,
									}}
								>
									● Solid / ○ Open
								</span>
							</div>

							{/*
							 * Permission based items
							 */}

							{visibleLegendItems.map(renderLegendItem)}

							{/*
							 * Leaf Nodes / Notes
							 */}

							{staticLegendItems.map(({ label, color }) => (
								<div
									key={label}
									style={{
										display: "flex",

										alignItems: "center",

										justifyContent: "space-between",

										padding: tokens.legend.itemPadding,

										borderRadius:
											tokens.legend.itemBorderRadius,
									}}
								>
									<span
										style={{
											fontSize:
												tokens.typography
													.legendFontSize,

											fontWeight:
												tokens.typography
													.legendFontWeight,

											color: tokens.colors.legendLabel,
										}}
									>
										{label}
									</span>

									{renderLegendMarker(color, true)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		);

		/*
		 * -------------------------------------------------------------
		 * Search effect
		 * -------------------------------------------------------------
		 */

		useEffect(() => {
			if (search) {
				setSearchOn(true);

				const filteredTree =
					buildSubTree(_.cloneDeep(data)) || ({} as Node);

				setNewTree(filteredTree);
			} else {
				setSearchOn(false);
				setNewTree(data);
			}
		}, [search, data, buildSubTree]);

		/*
		 * -------------------------------------------------------------
		 * Render
		 * -------------------------------------------------------------
		 */

		return fullScreen ? (
			<Dialog
				fullScreen
				closeHandler={() => setFullScreen(false)}
				header="ASSERT GRAPH"
				logoUrl={logoUrl}
				padding={false}
			>
				{getGraph()}
			</Dialog>
		) : (
			getGraph()
		);
	},
);

TreeGraph.displayName = "TreeGraph";

export default TreeGraph;
