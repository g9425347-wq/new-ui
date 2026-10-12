/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import { Icon } from "../Icon/Icon";
import { useTheme } from "@mui/material";
import { ToolTip } from "../ToolTip/ToolTip";
import { Typography } from "../Typography/Typography";

export interface FieldItem {
	uid: string;
	label: string;
	type?: string;
	attributes?: any;
}

export interface FieldItemEx extends FieldItem {
	id: string;
	active: boolean;
	chosen: boolean;
	selected: boolean;
}

export interface FieldDragAndDropItemProps {
	key?: string;
	item: FieldItemEx;
	greyed?: boolean;
	disabled?: boolean;
	width?: string;
	height?: string;
	onItemSelected?(item: FieldItem): any;
	selectedItemField: FieldItemEx | null;
}

// FieldDragAndDropItem Component
export const FieldDragAndDropItem: FC<FieldDragAndDropItemProps> = ({
	item,
	greyed,
	disabled,
	width = "230px",
	height = "30px",
	onItemSelected,
	selectedItemField,
}) => {
	const theme = useTheme() as any;
	const dragItemTokens = theme?.palette?.fieldDragAndDrop;

	const [openTooltip, setOpenTooltip] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isAttrHovered, setIsAttrHovered] = useState(false);

	const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData("text/plain", event.currentTarget.id);
	};

	const isSelected = item.uid === selectedItemField?.uid && !greyed;

	// Resolve dynamic styling based on state and theme tokens
	const backgroundColor = greyed
		? dragItemTokens.bgGreyed
		: isHovered && !disabled
		? dragItemTokens.bgHover
		: dragItemTokens.bgDefault;

	const borderColor = isSelected
		? dragItemTokens.borderSelected
		: isHovered && !disabled
		? greyed
			? dragItemTokens.borderDefault
			: dragItemTokens.borderSelected
		: dragItemTokens.borderDefault;

	const textColor =
		greyed || disabled
			? dragItemTokens.textDisabled
			: dragItemTokens.textPrimary;

	return (
		<ToolTip title={item.uid} arrow open={openTooltip && disabled}>
			<div
				id={item.id}
				draggable={!disabled}
				onDragStart={handleDragStart}
				onMouseEnter={() => {
					setOpenTooltip(true);
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setOpenTooltip(false);
					setIsHovered(false);
				}}
				style={dragItemTokens?.itemRootStyle?.({
					backgroundColor,
					borderColor,
					textColor,
					width,
					height,
					isSelected,
					disabled,
					fontFamily:
						dragItemTokens?.fontFamily ||
						theme?.typography?.fontFamily,
				})}
			>
				{!disabled && (
					<div
						id="draggable-icon"
						style={dragItemTokens?.dragIconStyle?.(
							greyed,
							dragItemTokens?.textDisabled,
							dragItemTokens?.textMuted,
						)}
					>
						<Icon name="drag" color="inherit" fontSize="small" />
					</div>
				)}

				<div
					style={dragItemTokens?.labelContainerStyle?.(
						width,
						height,
						disabled,
					)}
				>
					<Typography style={dragItemTokens?.labelTextStyle}>
						{item.label}
					</Typography>
				</div>

				{((item.uid === selectedItemField?.uid && !greyed) ||
					(openTooltip && disabled)) && (
					<div
						style={dragItemTokens?.attrActionStyle?.(
							isAttrHovered,
							dragItemTokens?.textPrimary,
							dragItemTokens?.textMuted,
							dragItemTokens?.attributeHoverBg,
						)}
						onClick={() => {
							if (onItemSelected) onItemSelected(item);
						}}
						onMouseEnter={() => setIsAttrHovered(true)}
						onMouseLeave={() => setIsAttrHovered(false)}
					>
						<Icon name="attribute" fontSize="small" />
					</div>
				)}
			</div>
		</ToolTip>
	);
};

export default FieldDragAndDropItem;
