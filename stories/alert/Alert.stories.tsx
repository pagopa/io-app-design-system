import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { View } from "react-native";
import { Alert } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "IO-App Design System/Components/Alert/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  argTypes: {
    title: {
      control: { type: "text" }
    },
    content: {
      control: { type: "text" }
    },
    variant: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"]
    }
  },
  args: {
    title: "Alert Title",
    content: "Alert content"
  },
  render: args => {
    const { title, content, variant } = args;
    const AlertWithRef = () => {
      const viewRef = React.createRef<View>();
      return (
        <Alert
          content={content}
          title={title}
          viewRef={viewRef}
          variant={variant}
        />
      );
    };
    return AlertWithRef();
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
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
