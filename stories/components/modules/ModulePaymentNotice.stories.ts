import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ModulePaymentNotice } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Modules/ModulePaymentNotice",
  component: ModulePaymentNotice,
  decorators: [withMaxWitdth, withTheme],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ModulePaymentNotice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isLoading: false,
    title: "Title",
    paymentNotice: {
      status: "default",
      amount: "100,00€",
      amountAccessibilityLabel: "100,00€"
    },
    subtitle: "Subtitle",
    accessibilityLabel: "accessibilityLabel",
    onPress: () => action("clicked")()
  }
};
