// Banner tokens (theme.palette.banner)
const shared = {
	gap: "12px",
	outerGap: "16px",
	minHeight: "44px",
	padding: "8px 20px",
	transition: "background-color 0.2s ease, border-color 0.2s ease",
};

export const bannerTheme = {
	light: {
		...shared,
		background: "#ffffff",
		borderColor: "#eeeeee",
		textColor: "#000000",
	},
	dark: {
		...shared,
		background: "#121212",
		borderColor: "#424242",
		textColor: "#ffffff",
	},
};
