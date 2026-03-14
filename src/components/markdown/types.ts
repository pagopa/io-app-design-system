import type React from "react";
import type { IOColors } from "../../core";

/**
 * All supported markdown node types.
 */
export type MarkdownNodeType =
  /* Headings */
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  /* Inline */
  | "paragraph"
  | "text"
  | "strong"
  | "em"
  | "link"
  | "softbreak"
  | "hardbreak"
  /* Lists */
  | "bullet_list"
  | "ordered_list"
  | "list_item"
  /* Block-level */
  | "blockquote"
  | "image"
  | "code_inline"
  | "fence"
  | "hr"
  | "html_block"
  | "html_inline";

/** Backwards-compatible alias for the lite subset */
export type MarkdownLiteNodeType = Extract<
  MarkdownNodeType,
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
  | "hardbreak"
>;

/**
 * A node in the markdown AST.
 */
export type MarkdownNode = {
  type: MarkdownNodeType;
  key: string;
  content?: string;
  attributes?: Record<string, string>;
  children: ReadonlyArray<MarkdownNode>;
  /** List metadata: whether the list is ordered */
  ordered?: boolean;
};

/** Backwards-compatible alias */
export type MarkdownLiteNode = MarkdownNode;

/* ─── Render context & rules ─── */

export type RenderContext = {
  onLinkPress?: (url: string) => void;
  bodyColor: IOColors;
  linkColor: IOColors;
};

/**
 * A render rule receives a node, a function to recursively render children,
 * and the current render context.
 */
export type RenderRule = (
  node: MarkdownNode,
  renderChildren: (
    nodes: ReadonlyArray<MarkdownNode>
  ) => ReadonlyArray<React.ReactNode>,
  context: RenderContext
) => React.ReactNode;

/**
 * Partial record of render rules. Only the provided keys override the defaults.
 */
export type IOMarkdownRenderRules = Partial<
  Record<MarkdownNodeType, RenderRule>
>;

/* ─── Component props ─── */

export type IOMarkdownProps = {
  /** The markdown string to render */
  content: string;
  /** Override default link press behavior. Default: Linking.openURL(url) */
  onLinkPress?: (url: string) => void;
  /** Test ID for the container View */
  testID?: string;
  /** Node types to disable (parser will skip them entirely) */
  disabledRules?: ReadonlyArray<MarkdownNodeType>;
  /** Override individual render rules */
  rules?: IOMarkdownRenderRules;
};

export type IOMarkdownLiteProps = {
  /** The markdown string to render */
  content: string;
  /** Override default link press behavior. Default: Linking.openURL(url) */
  onLinkPress?: (url: string) => void;
  /** Test ID for the container View */
  testID?: string;
};
