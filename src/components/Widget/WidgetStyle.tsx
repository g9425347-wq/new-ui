import { useTheme } from "@mui/material";

export const WidgetStyle = (props: any) => {
	const { children } = props;
	const theme = useTheme() as any;

	return <div css={theme?.widget?.grid}>{children}</div>;
};

export default WidgetStyle;
