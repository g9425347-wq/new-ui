import { FC, HTMLAttributes, ReactNode } from "react";
import { useTheme } from "@mui/material";

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

/**
 * Creates the top-level layout wrapper that fills the viewport or content area,
 * using the active theme's background, text, and typography settings.
 */
export const Page: FC<PageProps> = ({ children, className, ...other }) => {
	const theme = useTheme();

	return (
		<div
			className={
				className ? `uicontrols-page ${className}` : "uicontrols-page"
			}
			css={{
				width: "100%",
				minHeight: "100%",
				flex: "1 1 auto",
				display: "flex",
				flexDirection: "column",
				boxSizing: "border-box",

				backgroundColor: `${theme.palette.background.default} !important`,
				color: `${theme.palette.text.primary} !important`,
				fontFamily: `${theme.typography.fontFamily} !important`,

				/* Inherit the active theme typography across untyped child elements */
				"& p, & span, & div, & h1, & h2, & h3, & h4, & h5, & h6": {
					fontFamily: "inherit",
				},
			}}
			{...other}
		>
			{children}
		</div>
	);
};

export default Page;
