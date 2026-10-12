import { FC, useEffect, useState } from "react";
import { Tabs as MuiTabs, Tab as MuiTab, useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";

export type TabItemProps = {
	value?: string;
	label?: string;
	number?: number;
	loading?: boolean;
	error?: boolean;
};

export interface TabProps {
	tabItems: TabItemProps[];
	selectedIndex?: number;
	value?: string | number;
	onChange?(value: string): any;
	numberFormat?: string;
}

export const Tab: FC<TabProps> = ({
	tabItems,
	selectedIndex = 0,
	value,
	onChange,
	numberFormat = "en-IN",
}) => {
	const theme = useTheme() as any;
	const tabTokens = theme.palette.tab;

	const isControlled = value !== undefined;
	const [internalValue, setInternalValue] = useState(selectedIndex);

	// Sync external controlled value changes to internal state
	useEffect(() => {
		if (!isControlled) return;

		if (typeof value === "string") {
			const index = tabItems.findIndex((item) => item.value === value);

			setInternalValue(index !== -1 ? index : selectedIndex);
		} else {
			setInternalValue(value as number);
		}
	}, [isControlled, value, tabItems, selectedIndex]);

	// Only reset uncontrolled state when selectedIndex changes
	useEffect(() => {
		if (!isControlled) {
			setInternalValue(selectedIndex);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedIndex, isControlled]);

	const currentValue = isControlled
		? typeof value === "string"
			? tabItems.findIndex((item) => item.value === value)
			: value
		: internalValue;

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		if (!isControlled) {
			setInternalValue(newValue);
		}

		const selectedValue = tabItems[newValue]?.value ?? "";

		if (onChange) {
			onChange(selectedValue);
		}
	};

	const renderTabLabel = (item: TabItemProps, isSelected: boolean) => {
		return (
			<div
				css={{
					display: "inline-flex",
					alignItems: "center",
					gap: tabTokens.label.gap,
					lineHeight: tabTokens.label.lineHeight,
				}}
			>
				<span
					css={{
						letterSpacing: tabTokens.label.letterSpacing,
					}}
				>
					{item.label}
				</span>

				{item.loading ? (
					<span
						css={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							width: tabTokens.loader.containerSize,
							height: tabTokens.loader.containerSize,
						}}
					>
						<span
							css={{
								width: tabTokens.loader.size,
								height: tabTokens.loader.size,
								border: `${tabTokens.loader.borderWidth} solid ${tabTokens.border}`,
								borderTopColor: tabTokens.accent,
								borderRadius: "50%",
								display: "inline-block",
								boxSizing: "border-box",
								animation: tabTokens.loader.animation,

								"@keyframes tabSpin": {
									"0%": {
										transform: "rotate(0deg)",
									},
									"100%": {
										transform: "rotate(360deg)",
									},
								},
							}}
						/>
					</span>
				) : item.error ? (
					<span
						css={{
							display: tabTokens.error.display,
							alignItems: "center",
							justifyContent: "center",
							color: tabTokens.error,
						}}
					>
						<Icon name="error" color="error" fontSize="small" />
					</span>
				) : (
					item.number !== undefined &&
					item.number >= 0 && (
						<span
							css={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								minWidth: tabTokens.badge.minWidth,
								height: tabTokens.badge.height,
								padding: tabTokens.badge.padding,
								borderRadius: tabTokens.badge.borderRadius,
								fontSize: tabTokens.badge.fontSize,
								fontWeight: tabTokens.badge.fontWeight,
								lineHeight: tabTokens.badge.lineHeight,
								transition: tabTokens.badge.transition,
								backgroundColor: isSelected
									? tabTokens.accentBadge
									: tabTokens.badgeBackground,
								color: isSelected
									? tabTokens.accent
									: tabTokens.textSecondary,
								border: `1px solid ${tabTokens.border}`,
							}}
						>
							{new Intl.NumberFormat(numberFormat).format(
								item.number,
							)}
						</span>
					)
				)}
			</div>
		);
	};

	return (
		<MuiTabs
			value={currentValue}
			onChange={handleChange}
			css={{
				minHeight: tabTokens.container.minHeight,
				borderBottom: `1px solid ${tabTokens.border}`,
				boxSizing: "border-box",
				fontFamily: `${theme.typography.fontFamily} !important`,

				"& .MuiTabs-indicator": {
					backgroundColor: tabTokens.accent,
					height: tabTokens.indicator.height,
					borderRadius: tabTokens.indicator.borderRadius,
					transition: tabTokens.indicator.transition,
				},

				"& .MuiTab-root": {
					minHeight: tabTokens.tab.minHeight,
					padding: tabTokens.tab.padding,
					fontSize: tabTokens.tab.fontSize,
					fontWeight: tabTokens.tab.fontWeight,
					textTransform: tabTokens.tab.textTransform,
					fontFamily: `${theme.typography.fontFamily} !important`,
					color: tabTokens.textSecondary,
					transition: tabTokens.tab.transition,
					borderRadius: tabTokens.tab.borderRadius,

					"&:hover": {
						color: tabTokens.textPrimary,
						backgroundColor: tabTokens.hoverBackground,
					},

					"&.Mui-selected": {
						color: `${tabTokens.accent} !important`,
						fontWeight: tabTokens.tab.selectedFontWeight,
					},

					"&.Mui-disabled": {
						color: tabTokens.textDisabled,
						opacity: tabTokens.tab.disabledOpacity,
						cursor: "not-allowed",
					},
				},
			}}
		>
			{tabItems.map((item: TabItemProps, index: number) => (
				<MuiTab
					key={item.value || index}
					disableRipple
					label={renderTabLabel(item, currentValue === index)}
					disabled={item.loading || item.error}
				/>
			))}
		</MuiTabs>
	);
};

export default Tab;
