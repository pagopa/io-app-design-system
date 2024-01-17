import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "react-native";
import { Caption } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Typography/Caption",
  component: Caption,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    actions: { argTypesRegex: "^on.*" }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    accessibilityLabel: "Tap to trigger test alert",
    onPress: () => Alert.alert("Alert", "Action triggered"),
    children: "Hello World"
  }
};
