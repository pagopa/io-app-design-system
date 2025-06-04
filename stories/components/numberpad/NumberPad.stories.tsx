import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "@storybook/addon-actions";

import { withMaxWitdth } from "../../utils";
import { NumberPad } from "../../../src/components";

const meta = {
  title: "Components/NumberPad/NumberPad",
  component: NumberPad,
  decorators: [withMaxWitdth],
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NumberPad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    deleteAccessibilityLabel: "Delete",
    variant: "neutral",
    onNumberPress: () => action("onNumberPress"),
    onDeletePress: () => action("onDeletePress")
  }
};
