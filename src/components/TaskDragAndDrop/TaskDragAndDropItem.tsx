/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useMemo } from "react";

import { useTheme } from "@mui/material";

import { Icon } from "../Icon/Icon";

import { Typography } from "../Typography/Typography";

import { Hyperlink } from "../Hyperlink/Hyperlink";

export interface TaskItem {
	uid: string;

	customer: string;

	summary: string;

	raisedDateTime: string;

	raisedDate: string;

	dueDateTime: string;

	dueDate: string;

	resolvedDateTime: string;

	closedDateTime: string;

	taskType: string;

	taskStatusUid: string;

	taskStatus: string;

	taskPriority: string;

	assignedUser: string;

	taskTag?: string[];
}

export interface TaskItemEx extends TaskItem {
	id: string;

	active: boolean;

	chosen: boolean;

	selected: boolean;
}

// Format milliseconds to human readable like '1w 2d 3h' or '1d 2h 3m'
export const formatDuration = (millis: number): string => {
	const msPerMinute = 60 * 1000;
	const msPerHour = 60 * msPerMinute;
	const msPerDay = 24 * msPerHour;
	const msPerWeek = 7 * msPerDay;

	let diff = millis;

	const weeks = Math.floor(diff / msPerWeek);
	diff -= weeks * msPerWeek;

	const days = Math.floor(diff / msPerDay);
	diff -= days * msPerDay;

	const hours = Math.floor(diff / msPerHour);
	diff -= hours * msPerHour;

	const minutes = Math.floor(diff / msPerMinute);

	const parts: string[] = [];

	if (weeks > 0) {
		parts.push(`${weeks}w`);

		if (days > 0) parts.push(`${days}d`);

		if (hours > 0) parts.push(`${hours}h`);

		return parts.join(" ");
	}

	if (days > 0) {
		parts.push(`${days}d`);

		if (hours > 0) parts.push(`${hours}h`);

		if (minutes > 0) parts.push(`${minutes}m`);

		return parts.join(" ");
	}

	if (hours > 0) {
		parts.push(`${hours}h`);

		if (minutes > 0) parts.push(`${minutes}m`);

		return parts.join(" ");
	}

	return `${minutes}m`;
};

// Calculate SLA text between two ISO datetime strings
export const getSla = (
	raisedDateTime: string | null | undefined,
	dueDateTime: string | null | undefined,
): string => {
	if (!raisedDateTime || !dueDateTime) return "0m";

	const start = Date.parse(raisedDateTime);

	const end = Date.parse(dueDateTime);

	if (isNaN(start) || isNaN(end)) return "0m";

	const now = Date.now();

	if (end < now) {
		const overdueMillis = now - end;

		return `Overdue ${formatDuration(overdueMillis)}`;
	}

	const diff = end - start;

	if (diff <= 0) return "0m";

	return formatDuration(diff);
};

export interface TaskDragAndDropItemProps {
	key?: string;

	item: TaskItemEx;

	width?: string;

	onItemSelected?(item: TaskItem): any;

	onAssignClick?(item: TaskItem): any;

	selectedItemTask: TaskItemEx | null;
}

export const TaskDragAndDropItem: FC<TaskDragAndDropItemProps> = ({
	item,
	onItemSelected,
	onAssignClick,
	selectedItemTask,
}) => {
	const theme = useTheme() as any;

	const isDark = theme?.palette?.mode === "dark";

	/*
	 * IMPORTANT:
	 * Both LightTheme and DarkTheme must expose:
	 *
	 * theme.taskDragAndDropItem
	 *
	 * with the exact same structure.
	 */
	const cardTokens = useMemo(() => {
		return theme?.taskDragAndDropItem;
	}, [theme]);

	const handleDragStart = (event: any) => {
		event.dataTransfer.setData("text/plain", event.currentTarget.id);
	};

	const nowTime = Date.now();

	const msPerWeek = 7 * 24 * 60 * 60 * 1000;

	let slaText = "0m";

	let isOverdue = false;

	let moreThanWeek = false;

	const dueTime = Date.parse(item.dueDateTime);

	const isFulfilled =
		item.taskStatusUid === "RESOLVE" || item.taskStatusUid === "CLOSE";

	if (isFulfilled) {
		const endForSla =
			item.taskStatusUid === "RESOLVE"
				? item.resolvedDateTime
				: item.closedDateTime;

		const endParsed = Date.parse(endForSla);

		const startParsed = Date.parse(item.raisedDateTime);

		if (!isNaN(startParsed) && !isNaN(endParsed)) {
			const duration = Math.max(0, endParsed - startParsed);

			slaText = `Fulfilled in ${formatDuration(duration)}`;

			if (!isNaN(dueTime)) {
				isOverdue = endParsed > dueTime;

				moreThanWeek = !isOverdue && dueTime - nowTime > msPerWeek;
			}
		} else {
			slaText = "0m";
		}
	} else {
		const endForSla = item.dueDateTime;

		slaText = getSla(item.raisedDateTime, endForSla);

		const endParsed = Date.parse(endForSla);

		isOverdue = !isNaN(endParsed) && endParsed < nowTime;

		moreThanWeek = !isNaN(endParsed) && endParsed - nowTime > msPerWeek;
	}

	const priorityUpper = item?.taskPriority?.toUpperCase() || "LOW";

	const isSelected = item.uid === selectedItemTask?.uid;

	const getPriorityStyles = () => {
		switch (priorityUpper) {
			case "CRITICAL":
				return {
					bg: cardTokens.priority.criticalBg,
					text: cardTokens.priority.criticalText,
				};

			case "HIGH":
				return {
					bg: cardTokens.priority.highBg,
					text: cardTokens.priority.highText,
				};

			case "MEDIUM":
				return {
					bg: cardTokens.priority.mediumBg,
					text: cardTokens.priority.mediumText,
				};

			default:
				return {
					bg: cardTokens.priority.lowBg,
					text: cardTokens.priority.lowText,
				};
		}
	};

	const priorityStyle = getPriorityStyles();

	const getSlaStyles = () => {
		if (isOverdue) {
			return {
				bg: cardTokens.sla.overdueBg,
				text: cardTokens.sla.overdueText,
			};
		}

		if (moreThanWeek || isFulfilled) {
			return {
				bg: cardTokens.sla.weekBg,
				text: cardTokens.sla.weekText,
			};
		}

		return {
			bg: cardTokens.sla.normalBg,
			text: cardTokens.sla.normalText,
		};
	};

	const slaStyle = getSlaStyles();

	return (
		<div
			id={item.id}
			onDragStart={handleDragStart}
			css={{
				borderRadius: cardTokens.borderRadius,

				backgroundColor: cardTokens.bg,

				fontFamily: `${cardTokens.fontFamily} !important`,

				color: `${cardTokens.textPrimary} !important`,

				boxSizing: cardTokens.boxSizing,

				border: isSelected
					? `${cardTokens.selectedBorderWidth} solid ${cardTokens.borderSelected}`
					: `${cardTokens.normalBorderWidth} solid ${cardTokens.border}`,

				boxShadow: isSelected
					? `${cardTokens.selectedShadowPrefix} ${cardTokens.selectedShadow}, ${cardTokens.shadow}`
					: cardTokens.shadow,

				transition: cardTokens.cardTransition,

				userSelect: cardTokens.userSelect,

				"&:hover": {
					borderColor: isSelected
						? cardTokens.borderSelected
						: cardTokens.borderHover,

					boxShadow: cardTokens.shadowHover,

					transform: cardTokens.cardHoverTransform,
				},

				"& p, & span, & div": {
					fontFamily: cardTokens.inherit,
				},
			}}
		>
			<div
				css={{
					display: cardTokens.displayFlex,

					flexDirection: cardTokens.flexDirectionColumn,

					padding: cardTokens.contentPadding,

					gap: cardTokens.contentGap,
				}}
			>
				{/* Header: Drag Handle, UID Link & SLA Pill */}
				<div
					css={{
						display: cardTokens.displayFlex,

						alignItems: cardTokens.alignItemsCenter,

						justifyContent: cardTokens.justifyContentSpaceBetween,

						gap: cardTokens.headerGap,
					}}
				>
					<div
						css={{
							display: cardTokens.displayFlex,

							alignItems: cardTokens.alignItemsCenter,

							gap: cardTokens.headerGap,

							minWidth: cardTokens.minWidthZero,
						}}
					>
						<div
							id="draggable-icon"
							css={{
								cursor: cardTokens.cursorGrab,

								color: cardTokens.textMuted,

								display: cardTokens.displayFlex,

								alignItems: cardTokens.alignItemsCenter,

								padding: cardTokens.dragIconPadding,

								borderRadius: cardTokens.dragIconBorderRadius,

								transition: cardTokens.iconTransition,

								"&:hover": {
									color: cardTokens.accent,
								},
							}}
						>
							<Icon name="drag" color="inherit" />
						</div>

						<Hyperlink
							onClick={() => {
								if (onItemSelected) {
									onItemSelected(item);
								}
							}}
						>
							<Typography
								variant="subtitle2"
								fontWeight={cardTokens.uidFontWeight}
								fontSize={cardTokens.uidFontSize}
								css={{
									color: `${cardTokens.accent} !important`,

									whiteSpace: cardTokens.whiteSpaceNowrap,

									overflow: cardTokens.overflowHidden,

									textOverflow:
										cardTokens.textOverflowEllipsis,

									transition: cardTokens.uidTransition,

									"&:hover": {
										opacity: cardTokens.hoverOpacity,
									},
								}}
							>
								{item.uid}
							</Typography>
						</Hyperlink>
					</div>

					{/* SLA Badge */}
					<span
						css={{
							fontSize: cardTokens.slaFontSize,

							fontWeight: cardTokens.slaFontWeight,

							padding: cardTokens.slaPadding,

							borderRadius: cardTokens.slaBorderRadius,

							backgroundColor: slaStyle.bg,

							color: slaStyle.text,

							whiteSpace: cardTokens.whiteSpaceNowrap,

							lineHeight: cardTokens.slaLineHeight,

							display: cardTokens.displayInlineFlex,

							alignItems: cardTokens.alignItemsCenter,
						}}
					>
						{slaText}
					</span>
				</div>

				{/* Task Type Label */}
				<div
					css={{
						display: cardTokens.displayFlex,

						alignItems: cardTokens.alignItemsCenter,

						paddingBottom: cardTokens.taskTypePaddingBottom,

						borderBottom: `${cardTokens.dividerBorderWidth} solid ${cardTokens.divider}`,
					}}
				>
					<Typography
						variant="body2"
						fontSize={cardTokens.taskTypeFontSize}
						fontWeight={cardTokens.taskTypeFontWeight}
						css={{
							color: `${cardTokens.textSecondary} !important`,
						}}
					>
						{item.taskType}
					</Typography>
				</div>

				{/* Task Summary */}
				<Typography
					variant="body1"
					fontSize={cardTokens.summaryFontSize}
					fontWeight={cardTokens.summaryFontWeight}
					css={{
						color: `${cardTokens.textPrimary} !important`,

						lineHeight: cardTokens.summaryLineHeight,

						overflow: cardTokens.overflowHidden,

						display: cardTokens.summaryDisplay,

						WebkitLineClamp: cardTokens.summaryLineClamp,

						WebkitBoxOrient: cardTokens.summaryBoxOrient,
					}}
				>
					{item.summary}
				</Typography>

				{/* Task Tags */}
				{item.taskTag && item.taskTag.length > 0 && (
					<div
						css={{
							display: cardTokens.displayFlex,

							flexWrap: cardTokens.flexWrap,

							gap: cardTokens.tagGap,

							paddingTop: cardTokens.tagPaddingTop,
						}}
					>
						{item.taskTag.map((tag, index) => (
							<span
								key={index}
								css={{
									fontSize: cardTokens.tagFontSize,

									fontWeight: cardTokens.tagFontWeight,

									color: cardTokens.tagText,

									backgroundColor: cardTokens.tagBg,

									padding: cardTokens.tagPadding,

									borderRadius: cardTokens.tagBorderRadius,

									border: `${cardTokens.dividerBorderWidth} solid ${cardTokens.border}`,
								}}
							>
								{tag}
							</span>
						))}
					</div>
				)}

				{/* Divider */}
				<div
					css={{
						width: cardTokens.widthFull,

						borderBottom: `${cardTokens.dividerBorderWidth} solid ${cardTokens.divider}`,
					}}
				/>

				{/* Priority & Due Date Footer */}
				<div
					css={{
						display: cardTokens.displayFlex,

						alignItems: cardTokens.alignItemsCenter,

						justifyContent: cardTokens.justifyContentSpaceBetween,

						gap: cardTokens.footerGap,
					}}
				>
					{/* Priority Badge */}
					<span
						css={{
							fontSize: cardTokens.priorityFontSize,

							fontWeight: cardTokens.priorityFontWeight,

							padding: cardTokens.priorityPadding,

							borderRadius: cardTokens.priorityBorderRadius,

							backgroundColor: priorityStyle.bg,

							color: priorityStyle.text,

							letterSpacing: cardTokens.priorityLetterSpacing,
						}}
					>
						{priorityUpper}
					</span>

					<Typography
						fontSize={cardTokens.dueDateFontSize}
						fontWeight={cardTokens.dueDateFontWeight}
						css={{
							color: `${cardTokens.textSecondary} !important`,
						}}
					>
						{item.dueDate}
					</Typography>
				</div>

				{/* Assignee Footer */}
				<div
					css={{
						display: cardTokens.displayFlex,

						alignItems: cardTokens.alignItemsCenter,

						justifyContent: cardTokens.justifyContentSpaceBetween,

						paddingTop: cardTokens.assigneePaddingTop,
					}}
				>
					<Typography
						variant="caption"
						fontSize={cardTokens.createdFontSize}
						css={{
							color: `${cardTokens.textMuted} !important`,
						}}
					>
						{`Created ${item.raisedDate}`}
					</Typography>

					{item.assignedUser ? (
						<div
							css={{
								display: cardTokens.displayFlex,

								alignItems: cardTokens.alignItemsCenter,

								gap: cardTokens.assigneeGap,

								backgroundColor: cardTokens.tagBg,

								padding: cardTokens.assigneePadding,

								borderRadius: cardTokens.assigneeBorderRadius,
							}}
						>
							<Icon name="assign" color="primary" />

							<Typography
								variant="body2"
								fontSize={cardTokens.assigneeFontSize}
								fontWeight={cardTokens.assigneeFontWeight}
								css={{
									color: `${cardTokens.textPrimary} !important`,
								}}
							>
								{item.assignedUser}
							</Typography>
						</div>
					) : (
						<span
							title={cardTokens.assignUserTitle}
							onClick={() => {
								if (onAssignClick) {
									onAssignClick(item);
								}
							}}
							css={{
								display: cardTokens.displayFlex,

								alignItems: cardTokens.alignItemsCenter,

								justifyContent: cardTokens.justifyContentCenter,

								width: cardTokens.assignButtonSize,

								height: cardTokens.assignButtonSize,

								borderRadius:
									cardTokens.assignButtonBorderRadius,

								backgroundColor: cardTokens.tagBg,

								color: cardTokens.accent,

								cursor: cardTokens.cursorPointer,

								transition: cardTokens.assignTransition,

								"&:hover": {
									backgroundColor: cardTokens.assignHoverBg,

									transform: cardTokens.assignHoverTransform,
								},
							}}
						>
							<Icon name="assign" color="primary" />
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default TaskDragAndDropItem;
