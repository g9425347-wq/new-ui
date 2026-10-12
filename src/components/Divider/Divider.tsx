import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material";

/* Props for divider component - only these attributes to be allowed */
export interface Props {
	children?: ReactNode;
	label: string;
}

// Divider Component
export const Divider: FC<Props> = ({ label }) => {
	const theme = useTheme() as any;
	const dividerTokens = theme?.palette?.dividerComponent;

	return (
		<div css={dividerTokens?.rootStyle}>
			<div
				css={dividerTokens?.labelStyle?.(
					theme?.typography?.fontFamily,
				)}
			>
				{label}
			</div>
			<div css={dividerTokens?.lineStyle} />
		</div>
	);
};

export default Divider;
