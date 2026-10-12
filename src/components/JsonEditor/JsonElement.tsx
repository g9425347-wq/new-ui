import { FC, useState } from "react";
import { useTheme } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { TextField } from "../TextField/TextField";
import { IconButton } from "../IconButton/IconButton";

/* Props for JsonElement component */
export interface Props {
	json: any;
	onChange?(json: object): any;
	exp: string;
}

export const JsonElement: FC<Props> = ({ onChange, json = {}, exp }) => {
	const theme = useTheme() as any;
	const styles = theme?.jsonElement ?? {};
	const iconColors = styles.iconColors ?? {};

	const [editIndex, setEditIndex] = useState<number | null>(null);
	const [adding, setAdding] = useState<boolean>(false);
	const [key, setKey] = useState<string>("");
	const [value, setValue] = useState<string>("");
	const [keyError, setKeyError] = useState<boolean>(false);
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
		setValue("");
	};

	const handleMakeArray = () => {
		if (!key.trim()) {
			setKeyError(true);
			return;
		}
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
		if (onChange) onChange({ ...json, [key.trim()]: [] });
		setKey("");
		setValue("");
	};

	const handleSave = () => {
		if (!key.trim()) {
			setKeyError(true);
			return;
		}
		if (onChange) onChange({ ...json, [key.trim()]: value });
		setKey("");
		setValue("");
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
	};

	const handleArraySave = () => {
		if (!key.trim()) {
			setKeyError(true);
			return;
		}
		const parsedArray = value
			.split(",")
			.map((item) => item.trim())
			.filter((item) => item.length > 0);

		if (onChange) onChange({ ...json, [key.trim()]: parsedArray });
		setKey("");
		setValue("");
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
	};

	const handleCancel = () => {
		setKey("");
		setValue("");
		setKeyError(false);
		setEditIndex(null);
		setAdding(false);
	};

	const handleDelete = (deleteKey: string) => {
		const updatedData = { ...json };
		delete updatedData[deleteKey];
		if (onChange) onChange(updatedData);
	};

	const renderEditRow = (
		editType: "add" | "edit",
		type: "value" | "array",
	) => (
		<div css={styles.editRow}>
			{editType === "edit" ? (
				<div css={styles.editKey}>
					<Typography variant="subtitle1" css={styles.editKeyLabel}>
						{key}
					</Typography>
				</div>
			) : (
				<div css={styles.editKeyInput}>
					<TextField
						value={key}
						label="Key"
						name="newKey"
						error={keyError}
						onChange={(event: any) => {
							setKeyError(false);
							setKey(event.target.value);
						}}
						css={styles.textField}
					/>
				</div>
			)}

			<div css={styles.editValue}>
				<div css={styles.editValueInput}>
					<TextField
						value={value}
						name={key || "value"}
						label="Value"
						onChange={(event: any) => setValue(event.target.value)}
						helperText={
							type === "array"
								? "Enter comma-separated values"
								: ""
						}
						css={styles.textField}
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
					onClick={() =>
						type === "array" ? handleArraySave() : handleSave()
					}
				/>
				<IconButton
					icon="count"
					title="Make Object"
					size="small"
					onClick={handleMakeObject}
				/>
				{type === "value" && (
					<IconButton
						icon="array"
						title="Make Array"
						size="small"
						onClick={handleMakeArray}
					/>
				)}
			</div>
		</div>
	);

	const keys = Object.keys(json || {});

	return (
		<div css={styles.root}>
			{keys.map((itemKey, index) => {
				const itemValue = json[itemKey];
				const isArr = Array.isArray(itemValue);
				const isObj =
					itemValue !== null &&
					typeof itemValue === "object" &&
					!isArr;
				const isBool = typeof itemValue === "boolean";

				return (
					<div key={itemKey} css={styles.item}>
						{isArr ? (
							<div
								onMouseEnter={() => setHoverIndex(index)}
								onMouseLeave={() => setHoverIndex(null)}
								data-editing={editIndex === index}
								css={styles.row}
							>
								{editIndex === index ? (
									renderEditRow("edit", "array")
								) : (
									<div>
										<div css={styles.rowHeader}>
											<Typography
												variant="subtitle1"
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
																itemValue.join(
																	", ",
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
															handleDelete(
																itemKey,
															)
														}
													/>
												</div>
											)}
										</div>

										<div css={styles.arrayList}>
											{itemValue.map(
												(
													arrayItem: any,
													arrIdx: number,
												) => (
													<div
														key={arrIdx}
														css={styles.arrayItem}
													>
														<span css={styles.bullet}>
															•
														</span>
														<Typography
															variant="subtitle1"
															css={styles.arrayItemText}
														>
															{String(arrayItem)}
														</Typography>
													</div>
												),
											)}
										</div>
									</div>
								)}
							</div>
						) : isObj ? (
							<div css={styles.object}>
								<div css={styles.objectHeader}>
									<Typography
										variant="subtitle1"
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
									<JsonElement
										json={itemValue}
										onChange={(nested: any) =>
											handleChange(itemKey, nested)
										}
										exp={exp}
									/>
								</div>
							</div>
						) : (
							/* Primitive string, number, or boolean */
							<div
								onMouseEnter={() => setHoverIndex(index)}
								onMouseLeave={() => setHoverIndex(null)}
								data-editing={editIndex === index}
								css={styles.row}
							>
								{editIndex === index ? (
									renderEditRow("edit", "value")
								) : (
									<div css={styles.rowHeader}>
										<div css={styles.primitive}>
											<Typography
												variant="subtitle1"
												css={styles.primitiveKey}
											>
												{itemKey}:
											</Typography>
											<Typography
												variant="subtitle1"
												data-bool={isBool}
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
														setValue(
															String(itemValue),
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

			{adding && renderEditRow("add", "value")}
		</div>
	);
};

export default JsonElement;
