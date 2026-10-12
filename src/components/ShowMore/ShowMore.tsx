import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material";
import ShowMoreText from "react-show-more-text";

/* Props for ShowMore component */
export interface ShowMoreProps {
	lines: number;
	children: ReactNode;
	width?: number;
	fontSize?: string | number;
	lineHeight?: string | number;
	onClick?(expanded: boolean): void;
}

// ShowMore Component
export const ShowMore: FC<ShowMoreProps> = ({
	lines,
	children,
	width = 0,
	fontSize,
	lineHeight,
	onClick,
}) => {
	const theme = useTheme() as any;
	const showMore = theme.palette.showMore;

	const resolvedFontSize = fontSize ?? showMore.fontSize;
	const resolvedLineHeight = lineHeight ?? showMore.lineHeight;

	return (
		<ShowMoreText
			lines={lines}
			more="Show more"
			less="Show less"
			onClick={onClick}
			expanded={false}
			width={width}
			truncatedEndingComponent="... "
			css={{
				color: `${theme.palette.text.secondary} !important`,
				fontFamily: `${theme.typography.fontFamily} !important`,
				display: showMore.display,
				lineHeight: resolvedLineHeight,
				fontSize: `${
					typeof resolvedFontSize === "number"
						? `${resolvedFontSize}px`
						: resolvedFontSize
				} !important`,
				fontWeight: showMore.fontWeight,
				textAlign: showMore.textAlign,
				overflowWrap: showMore.overflowWrap,
				wordBreak: showMore.wordBreak,
				whiteSpace: showMore.whiteSpace,
				paddingRight: showMore.paddingRight,

				"& br": {
					content: showMore.lineBreak.content,
					display: showMore.lineBreak.display,
					width: showMore.lineBreak.width,
				},

				".show-more-less-clickable": {
					color: `${showMore.actionColor} !important`,
					cursor: showMore.action.cursor,
					fontWeight: showMore.action.fontWeight,
					fontSize: showMore.action.fontSize,
					display: showMore.action.display,
					marginTop: showMore.action.marginTop,
					transition: showMore.action.transition,

					"&:hover": {
						opacity: showMore.action.hoverOpacity,
					},
				},
			}}
		>
			{children}
		</ShowMoreText>
	);
};

export default ShowMore;
