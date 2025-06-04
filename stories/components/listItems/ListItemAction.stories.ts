import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "@storybook/addon-actions";

import { ListItemAction } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

const meta = {
  decorators: [withTheme, withMaxWitdth],
  title: "Components/List Items/ListItemAction",
  component: ListItemAction,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: "List Item action",
    variant: "primary",
    accessibilityLabel: "Tap to trigger test alert",
    onPress: () => action("onPress")
  }
};
