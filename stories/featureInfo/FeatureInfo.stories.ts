import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { FeatureInfo } from "../../src/components";
import { withMaxWitdth } from "../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/FeatureInfo/FeatureInfo",
  component: FeatureInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withMaxWitdth],
  args: {
    pictogramProps: {
      name: "cie"
    }
  }
} satisfies Meta<typeof FeatureInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    body: "Dopo questo passaggio non sarà più possibile annullare il pagamento",
    action: {
      label: "Conferma",
      onPress: e => {
        action("clicked")(e);
      }
    }
  }
};
