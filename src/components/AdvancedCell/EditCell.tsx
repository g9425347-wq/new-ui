import { FC, memo, useState } from "react";
import { useTheme } from "@mui/material";
import { IconButton } from "../IconButton/IconButton";
import { TextField } from "../TextField/TextField";
import { Dropdown } from "../Dropdown/Dropdown";
import { TextArea } from "../TextArea/TextArea";
import { DateTimePicker } from "../DateTimePicker/DateTimePicker";

type Option = { label: string; value: string };

type DropdownArgs = { value: string; options: Option[] };

/* Props for edit cell */
export interface Props {
	id: string;
	label?: string;
	data: string;
	dropdownArgs?: DropdownArgs;
	element?: "TextField" | "TextArea" | "Dropdown" | "DateTimePicker" | "Object";
	handleSaveEdit: any;
	setEditing: any;
}

/**
 * Edit Cell component - used only when editing a field in advanced cell.
 * Will return an event if the value changes
 */
export const EditCell: FC<Props> = memo(
	({
		id,
		label,
		data,
		dropdownArgs,
		element = "TextField",
		handleSaveEdit,
		setEditing,
	}) => {
		const theme = useTheme() as any;
		const tokens = theme.palette.base;
		const cell = theme.palette.advancedCell;
		const fontFamily = theme.typography.fontFamily;

		const [fieldData, setFieldData] = useState(data);

		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: cell.columnGap,
					boxSizing: "border-box",
					fontFamily: `${fontFamily} !important`,
					padding: cell.rootPadding,
				}}
			>
				{label && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: cell.labelGap,
						}}
					>
						{" "}
						<span
							style={{
								fontWeight: cell.labelFontWeight,
								color: tokens.textSecondary,
								fontSize: cell.labelFontSize,
								letterSpacing: cell.labelLetterSpacing,
								fontFamily,
							}}
						>
							{label}
						</span>
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
					{/* Input Control Container */}
					<div
						style={{
							backgroundColor: "transparent",
							flex: 1,
							minWidth: 0,
							display: "flex",
							flexDirection: "column",
							padding: "0",
							border: "none",
							borderRadius: "0",
							boxShadow: "none",
							boxSizing: "border-box",
						}}
					>
						{element === "TextField" && (
							<TextField
								value={fieldData}
								name={id}
								onChange={(event: any) =>
									setFieldData(event?.target ? event.target.value : event)
								}
							/>
						)}
						{(element === "TextArea" || element === "Object") && (
							<TextArea
								value={fieldData}
								name={id}
								rows={4}
								onChange={(event: any) =>
									setFieldData(event?.target ? event.target.value : event)
								}
							/>
						)}
						{element === "Dropdown" && dropdownArgs && (
							<Dropdown
								value={fieldData}
								options={dropdownArgs.options}
								name={id}
								onChange={(event: any) =>
									setFieldData(event ? event.value : "")
								}
							/>
						)}
						{element === "DateTimePicker" && (
							<DateTimePicker
								value={fieldData}
								name={id}
								onChange={(event: any) => setFieldData(event)}
							/>
						)}
					</div>

					{/* Action Buttons Toolbar */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							gap: cell.editActionsGap,
							flexShrink: 0,
						}}
					>
						<span style={{ display: "inline-flex" }}>
							<IconButton
								size="small"
								title="Cancel"
								icon="close"
								iconColor={tokens.actionCancel}
								onClick={() => setEditing(false)}
							/>
						</span>
						<span style={{ display: "inline-flex" }}>
							<IconButton
								size="small"
								title="Save"
								icon="tick"
								iconColor={tokens.actionSave}
								onClick={() => {
									// trigger save if data has changed
									if (data !== fieldData) {
										handleSaveEdit(id, fieldData);
									} else {
										setEditing(false);
									}
								}}
							/>
						</span>
					</div>
				</div>
			</div>
		);
	}
);

export default EditCell;
