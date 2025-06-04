import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";

import { OTPInput } from "../../../src/components";
import { withMaxWitdth } from "../../utils";

const meta = {
  title: "Components/OTPInput/OTPInput",
  decorators: [withMaxWitdth],
  component: OTPInput,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  args: {
    onValueChange: () => action("onValueChange")
  }
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    length: 8,
    accessibilityLabel: "OTP Input",
    onValidate: v => v === "12345678",
    value: ""
  }
};

export const Filled: Story = {
  args: {
    length: 8,
    accessibilityLabel: "OTP Input",
    value: "123456"
  }
};

export const FilledSecret: Story = {
  args: {
    length: 8,
    accessibilityLabel: "OTP Input",
    value: "1234",
    secret: true
  }
};
