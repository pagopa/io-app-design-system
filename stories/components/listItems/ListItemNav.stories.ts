import type { Meta, StoryObj } from "@storybook/react";

import { ListItemNav } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/List Items/ListItemNav",
  component: ListItemNav,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    value: "List Item Nav",
    description: "This is a list item Nav",
    accessibilityLabel: "Tap to trigger test alert"
  }
};

export const WithBadge: Story = {
  args: {
    value: "List Item Nav",
    description: "This is a list item Nav",
    accessibilityLabel: "Tap to trigger test alert",
    topElement: {
      badgeProps: {
        text: "Badge",
        variant: "default"
      }
    }
  }
};

export const WithDate: Story = {
  args: {
    value: "List Item Nav",
    description: "This is a list item Nav",
    accessibilityLabel: "Tap to trigger test alert",
    topElement: {
      dateValue: "01/01/2024"
    }
  }
};
