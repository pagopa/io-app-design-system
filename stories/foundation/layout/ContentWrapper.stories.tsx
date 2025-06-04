import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { View } from "react-native";
import { Body, ContentWrapper } from "../../../src/components";
import { IOColors } from "../../../src/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/ContentWrapper",
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
  component: ContentWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ContentWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    children: (
      <View
        style={{
          padding: 16,
          backgroundColor: IOColors["grey-700"]
        }}
      >
        <Body color={"grey-200"}>Content example</Body>
      </View>
    )
  }
};
