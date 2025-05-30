import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { View } from "react-native";
import { Banner, IOPictogramsBleed } from "../../../src/components";
import { withMaxWitdth } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Banner/Banner",
  component: Banner,
  argTypes: {
    color: {
      options: ["neutral", "turquoise"],
      control: { type: "radio" }
    },
    pictogramName: {
      options: Object.keys(IOPictogramsBleed),
      control: { type: "select" }
    },
    title: {
      control: { type: "text" }
    },
    content: {
      control: { type: "text" }
    }
  },
  args: {
    title: "Banner Title",
    content: "Banner content",
    pictogramName: "charity",
    color: "neutral"
  },
  decorators: [withMaxWitdth],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Partial<Story> = {
  render: args => {
    const { color, title, content, pictogramName } = args;
    const viewRef = React.createRef<View | null>();
    return (
      <Banner
        content={content}
        title={title}
        color={color}
        pictogramName={pictogramName}
        viewRef={viewRef}
      />
    );
  }
};
