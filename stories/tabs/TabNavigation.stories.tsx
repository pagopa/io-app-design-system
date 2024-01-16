import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabItem, TabNavigation } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Tabs/TabNavigation",
  component: TabNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof TabNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      <TabItem key={0} {...{ label: "Tab 1", accessibilityLabel: "Tab 1" }} />,
      <TabItem key={1} {...{ label: "Tab 2", accessibilityLabel: "Tab 2" }} />,
      <TabItem key={2} {...{ label: "Tab 3", accessibilityLabel: "Tab 3" }} />
    ]
  }
};
