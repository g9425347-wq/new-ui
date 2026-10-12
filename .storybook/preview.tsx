import type { Preview, StoryFn } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider, CssBaseline } from '@mui/material';

import '@fontsource/montserrat'
import '@fontsource/material-icons'
import { ThemeProvider as UIThemeProvider } from '../src/components/ThemeProvider/ThemeProvider'
/* TODO: update import for your custom theme configurations */
import LightTheme from '../src/themes/LightTheme'
import DarkTheme from '../src/themes/DarkTheme'
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: LightTheme,
        dark: DarkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline
    }),
    (Story: StoryFn, context) => {
      const { theme } = context.globals
      return <UIThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}><Story /></UIThemeProvider>
    }
  ]
};

export default preview;
