import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ButtonSolid } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Buttons/ButtonSolid",
  component: ButtonSolid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ButtonSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    accessibilityLabel: "Tap to trigger test alert",
    label: "Primary button",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
export const Danger: Story = {
  args: {
    color: "danger",
    accessibilityLabel: "Tap to trigger test alert",
    label: "Danger button",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
export const Contrast: Story = {
  args: {
    color: "contrast",
    accessibilityLabel: "Tap to trigger test alert",
    label: "Contrast button",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
