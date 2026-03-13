export type MarkdownLiteNodeType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "paragraph"
  | "text"
  | "strong"
  | "em"
  | "link"
  | "softbreak"
  | "hardbreak";

export type MarkdownLiteNode = {
  type: MarkdownLiteNodeType;
  key: string;
  content?: string;
  attributes?: Record<string, string>;
  children: ReadonlyArray<MarkdownLiteNode>;
};

export type IOMarkdownLiteProps = {
  /** The markdown string to render */
  content: string;
  /** Override default link press behavior. Default: Linking.openURL(url) */
  onLinkPress?: (url: string) => void;
  /** Test ID for the container View */
  testID?: string;
};
