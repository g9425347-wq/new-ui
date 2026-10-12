import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material";
import { Box } from "../Box/Box";

export interface Json2HtmlStyleProps {
	children: ReactNode;
}

export const Json2HtmlStyle: FC<Json2HtmlStyleProps> = ({ children }) => {
	const theme = useTheme() as any;

	return <Box css={theme?.json2Html?.wrapper}>{children}</Box>;
};

export default Json2HtmlStyle;
