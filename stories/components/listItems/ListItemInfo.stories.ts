import type { Meta, StoryObj } from "@storybook/react";

import { ListItemInfo } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/List Items/ListItemInfo",
  component: ListItemInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    accessibilityLabel: "Tap to trigger test alert"
  }
};

export const WithBadge: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    endElement: {
      type: "badge",
      componentProps: {
        text: "Badge",
        variant: "info"
      }
    },
    accessibilityLabel: "Tap to trigger test alert"
  }
};

export const WithIconButton: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    endElement: {
      type: "iconButton",
      componentProps: {
        icon: "info",
        accessibilityLabel: "Tap to trigger test alert",
        onPress: () => void 0
      }
    },
    accessibilityLabel: "Tap to trigger test alert"
  }
};

export const WithButtonLink: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    endElement: {
      type: "buttonLink",
      componentProps: {
        label: "Button Link",
        accessibilityLabel: "Tap to trigger test alert",
        onPress: () => void 0
      }
    },
    accessibilityLabel: "Tap to trigger test alert"
  }
};
