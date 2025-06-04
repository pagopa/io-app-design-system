import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { ListItemInfoCopy } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

const meta = {
  title: "Components/List Items/ListItemInfoCopy",
  component: ListItemInfoCopy,
  parameters: {
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  tags: ["autodocs"]
} satisfies Meta<typeof ListItemInfoCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "List Item Info",
    label: "This is a list item info",
    accessibilityLabel: "Tap to trigger test alert",
    onPress: () => action("onPress")
  }
};
