import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { View } from "react-native";
import { HStack, LabelSmall } from "../../../src/components";
import { IOColors } from "../../../src/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/HStack",
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
  component: HStack,
  parameters: {
    // Optional parameter to center the component in the CanHas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    space: 16,
    children: (
      <React.Fragment>
        {[...Array(3)].map((_el, i) => (
          <View
            key={`block-${i}`}
            style={{
              height: 100,
              width: 32,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: IOColors["grey-700"]
            }}
          >
            <LabelSmall weight="Regular" color={"grey-200"}>{`${
              i + 1
            }`}</LabelSmall>
          </View>
        ))}
        <View
          style={{
            height: 100,
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            backgroundColor: IOColors["grey-700"]
          }}
        >
          <LabelSmall weight="Regular" color={"grey-200"}>
            Growing width
          </LabelSmall>
        </View>
      </React.Fragment>
    )
  }
};
