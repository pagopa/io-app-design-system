import type { Meta, StoryObj } from "@storybook/react";

import { ListItemAction } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  decorators: [withTheme, withMaxWitdth],
  title: "Components/List Items/ListItemAction",
  component: ListItemAction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemAction>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    label: "List Item action",
    variant: "primary",
    accessibilityLabel: "Tap to trigger test alert"
  }
};
