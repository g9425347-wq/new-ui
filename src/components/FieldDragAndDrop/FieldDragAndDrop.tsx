import { FC, useState, useEffect, useMemo } from "react";
import { ReactSortable } from "react-sortablejs";
import { useTheme } from "@mui/material";
import {
	FieldDragAndDropItem,
	FieldItem,
	FieldItemEx,
} from "./FieldDragAndDropItem";

export interface FieldDragAndDropProps {
	group: string;
	items: Array<FieldItem>;
	setItems(items: Array<any>): any;
	greyed?: boolean;
	disabled?: boolean;
	width?: string;
	height?: string;
	selectedItem?: FieldItem;
	onItemSelected?(item: any): any;
}

export const FieldDragAndDrop: FC<FieldDragAndDropProps> = ({
	group,
	items,
	setItems,
	width,
	height,
	greyed = false,
	disabled = false,
	selectedItem,
	onItemSelected,
}) => {
	const theme = useTheme() as any;
	const dragContainerTokens = theme?.palette?.fieldDragAndDrop;

	const list = useMemo(
		() =>
			items?.map((item) => ({ ...item, id: item.uid } as FieldItemEx)) ||
			[],
		[items],
	);

	const [selectedItemField, setSelectedItemField] = useState<FieldItemEx>(
		selectedItem as FieldItemEx,
	);

	useEffect(() => {
		if (selectedItem) {
			setSelectedItemField(selectedItem as FieldItemEx);
		}
	}, [selectedItem]);

	return (
		<ReactSortable
			handle="#draggable-icon"
			list={list}
			setList={setItems}
			group={group}
			animation={200}
			disabled={disabled}
			css={dragContainerTokens?.containerStyle?.(
				theme?.typography?.fontFamily,
			)}
			onChoose={(event) => {
				if (
					event.oldIndex !== undefined &&
					list[event.oldIndex] &&
					list[event.oldIndex].uid !== selectedItemField?.uid
				) {
					setSelectedItemField(list[event.oldIndex]);
				}
			}}
		>
			{list.map((item) => (
				<FieldDragAndDropItem
					key={item.id}
					item={item}
					greyed={greyed}
					disabled={disabled}
					width={width}
					height={height}
					selectedItemField={selectedItemField}
					onItemSelected={onItemSelected}
				/>
			))}
		</ReactSortable>
	);
};

export default FieldDragAndDrop;
