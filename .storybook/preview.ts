import type { Preview } from "@storybook/react";
import { IOThemeLight, IOThemeDark } from "../src/core";
import { withEperimentalDs } from "../stories/utils";
import { EXPERIMENTAL_DS_PARAM_KEY } from "../stories/addons/ExperimentalDsToggle";

const preview: Preview = {
  decorators: [withEperimentalDs],
  globals: {
    [EXPERIMENTAL_DS_PARAM_KEY]: false
  },
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
