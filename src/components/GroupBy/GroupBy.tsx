import { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import { Typography } from "../Typography/Typography";

export type GroupByOption = {
	label: string;
	value: string;
};

export interface GroupByProps {
	options: GroupByOption[];
	activeGroup: string[];
	setActiveGroup(value: any): any;
	label?: string;
}

export const GroupBy: FC<GroupByProps> = ({
	options = [],
	activeGroup = [],
	setActiveGroup,
	label = "Group By",
}) => {
	const theme = useTheme() as any;
	const groupByTheme = theme.palette.groupBy;

	const [showGroupByPanel, setShowGroupByPanel] =
		useState<boolean>(false);

	const groupByRef = useRef<HTMLDivElement>(null);

	const active = showGroupByPanel || activeGroup.length > 0;

	const onToggleGroupOption = (value: string) => {
		if (activeGroup.includes(value)) {
			setActiveGroup(
				activeGroup.filter((item: string) => item !== value)
			);
		} else {
			setActiveGroup([...activeGroup, value]);
		}
	};

	const onClearAll = () => {
		setActiveGroup([]);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				groupByRef.current &&
				!groupByRef.current.contains(event.target as Node)
			) {
				setShowGroupByPanel(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutside
			);
		};
	}, []);

	return (
		<div
			ref={groupByRef}
			css={groupByTheme.container}
		>
			{/* Group By Chip */}
			<div
				onClick={() =>
					setShowGroupByPanel((prev) => !prev)
				}
				css={{
					...groupByTheme.chip,
					...(active
						? groupByTheme.chipActive
						: {}),
					"&:hover": {
						...groupByTheme.chipHover,
					},
				}}
			>
				<Typography
					fontWeight={500}
					css={{
						...groupByTheme.chipText,
						...(active
							? groupByTheme.chipTextActive
							: {}),
					}}
				>
					{label}
				</Typography>

				<span
					css={{
						...groupByTheme.arrow,
						...(active
							? groupByTheme.arrowActive
							: {}),
						...(showGroupByPanel
							? groupByTheme.arrowOpen
							: {}),
					}}
				>
					▼
				</span>
			</div>

			{/* Group By Panel */}
			{showGroupByPanel && (
				<div css={groupByTheme.panel}>
					{options.map((option) => {
						const checked = activeGroup.includes(
							option.value
						);

						return (
							<div
								key={option.value}
								onClick={() =>
									onToggleGroupOption(
										option.value
									)
								}
								css={{
									...groupByTheme.option,
									...(checked
										? groupByTheme.optionChecked
										: {}),
									"&:hover": {
										backgroundColor: checked
											? groupByTheme
													.optionChecked
													.backgroundColor
											: groupByTheme
													.optionHover
													.backgroundColor,
									},
								}}
							>
								<Typography
									fontWeight={
										checked ? 600 : 500
									}
									css={{
										...groupByTheme.optionText,
										...(checked
											? groupByTheme.optionTextChecked
											: {}),
									}}
								>
									{option.label}
								</Typography>
							</div>
						);
					})}

					{/* Clear All */}
					{activeGroup.length > 0 && (
						<div
							onClick={onClearAll}
							css={{
								...groupByTheme.clearAll,
								"&:hover": {
									...groupByTheme.clearAllHover,
								},
							}}
						>
							<Typography
								css={groupByTheme.clearAllText}
							>
								Clear All
							</Typography>
						</div>
					)}
				</div>
			)}
		</div>
	);
};