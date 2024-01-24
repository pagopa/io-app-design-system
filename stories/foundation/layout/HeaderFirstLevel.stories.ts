import type { Meta, StoryObj } from "@storybook/react";

import { HeaderFirstLevel } from "../../../src/components";
import { withMaxWitdth, withSafeAreaProvider } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/Screen/HeaderFirstLevel",
  component: HeaderFirstLevel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  decorators: [withMaxWitdth, withSafeAreaProvider],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof HeaderFirstLevel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Wallet: Story = {
  args: {
    title: "Portafoglio",
    type: "twoActions",
    backgroundColor: "dark",
    firstAction: {
      icon: "help",
      accessibilityLabel: "Help",
      onPress: () => alert("First Action")
    },
    secondAction: {
      icon: "add",
      onPress: () => alert("Second Action"),
      accessibilityLabel: "Add"
    }
  }
};

export const Messages: Story = {
  args: {
    title: "Messaggi",
    type: "twoActions",
    firstAction: {
      icon: "help",
      accessibilityLabel: "Help",
      onPress: () => alert("First Action")
    },
    secondAction: {
      icon: "search",
      onPress: () => alert("Second Action"),
      accessibilityLabel: "search"
    }
  }
};
