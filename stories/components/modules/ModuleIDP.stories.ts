import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ModuleIDP } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Modules/ModuleIDP",
  component: ModuleIDP,
  decorators: [withMaxWitdth, withTheme],
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
    logo: {
      light: {
        uri: "https://assets.cdn.io.italia.it/spid/idps/spid-idp-posteid.png"
      }
    },
    name: "Poste ID",
    accessibilityLabel: "Tap to trigger test alert",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
