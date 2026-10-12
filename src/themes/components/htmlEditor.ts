// HtmlEditor tokens (theme.palette.htmlEditor)
const fontFamily =
	"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

type Colors = {
	bgEditor: string;
	bgToolbar: string;
	bgBtnHover: string;
	bgBtnActive: string;
	bgDropActive: string;
	border: string;
	borderHover: string;
	borderFocus: string;
	textPrimary: string;
	textSecondary: string;
	textMuted: string;
	accent: string;
	focusRing: string;
	codeBg: string;
	codeText: string;
	shadow: string;
};

const build = (p: Colors) => ({
	container: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "6px",
		fontFamily: `${fontFamily} !important`,
	},
	labelContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 2px",
	},
	label: {
		fontSize: "13px",
		fontWeight: 600,
		color: p.textPrimary,
		letterSpacing: "0.01em",
	},
	editorContainer: {
		width: "100%",
		borderRadius: "12px",
		backgroundColor: p.bgEditor,
		border: `1px solid ${p.border}`,
		boxShadow: p.shadow,
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		transition:
			"border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
	},
	editorContainerHover: { borderColor: p.borderHover },
	editorContainerDragging: {
		borderColor: p.borderFocus,
		boxShadow: `0 0 0 3px ${p.focusRing}`,
	},
	editorContainerFocus: {
		borderColor: `${p.borderFocus} !important`,
		boxShadow: `0 0 0 3px ${p.focusRing} !important`,
	},
	disabled: { pointerEvents: "none", opacity: 0.6 },
	editor: {
		border: "none !important",
		borderRadius: "0 !important",
		backgroundColor: "transparent !important",
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
	toolbar: {
		backgroundColor: `${p.bgToolbar} !important`,
		borderBottom: `1px solid ${p.border} !important`,
		padding: "6px 10px !important",
		gap: "4px",
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
	},
	toolbarButton: {
		color: `${p.textSecondary} !important`,
		borderRadius: "6px !important",
		padding: "5px !important",
		minWidth: "28px",
		height: "28px",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 0.15s ease !important",
	},
	toolbarButtonHover: {
		backgroundColor: `${p.bgBtnHover} !important`,
		color: `${p.textPrimary} !important`,
	},
	toolbarButtonActive: {
		backgroundColor: `${p.bgBtnActive} !important`,
		color: `${p.accent} !important`,
	},
	separator: {
		borderLeft: `1px solid ${p.border} !important`,
		height: "16px !important",
		margin: "0 4px !important",
	},
	content: {
		padding: "16px 18px !important",
		backgroundColor: `${p.bgEditor} !important`,
		color: `${p.textPrimary} !important`,
		fontFamily: "inherit !important",
		fontSize: "13.5px !important",
		lineHeight: "1.65 !important",
		outline: "none !important",
		transition: "background-color 0.15s ease",
	},
	contentDragging: { backgroundColor: `${p.bgDropActive} !important` },
	paragraph: { margin: "0 0 10px 0" },
	blockquote: {
		borderLeft: `3px solid ${p.accent}`,
		margin: "12px 0",
		paddingLeft: "12px",
		color: p.textSecondary,
	},
	htmlSource: {
		fontFamily:
			"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace !important",
		backgroundColor: `${p.codeBg} !important`,
		color: `${p.codeText} !important`,
		padding: "16px 18px !important",
		fontSize: "12.5px !important",
		lineHeight: "1.6 !important",
		border: "none !important",
		outline: "none !important",
		resize: "vertical",
	},
	footer: {
		backgroundColor: p.bgToolbar,
		borderTop: `1px solid ${p.border}`,
		padding: "6px 14px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: "11.5px",
		color: p.textMuted,
		userSelect: "none",
	},
	footerStats: { display: "flex", alignItems: "center", gap: "12px" },
	footerSeparator: {
		width: "3px",
		height: "3px",
		borderRadius: "50%",
		backgroundColor: p.border,
	},
});

export const htmlEditorTheme = {
	light: build({
		bgEditor: "#ffffff",
		bgToolbar: "#f8fafc",
		bgBtnHover: "#f1f5f9",
		bgBtnActive: "#E0F2FE7D",
		bgDropActive: "#f0f9ff",
		border: "#e2e8f0",
		borderHover: "#cbd5e1",
		borderFocus: "#0284c7",
		textPrimary: "#0f172a",
		textSecondary: "#64748b",
		textMuted: "#94a3b8",
		accent: "#0284c7",
		focusRing: "rgba(2, 132, 199, 0.15)",
		codeBg: "#0f172a",
		codeText: "#38bdf8",
		shadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
	}),
	dark: build({
		bgEditor: "#1e1e1e",
		bgToolbar: "#141414",
		bgBtnHover: "rgba(255, 255, 255, 0.08)",
		bgBtnActive: "rgba(52, 119, 199, 0.22)",
		bgDropActive: "rgba(52, 119, 199, 0.08)",
		border: "#373737",
		borderHover: "#555555",
		borderFocus: "#3477C7",
		textPrimary: "#ffffff",
		textSecondary: "#9ca3af",
		textMuted: "#6b7280",
		accent: "#3477C7",
		focusRing: "rgba(52, 119, 199, 0.22)",
		codeBg: "#0d1117",
		codeText: "#58a6ff",
		shadow: "0 1px 3px rgba(0, 0, 0, 0.45)",
	}),
};
