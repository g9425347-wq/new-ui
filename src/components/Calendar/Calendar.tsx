import { FC, useRef, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Typography } from "../Typography/Typography";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useTheme } from "@mui/material";

export interface Schedule {
	uid: string;
	description: string;
	startDateTime: string;
	type?: string;
}

/* Props for Calendar component - only these attributes to be allowed */
export interface Props {
	schedule: Schedule[];
	onEventClick?(id: string): any;
	height?: string;
}

export const Calendar: FC<Props> = ({
	schedule,
	onEventClick,
	height = "auto",
}) => {
	const theme = useTheme() as any;
	const calendarTheme = theme.palette.calendar;

	const events = useMemo(
		() =>
			schedule.map((item: Schedule, index: number) => ({
				id: `${index}`,
				title: item.description,
				start: item.startDateTime,
				extendedProps: {
					type: item.type,
					uid: item.uid,
				},
			})),
		[schedule]
	);

	const handleEventClick = (clickInfo: any) => {
		const { extendedProps } = clickInfo.event;
		const { uid } = extendedProps;

		if (onEventClick) onEventClick(uid);
	};

	const calendarComponentRef = useRef<FullCalendar | null>(null);

	// Handle the date click event
	const handleDateClick = (info: any) => {
		if (calendarComponentRef.current) {
			const calendarApi = calendarComponentRef.current.getApi();
			calendarApi.changeView("timeGridDay", info.dateStr);
		}
	};

	const types = useMemo(
		() =>
			Object.entries(calendarTheme.statuses).map(
				([typeUid, status]: [string, any]) => ({
					typeUid,
					type: status.label,
					color: status.dot,
				})
			),
		[calendarTheme]
	);

	// Custom render function for calendar event blocks
	const renderEventContent = (eventInfo: any) => {
		const typeUid = eventInfo.event.extendedProps.type;
		const style =
			calendarTheme.statuses[typeUid] ?? calendarTheme.defaultStatus;

		return (
			<div
				css={{
					backgroundColor: style.bg,
					border: `1px solid ${style.border}`,
					borderRadius: calendarTheme.event.radius,
					padding: calendarTheme.event.padding,
					width: "100%",
					boxSizing: "border-box",
					cursor: "pointer",
					transition: calendarTheme.event.transition,
					boxShadow: calendarTheme.eventShadow,
					"&:hover": {
						transform: calendarTheme.event.hoverTransform,
						boxShadow: calendarTheme.eventShadowHover,
					},
				}}
			>
				<div
					css={{
						display: "flex",
						alignItems: "center",
						gap: calendarTheme.event.gap,
						width: "100%",
						color: style.text,
						overflow: "hidden",
						lineHeight: calendarTheme.event.lineHeight,
					}}
				>
					{eventInfo.type === "dayGridMonth" && eventInfo.timeText && (
						<span
							css={{
								fontSize: calendarTheme.event.timeFontSize,
								fontWeight: calendarTheme.event.timeFontWeight,
								opacity: calendarTheme.event.timeOpacity,
								whiteSpace: "nowrap",
							}}
						>
							{eventInfo.timeText}
						</span>
					)}
					<span
						css={{
							fontSize: calendarTheme.event.titleFontSize,
							fontWeight: calendarTheme.event.titleFontWeight,
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
						}}
					>
						{eventInfo.event.title}
					</span>
				</div>
			</div>
		);
	};

	return (
		<div
			css={{
				display: "flex",
				flexDirection: "column",
				height: "auto",
				backgroundColor: calendarTheme.bgCard,
				borderRadius: calendarTheme.containerRadius,
				border: `1px solid ${calendarTheme.border}`,
				boxShadow: calendarTheme.shadow,
				padding: calendarTheme.containerPadding,
				fontFamily: `${theme.typography.fontFamily} !important`,
				transition: calendarTheme.containerTransition,

				/* FullCalendar Root & Scaffolding */
				".fc": {
					fontFamily: "inherit !important",
					zIndex: 0,
					color: calendarTheme.textPrimary,
				},

				/* Header Toolbar */
				".fc .fc-toolbar": {
					marginBottom: calendarTheme.toolbarMarginBottom,
					gap: calendarTheme.toolbarGap,
				},
				".fc .fc-toolbar-title": {
					fontSize: calendarTheme.titleFontSize,
					fontWeight: calendarTheme.titleFontWeight,
					color: `${calendarTheme.textPrimary} !important`,
					letterSpacing: calendarTheme.titleLetterSpacing,
				},

				/* Button Controls */
				".fc .fc-button": {
					backgroundColor: `${calendarTheme.btnBg} !important`,
					color: `${calendarTheme.textPrimary} !important`,
					border: `1px solid ${calendarTheme.btnBorder} !important`,
					borderRadius: `${calendarTheme.buttonRadius} !important`,
					fontWeight: calendarTheme.buttonFontWeight,
					fontSize: calendarTheme.buttonFontSize,
					padding: `${calendarTheme.buttonPadding} !important`,
					textTransform: "capitalize",
					boxShadow: calendarTheme.buttonShadow,
					transition: calendarTheme.buttonTransition,
					outline: "none !important",
					"&:hover": {
						backgroundColor: `${calendarTheme.btnHoverBg} !important`,
						borderColor: `${calendarTheme.border} !important`,
						color: `${calendarTheme.accentBlue} !important`,
					},
					"&:focus": {
						boxShadow: `0 0 0 ${calendarTheme.buttonFocusRingWidth} ${calendarTheme.focusRing} !important`,
					},
				},
				".fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active":
					{
						backgroundColor: `${calendarTheme.accentBlue} !important`,
						borderColor: `${calendarTheme.accentBlue} !important`,
						color: `${calendarTheme.accentContrastText} !important`,
					},
				".fc .fc-button-primary:disabled": {
					backgroundColor: `${calendarTheme.bgMuted} !important`,
					borderColor: `${calendarTheme.border} !important`,
					color: `${calendarTheme.textSecondary} !important`,
					opacity: calendarTheme.buttonDisabledOpacity,
				},

				/* Grid Lines & Table Cells */
				".fc-theme-standard th": {
					backgroundColor: calendarTheme.bgMuted,
					borderColor: `${calendarTheme.border} !important`,
					padding: calendarTheme.headerPadding,
					fontWeight: calendarTheme.headerFontWeight,
					fontSize: calendarTheme.headerFontSize,
					color: calendarTheme.textSecondary,
					textTransform: "uppercase",
					letterSpacing: calendarTheme.headerLetterSpacing,
				},
				".fc-theme-standard td": {
					borderColor: `${calendarTheme.border} !important`,
				},

				/* Day Cells */
				".fc-daygrid-day-frame": {
					minHeight: `${calendarTheme.dayMinHeight} !important`,
					padding: `${calendarTheme.dayPadding} !important`,
					transition: calendarTheme.dayTransition,
					"&:hover": {
						backgroundColor: calendarTheme.dayHoverBg,
					},
				},
				".fc-daygrid-day-number": {
					fontSize: calendarTheme.dayNumberFontSize,
					fontWeight: calendarTheme.dayNumberFontWeight,
					color: calendarTheme.textSecondary,
					padding: calendarTheme.dayNumberPadding,
				},

				/* Highlight Current Day */
				".fc .fc-day-today": {
					backgroundColor: `${calendarTheme.todayBg} !important`,
				},
				".fc .fc-day-today .fc-daygrid-day-number": {
					color: `${calendarTheme.accentBlue} !important`,
					fontWeight: calendarTheme.todayNumberFontWeight,
				},

				/* TimeGrid specific slots (Week & Day view) */
				".fc .fc-timegrid-slot-label": {
					color: calendarTheme.textSecondary,
					borderColor: `${calendarTheme.border} !important`,
				},
				".fc .fc-timegrid-slot": {
					borderColor: `${calendarTheme.borderLight} !important`,
				},

				/* Remove default fullcalendar event borders */
				".fc-daygrid-event": {
					background: "transparent !important",
					border: "none !important",
					margin: `${calendarTheme.eventMargin} !important`,
				},
			}}
		>
			<FullCalendar
				ref={calendarComponentRef}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,timeGridDay",
				}}
				height={height}
				weekends
				events={events}
				eventContent={renderEventContent}
				eventClick={handleEventClick}
				dateClick={handleDateClick}
			/>

			{/* Bottom Status Legend */}
			<div
				css={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					gap: calendarTheme.legend.gap,
					marginTop: calendarTheme.legend.marginTop,
					paddingTop: calendarTheme.legend.paddingTop,
					borderTop: `1px solid ${calendarTheme.border}`,
				}}
			>
				<span
					css={{
						fontSize: calendarTheme.legend.labelFontSize,
						fontWeight: calendarTheme.legend.labelFontWeight,
						color: calendarTheme.textSecondary,
						marginRight: calendarTheme.legend.labelMarginRight,
						textTransform: "uppercase",
						letterSpacing: calendarTheme.headerLetterSpacing,
					}}
				>
					Status:
				</span>
				{types.map((type: any) => (
					<div
						key={type.typeUid}
						css={{
							display: "inline-flex",
							alignItems: "center",
							gap: calendarTheme.legend.itemGap,
							backgroundColor: calendarTheme.bgMuted,
							border: `1px solid ${calendarTheme.border}`,
							borderRadius: calendarTheme.legend.itemRadius,
							padding: calendarTheme.legend.itemPadding,
						}}
					>
						<span
							css={{
								width: calendarTheme.legend.dotSize,
								height: calendarTheme.legend.dotSize,
								borderRadius: "50%",
								backgroundColor: type.color,
							}}
						/>
						<Typography
							variant="caption"
							css={{
								fontSize: calendarTheme.legend.textFontSize,
								fontWeight: calendarTheme.legend.textFontWeight,
								color: calendarTheme.textPrimary,
							}}
						>
							{type.type}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
