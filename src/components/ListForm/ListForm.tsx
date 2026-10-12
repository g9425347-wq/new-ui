import { useState, useEffect, ReactNode } from "react";
import { useTheme } from "@mui/material";
import { IconButton } from "../IconButton/IconButton";
import { Divider } from "../Divider/Divider";
import { Icon } from "../Icon/Icon";

export type ListFormProps<T> = {
	name?: string;
	label: string;
	value?: T[];
	defaultData: T;
	renderItem(
		item: T,
		index: number,
		onChangeItem?: (updatedFields: Partial<T> | T) => void,
	): ReactNode;
	allowAdd?: boolean;
	allowDelete?: boolean;
	divider?: boolean;
	disabled?: boolean;
	onChange?(value: T[]): void;
};

export function ListForm<T extends unknown>(props: ListFormProps<T>) {
	const {
		name,
		label,
		value,
		defaultData,
		renderItem,
		allowAdd = false,
		allowDelete = false,
		divider = true,
		disabled = false,
		onChange,
	} = props;

	const theme = useTheme() as any;
	const styles = theme?.listForm ?? {};
	const iconColors = styles.iconColors ?? {};

	const [listData, setListData] = useState<T[]>(() =>
		value && value.length > 0 ? value : [defaultData],
	);

	useEffect(() => {
		if (value != null) {
			setListData(value.length > 0 ? value : [defaultData]);
		}
		// defaultData intentionally excluded: it's just the add-row template, not a reset trigger
	}, [value]);

	const handleDelete = (index: number) => {
		if (disabled) return;
		const updated = listData.filter((_, i) => i !== index);
		const finalData = updated.length > 0 ? updated : [defaultData];
		setListData(finalData);
		if (onChange) onChange(finalData);
	};

	const handleAdd = () => {
		if (disabled) return;
		const updated = [...listData, defaultData];
		setListData(updated);
		if (onChange) onChange(updated);
	};

	const handleItemChange = (index: number, updatedValue: unknown) => {
		if (disabled) return;
		const updated = [...listData];
		const currentItem = updated[index];
		const isObjectLike = (val: unknown): val is Record<string, unknown> =>
			typeof val === "object" && val !== null && !Array.isArray(val);

		if (isObjectLike(updatedValue) && isObjectLike(currentItem)) {
			updated[index] = { ...currentItem, ...updatedValue } as T;
		} else {
			updated[index] = updatedValue as T;
		}
		setListData(updated);
		if (onChange) onChange(updated);
	};

	return (
		<div id={name} data-disabled={disabled} css={styles.root}>
			{divider && (
				<div css={styles.divider}>
					<Divider label={label} />
				</div>
			)}

			{/* List Row Stack */}
			<div css={styles.rows}>
				{listData.map((item, index) => (
					<div key={index} css={styles.row}>
						{/* Index Indicator Pill */}
						<div aria-hidden="true" css={styles.index}>
							{index + 1}
						</div>

						{/* Content Subtree */}
						<div css={styles.content}>
							{renderItem(item, index, (val) =>
								handleItemChange(index, val),
							)}
						</div>

						{/* Action Slot */}
						{allowDelete && listData.length > 1 && (
							<div css={styles.deleteSlot}>
								<IconButton
									icon="delete"
									title="Delete row"
									size="small"
									disabled={disabled}
									iconColor={iconColors.delete}
									onClick={() => handleDelete(index)}
								/>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Clean Add Action Control */}
			{allowAdd && (
				<div css={styles.addBar}>
					<button
						type="button"
						disabled={disabled}
						onClick={handleAdd}
						css={styles.addButton}
					>
						<span css={styles.addIcon}>
							<Icon
								name="plus"
								fontSize="inherit"
								color="inherit"
							/>
						</span>
						<span>Add Item</span>
					</button>
				</div>
			)}
		</div>
	);
}

ListForm.onChange = (_index: number, _value: any) => { };

export default ListForm;
