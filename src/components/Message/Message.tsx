import { FC, SyntheticEvent, useMemo } from "react";
import { Snackbar, Alert, AlertColor, useTheme } from "@mui/material";

/* Props for Message component - only these attributes to be allowed */
export interface Props {
	message: string;
	variant?: "Error" | "Success" | "Warning" | "Information";
	onClose?(open: boolean): any;
	open: boolean;
}

export const Message: FC<Props> = ({
	message,
	variant = "Information",
	onClose,
	open,
}) => {
	const theme = useTheme() as any;
	const styles = theme?.message ?? {};

	const severity: AlertColor = useMemo(() => {
		switch (variant) {
			case "Error":
				return "error";
			case "Success":
				return "success";
			case "Warning":
				return "warning";
			case "Information":
			default:
				return "info";
		}
	}, [variant]);

	const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		if (onClose) onClose(false);
	};

	const lines = useMemo(() => {
		return (message || "").split(/\r?\n/).filter((line) => line.length > 0);
	}, [message]);

	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			css={styles.snackbar}
		>
			<Alert
				onClose={handleClose}
				variant="filled"
				severity={severity}
				elevation={6}
				data-severity={severity}
				data-multiline={lines.length > 1}
				css={styles.alert}
			>
				{lines.map((value, index) => (
					<div key={`msg_${index}`} className="message-line">
						{value}
					</div>
				))}
			</Alert>
		</Snackbar>
	);
};

export default Message;
