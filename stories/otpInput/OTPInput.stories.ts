import type { Meta, StoryObj } from "@storybook/react";
import { OTPInput } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "IO-App Design System/Components/OTPInput/OTPInput",
  component: OTPInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {
    length: 8,
    onValidate: v => v === "12345678",
    value: ""
  }
};

export const Filled: Story = {
  args: {
    length: 8,
    value: "123456"
  }
};

export const FilledSecret: Story = {
  args: {
    length: 8,
    value: "1234",
    secret: true
  }
};
