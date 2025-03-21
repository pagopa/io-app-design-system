import type { Meta, StoryObj } from "@storybook/react";
import { withMaxWitdth } from "../../utils";
import { NumberPad } from "../../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/NumberPad/NumberPad",
  component: NumberPad,
  decorators: [withMaxWitdth],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof NumberPad>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    deleteAccessibilityLabel: "Delete",
    variant: "neutral"
  }
};
