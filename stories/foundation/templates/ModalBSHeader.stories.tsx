import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { View } from "react-native";
import { H3, HSpacer, Icon, ModalBSHeader } from "../../../src/components";
import { withMaxWitdth, withSafeAreaProvider } from "../../utils";
import { IOStyles } from "../../../src/core";

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
