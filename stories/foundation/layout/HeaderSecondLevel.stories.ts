import type { Meta, StoryObj } from "@storybook/react";

import { HeaderSecondLevel } from "../../../src/components";
import { withMaxWitdth, withSafeAreaProvider } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Layout/Screen/HeaderSecondLevel",
  component: HeaderSecondLevel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  decorators: [withMaxWitdth, withSafeAreaProvider],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof HeaderSecondLevel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    title: "Header Second Level",
    type: "base",
    goBack: () => alert("Go Back"),
    backAccessibilityLabel: "Go Back"
  }
};

export const SingleAction: Story = {
  args: {
    title: "Header Second Level",
    type: "singleAction",
    goBack: () => alert("Go Back"),
    backAccessibilityLabel: "Go Back",
    firstAction: {
      icon: "help",
      accessibilityLabel: "Help",
      onPress: () => alert("First Action")
    }
  }
};

export const TwoActions: Story = {
  args: {
    title: "Header Second Level",
    type: "twoActions",
    goBack: () => alert("Go Back"),
    backAccessibilityLabel: "Go Back",
    firstAction: {
      icon: "help",
      accessibilityLabel: "Help",
      onPress: () => alert("First Action")
    },
    secondAction: {
      icon: "info",
      accessibilityLabel: "info",
      onPress: () => alert("Second Action")
    }
  }
};

export const ThreeActions: Story = {
  args: {
    title: "Header Second Level",
    type: "threeActions",
    goBack: () => alert("Go Back"),
    backAccessibilityLabel: "Go Back",
    firstAction: {
      icon: "help",
      accessibilityLabel: "Help",
      onPress: () => alert("First Action")
    },
    secondAction: {
      icon: "info",
      accessibilityLabel: "info",
      onPress: () => alert("Second Action")
    },
    thirdAction: {
      icon: "add",
      accessibilityLabel: "add",
      onPress: () => alert("Third Action")
    }
  }
};

export const ModalVersion: Story = {
  args: {
    title: "Header Second Level",
    type: "singleAction",
    isModal: true,
    firstAction: {
      icon: "closeMedium",
      accessibilityLabel: "close",
      onPress: () => alert("Close Action")
    }
  }
};
