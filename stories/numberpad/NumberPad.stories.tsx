import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { NumberPad } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "IO-App Design System/Components/NumberPad/NumberPad",
  component: NumberPad,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  render: function Render(args) {
    const [{ value }, updateargs] = useArgs();
    const onChange = (value: string) => {
      updateargs({ value });
    };
    return <NumberPad {...args} value={value} onValueChange={onChange} />;
  }
} satisfies Meta<typeof NumberPad>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    value: "",
    deleteAccessibilityLabel: "Delete",
    variant: "light"
  }
};
