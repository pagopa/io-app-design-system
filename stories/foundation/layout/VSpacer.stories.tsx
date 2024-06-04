import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { View } from "react-native";
import { VSpacer } from "../../../src/components";
import { IOColors } from "../../../src/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/VSpacer",
  decorators: [
    Story => (
      <View
        style={{
          backgroundColor: IOColors["grey-100"]
        }}
      >
        <Story />
      </View>
    )
  ],
  component: VSpacer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof VSpacer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {}
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ExtraWidth: Story = {
  args: {
    size: 40
  }
};
