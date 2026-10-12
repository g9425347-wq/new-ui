import { FC, useState, useMemo, useCallback } from "react";
import { ReactSortable } from "react-sortablejs";
import { useTheme } from "@mui/material";
import {
	TaskDragAndDropItem,
	TaskItem,
	TaskItemEx,
} from "./TaskDragAndDropItem";

export interface TaskDragAndDropProps {
	group: string;
	items: Array<TaskItem>;
	setItems(items: Array<any>): any;
	selectedItem?: TaskItem;
	onItemSelected?(item: any): any;
	onAssignClick?(item: any): any;
}

export const TaskDragAndDrop: FC<TaskDragAndDropProps> = ({
	group,
	items,
	setItems,
	selectedItem,
	onItemSelected,
	onAssignClick,
}) => {
	const theme = useTheme() as any;
	const tokens = theme.palette.taskDragAndDrop;

	const list = useMemo<TaskItemEx[]>(() => {
		if (!items || items.length === 0) {
			return [];
		}

		return items.map(
			(item) =>
				({
					...item,
					id: item.uid,
				} as TaskItemEx),
		);
	}, [items]);

	const [selectedItemTask, setSelectedItemTask] = useState<TaskItemEx>(
		selectedItem as TaskItemEx,
	);

	const handleChoose = useCallback(
		(event: any) => {
			const idx = event?.oldIndex;

			if (
				idx !== undefined &&
				list[idx] &&
				list[idx].uid !== selectedItemTask?.uid
			) {
				setSelectedItemTask(list[idx]);
			}
		},
		[list, selectedItemTask],
	);

	return (
		<ReactSortable
			handle="#draggable-icon"
			list={list}
			setList={setItems}
			group={group}
			animation={220}
			ghostClass="task-dnd-ghost"
			chosenClass="task-dnd-chosen"
			dragClass="task-dnd-drag"
			onChoose={handleChoose}
			css={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				minHeight: tokens.container.minHeight,
				padding: tokens.container.padding,
				gap: tokens.container.gap,
				backgroundColor: tokens.background,
				borderRadius: tokens.container.borderRadius,
				border: `1px solid ${tokens.border}`,
				boxSizing: "border-box",
				overflowY: "auto",
				fontFamily: `${theme.typography.fontFamily} !important`,
				transition: tokens.transition,

				/* Thin clean scrollbar */
				"&::-webkit-scrollbar": {
					width: tokens.scrollbar.width,
				},

				"&::-webkit-scrollbar-track": {
					background: "transparent",
				},

				"&::-webkit-scrollbar-thumb": {
					backgroundColor: tokens.dashedBorder,
					borderRadius: tokens.scrollbar.thumbRadius,
				},

				"&::-webkit-scrollbar-thumb:hover": {
					backgroundColor: tokens.textMuted,
				},

				/* Placeholder slot while dragging */
				"& .task-dnd-ghost": {
					opacity: tokens.ghost.opacity,
					backgroundColor: `${tokens.ghostBackground} !important`,
					border: `${tokens.ghost.borderWidth} dashed ${tokens.ghostBorder} !important`,
					borderRadius: `${tokens.ghost.borderRadius} !important`,
					boxShadow: "none !important",
				},

				/* Active card being lifted */
				"& .task-dnd-chosen": {
					cursor: "grabbing !important",
					boxShadow: `${tokens.cardShadow} !important`,
					transform: `scale(${tokens.chosen.scale})`,
				},
			}}
		>
			{list.length === 0 ? (
				<div
					css={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
						minHeight: tokens.emptyState.minHeight,
						backgroundColor: tokens.emptyBackground,
						border: `${tokens.emptyState.borderWidth} dashed ${tokens.dashedBorder}`,
						borderRadius: tokens.emptyState.borderRadius,
						color: tokens.textMuted,
						fontSize: tokens.emptyText.fontSize,
						fontWeight: tokens.emptyText.fontWeight,
						letterSpacing: tokens.emptyText.letterSpacing,
						userSelect: "none",
						padding: tokens.emptyState.padding,
						gap: tokens.emptyState.gap,
					}}
				>
					<span
						css={{
							fontSize: tokens.emptyTitle.fontSize,
							fontWeight: tokens.emptyTitle.fontWeight,
							color: tokens.textMuted,
						}}
					>
						No tasks in this lane
					</span>

					<span
						css={{
							fontSize: tokens.emptyDescription.fontSize,
							color: tokens.textSubtle,
						}}
					>
						Drag and drop cards here
					</span>
				</div>
			) : (
				list.map((item) => (
					<TaskDragAndDropItem
						key={item.id}
						item={item}
						selectedItemTask={selectedItemTask}
						onItemSelected={onItemSelected}
						onAssignClick={onAssignClick}
					/>
				))
			)}
		</ReactSortable>
	);
};

export default TaskDragAndDrop;
