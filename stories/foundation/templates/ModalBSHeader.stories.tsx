import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { View } from "react-native";
import { H3, HSpacer, Icon, ModalBSHeader } from "../../../src/components";
import { withMaxWitdth, withSafeAreaProvider } from "../../utils";
import { IOStyles } from "../../../src/core";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Templates/ModalBSHeader",
  component: ModalBSHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  decorators: [withMaxWitdth, withSafeAreaProvider],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ModalBSHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    title: "A Modal Header",
    closeAccessibilityLabel: "Close"
  }
};

export const ReactNodeTitle: Story = {
  args: {
    title: (
      <View style={[IOStyles.row, { alignItems: "center" }, IOStyles.flex]}>
        <Icon name="attachment" size={16} />
        <HSpacer size={16} />
        <H3 style={IOStyles.flex} testID={"discount-name"}>
          {"Sample Value"}
        </H3>
      </View>
    ),
    closeAccessibilityLabel: "Close"
  }
};
