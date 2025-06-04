import type { Meta, StoryObj } from "@storybook/react-webpack5";

import React from "react";
import { View } from "react-native";
import { Alert } from "../../../src/components";
import { withMaxWitdth } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Alert/Alert",
  component: Alert,
  decorators: [withMaxWitdth],
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  argTypes: {
    content: {
      control: { type: "text" }
    },
    variant: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"]
    }
  },
  args: {
    content: "Alert content"
  },
  render: args => {
    const { content, variant } = args;
    const viewRef = React.createRef<View>();
    return <Alert content={content} ref={viewRef} variant={variant} />;
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Success = {
  args: {
    variant: "success"
  } as Partial<Story>
};

export const Error = {
  args: {
    variant: "error"
  } as Partial<Story>
};

export const Info = {
  args: {
    variant: "info"
  } as Partial<Story>
};

export const Warning = {
  args: {
    variant: "warning"
  } as Partial<Story>
};
