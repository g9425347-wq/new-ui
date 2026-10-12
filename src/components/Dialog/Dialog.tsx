import React, { FC, ReactNode, useMemo } from "react";
import {
	Dialog as MuiDialog,
	DialogContent,
	DialogActions,
	Toolbar,
	AppBar,
	Paper,
	PaperProps,
	IconButton,
	Box,
	useTheme,
} from "@mui/material";
import Draggable from "react-draggable";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

/* Props for Dialog component */
export interface DialogProps {
	children: ReactNode;
	open?: boolean;
	headerSection?: boolean;
	subHeaderSection?: boolean;
	fullScreen?: boolean;
	logoUrl?: string;
	padding?: boolean;
	description?: string;
	header?: string;
	subHeader?: string;
	icon?: any;
	submitButtonLabel?: string;
	cancelButtonLabel?: string;
	size?: "Small" | "Medium" | "large";
	disabled?: boolean;
	onSubmit?(event: React.MouseEvent<HTMLButtonElement>): void;
	closeHandler?(
		event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>,
	): any;
}

// Stable Draggable Paper wrapper with safety boundaries
const DraggablePaper = (props: PaperProps) => {
	return (
		<Draggable
			handle="#draggable-dialog-handle"
			cancel={
				'[class*="MuiDialogContent-root"], [class*="MuiDialogActions-root"], button, input, textarea, select'
			}
		>
			<Paper {...props} />
		</Draggable>
	);
};

export const Dialog: FC<DialogProps> = ({
	children,
	closeHandler,
	header,
	subHeader,
	headerSection = true,
	subHeaderSection = false,
	fullScreen = false,
	logoUrl,
	padding = true,
	description,
	open = true,
	size = "Medium",
	icon,
	submitButtonLabel,
	cancelButtonLabel,
	disabled = false,
	onSubmit,
}) => {
	const theme = useTheme() as any;
	const dialogTokens = theme?.palette?.dialog;

	const maxWidth = useMemo(() => {
		if (size === "Small") return "xs";
		if (size === "large") return "lg";
		return "md";
	}, [size]);

	return (
		<MuiDialog
			fullScreen={fullScreen}
			maxWidth={maxWidth}
			open={open}
			onClose={closeHandler}
			PaperComponent={fullScreen ? Paper : DraggablePaper}
			css={dialogTokens?.paperStyle?.(
				fullScreen,
				theme?.typography?.fontFamily,
			)}
		>
			{headerSection && (
				<AppBar css={dialogTokens?.appBarStyle}>
					<Toolbar
						id="draggable-dialog-handle"
						css={dialogTokens?.toolbarStyle?.(fullScreen)}
					>
						<Box sx={dialogTokens?.headerBoxStyle}>
							<Typography
								sx={{ flex: 1 }}
								css={dialogTokens?.titleStyle}
							>
								{header}
							</Typography>

							{fullScreen && logoUrl && (
								<Box
									component="div"
									sx={dialogTokens?.logoStyle?.(logoUrl)}
								/>
							)}

							<IconButton
								size="small"
								aria-label="Close dialog"
								onClick={closeHandler}
								disabled={disabled}
								sx={dialogTokens?.closeBtnStyle?.(
									dialogTokens?.textSecondary,
									dialogTokens?.accentHover,
									dialogTokens?.accent,
								)}
							>
								<Icon name="close" fontSize="small" />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			)}

			{subHeaderSection && (
				<Box
					sx={dialogTokens?.subHeaderContainerStyle?.(
						dialogTokens?.bgSubHeader,
						dialogTokens?.border,
					)}
				>
					{icon && (
						<Box
							sx={dialogTokens?.subHeaderIconWrapperStyle?.(
								dialogTokens?.accentBadge,
								dialogTokens?.accent,
							)}
						>
							<Icon
								name={icon}
								fontSize="medium"
								color="inherit"
							/>
						</Box>
					)}
					<Box sx={dialogTokens?.subHeaderContentStyle}>
						{subHeader && (
							<Typography
								component="span"
								sx={dialogTokens?.subHeaderTitleStyle?.(
									dialogTokens?.textPrimary,
								)}
							>
								{subHeader}
							</Typography>
						)}
						{description && (
							<Typography
								component="span"
								sx={dialogTokens?.subHeaderDescriptionStyle?.(
									dialogTokens?.textSecondary,
								)}
							>
								{description}
							</Typography>
						)}
					</Box>
				</Box>
			)}

			<DialogContent
				sx={dialogTokens?.contentStyle?.(
					padding,
					dialogTokens?.bgCard,
					dialogTokens?.textPrimary,
				)}
			>
				{children}
			</DialogContent>

			{(submitButtonLabel || cancelButtonLabel) && (
				<DialogActions
					sx={dialogTokens?.actionsStyle?.(
						dialogTokens?.border,
						dialogTokens?.bgCard,
					)}
				>
					{cancelButtonLabel && (
						<Button
							type="button"
							size="medium"
							disabled={disabled}
							onClick={closeHandler}
						>
							{cancelButtonLabel}
						</Button>
					)}
					{submitButtonLabel && (
						<Button
							type="submit"
							size="medium"
							disabled={disabled}
							onClick={onSubmit}
						>
							{submitButtonLabel}
						</Button>
					)}
				</DialogActions>
			)}
		</MuiDialog>
	);
};

export default Dialog;
