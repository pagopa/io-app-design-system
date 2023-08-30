import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "react-native";
import { ButtonSolid } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/ButtonSolid",
  component: ButtonSolid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    actions: { argTypesRegex: "^on.*" }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: { onPress: { action: "clicked" } }
} satisfies Meta<typeof ButtonSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    accessibilityLabel: "Tap to trigger test alert",
    label: "Primary button",
    onPress: () => Alert.alert("Alert", "Action triggered")
  }
};
