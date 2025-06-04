import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { IconButtonSolid } from "../../../src/components";
import { withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Buttons/IconButtonSolid",
  component: IconButtonSolid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withTheme]
} satisfies Meta<typeof IconButtonSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    icon: "add",
    accessibilityLabel: "Tap to trigger test alert",
    onPress: e => {
      action("clicked")(e);
    }
  }
};

export const Contrast: Story = {
  args: {
    color: "contrast",
    icon: "add",
    accessibilityLabel: "Tap to trigger test alert",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
