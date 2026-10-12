import { FC } from "react";
import { useTheme, Typography } from "@mui/material";

export interface SwitchOption {
	label: string;
	value: string;
}

export interface SwitchProps {
	disabled?: boolean;
	diabled?: boolean; // Backward compatibility alias for typo fix
	onChange?(value: string): void;
	options: SwitchOption[];
	value?: string;
}

export const Switch: FC<SwitchProps> = ({
	disabled = false,
	diabled = false,
	onChange,
	options,
	value,
}) => {
	const theme = useTheme() as any;
	const switchTokens = theme.palette.switch;

	const isDisabled = disabled || diabled;

	const handleClick = (itemValue: string) => {
		if (!isDisabled && value !== itemValue && onChange) {
			onChange(itemValue);
		}
	};

	return (
		<div
			role="radiogroup"
			aria-disabled={isDisabled}
			css={{
				display: "inline-flex",
				alignItems: "center",
				padding: switchTokens.container.padding,
				gap: switchTokens.container.gap,
				borderRadius: switchTokens.container.borderRadius,
				backgroundColor: switchTokens.trackBackground,
				border: `1px solid ${switchTokens.trackBorder}`,
				boxSizing: "border-box",
				opacity: isDisabled ? switchTokens.disabledOpacity : 1,
				cursor: isDisabled ? "not-allowed" : "default",
				fontFamily: `${theme.typography.fontFamily} !important`,
				userSelect: "none",
			}}
		>
			{options.map((item) => {
				const isSelected = value === item.value;

				return (
					<div
						key={item.value}
						role="radio"
						aria-checked={isSelected}
						tabIndex={isDisabled ? -1 : isSelected ? 0 : -1}
						onClick={() => handleClick(item.value)}
						onKeyDown={(e) => {
							if (
								!isDisabled &&
								(e.key === "Enter" || e.key === " ")
							) {
								e.preventDefault();
								handleClick(item.value);
							}
						}}
						css={{
							position: "relative",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							minHeight: switchTokens.item.minHeight,
							padding: switchTokens.item.padding,
							borderRadius: switchTokens.item.borderRadius,
							cursor: isDisabled ? "not-allowed" : "pointer",
							outline: "none",
							transition: switchTokens.item.transition,
							backgroundColor: isSelected
								? switchTokens.activeBackground
								: "transparent",
							boxShadow: isSelected
								? switchTokens.activeShadow
								: "none",
							border: `1px solid ${
								isSelected
									? switchTokens.activeBorder
									: "transparent"
							}`,

							"&:hover": {
								color: isSelected
									? switchTokens.activeText
									: switchTokens.hoverText,
							},

							"&:active": {
								transform: isDisabled
									? "none"
									: `scale(${switchTokens.item.activeScale})`,
							},

							"&:focus-visible": {
								boxShadow: `0 0 0 2px ${switchTokens.focusRing}`,
							},
						}}
					>
						<Typography
							component="span"
							css={{
								fontSize: `${switchTokens.label.fontSize} !important`,
								fontWeight: `${
									isSelected
										? switchTokens.label.selectedFontWeight
										: switchTokens.label
												.unselectedFontWeight
								} !important`,
								lineHeight: `${switchTokens.label.lineHeight} !important`,
								letterSpacing: switchTokens.label.letterSpacing,
								color: isSelected
									? switchTokens.activeText
									: switchTokens.inactiveText,
								fontFamily: "inherit",
								transition: switchTokens.label.transition,
							}}
						>
							{item.label}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

export default Switch;
