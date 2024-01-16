import type { Meta, StoryObj } from "@storybook/react";

import { ListItemSwitch } from "../../src/components";
import { withTheme } from "../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/List Items/ListItemSwitch",
  component: ListItemSwitch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  decorators: [withTheme],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Active: Story = {
  args: {
    label: "List Item Checkbox",
    description: "This is a list item checkbox"
  }
};

export const Disabled: Story = {
  args: {
    label: "List Item Checkbox",
    value: true,
    disabled: true,
    description: "This is a list item checkbox"
  }
};
