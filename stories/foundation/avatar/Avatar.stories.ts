import type { Meta, StoryObj } from "@storybook/react";

import { ImageURISource } from "react-native";
import { Avatar } from "../../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Foundation/Avatar/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    shape: "circle",
    size: "medium"
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EnitityLogo: Story = {
  args: {
    shape: "circle",
    size: "medium",
    logoUri:
      "https://assets.cdn.io.italia.it/logos/organizations/80078750587.png" as ImageURISource
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EnitityLogoWithFallback: Story = {
  args: {
    shape: "circle",
    size: "medium",
    logoUri: [
      "https://wrongUri.png",
      "https://assets.cdn.io.italia.it/logos/organizations/80078750587.png"
    ] as ReadonlyArray<ImageURISource>
  }
};
