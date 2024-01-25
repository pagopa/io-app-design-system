import type { Meta, StoryObj } from "@storybook/react";

import { ListItemInfoCopy } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/List Items/ListItemInfoCopy",
  component: ListItemInfoCopy,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemInfoCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    accessibilityLabel: "Tap to trigger test alert"
  }
};
