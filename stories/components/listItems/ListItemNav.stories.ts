import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "@storybook/addon-actions";

import { ListItemNav } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

const meta = {
  title: "Components/List Items/ListItemNav",
  component: ListItemNav,
  parameters: {
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  tags: ["autodocs"],
  args: {
    onPress: () => action("onPress")
  }
} satisfies Meta<typeof ListItemNav>;

export default meta;
type Story = StoryObj<typeof meta>;

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
