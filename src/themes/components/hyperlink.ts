// Hyperlink tokens (theme.palette.hyperlink)
const shared = {
	container: {
		display: "inline-flex",
		alignItems: "center",
		textDecoration: "none",
		borderRadius: "3px",
		transition: "all 0.15s ease",
		outline: "none",
	},
	enabled: { cursor: "pointer" },
	disabled: { cursor: "not-allowed !important" },
	hover: { cursor: "pointer", textDecoration: "underline" },
	disabledHover: { cursor: "not-allowed", textDecoration: "none" },
	disabledFocus: { boxShadow: "none" },
};

export const hyperlinkTheme = {
	light: {
		...shared,
		color: "#0284C7",
		colorHover: "#0369A1",
		colorDisabled: "#94A3B8",
		focus: { boxShadow: "0 0 0 2px rgba(2, 132, 199, 0.2)" },
	},
	dark: {
		...shared,
		color: "#70b5f9",
		colorHover: "#93c5fd",
		colorDisabled: "#666666",
		focus: { boxShadow: "0 0 0 2px rgba(52, 119, 199, 0.35)" },
	},
};
