import { FC, ReactNode } from "react";

/* Props for button component - only these attributes to be allowed */
export interface ButtonProps {
	children?: ReactNode;
	type?: "button" | "submit" | "reset";
	size?: "medium" | "large";
	disabled?: boolean;
	onClick?: any;
}

// Button Component
export const Button: FC<ButtonProps> = ({
	type = "button",
	disabled = false,
	size = "medium",
	children,
	onClick,
}) => {
	const isPrimary = type === "submit";

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			css={(theme: any) => {
				const tokens = theme.palette.button;
				const sizeTokens = tokens.sizes[size];
				return {
					fontFamily: theme.typography.fontFamily,
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					gap: tokens.gap,
					whiteSpace: "nowrap",
					fontWeight: tokens.fontWeight,
					fontSize: sizeTokens.fontSize,
					height: sizeTokens.height,
					padding: sizeTokens.padding,
					borderRadius: tokens.borderRadius,
					borderStyle: "solid",
					borderWidth: tokens.borderWidth,
					cursor: "pointer",
					userSelect: "none",
					outline: "none",
					boxSizing: "border-box",
					transition: tokens.transition,

					/* Submit (Primary Action) */
					...(isPrimary
						? {
								backgroundColor: tokens.primary,
								borderColor: tokens.primary,
								color: tokens.primaryText,
								boxShadow: tokens.primaryShadow,
								"&:hover:not(:disabled)": {
									backgroundColor: tokens.primaryHover,
									borderColor: tokens.primaryHover,
									boxShadow: tokens.primaryShadowHover,
								},
								"&:active:not(:disabled)": {
									backgroundColor: tokens.primaryActive,
									borderColor: tokens.primaryActive,
									transform: tokens.activeScale,
								},
								"&:focus-visible": {
									boxShadow: `0 0 0 ${tokens.focusRingWidth} ${tokens.focusRing}`,
								},
						  }
						: {
								/* Default/Reset (Secondary Outlined Action) */
								backgroundColor: tokens.secondaryBg,
								borderColor: tokens.secondaryBorder,
								color: tokens.secondaryText,
								boxShadow: tokens.secondaryShadow,
								"&:hover:not(:disabled)": {
									backgroundColor: tokens.secondaryHoverBg,
									borderColor: tokens.secondaryBorderHover,
									color: tokens.secondaryTextHover,
								},
								"&:active:not(:disabled)": {
									backgroundColor: tokens.secondaryActiveBg,
									borderColor: tokens.secondaryActiveBorder,
									transform: tokens.activeScale,
								},
								"&:focus-visible": {
									borderColor: tokens.primary,
									boxShadow: `0 0 0 ${tokens.focusRingWidth} ${tokens.focusRing}`,
								},
						  }),

					/* Disabled State */
					"&:disabled": {
						backgroundColor: `${tokens.disabledBg} !important`,
						borderColor: `${tokens.disabledBorder} !important`,
						color: `${tokens.disabledText} !important`,
						boxShadow: "none !important",
						cursor: "not-allowed !important",
						transform: "none !important",
					},
				};
			}}
		>
			{children}
		</button>
	);
};

export default Button;
