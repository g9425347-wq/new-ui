import type { StorybookConfig } from "@storybook/react-vite";
import type { InlineConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config: InlineConfig) {
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        ...(config.optimizeDeps?.include ?? []),
        'cytoscape',
        'react-cytoscapejs',
        'cytoscape-fcose',
      ],
    };
    return config;
  },
};
export default config;
