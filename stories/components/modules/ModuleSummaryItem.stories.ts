import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ModuleSummary } from "../../../src/components";
import { withMaxWitdth } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  decorators: [withMaxWitdth],
  title: "Components/Modules/ModuleSummary",
  component: ModuleSummary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ModuleSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Primary button",
    onPress: e => {
      action("clicked")(e);
    }
  }
};
