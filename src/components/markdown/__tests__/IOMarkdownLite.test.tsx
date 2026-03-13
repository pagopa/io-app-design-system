import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Linking } from "react-native";
import { IOThemeContextProvider } from "../../../context";
import { IOMarkdownLite } from "../IOMarkdownLite";

/** Renders the component wrapped with the required theme provider */
const renderComponent = (props: React.ComponentProps<typeof IOMarkdownLite>) =>
  render(
    <IOThemeContextProvider>
      <IOMarkdownLite {...props} />
    </IOThemeContextProvider>
  );

describe("IOMarkdownLite", () => {
  it("renders basic paragraph text", () => {
    const { getByText } = renderComponent({ content: "Hello world" });
    expect(getByText("Hello world")).toBeTruthy();
  });

  it("renders heading text", () => {
    const { getByText } = renderComponent({ content: "# My Heading" });
    expect(getByText("My Heading")).toBeTruthy();
  });

  it("renders bold text with Semibold weight", () => {
    const { getByText } = renderComponent({ content: "**bold text**" });
    const el = getByText("bold text");
    expect(el).toBeTruthy();
    // Style is a flattened array — check the array contains an object with fontWeight
    const styles = [el.props.style].flat();
    expect(styles).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontWeight: "600" })])
    );
  });

  it("renders italic text with italic fontStyle", () => {
    const { getByText } = renderComponent({ content: "*italic text*" });
    const el = getByText("italic text");
    expect(el).toBeTruthy();
    const styles = [el.props.style].flat();
    expect(styles).toEqual(
      expect.arrayContaining([expect.objectContaining({ fontStyle: "italic" })])
    );
  });

  it("renders link text with accessibility role 'link'", () => {
    const { getByRole } = renderComponent({
      content: "[click](https://example.com)"
    });
    const link = getByRole("link");
    expect(link).toBeTruthy();
  });

  it("calls onLinkPress callback when link is pressed", () => {
    const onLinkPress = jest.fn();
    const { getByRole } = renderComponent({
      content: "[click](https://example.com)",
      onLinkPress
    });
    fireEvent.press(getByRole("link"));
    expect(onLinkPress).toHaveBeenCalledWith("https://example.com");
  });

  it("falls back to Linking.openURL when no onLinkPress provided", () => {
    const spy = jest
      .spyOn(Linking, "openURL")
      .mockImplementation(() => Promise.resolve());
    const { getByRole } = renderComponent({
      content: "[click](https://example.com)"
    });
    fireEvent.press(getByRole("link"));
    expect(spy).toHaveBeenCalledWith("https://example.com");
    spy.mockRestore();
  });

  it("does not render unsupported markdown (images, lists, code)", () => {
    const { queryByText } = renderComponent({
      content:
        "- list item\n\n> blockquote\n\n```\ncode block\n```\n\n![alt](img.png)"
    });
    expect(queryByText("list item")).toBeNull();
    expect(queryByText("blockquote")).toBeNull();
    expect(queryByText("code block")).toBeNull();
  });

  it("applies testID to the container view", () => {
    const { getByTestId } = renderComponent({
      content: "Hello",
      testID: "md-lite"
    });
    expect(getByTestId("md-lite")).toBeTruthy();
  });

  it("handles empty content string", () => {
    const { toJSON } = renderComponent({ content: "" });
    // Should render the container View with no text children
    expect(toJSON()).toBeTruthy();
  });
});
