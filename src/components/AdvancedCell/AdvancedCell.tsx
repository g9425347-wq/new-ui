import { CSSProperties, FC, useRef, useState } from "react";
import { SxProps, useTheme } from "@mui/material";
import { Hyperlink } from "../Hyperlink/Hyperlink";
import { IconMenu } from "../IconMenu/IconMenu";
import { Typography } from "../Typography/Typography";
import { EditCell } from "./EditCell";
import { ShowMore } from "../ShowMore/ShowMore";
import { Icon } from "../Icon/Icon";
import { ObjectCell } from "./ObjectCell";

/* Attributes for the fields */
export interface FieldAttributes {
	urlLink?: string;
	style?: string;
	menu?: { label: string; value: string }[];
	aiGenerated?: boolean;
}

/* Type to pass data for dropdown */
type Option = { label: string; value: string };

type DropdownArgs = { value: string; options: Option[] };

/* Props for AlertCell component - only these attributes to be allowed */
export interface Props {
	id: string;
	label?: string;
	data: string;
	dropdownArgs?: DropdownArgs;
	element?: "TextField" | "TextArea" | "Dropdown" | "DateTimePicker" | "Object";
	attributes?: FieldAttributes;
	onMenuClick?(id: string, value: string, data: string): any;
	editable?: boolean;
	applyStyle?: boolean;
	onEditSave?(id: string, value: string): any;
}

// Component to display a value
export const AdvancedCell: FC<Props> = ({
	id,
	label,
	data,
	dropdownArgs,
	element = "TextField",
	attributes,
	onMenuClick,
	editable = false,
	applyStyle = false,
	onEditSave,
}) => {
	const theme = useTheme() as any;
	const tokens = theme.palette.base;
	const cell = theme.palette.advancedCell;
	const fontFamily = theme.typography.fontFamily;

	// Is the field in edit state
	const [isEditing, setEditing] = useState(false);
	// Ref to the edit field
	const inputRef = useRef<HTMLInputElement>(null);

	// Inline menu click
	const handleMenuClick = (menuLabel: string, value: string) => {
		if (onMenuClick) onMenuClick(id, value, data);
	};

	// Save edited value
	const handleSaveEdit = (saveId: string, value: string) => {
		setEditing(false);
		if (onEditSave) onEditSave(saveId, value);
	};

	// Handles editing start
	const onIsEditingHandler = () => {
		if (editable) {
			setEditing(true);
			setTimeout(() => inputRef?.current?.focus(), 5);
		}
	};

	// Convert string CSS to standard style object
	const cssStringToStyles = (cssString: string | undefined) => {
		if (!applyStyle || !cssString) return undefined;
		return cssString.split(";").reduce((acc: any, curr: any) => {
			const [prop, value] = curr.split(":");
			if (prop && value) {
				acc[prop.trim()] = value.trim();
			}
			return acc;
		}, {});
	};

	// Render action icons (AI badge and Edit pencil button)
	const renderActionBadges = () => (
		<>
			{attributes?.aiGenerated && (
				<span
					title="AI Generated"
					style={{
						display: "inline-flex",
						alignItems: "center",
						padding: cell.badge.padding,
						marginLeft: cell.badge.marginLeft,
						borderRadius: cell.badge.borderRadius,
						backgroundColor: tokens.aiBadgeBg,
						color: tokens.aiBadgeText,
						verticalAlign: "middle",
					}}
				>
					<Icon name="wizard" fontSize="inherit" color="inherit" />
				</span>
			)}
			{editable && (
				<span
					role="button"
					tabIndex={0}
					title="Edit"
					onClick={onIsEditingHandler}
					style={{
						display: "inline-flex",
						alignItems: "center",
						justifyContent: "center",
						padding: cell.editButton.padding,
						marginLeft: cell.editButton.marginLeft,
						cursor: "pointer",
						borderRadius: cell.editButton.borderRadius,
						color: tokens.textSecondary,
						transition: cell.editButton.transition,
						verticalAlign: "middle",
					}}
				>
					<Icon name="edit" fontSize="inherit" color="primary" />
				</span>
			)}
		</>
	);

	// Render 3-dots action menu
	const renderKebabMenu = () => {
		if (!attributes?.menu || attributes.menu.length === 0) return null;
		return (
			<div
				style={{
					width: cell.kebab.size,
					height: cell.kebab.size,
					borderRadius: cell.kebab.borderRadius,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					transition: cell.kebab.transition,
					flexShrink: 0,
				}}
			>
				<IconMenu
					type="icon"
					icon="vertical-kabab"
					iconInMenu={false}
					onClick={handleMenuClick}
					menuItems={attributes.menu.map((item: any) => ({
						label: item.label,
						value: item.value,
					}))}
				/>
			</div>
		);
	};

	// If field is being edited, show edit control
	if (editable && isEditing) {
		return (
			<EditCell
				id={id}
				label={label}
				data={data}
				dropdownArgs={dropdownArgs}
				element={element}
				handleSaveEdit={handleSaveEdit}
				setEditing={setEditing}
			/>
		);
	}

	const rootStyle: CSSProperties = {
		width: "100%",
		display: "flex",
		boxSizing: "border-box",
		fontFamily: `${fontFamily} !important`,
		padding: cell.rootPadding,
	};

	// Label text with its action badges
	const renderLabel = (sx?: SxProps) => (
		<Typography
			fontWeight={cell.labelFontWeight}
			variant="subtitle2"
			sx={{
				color: tokens.textSecondary,
				fontFamily,
				...sx,
			}}
		>
			{label}
			{renderActionBadges()}
		</Typography>
	);

	// Value as a hyperlink or plain text
	const renderValue = () =>
		attributes?.urlLink ? (
			<Hyperlink
				fontSize={14}
				fontWeight={400}
				href={attributes.urlLink}
				target="_blank"
			>
				<span
					style={{
						wordBreak: "break-all",
						color: tokens.textPrimary,
						fontSize: cell.valueFontSize,
						lineHeight: cell.valueLineHeight,
					}}
				>
					{data ? data : "-"}
				</span>
			</Hyperlink>
		) : (
			<Typography
				style={cssStringToStyles(attributes?.style)}
				fontSize={cell.valueFontSize}
				fontWeight={400}
				textTransform="none"
				lineHeight={cell.valueLineHeight}
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					wordBreak: "break-all",
					color: tokens.textPrimary,
					fontFamily,
				}}
			>
				{data ? data : "-"}
			</Typography>
		);

	// Display object viewer
	if (element === "Object") {
		return (
			<div
				style={{
					...rootStyle,
					flexDirection: "row",
					alignItems: "flex-start",
					gap: cell.rowGap,
				}}
			>
				{" "}
				<div
					style={{
						flex: `0 0 ${cell.objectLabelWidth}`,
						minWidth: 0,
						overflowWrap: "anywhere",
					}}
				>
					{renderLabel({
						fontSize: cell.objectLabelFontSize,
						lineHeight: cell.valueLineHeight,
					})}
				</div>
				<div style={{ flex: "1 1 0", minWidth: 0 }}>
					<ObjectCell data={data} />
				</div>
				{renderKebabMenu()}
			</div>
		);
	}

	// Display text area with show more
	if (element === "TextArea") {
		return (
			<div
				style={{
					...rootStyle,
					flexDirection: "row",
					alignItems: "flex-start",
					gap: cell.rowGap,
				}}
			>
				{" "}
				<div style={{ width: cell.textAreaLabelWidth, flexShrink: 0 }}>
					{renderLabel({
						fontSize: cell.labelFontSize,
						letterSpacing: cell.labelLetterSpacing,
						lineHeight: cell.valueLineHeight,
					})}
				</div>
				<div style={{ flex: 1, minWidth: 0 }}>
					{attributes?.urlLink ? (
						renderValue()
					) : (
						<ShowMore
							lines={cell.textAreaLines}
							fontSize={cell.valueFontSize}
							lineHeight={cell.valueLineHeight}
						>
							{renderValue()}
						</ShowMore>
					)}
				</div>
				{renderKebabMenu()}
			</div>
		);
	}

	// Default: TextField, Dropdown, DateTimePicker
	return (
		<div style={{ ...rootStyle, flexDirection: "column", gap: cell.columnGap }}>
			{label && (
				<div
					style={{ display: "flex", alignItems: "center", gap: cell.labelGap }}
				>
					{" "}
					{renderLabel({
						fontSize: cell.labelFontSize,
						letterSpacing: cell.labelLetterSpacing,
					})}
				</div>
			)}
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: cell.valueGap,
				}}
			>
				<div style={{ flex: 1, minWidth: 0 }}>{renderValue()}</div>
				{renderKebabMenu()}
			</div>
		</div>
	);
};

export default AdvancedCell;
