import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material";
import { Box } from "../Box/Box";

export interface ExpressionBuilderStyleProps {
	children?: ReactNode;
}

export const ExpressionBuilderStyle: FC<ExpressionBuilderStyleProps> = ({
	children,
	...props
}) => {
	const theme = useTheme() as any;
	const qbTokens = theme?.palette?.expressionBuilder;

	return (
		<Box
			{...props}
			css={qbTokens?.builderStyle?.(theme?.typography?.fontFamily)}
		>
			{children}
		</Box>
	);
};

export default ExpressionBuilderStyle;
