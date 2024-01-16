import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AccordionItem, Caption } from "../../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Accordion/Accordion",
  component: AccordionItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"]
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BaseAccordion: Story = {
  args: {
    title: "Accordion Title",
    id: 1,
    body: <Caption>{"Accordion body"}</Caption>
  }
};
