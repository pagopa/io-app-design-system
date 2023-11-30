import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { FeatureInfo } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "IO-App Design System/Components/FeatureInfo/FeatureInfo",
  component: FeatureInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    pictogramName: "cie"
  }
} satisfies Meta<typeof FeatureInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    body: "Dopo questo passaggio non sarà più possibile annullare il pagamento",
    actionLabel: "Conferma",
    actionOnPress: e => {
      action("clicked")(e);
    }
  }
};
