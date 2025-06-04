import { action } from "storybook/actions";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ModuleAttachment } from "../../../src/components";
import { withMaxWitdth, withTheme } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Modules/ModuleAttachment",
  component: ModuleAttachment,
  decorators: [withMaxWitdth, withTheme],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof ModuleAttachment>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isLoading: false,
    title: "Title",
    format: "pdf",
    accessibilityLabel: "accessibilityLabel",
    isFetching: false,
    fetchingAccessibilityLabel: "fetchingAccessibilityLabel",
    disabled: false,
    onPress: () => action("clicked")()
  }
};
