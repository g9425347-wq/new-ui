import { FC } from "react";
import { IconButton as MuiIconButton, useTheme } from "@mui/material";
import { Icon } from "../Icon/Icon";
import { IconType } from "../Icon/IconType";
import { ToolTip } from "../ToolTip/ToolTip";

export interface Label {
	label?: string;
	color?: string;
	number?: number;
}

/* Props for IconButton component - only these attributes to be allowed */
export interface IconButtonProps {
	icon: IconType;
	iconColor?: string;
	title: string;
	size?: "small" | "medium" | "large";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	label?: Label;
	active?: boolean;
	numberFormat?: string;
	disabled?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
	icon,
	iconColor,
	title,
	size = "medium",
	onClick,
	label,
	active = false,
	numberFormat = "en-IN",
	disabled = false,
}) => {
	const theme = useTheme() as any;
	const tokens = theme?.palette?.iconButton;
	const isDark = theme?.palette?.mode === "dark";

	const currentSize = tokens?.sizes?.[size] || tokens?.sizes?.medium;

	const resolvedIconColor = disabled
		? tokens?.textDisabled
		: iconColor ||
		  (active
				? isDark
					? tokens?.textPrimary
					: tokens?.textActive
				: isDark
				? tokens?.textPrimary
				: tokens?.textSecondary);

	return (
		<ToolTip title={title} arrow disableHoverListener={disabled}>
			{label ? (
				<button
					type="button"
					disabled={disabled}
					onClick={onClick}
					css={tokens?.buttonWithLabelStyle?.(
						currentSize,
						active,
						disabled,
						theme?.typography?.fontFamily,
					)}
				>
					<span
						className="icon-wrapper"
						css={tokens?.iconWrapperStyle?.(
							currentSize.iconSize,
							resolvedIconColor,
						)}
					>
						<Icon name={icon} fontSize="inherit" color="inherit" />
					</span>

					{label.label && (
						<span
							className="icon-label"
							css={tokens?.labelStyle?.(
								disabled,
								active,
								label.color,
							)}
						>
							{label.label}
						</span>
					)}

					{label.number != null && (
						<span
							css={tokens?.badgeStyle?.(
								currentSize,
								active,
								disabled,
								label.color,
							)}
						>
							{Intl.NumberFormat(numberFormat).format(
								label.number,
							)}
						</span>
					)}
				</button>
			) : (
				<MuiIconButton
					size={size}
					disabled={disabled}
					onClick={onClick}
					css={tokens?.iconButtonStyle?.(
						currentSize,
						active,
						disabled,
						resolvedIconColor,
					)}
				>
					<span
						className="icon-wrapper"
						css={tokens?.iconWrapperStyle?.(currentSize.iconSize)}
					>
						<Icon name={icon} fontSize="inherit" color="inherit" />
					</span>
				</MuiIconButton>
			)}
		</ToolTip>
	);
};

export default IconButton;
