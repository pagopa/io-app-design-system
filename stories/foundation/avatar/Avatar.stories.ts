import type { Meta, StoryObj } from "@storybook/react";

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
    size: "medium"
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EnitityLogo: Story = {
  args: {
    size: "medium",
    logoUri: {
      uri: "https://assets.cdn.io.italia.it/logos/organizations/80078750587.png"
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EnitityLogoWithFallback: Story = {
  args: {
    size: "medium",
    logoUri: [
      { uri: "https://wrongUri.png" },
      {
        uri: "https://assets.cdn.io.italia.it/logos/organizations/80078750587.png"
      }
    ]
  }
};
