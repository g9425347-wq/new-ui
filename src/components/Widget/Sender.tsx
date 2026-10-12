import { useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";
import { widget } from "./Widget";

export const Sender = (props: any) => {
	const { widgets } = props;
	const theme = useTheme() as any;
	const styles = theme?.widget?.sender ?? {};

	/* Start dragging a widget */
	const dragStart = (e: any) => {
		const target = e.currentTarget;
		e.dataTransfer.setData("div_id", target.getAttribute("data-widget"));
	};

	// Drag over the receiver
	const dragOver = (e: any) => {
		e.preventDefault();
	};

	const getWidgetIcon = (w: any) => {
		const dt = w?.dashboard?.dashboardTypeUid;
		const gt = w?.dashboard?.graphTypeUid;

		if (dt === "IFRAME")
			return <Icon name={"iFrame"} fontSize="medium" color="inherit" />;
		if (dt === "AGGREGATE")
			return <Icon name={"count"} fontSize="medium" color="inherit" />;

		if (dt === "GRAPH") {
			const graphMap: Record<string, IconType> = {
				PIE: "pie-graph",
				"3DPIE": "pie-graph",

				BAR: "bar-graph",
				BASICBAR: "bar-graph",
				STACKEDBAR: "bar-graph",

				COLUMN: "bar-graph",
				BASICCOLUMN: "bar-graph",
				STACKEDCOLUMN: "bar-graph",
				STACKEDGROUPEDCOLUMN: "bar-graph",

				LINE: "line-chart",
				SPLINE: "bell-curve",

				AREA: "area-chart",
				AREASPLINE: "area-chart",
				STACKEDAREA: "area-chart",

				DONUT: "donut-chart",
				SEMIDONUT: "donut-chart",

				BUBBLE: "bubble-chart",
				SCATTER: "bubble-chart",
				ACTIVITYGAUGE: "work-in-progress",
			};

			const iconName = graphMap[gt];
			if (!iconName) return null;

			// For BAR types originally displayed rotated icon
			if (gt === "BAR" || gt === "BASICBAR" || gt === "STACKEDBAR") {
				return (
					<div css={styles.rotatedIcon}>
						<Icon
							name={iconName}
							fontSize="medium"
							color="inherit"
						/>
					</div>
				);
			}

			return <Icon name={iconName} fontSize="medium" color="inherit" />;
		}

		return null;
	};

	return (
		<div css={styles.list}>
			{widgets?.map((widget: widget) => (
				<div
					id={widget.dashboard.uid}
					key={widget.dashboard.uid}
					draggable={true}
					onDragStart={dragStart}
					onDragOver={dragOver}
					data-widget={JSON.stringify(widget)}
					css={styles.item}
				>
					<div css={styles.dragIcon}>
						<Icon name="drag" fontSize="small" color="inherit" />
					</div>

					<div css={styles.label}>{widget.dashboard.description}</div>

					<div css={styles.typeIcon}>{getWidgetIcon(widget)}</div>
				</div>
			))}
		</div>
	);
};
