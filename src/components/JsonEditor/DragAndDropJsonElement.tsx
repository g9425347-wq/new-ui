import { FC, useState } from "react";
import { useTheme } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { TextField } from "../TextField/TextField";
import { IconButton } from "../IconButton/IconButton";

/* Props for DragAndDropJsonElement component */
export interface Props {
	json: any;
	onChange?(json: object): any;
	exp: string;
}

export const DragAndDropJsonElement: FC<Props> = ({
	onChange,
	json = {},
	exp,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.dragAndDropJsonElement ?? {};
	const iconColors = styles.iconColors ?? {};

	const [editIndex, setEditIndex] = useState<number | null>(null);
	const [adding, setAdding] = useState<boolean>(false);
	const [key, setKey] = useState<string>("");
	const [value, setValue] = useState<string>("");
	const [keyError, setKeyError] = useState<boolean>(false);
	const [valueEditing, setValueEditing] = useState<boolean>(false);
	const [dropValue, setDropValue] = useState<string>("");
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [isDragOver, setIsDragOver] = useState<boolean>(false);

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		setIsDragOver(false);
	};

	const handleChange = (targetKey: string, targetValue: any) => {
		if (onChange) onChange({ ...json, [targetKey]: targetValue });
	};

	const handleMakeObject = () => {
		if (!key.trim()) {
			setKeyError(true);
			return;
		}
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
		if (onChange) onChange({ ...json, [key.trim()]: {} });
		setKey("");
	};

	const handleSave = () => {
		if (!key.trim()) {
			setKeyError(true);
			return;
		}

		const resolvedValue = dropValue || value;
		if (onChange) onChange({ ...json, [key.trim()]: resolvedValue });

		setKey("");
		setValue("");
		setDropValue("");
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
		setValueEditing(false);
	};

	const handleCancel = () => {
		setKey("");
		setValue("");
		setDropValue("");
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
		setValueEditing(false);
		setIsDragOver(false);
	};

	const handleDelete = (deleteKey: string) => {
		const updatedData = { ...json };
		delete updatedData[deleteKey];
		if (onChange) onChange(updatedData);
	};

	const renderEditRow = () => (
		<div css={styles.editRow}>
			<div css={styles.editField}>
				<TextField
					value={key}
					label="Key"
					mandatory
					name="newKey"
					error={keyError}
					onChange={(event: any) => {
						setKeyError(false);
						setKey(event.target.value);
					}}
				/>
			</div>

			{!valueEditing ? (
				<div css={styles.editValue}>
					<div
						onDrop={(event: React.DragEvent<HTMLDivElement>) => {
							event.preventDefault();
							setIsDragOver(false);
							const data =
								event.dataTransfer.getData("text/plain");
							setDropValue(exp.replace("uid", data));
							setValueEditing(true);
						}}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onClick={() => setValueEditing(true)}
						data-drag-over={isDragOver}
						css={styles.dropZone}
					>
						<Typography variant="subtitle2" css={styles.dropZoneText}>
							Drop variable or click to enter
						</Typography>
					</div>
					<IconButton
						icon="count"
						title="Convert to Object"
						size="small"
						onClick={handleMakeObject}
					/>
					<IconButton
						title="Cancel"
						icon="close"
						size="small"
						iconColor={iconColors.error}
						onClick={handleCancel}
					/>
				</div>
			) : dropValue === "" ? (
				<div css={styles.editValue}>
					<div css={styles.editField}>
						<TextField
							value={value}
							mandatory
							name={key}
							label="Value"
							onChange={(event: any) =>
								setValue(event.target.value)
							}
						/>
					</div>
					<IconButton
						title="Cancel"
						icon="close"
						size="small"
						iconColor={iconColors.error}
						onClick={handleCancel}
					/>
					<IconButton
						title="Save"
						icon="tick"
						size="small"
						iconColor={iconColors.success}
						onClick={handleSave}
					/>
				</div>
			) : (
				<div css={styles.editValue}>
					<div css={styles.droppedValue}>
						<Typography
							variant="subtitle2"
							css={styles.droppedValueText}
						>
							{dropValue}
						</Typography>
					</div>
					<IconButton
						title="Cancel"
						icon="close"
						size="small"
						iconColor={iconColors.error}
						onClick={handleCancel}
					/>
					<IconButton
						title="Save"
						icon="tick"
						size="small"
						iconColor={iconColors.success}
						onClick={handleSave}
					/>
				</div>
			)}
		</div>
	);

	const keys = Object.keys(json || {});

	return (
		<div css={styles.root}>
			{keys.map((itemKey, index) => {
				const itemValue = json[itemKey];
				const isArray = Array.isArray(itemValue);
				const isObject =
					itemValue !== null &&
					typeof itemValue === "object" &&
					!isArray;

				return (
					<div
						key={itemKey}
						onMouseEnter={() => setHoverIndex(index)}
						onMouseLeave={() => setHoverIndex(null)}
						data-editing={editIndex === index}
						css={styles.row}
					>
						{editIndex === index ? (
							renderEditRow()
						) : isArray ? (
							<div>
								<div css={styles.rowHeader}>
									<Typography
										variant="subtitle2"
										css={styles.key}
									>
										{itemKey}
									</Typography>
									{hoverIndex === index && (
										<div css={styles.actions}>
											<IconButton
												icon="edit"
												title="Edit"
												size="small"
												onClick={() => {
													setKey(itemKey);
													setValue(
														JSON.stringify(
															itemValue,
														),
													);
													setEditIndex(index);
												}}
											/>
											<IconButton
												icon="delete"
												title="Delete"
												size="small"
												iconColor={iconColors.error}
												onClick={() =>
													handleDelete(itemKey)
												}
											/>
										</div>
									)}
								</div>
								<div css={styles.arrayList}>
									{itemValue.map(
										(arrayItem: any, arrIdx: number) => (
											<div
												key={arrIdx}
												css={styles.arrayItem}
											>
												<span css={styles.bullet}>•</span>
												<Typography
													variant="body2"
													css={styles.arrayItemText}
												>
													{String(arrayItem)}
												</Typography>
											</div>
										),
									)}
									<div
										onClick={() => {
											setKey(itemKey);
											setValue(JSON.stringify(itemValue));
											setEditIndex(index);
										}}
										css={styles.addItem}
									>
										<Icon name="add" color="inherit" />
										<span>Add Item</span>
									</div>
								</div>
							</div>
						) : isObject ? (
							<div>
								<div css={styles.objectHeader}>
									<Typography
										variant="subtitle2"
										css={styles.key}
									>
										{itemKey}
									</Typography>
									<IconButton
										icon="delete"
										title="Delete"
										size="small"
										iconColor={iconColors.error}
										onClick={() => handleDelete(itemKey)}
									/>
								</div>
								<div css={styles.objectChildren}>
									<DragAndDropJsonElement
										json={itemValue}
										onChange={(nestedJson: any) =>
											handleChange(itemKey, nestedJson)
										}
										exp={exp}
									/>
								</div>
							</div>
						) : (
							<div css={styles.rowHeader}>
								<div css={styles.primitive}>
									<Typography
										variant="subtitle2"
										css={styles.primitiveKey}
									>
										{itemKey}:
									</Typography>
									<Typography
										variant="body2"
										css={styles.primitiveValue}
									>
										{String(itemValue)}
									</Typography>
								</div>
								{hoverIndex === index && (
									<div css={styles.actions}>
										<IconButton
											icon="edit"
											title="Edit"
											size="small"
											onClick={() => {
												setKey(itemKey);
												setValue(String(itemValue));
												setEditIndex(index);
											}}
										/>
										<IconButton
											icon="delete"
											title="Delete"
											size="small"
											iconColor={iconColors.error}
											onClick={() =>
												handleDelete(itemKey)
											}
										/>
									</div>
								)}
							</div>
						)}
					</div>
				);
			})}

			{!adding && (
				<button
					type="button"
					onClick={() => {
						setKey("");
						setValue("");
						setAdding(true);
					}}
					css={styles.addButton}
				>
					<Icon name="add" color="inherit" fontSize="small" />
					<span>Add Property</span>
				</button>
			)}

			{adding && renderEditRow()}
		</div>
	);
};

export default DragAndDropJsonElement;
