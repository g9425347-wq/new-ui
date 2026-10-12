import { Tooltip, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";

/* Props for ToolTip component */
export interface ToolTipProps {
	children: ReactNode;
	title?: ReactNode;
	placement?:
		| "bottom-end"
		| "bottom-start"
		| "bottom"
		| "left-end"
		| "left-start"
		| "left"
		| "right-end"
		| "right-start"
		| "right"
		| "top-end"
		| "top-start"
		| "top";
	arrow?: boolean;
	open?: boolean;
	disableHoverListener?: boolean;
	disableFocusListener?: boolean;
	disableTouchListener?: boolean;
	enterDelay?: number;
	leaveDelay?: number;
	className?: string;
}

export type Props = ToolTipProps;

// ToolTip Component
export const ToolTip: FC<ToolTipProps> = ({
	children,
	title = "",
	placement = "top",
	arrow = true,
	open,
	disableHoverListener,
	disableFocusListener,
	disableTouchListener,
	enterDelay,
	leaveDelay,
	className,
}) => {
	const theme = useTheme() as any;
	const t = theme?.tooltip || {};
	const fontFamily = theme?.typography?.fontFamily || "inherit";

	const isDisabled =
		!title || (typeof title === "string" && title.trim() === "");

	return (
		<Tooltip
			title={title ?? ""}
			placement={placement}
			arrow={arrow}
			open={open}
			disableHoverListener={disableHoverListener ?? isDisabled}
			disableFocusListener={disableFocusListener ?? isDisabled}
			disableTouchListener={disableTouchListener ?? isDisabled}
			enterDelay={enterDelay}
			leaveDelay={leaveDelay}
			className={className}
			slotProps={{
				tooltip: {
					sx: {
						backgroundColor: t.bg,
						color: t.text,
						fontFamily: `${fontFamily} !important`,
						fontSize: t.fontSize,
						fontWeight: t.fontWeight,
						padding: t.padding,
						borderRadius: t.borderRadius,
						border: `${t.borderWidth || "1px"} solid ${t.border}`,
						boxShadow: t.boxShadow,
					},
				},
				arrow: {
					sx: {
						color: t.bg,
					},
				},
			}}
		>
			<span>{children}</span>
		</Tooltip>
	);
};

export default ToolTip;
