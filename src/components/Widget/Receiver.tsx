import { Responsive, WidthProvider } from "react-grid-layout";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";
import { widget } from "./Widget";
import _ from "lodash";
import { Typography } from "../Typography/Typography";
import { ToolTip } from "../ToolTip/ToolTip";
import { useTheme } from "@mui/material";

export const Receiver = (props: any) => {
	const theme = useTheme() as any;
	const styles = theme?.widget?.receiver ?? {};
	const colorSchemes = styles.colorSchemes ?? [];
	const { widgets, onLayoutChange, handleEditClick } = props,
		ResponsiveReactGridLayout = WidthProvider(Responsive),
		// Handler for drop in the receiver div
		onDrop = (e: any) => {
			e.preventDefault();
			let xValue = 0;
			let yValue = 0;
			if (widgets.length > 0) {
				const items = _.cloneDeep(widgets);
				const maxY = Math.max(...items.map((o: any) => o.y));
				const filtered_array = _.filter(items, (val) => val.y == maxY);
				const filteredMaxH = Math.max(
					...filtered_array.map((o) => o.h),
				);
				const filteredMaxX = Math.max(
					...filtered_array.map((o) => o.x),
				);
				const filtered_item = _.filter(
					filtered_array,
					(val) => val.x == filteredMaxX,
				);
				const filteredMaxW = filtered_item[0]?.w || 0;
				if (filteredMaxX + filteredMaxW > 11) {
					xValue = 0;
					yValue = maxY + filteredMaxH;
				} else {
					xValue = filteredMaxX + filteredMaxW;
					yValue = maxY;
				}
			}
			const div_id = e.dataTransfer.getData("div_id");
			if (div_id) {
				const data = JSON.parse(div_id);
				data.i = `widget_${Date.now()}`;
				data.x = xValue;
				data.y = yValue;
				widgets.push(data);
				if (onLayoutChange) onLayoutChange(widgets);
			}
		},
		dragOver = (e: any) => {
			e.preventDefault();
		},
		handleLayoutChange = (layout: []) => {
			let valueChanged = false;
			layout?.forEach((position: widget) => {
				const index = _.findIndex(widgets, { i: position.i });
				const item = _.cloneDeep(widgets[index]);
				if (item) {
					item.x = position.x;
					item.y = position.y;
					item.w = position.w;
					item.h = position.h;
					if (!_.isEqual(widgets[index], item)) {
						valueChanged = true;
						widgets[index] = item;
					}
				}
			});
			if (valueChanged) {
				if (onLayoutChange) onLayoutChange(widgets);
			}
		},
		handleDelete = (key: any) => {
			const index = _.findIndex(widgets, { i: key });
			widgets.splice(index, 1);
			if (onLayoutChange) {
				onLayoutChange(widgets);
			}
		};

	const getWidgetIcon = (w: any): IconType => {
		const rawType = (
			w.icon ||
			w.dashboard?.icon ||
			w.dashboard?.graphTypeUid ||
			w.dashboard?.dashboardTypeUid ||
			""
		).toLowerCase();

		if (rawType.includes("pie") || rawType.includes("donut"))
			return "pie-graph";
		if (rawType.includes("line") || rawType.includes("spline"))
			return "line-chart";
		if (rawType.includes("bar") || rawType.includes("column"))
			return "bar-graph";
		if (rawType.includes("alert")) return "alert";
		if (rawType.includes("compliance")) return "compliance";
		if (rawType.includes("incident")) return "incident";
		return "pie-graph";
	};

	return (
		<div onDrop={onDrop} onDragOver={dragOver} css={styles.root}>
			<ResponsiveReactGridLayout
				cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
				resizeHandles={["se", "s", "sw", "e"]}
				containerPadding={[0, 0]}
				onLayoutChange={handleLayoutChange}
			>
				{widgets?.map((widget: any, index: number) => {
					const activeTheme =
						colorSchemes.length > 0
							? colorSchemes[index % colorSchemes.length]
							: undefined;
					const iconName = getWidgetIcon(widget);

					return (
						<div
							id={widget.i}
							key={widget.i}
							data-grid={{
								x: widget?.x,
								y: widget?.y,
								w: widget?.w,
								h: widget?.h,
								i: widget.i,
								isResizable: true,
							}}
							title={widget.toolTip}
							css={styles.card}
						>
							{/* Edit Widget Button */}
							<ToolTip title={"Edit widget"} arrow>
								<div
									onMouseDown={(e) => e.stopPropagation()}
									onClick={() =>
										handleEditClick &&
										handleEditClick(widget.i)
									}
									css={styles.editButton}
								>
									<Icon name="edit" fontSize="inherit" />
								</div>
							</ToolTip>

							{/* Remove Widget Button */}
							<ToolTip title={"Remove widget"} arrow>
								<div
									onMouseDown={(e) => e.stopPropagation()}
									onClick={() => handleDelete(widget.i)}
									css={styles.removeButton}
								>
									<Icon name="close" fontSize="inherit" />
								</div>
							</ToolTip>

							{/* Center Content: Icon badge + Title */}
							<div css={styles.content}>
								<div
									css={styles.iconBadge}
									style={
										activeTheme
											? {
													backgroundColor:
														activeTheme.bg,
													color: activeTheme.color,
											  }
											: undefined
									}
								>
									<Icon name={iconName} fontSize="medium" />
								</div>

								<Typography css={styles.title}>
									{widget.dashboard.description}
								</Typography>
							</div>
						</div>
					);
				})}
			</ResponsiveReactGridLayout>
		</div>
	);
};

export default Receiver;
