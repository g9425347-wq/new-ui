import { FC } from "react";
import { Dialog, DialogActions, DialogTitle, useTheme } from "@mui/material";
import { Button } from "../Button/Button";

/* Props for Confirm component - only these attributes to be allowed */
export interface Props {
	open: boolean;
	label?: string;
	onClickYes?: any;
	onClickCancel?: any;
}

// Confirm Component
export const Confirm: FC<Props> = ({
	open = true,
	label,
	onClickYes,
	onClickCancel,
}) => {
	const theme = useTheme() as any;
	const dialogTokens = theme?.palette?.confirm;

	return (
		<div>
			<Dialog
				open={open}
				onClose={onClickCancel}
				css={dialogTokens?.dialogPaperStyle}
			>
				<DialogTitle
					css={dialogTokens?.titleStyle?.(
						theme?.typography?.fontFamily,
					)}
				>
					{label}
				</DialogTitle>
				<DialogActions css={dialogTokens?.actionsStyle}>
					<Button onClick={onClickCancel} size="medium">
						Cancel
					</Button>
					<Button onClick={onClickYes} type="submit" size="medium">
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Confirm;
