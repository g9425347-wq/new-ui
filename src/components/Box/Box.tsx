import { forwardRef, ReactNode, ElementType } from "react";
import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";

export interface BoxProps extends Omit<MuiBoxProps, "ref"> {
	children?: ReactNode;
	icon?: ReactNode;
	className?: string;
	display?: any;
	mx?: any;
	my?: any;
	mt?: any;
	mr?: any;
	ml?: any;
	pb?: any;
	pt?: any;
	mb?: any;
	flexDirection?: any;
	justifyContent?: any;
	component?: ElementType<any>;
	textAlign?: any;
	alignItems?: any;
	flexGrow?: any;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	(props: BoxProps, ref) => {
		const { children, icon, sx, ...other } = props;

		return (
			<MuiBox
				ref={ref}
				css={(theme: any) => ({
					width: "100%",
					height: "100%",
					fontFamily: theme.typography.fontFamily,
					color: theme.palette.text.primary,
					transition: theme.palette.box.transition,
				})}
				sx={[
					{
						width: "100%",
						height: "100%",
					},
					...(Array.isArray(sx) ? sx : [sx]),
				]}
				{...other}
			>
				{icon && (
					<MuiBox
						component="span"
						sx={{
							display: "inline-flex",
							alignItems: "center",
							mr: children ? 1 : 0,
							color: "inherit",
						}}
					>
						{icon}
					</MuiBox>
				)}
				{children}
			</MuiBox>
		);
	}
);

Box.displayName = "Box";

export default Box;
