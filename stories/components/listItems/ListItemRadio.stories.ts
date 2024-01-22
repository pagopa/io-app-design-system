import type { Meta, StoryObj } from "@storybook/react";
import { ListItemRadio } from "../../../src/components";
import { withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/List Items/ListItemRadio",
  component: ListItemRadio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  decorators: [withTheme],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Active: Story = {
  args: {
    value: "List Item Checkbox",
    selected: true,
    description: "This is a list item checkbox",
    accessibilityLabel: "Tap to trigger test alert"
  }
};

export const Disabled: Story = {
  args: {
    value: "List Item Checkbox",
    selected: true,
    disabled: true,
    description: "This is a list item checkbox",
    accessibilityLabel: "Tap to trigger test alert"
  }
};
