import { FC, ReactNode } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from "@mui/material/styles";
import { ThemeProvider as EThemeProivder } from "@emotion/react";
import IconProvider from "../IconProvider/IconProvider";

/* Props for ThemeProvider component - only these attributes to be allowed */
export interface ThemeProviderProps {
	theme: any;
	children: ReactNode;
}

/**
 * Theme provider component injects Theme providers (MUI and EMOtion)
 * Injects Icon provider, which injects the icons to the project. Only with this we will be able to show any icons within the UI project
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
	const muiTheme = createTheme({
		palette: {
			mode: theme.palette.mode,
		},
	});

	return (
		<MuiThemeProvider theme={muiTheme}>
			<CssBaseline />
			<EThemeProivder theme={theme}>
				<IconProvider />
				<StyledEngineProvider injectFirst>
					{children}
				</StyledEngineProvider>
			</EThemeProivder>
		</MuiThemeProvider>
	);
};
