import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";

import { ImageSourcePropType } from "react-native";
import { ModuleIDP } from "../../components";
import { IOThemeContext, IOThemes } from "../..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "IO-App Design System/Atoms/Modules/ModuleIDP",
  component: ModuleIDP,
  decorators: [
    Story => (
      <IOThemeContext.Provider value={IOThemes.dark}>
        <div style={{ width: "300px" }}>
          <Story />
        </div>
      </IOThemeContext.Provider>
    )
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ModuleIDP>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    logo: "https://assets.cdn.io.italia.it/spid/idps/spid-idp-posteid.png" as ImageSourcePropType,
    name: "POSTE ID",
    accessibilityLabel: "Tap to trigger test alert",
    localLogo: 0,
    onPress: e => {
      action("clicked")(e);
    }
  }
};
