import { FC, CSSProperties, useMemo } from "react";
import { useTheme } from "@mui/material";

/* Props for PriorityBadge component - only these attributes to be allowed */
export interface PriorityBadgeProps {
	value: string;
	label?: string;
	size?: "small" | "medium";
	style?: CSSProperties;
}

// Converts a theme hex color into an rgba string for the tinted pill background
const hexToRgba = (hex: string, alpha: number): string => {
	const normalized = hex.replace("#", "");
	const expanded =
		normalized.length === 3
			? normalized
					.split("")
					.map((c) => c + c)
					.join("")
			: normalized;

	const bigint = parseInt(expanded, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const PriorityBadge: FC<PriorityBadgeProps> = ({
	value,
	label,
	size = "medium",
	style,
}) => {
	const theme = useTheme() as any;
	const normalized = (value ?? "").toUpperCase();
	const priorityBadge = theme?.palette?.priorityBadge ?? theme?.priorityBadge;

	const color = useMemo(() => {
		const priorityPalette = theme.palette.priority;

		const map: Record<string, string> = {
			CRITICAL: priorityPalette.critical,
			HIGH: priorityPalette.high,
			MEDIUM: priorityPalette.medium,
			LOW: priorityPalette.low,
		};

		return map[normalized] ?? theme.palette.grey[500];
	}, [normalized, theme]);

	const sizeTokens = priorityBadge.sizes[size];

	return (
		<span
			style={style}
			css={{
				display: priorityBadge.display,
				alignItems: priorityBadge.alignItems,
				gap: sizeTokens.gap,
				padding: sizeTokens.padding,
				borderRadius: priorityBadge.borderRadius,
				backgroundColor: hexToRgba(
					color,
					priorityBadge.backgroundAlpha,
				),
				fontFamily: `${theme.typography.fontFamily} !important`,
				fontSize: sizeTokens.fontSize,
				fontWeight: priorityBadge.fontWeight,
				letterSpacing: priorityBadge.letterSpacing,
				lineHeight: priorityBadge.lineHeight,
				color: `${color} !important`,
				whiteSpace: priorityBadge.whiteSpace,
				userSelect: priorityBadge.userSelect,
				transition: priorityBadge.transition,
			}}
		>
			<span
				aria-hidden="true"
				css={{
					width: sizeTokens.dotSize,
					height: sizeTokens.dotSize,
					borderRadius: priorityBadge.dotBorderRadius,
					backgroundColor: color,
					flexShrink: priorityBadge.dotFlexShrink,
				}}
			/>
			{label ?? normalized}
		</span>
	);
};

export default PriorityBadge;
