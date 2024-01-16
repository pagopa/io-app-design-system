import type { Preview } from "@storybook/react";
import { IOThemeLight, IOThemeDark } from "../src/core";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Getting Started", ["Atoms", "Components"], "Changelog"]
      }
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: IOThemeLight["appBackground-primary"]
        },
        {
          name: "dark",
          value: IOThemeDark["appBackground-primary"]
        }
      ]
    },
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
