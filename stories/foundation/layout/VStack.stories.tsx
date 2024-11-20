import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { View } from "react-native";
import { BodySmall, VStack } from "../../../src/components";
import { IOColors } from "../../../src/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/VStack",
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
  component: VStack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof VStack>;

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
              height: 32,
              width: 320,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: IOColors["grey-700"]
            }}
          >
            <BodySmall weight="Regular" color={"grey-200"}>{`Block n.${
              i + 1
            }`}</BodySmall>
          </View>
        ))}
        <View
          style={{
            height: 96,
            width: 320,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: IOColors["grey-700"]
          }}
        >
          <BodySmall weight="Regular" color={"grey-200"}>
            Different height
          </BodySmall>
        </View>
      </React.Fragment>
    )
  }
};
