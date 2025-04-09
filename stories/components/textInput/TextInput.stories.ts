import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { TextInput } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

const meta = {
  title: "Components/Text Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "padded"
  },
  decorators: [withTheme, withMaxWitdth],
  tags: ["autodocs"],
  args: {
    onChangeText: () => action("onChangeText")
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    placeholder: "Input Placeholder",
    value: ""
  }
};

export const Disabled: Story = {
  args: {
    placeholder: "Input Placeholder (Disabled)",
    value: ""
  }
};
