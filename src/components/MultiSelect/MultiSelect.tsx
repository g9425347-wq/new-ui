import { FC, ReactNode, useState, useMemo } from "react";
import { useTheme } from "@mui/material";
import { ReactSortable } from "react-sortablejs";
import { Divider } from "../Divider/Divider";
import { CheckBox } from "../Checkbox/Checkbox";
import { SearchBar } from "../SearchBar/SearchBar";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";
import { IconButton } from "../IconButton/IconButton";

export type Option = {
	label: string;
	value: {
		key: string;
		value: string;
	};
};

export interface MultiSelectProps {
	children?: ReactNode;
	options?: Option[];
	label: string;
	onSelectItem(data: any): any;
	preselectedItems?: any[];
	disabled?: boolean;
}

export const MultiSelect: FC<MultiSelectProps> = ({
	options = [],
	label,
	onSelectItem,
	preselectedItems = [],
	disabled = false,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.multiSelect ?? {};
	const iconColors = styles.iconColors ?? {};

	const [searchTerm, setSearchTerm] = useState("");

	const sortableList = useMemo(
		() => preselectedItems.map((item) => ({ ...item, id: item.key })),
		[preselectedItems],
	);

	const handleItemClick = (value: any) => {
		if (disabled) return;
		const exists = preselectedItems.some((item) => item.key === value.key);
		const updated = exists
			? preselectedItems.filter((item) => item.key !== value.key)
			: [...preselectedItems, value];

		if (onSelectItem) onSelectItem(updated);
	};

	const handleSetList = (newListWithIds: any[]) => {
		if (disabled) return;
		const sanitized = newListWithIds.map(({ key: k, value: v }) => ({
			key: k,
			value: v,
		}));
		const isIdentical =
			sanitized.length === preselectedItems.length &&
			sanitized.every(
				(item, idx) => item.key === preselectedItems[idx]?.key,
			);

		if (!isIdentical && onSelectItem) {
			onSelectItem(sanitized);
		}
	};

	const filteredOptions = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();
		if (!query) return options;
		return options.filter((opt) => opt.label.toLowerCase().includes(query));
	}, [options, searchTerm]);

	return (
		<div data-disabled={disabled} css={styles.root}>
			<Divider label={label} />

			<div css={styles.grid}>
				{/* Left Selection Column */}
				<div css={styles.panel}>
					{/* Search Header */}
					<div css={styles.searchHeader}>
						<SearchBar
							onChange={(text: string) => setSearchTerm(text)}
						/>
					</div>

					{/* Scrollable Options List */}
					<div css={styles.optionList}>
						{filteredOptions.length === 0 ? (
							<div css={styles.empty}>No matching options</div>
						) : (
							filteredOptions.map((item) => {
								const isChecked = preselectedItems.some(
									(selected) =>
										selected.key === item.value.key,
								);
								return (
									<div
										key={item.value.key}
										onClick={() =>
											handleItemClick(item.value)
										}
										data-checked={isChecked}
										data-disabled={disabled}
										css={styles.option}
									>
										<CheckBox
											checked={isChecked}
											disabled={disabled}
											onChange={() =>
												handleItemClick(item.value)
											}
										/>
										<Typography
											variant="subtitle1"
											css={styles.optionLabel}
										>
											{item.label}
										</Typography>
									</div>
								);
							})
						)}
					</div>
				</div>

				{/* Right Ordered Selected Column */}
				<div css={styles.panel}>
					{/* Header with Counter */}
					<div css={styles.selectedHeader}>
						<Typography
							variant="subtitle2"
							css={styles.selectedTitle}
						>
							Selected & Order
						</Typography>
						<span css={styles.badge}>{preselectedItems.length}</span>
					</div>

					{/* Draggable Items Surface */}
					<div css={styles.selectedBody}>
						{preselectedItems.length === 0 ? (
							<div css={styles.empty}>
								Select items from the left panel
							</div>
						) : (
							<ReactSortable
								handle=".drag-anchor"
								list={sortableList}
								setList={handleSetList}
								animation={180}
								disabled={disabled}
								css={styles.sortable}
							>
								{preselectedItems.map((val) => {
									const match = options.find(
										(opt) => opt.value.key === val.key,
									);
									const displayLabel =
										match?.label ?? val.value ?? val.key;

									return (
										<div key={val.key} css={styles.item}>
											{/* Drag Handle + Label */}
											<div css={styles.itemMain}>
												<div
													className="drag-anchor"
													aria-label="Reorder item"
													data-disabled={disabled}
													css={styles.dragHandle}
												>
													<Icon
														name="drag"
														fontSize="small"
														color="inherit"
													/>
												</div>
												<Typography
													variant="subtitle2"
													css={styles.itemLabel}
												>
													{displayLabel}
												</Typography>
											</div>

											{/* Removal Action */}
											<IconButton
												icon="close"
												title="Remove selection"
												size="small"
												disabled={disabled}
												iconColor={iconColors.remove}
												onClick={() =>
													handleItemClick(val)
												}
											/>
										</div>
									);
								})}
							</ReactSortable>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiSelect;
