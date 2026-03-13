import { render } from "@testing-library/react-native";
import React from "react";
import { IOThemeContextProvider } from "../../../context";
import { IOMarkdown } from "../IOMarkdown";

const renderComponent = (
  props: React.ComponentProps<typeof IOMarkdown>
) =>
  render(
    <IOThemeContextProvider>
      <IOMarkdown {...props} />
    </IOThemeContextProvider>
  );

describe("IOMarkdown", () => {
  /* ─── Headings ─── */

  it("renders all heading levels", () => {
    const content = `# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6`;
    const { getByText } = renderComponent({ content });
    expect(getByText("H1")).toBeTruthy();
    expect(getByText("H2")).toBeTruthy();
    expect(getByText("H3")).toBeTruthy();
    expect(getByText("H4")).toBeTruthy();
    expect(getByText("H5")).toBeTruthy();
    expect(getByText("H6")).toBeTruthy();
  });

  /* ─── Paragraphs & inline styles ─── */

  it("renders paragraph text", () => {
    const { getByText } = renderComponent({ content: "Hello world" });
    expect(getByText("Hello world")).toBeTruthy();
  });

  it("renders bold text", () => {
    const { getByText } = renderComponent({ content: "**bold**" });
    const el = getByText("bold");
    const styles = [el.props.style].flat();
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontWeight: "600" })
      ])
    );
  });

  it("renders italic text", () => {
    const { getByText } = renderComponent({ content: "*italic*" });
    const el = getByText("italic");
    const styles = [el.props.style].flat();
    expect(styles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontStyle: "italic" })
      ])
    );
  });

  /* ─── Links ─── */

  it("renders link with accessibility role", () => {
    const { getByRole } = renderComponent({
      content: "[click](https://example.com)"
    });
    expect(getByRole("link")).toBeTruthy();
  });

  /* ─── Lists ─── */

  it("renders unordered list items with bullets", () => {
    const content = `- Item one\n- Item two\n- Item three`;
    const { getByText, getAllByText } = renderComponent({ content });
    expect(getByText("Item one")).toBeTruthy();
    expect(getByText("Item two")).toBeTruthy();
    expect(getByText("Item three")).toBeTruthy();
    expect(getAllByText("\u2022").length).toBe(3);
  });

  it("renders ordered list items with numbers", () => {
    const content = `1. First\n2. Second\n3. Third`;
    const { getByText } = renderComponent({ content });
    expect(getByText("First")).toBeTruthy();
    expect(getByText("Second")).toBeTruthy();
    expect(getByText("Third")).toBeTruthy();
    expect(getByText("1.")).toBeTruthy();
    expect(getByText("2.")).toBeTruthy();
    expect(getByText("3.")).toBeTruthy();
  });

  it("renders list with accessibility role 'list'", () => {
    const content = `- Item one\n- Item two`;
    const { getAllByRole } = renderComponent({ content });
    expect(getAllByRole("list").length).toBeGreaterThanOrEqual(1);
  });

  /* ─── Code ─── */

  it("renders inline code", () => {
    const content = "Use `console.log()` for debugging";
    const { getByText } = renderComponent({ content });
    expect(getByText("console.log()")).toBeTruthy();
  });

  it("renders code block (fence)", () => {
    const content = "```\nconst x = 1;\n```";
    const { getByText } = renderComponent({ content });
    expect(getByText(/const x = 1/)).toBeTruthy();
  });

  /* ─── Horizontal rule ─── */

  it("renders horizontal rule as Divider", () => {
    const content = "Above\n\n---\n\nBelow";
    const { getByText } = renderComponent({ content });
    expect(getByText("Above")).toBeTruthy();
    expect(getByText("Below")).toBeTruthy();
  });

  /* ─── Blockquote / Banner ─── */

  it("renders blockquote as Banner", () => {
    const content = `> Some quote content`;
    const { getByText } = renderComponent({ content });
    expect(getByText("Some quote content")).toBeTruthy();
  });

  /* ─── disabledRules ─── */

  it("does not render lists when bullet_list and ordered_list are disabled", () => {
    const content = `- Item one\n\n1. First`;
    const { queryByText } = renderComponent({
      content,
      disabledRules: ["bullet_list", "ordered_list", "list_item"]
    });
    expect(queryByText("Item one")).toBeNull();
    expect(queryByText("First")).toBeNull();
  });

  it("does not render code when code_inline and fence are disabled", () => {
    const content = "Use `code` here\n\n```\nblock\n```";
    const { queryByText } = renderComponent({
      content,
      disabledRules: ["code_inline", "fence"]
    });
    expect(queryByText("code")).toBeNull();
    expect(queryByText("block")).toBeNull();
  });

  /* ─── Image rendering ─── */

  it("renders an image when markdown contains image syntax", () => {
    const content = "![Placeholder](https://picsum.photos/200/200)";
    const { getByLabelText } = renderComponent({ content });
    const image = getByLabelText("Placeholder");
    expect(image).toBeTruthy();
    expect(image.props.source).toEqual({
      uri: "https://picsum.photos/200/200"
    });
  });

  it("does not render images when image is in disabledRules", () => {
    const content = "![Placeholder](https://picsum.photos/200/200)";
    const { queryByLabelText } = renderComponent({
      content,
      disabledRules: ["image"]
    });
    expect(queryByLabelText("Placeholder")).toBeNull();
  });

  /* ─── testID ─── */

  it("applies testID to the container view", () => {
    const { getByTestId } = renderComponent({
      content: "Hello",
      testID: "md-full"
    });
    expect(getByTestId("md-full")).toBeTruthy();
  });

  /* ─── Empty content ─── */

  it("handles empty content string", () => {
    const { toJSON } = renderComponent({ content: "" });
    expect(toJSON()).toBeTruthy();
  });
});
