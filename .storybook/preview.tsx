import React from "react";
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
