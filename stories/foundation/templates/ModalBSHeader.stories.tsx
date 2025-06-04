import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";
import React from "react";

import { View } from "react-native";
import { H3, HSpacer, Icon, ModalBSHeader } from "../../../src/components";
import { withMaxWitdth, withSafeAreaProvider } from "../../utils";

const meta = {
  title: "Foundation/Templates/ModalBSHeader",
  component: ModalBSHeader,
  parameters: {
    layout: "centered"
  },
  decorators: [withMaxWitdth, withSafeAreaProvider],
  tags: ["autodocs"],
  args: {
    onClose: () => action("onClose")
  }
} satisfies Meta<typeof ModalBSHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    title: "A Modal Header",
    closeAccessibilityLabel: "Close"
  }
};

export const ReactNodeTitle: Story = {
  args: {
    title: (
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Icon name="attachment" size={16} />
        <HSpacer size={16} />
        <H3 style={{ flex: 1 }} testID={"discount-name"}>
          {"Sample Value"}
        </H3>
      </View>
    ),
    closeAccessibilityLabel: "Close"
  }
};
