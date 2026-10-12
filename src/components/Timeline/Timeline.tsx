import { FC, ReactElement, useState } from "react";
import {
	Timeline as MuiTimeline,
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
} from "@mui/lab";
import { useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";

export interface TimelineProps {
	content: any;
	advancedContent?: any;
	id: string;
	icon: IconType;
	connector?: boolean;
	expand?: boolean;
}

export const Timeline: FC<TimelineProps> = ({
	content,
	advancedContent,
	id,
	icon,
	connector = true,
	expand = true,
}) => {
	const theme = useTheme() as any;
	const t = theme?.timeline || {};
	const fontFamily = theme?.typography?.fontFamily || "inherit";

	const getIconColor = (iconType: IconType) => {
		const activityColors = theme?.palette?.activity || {};
		const priorityColors = theme?.palette?.priority || {};

		const mappings: Record<string, string> = {
			open: activityColors.open,
			assign: activityColors.assign,
			escalate: activityColors.escalate,
			"send-to-action": activityColors.action,
			review: activityColors.close,
			"close-alert": activityColors.close,
			notification: activityColors.notification,
			note: activityColors.note,
			pending: activityColors.review,
			cancel: priorityColors.critical,
			approve: priorityColors.low,
			schedule: activityColors.notification,
			"work-in-progress": activityColors.review,
			reject: priorityColors.critical,
			remediate: activityColors.email,
			"risk-accepted": activityColors.notification,
		};

		return mappings[iconType] || theme?.palette?.primary?.main;
	};

	const [advancedContentActive, setAdvancedContentActive] =
		useState<ReactElement | null>(null);
	const [hover, setHover] = useState(false);

	const onMouseOver = () => {
		setHover(true);
		setAdvancedContentActive(getAdvancedContent());
	};

	const onMouseLeave = () => {
		setHover(false);
		setAdvancedContentActive(null);
	};

	const getAdvancedContent = () => {
		return (
			<div
				css={{
					position: t.cardPosition || "absolute",
					boxSizing: "border-box",
					zIndex: t.cardZIndex || 999,
					left: t.cardLeftOffset,
					top: t.cardTopOffset || "0px",
					borderRadius: t.cardBorderRadius || "10px",
					backgroundColor: t.bgSurface,
					border: `${t.cardBorderWidth || "1px"} solid ${t.border}`,
					boxShadow: t.shadow,
					padding: t.cardPadding || "12px",
					transition: t.transition || "all 0.15s ease",
				}}
			>
				{advancedContent}
			</div>
		);
	};

	return (
		<MuiTimeline
			key={id}
			css={{
				margin: t.timelineMargin || "0 !important",
				padding: t.timelinePadding || "0 !important",
				position: "relative",
				fontFamily: `${fontFamily} !important`,

				"& .MuiTimelineConnector-root": {
					backgroundColor: t.connector,
					width: t.connectorWidth,
					minHeight: t.connectorMinHeight || "20px",
				},

				"& .MuiTimelineDot-root": {
					border: "none !important",
					margin: "0 !important",
					padding: "0 !important",
					boxShadow: "none !important",
					backgroundColor: "transparent !important",
				},
			}}
		>
			<TimelineItem
				css={{
					minHeight: "auto",
					"&:before": { display: "none" },
				}}
			>
				{!expand && advancedContentActive}

				<TimelineSeparator css={{ alignItems: "center" }}>
					<div
						onMouseOver={onMouseOver}
						onMouseLeave={onMouseLeave}
						css={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
						}}
					>
						<TimelineDot color="inherit">
							<div
								css={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: t.dotSize,
									height: t.dotSize,
									borderRadius: t.dotBorderRadius || "50%",
									boxSizing: "border-box",
									backgroundColor:
										hover && !expand
											? t.bgHover
											: t.bgSurface,
									border: `${
										t.dotBorderWidth || "1.5px"
									} solid ${
										hover && !expand
											? t.borderHover
											: t.border
									}`,
									boxShadow:
										hover && !expand
											? t.shadowHover
											: t.defaultShadow,
									color: getIconColor(icon),
									transition:
										t.dotTransition ||
										"all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
									transform:
										hover && !expand
											? t.dotHoverTransform ||
											  "scale(1.08)"
											: "scale(1)",
								}}
							>
								<Icon
									name={icon}
									color="inherit"
									fontSize="small"
								/>
							</div>
						</TimelineDot>
					</div>

					{connector && <TimelineConnector />}
				</TimelineSeparator>

				<TimelineContent
					css={{
						padding:
							t.contentPadding || "2px 0 16px 12px !important",
					}}
				>
					{expand && content}
				</TimelineContent>
			</TimelineItem>
		</MuiTimeline>
	);
};

export default Timeline;
