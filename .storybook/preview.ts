import type { Preview } from "@storybook/react";
import { IOThemeLight, IOThemeDark } from "../src/core";
import { withEperimentalDs } from "../stories/utils";

const preview: Preview = {
  decorators: [withEperimentalDs],
  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          "Changelog",
          "Core",
          "Foundation",
          [
            "Typography",
            "Layout",
            "Icons",
            "Pictograms",
            "Logos",
            "Avatar",
            "LoadingSpinner",
            "ProgressLoader",
            "Templates",
            ["Screen", "ForceScrollDownView", "GradientScroll"]
          ],
          "Components",
          "Functions"
        ]
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
