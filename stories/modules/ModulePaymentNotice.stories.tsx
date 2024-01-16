import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IOThemeContext, IOThemes } from "../../src";

import { ModulePaymentNotice } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Modules/ModulePaymentNotice",
  component: ModulePaymentNotice,
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
  decorators: [
    Story => (
      <IOThemeContext.Provider value={IOThemes.dark}>
        <div style={{ width: "300px" }}>
          <Story />
        </div>
      </IOThemeContext.Provider>
    )
  ],
  args: {
    isLoading: false,
    title: "Title",
    paymentNoticeStatus: "default",
    paymentNoticeAmount: "100,00€",
    subtitle: "Subtitle",
    accessibilityLabel: "accessibilityLabel",
    onPress: () => action("clicked")()
  }
};
