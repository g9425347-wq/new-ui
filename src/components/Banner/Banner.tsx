import { FC, ReactNode, CSSProperties } from "react";
import { useTheme } from "@emotion/react";

/* Props for banner component - only these attributes to be allowed */
export interface BannerProps {
	leftChildren?: ReactNode;
	rightChildren?: ReactNode;
	style?: CSSProperties;
}

/**
 * Banner Component to be placed on the top of a Page component
 *
 * leftChildren -> Items to be shown on the left of the banner (breadcrumbs, title, tags)
 * rightChildren -> Items to be shown on the right of the banner (action buttons, filters, date pickers)
 */
const flexRow: CSSProperties = {
	display: "flex",
	alignItems: "center",
};

export const Banner: FC<BannerProps> = ({
	leftChildren,
	rightChildren,
	style,
}) => {
	// Access the current active theme (DarkTheme or LightTheme)
	const theme = useTheme() as any;
	const banner = theme.palette.banner;

	return (
		<div
			style={{
				...flexRow,
				justifyContent: "space-between",
				backgroundColor: banner.background,
				borderBottom: `1px solid ${banner.borderColor}`,
				color: banner.textColor,
				fontFamily: theme.typography.fontFamily,
				minHeight: banner.minHeight,
				padding: banner.padding,
				width: "100%",
				boxSizing: "border-box",
				gap: banner.outerGap,
				transition: banner.transition,
				...style,
			}}
		>
			<div
				style={{ ...flexRow, gap: banner.gap, minWidth: 0, flexWrap: "wrap" }}
			>
				{leftChildren}
			</div>
			<div style={{ ...flexRow, gap: banner.gap, flexShrink: 0 }}>
				{rightChildren}
			</div>
		</div>
	);
};

export default Banner;
