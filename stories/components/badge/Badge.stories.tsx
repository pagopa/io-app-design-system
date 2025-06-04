import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Badge } from "../../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Badge/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: "Novità",
    variant: "default"
  }
};

export const Warning: Story = {
  args: {
    text: "Attenzione",
    variant: "warning"
  }
};

export const Error: Story = {
  args: {
    text: "Attenzione",
    variant: "error"
  }
};

export const OutlineDefault: Story = {
  args: {
    text: "Novità",
    outline: true,
    variant: "default"
  }
};

export const OutlineWarning: Story = {
  args: {
    text: "Attenzione",
    outline: true,
    variant: "warning"
  }
};

export const OutlineError: Story = {
  args: {
    text: "Attenzione",
    outline: true,
    variant: "error"
  }
};
