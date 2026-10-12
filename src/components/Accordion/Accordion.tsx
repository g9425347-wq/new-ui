import { ReactNode, useState, MouseEvent } from "react";
import {
	Accordion as MuiAccordion,
	AccordionSummary as MuiAccordionSummary,
	AccordionDetails as MuiAccordionDetails,
	Box,
	IconButton,
	useTheme,
} from "@mui/material";
import { Icon } from "../Icon/Icon";
import { Typography } from "../Typography/Typography";
import { ToolTip } from "../ToolTip/ToolTip";
import { Dialog } from "../Dialog/Dialog";
import { LOADER_GIF } from "./loaderGif";

export interface AccordionProps {
	summary: string;
	details: NonNullable<ReactNode>;
	fullScreenDetails?: ReactNode;
	defaultExpanded?: boolean;
	disabled?: boolean;
	errorMessage?: string;
	loading?: boolean;
	fullscreenOption?: boolean;
	logoUrl?: string;
	number?: number;
	numberFormat?: string;
	onCancelClick?(): void;
	onExpand?(): void;
	onFullScreen?(): void;
}


export const Accordion = ({
	summary,
	details,
	fullScreenDetails,
	defaultExpanded = false,
	disabled = false,
	errorMessage = "",
	loading = false,
	fullscreenOption = false,
	logoUrl,
	number,
	numberFormat,
	onCancelClick,
	onExpand,
	onFullScreen,
}: AccordionProps) => {
	const theme = useTheme() as any;
	const accordion = theme.palette.accordion;

	const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
	const [loadingCanceled, setLoadingCanceled] = useState<boolean>(false);
	const [fullScreen, setFullScreen] = useState<boolean>(false);

	const isAccordionDisabled =
		disabled || loadingCanceled || Boolean(errorMessage);

	const handleToggle = () => {
		setExpanded((prev) => {
			const nextState = !prev;
			if (nextState && onExpand) {
				onExpand();
			}
			return nextState;
		});
	};

	const handleCancelLoading = (e: MouseEvent) => {
		e.stopPropagation();
		setLoadingCanceled(true);
		if (onCancelClick) onCancelClick();
	};

	const handleFullScreenOpen = (e: MouseEvent) => {
		e.stopPropagation();
		setExpanded(false);
		setFullScreen(true);
		if (onFullScreen) onFullScreen();
	};

	// Shared style for the header icon buttons
	const iconButtonSx = (hoverBg: string, hoverColor: string) => ({
		color: accordion.textSecondary,
		borderRadius: accordion.iconButtonRadius,
		"&:hover": { backgroundColor: hoverBg, color: hoverColor },
	});

	return (
		<Box sx={{ width: "100%" }}>
			{fullScreen ? (
				<Dialog
					fullScreen
					closeHandler={() => setFullScreen(false)}
					logoUrl={logoUrl}
					header={summary}
					padding={true}
				>
					{fullScreenDetails ?? details}
				</Dialog>
			) : (
				<MuiAccordion
					disabled={isAccordionDisabled}
					disableGutters
					expanded={expanded}
					onChange={handleToggle}
					sx={{
						backgroundColor: accordion.surfaceBg,
						border: `1px solid ${accordion.borderColor}`,
						borderRadius: accordion.borderRadius,
						overflow: "hidden",
						boxShadow: accordion.shadow,
						transition: accordion.containerTransition,
						"&:before": {
							display: "none",
						},
						"&:hover": {
							borderColor: accordion.borderHoverColor,
							boxShadow: accordion.shadowHover,
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: "100%",
							minHeight: accordion.headerMinHeight,
							backgroundColor: expanded
								? accordion.headerExpandedBg
								: accordion.surfaceBg,
							borderBottom: expanded
								? `1px solid ${accordion.borderColor}`
								: "none",
							transition: accordion.headerTransition,
						}}
					>
						{/* Loading Indicator */}
						{loading && !loadingCanceled && (
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									px: accordion.loaderPaddingX,
								}}
							>
								<img
									src={LOADER_GIF}
									alt="Loading indicator"
									width={accordion.loaderSize}
									height={accordion.loaderSize}
									style={{ filter: accordion.loaderFilter }}
								/>
							</Box>
						)}

						{/* Optional Badge / Counter */}
						{number !== undefined && number >= 0 && (
							<Box
								sx={{
									px: accordion.badgePaddingX,
									py: accordion.badgePaddingY,
									borderRadius: accordion.badgeRadius,
									color: accordion.textPrimary,
									backgroundColor: accordion.badgeBg,
									border: `1px solid ${accordion.badgeBorder}`,
									ml: 1.5,
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography variant="caption">
									{new Intl.NumberFormat(numberFormat).format(
										number,
									)}
								</Typography>
							</Box>
						)}

						{/* Main Title & Error */}
						<MuiAccordionSummary
							sx={{
								flexGrow: 1,
								width: "auto",
								cursor: "pointer",
								minHeight: accordion.headerMinHeight,
								"&.Mui-expanded": {
									minHeight: accordion.headerMinHeight,
								},
								"& .MuiAccordionSummary-content": {
									display: "flex",
									alignItems: "center",
									gap: 1.5,
									m: 0,
								},
								"&:hover": {
									backgroundColor: accordion.headerHoverBg,
								},
							}}
						>
							<Typography
								fontSize={accordion.titleFontSize}
								textTransform="none"
								lineHeight={accordion.titleLineHeight}
								sx={{
									color: accordion.textPrimary,
										fontWeight: accordion.titleFontWeight,
								}}
							>
								{summary}
							</Typography>

							{errorMessage && (
								<Typography
									fontSize={accordion.errorFontSize}
									textTransform="none"
									lineHeight={accordion.titleLineHeight}
									sx={{
										color: accordion.errorColor,
										fontWeight: accordion.errorFontWeight,
									}}
								>
									{errorMessage}
								</Typography>
							)}
						</MuiAccordionSummary>

						{/* Action Controls */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								pr: 1.5,
								gap: 0.5,
							}}
						>
							{!loading && fullscreenOption && (
								<ToolTip title="Full screen">
									<IconButton
										size="small"
										onClick={handleFullScreenOpen}
										aria-label="Expand to full screen"
										sx={iconButtonSx(accordion.iconHoverBg, accordion.textPrimary)}
									>
										<Icon
											name="full-screen"
											fontSize="medium"
										/>
									</IconButton>
								</ToolTip>
							)}

							{loading && !loadingCanceled && (
								<ToolTip title="Cancel loading">
									<IconButton
										size="small"
										onClick={handleCancelLoading}
										aria-label="Cancel loading"
										sx={iconButtonSx(accordion.cancelHoverBg, accordion.errorColor)}
									>
										<Icon name="close" fontSize="small" />
									</IconButton>
								</ToolTip>
							)}

							<IconButton
								size="small"
								onClick={handleToggle}
								aria-label={
									expanded
										? "Collapse section"
										: "Expand section"
								}
								sx={{
									...iconButtonSx(accordion.iconHoverBg, accordion.textPrimary),
									transform: expanded
										? "rotate(180deg)"
										: "rotate(0deg)",
									transition: accordion.iconTransition,
								}}
							>
								<Icon name="arrow-drop-down" fontSize="small" />
							</IconButton>
						</Box>
					</Box>

					<MuiAccordionDetails
						sx={{
							backgroundColor: accordion.surfaceBg,
							color: accordion.textPrimary,
							overflow: "auto",
							padding: accordion.detailsPadding,
							borderTop: "0",
						}}
					>
						{details}
					</MuiAccordionDetails>
				</MuiAccordion>
			)}
		</Box>
	);
};

export default Accordion;
