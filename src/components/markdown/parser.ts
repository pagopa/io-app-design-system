import { uniqueId } from "lodash";
import MarkdownIt, { Token } from "markdown-it";
import { pipe } from "../../utils/pipe";
import { MarkdownNode, MarkdownNodeType } from "./types";

/* Two markdown-it instances: lite (no HTML) and full (HTML enabled) */
const mdLite = MarkdownIt({ html: false, typographer: false, linkify: false });
const mdFull = MarkdownIt({ html: true, typographer: false, linkify: false });

/**
 * Complete set of all supported node types.
 */
const ALL_TYPES = new Set<string>([
  /* lite types */
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "paragraph",
  "text",
  "strong",
  "em",
  "link",
  "softbreak",
  "hardbreak",
  /* full types */
  "bullet_list",
  "ordered_list",
  "list_item",
  "blockquote",
  "image",
  "code_inline",
  "fence",
  "hr",
  "html_block",
  "html_inline"
]);

/**
 * The types disabled when using IOMarkdownLite.
 */
export const LITE_DISABLED_TYPES: ReadonlyArray<MarkdownNodeType> = [
  "bullet_list",
  "ordered_list",
  "list_item",
  "blockquote",
  "image",
  "code_inline",
  "fence",
  "hr",
  "html_block",
  "html_inline"
];

/**
 * Maps a markdown-it token type to a MarkdownNodeType.
 * Normalizes `*_open` / `*_close` suffixes and heading tags.
 * Returns undefined for unsupported or disabled types.
 */
const getNodeType = (
  token: Token,
  enabledTypes: Set<string>
): MarkdownNodeType | undefined => {
  const cleanedType = token.type.replace(/_open|_close/g, "");

  const type =
    cleanedType === "heading"
      ? (`${cleanedType}${token.tag.slice(1)}` as string)
      : cleanedType;

  return enabledTypes.has(type) ? (type as MarkdownNodeType) : undefined;
};

/**
 * Flattens nested inline tokens into the parent token stream.
 * markdown-it wraps inline content in `inline` tokens with children.
 */
const flattenInline = (
  tokens: ReadonlyArray<Token>
): ReadonlyArray<Token> =>
  tokens.reduce<ReadonlyArray<Token>>((acc, token) => {
    if (
      token.type === "inline" &&
      token.children &&
      token.children.length > 0
    ) {
      return [...acc, ...flattenInline(token.children)];
    }
    return [...acc, token];
  }, []);

/**
 * Recursively collects text content from AST nodes.
 * Used to build the raw text of blockquotes for Banner parsing.
 */
const collectTextContent = (nodes: ReadonlyArray<MarkdownNode>): string =>
  nodes
    .map(node => {
      if (node.content) {
        return node.content;
      }
      if (node.children.length > 0) {
        return collectTextContent(node.children);
      }
      return "";
    })
    .filter(Boolean)
    .join("\n");

/**
 * Converts a flat array of tokens into a hierarchical AST,
 * skipping disabled/unsupported token types entirely.
 */
const tokensToAST = (
  tokens: ReadonlyArray<Token>,
  enabledTypes: Set<string>
): Array<MarkdownNode> => {
  if (!tokens || tokens.length === 0) {
    return [];
  }

  const parseFrom = (index: number): [Array<MarkdownNode>, number] => {
    if (index >= tokens.length) {
      return [[], index];
    }

    const token = tokens[index];
    const nodeType = getNodeType(token, enabledTypes);

    // Closing token — stop and return to caller
    if (token.nesting === -1) {
      return [[], index + 1];
    }

    // Unsupported / disabled type — skip it
    if (nodeType === undefined) {
      if (token.nesting === 1) {
        // Opening token: skip ahead to matching close
        const findMatchingClose = (pos: number, depth: number): number =>
          pos >= tokens.length || depth === 0
            ? pos
            : findMatchingClose(pos + 1, depth + tokens[pos].nesting);
        return parseFrom(findMatchingClose(index + 1, 1));
      }
      // Self-closing / inline token: skip single token
      return parseFrom(index + 1);
    }

    // Skip empty text nodes
    if (nodeType === "text" && token.content === "") {
      return parseFrom(index + 1);
    }

    const attributes = token.attrs?.reduce<Record<string, string>>(
      (prev, [name, value]) => ({ ...prev, [name]: value }),
      {}
    );

    const node: MarkdownNode = {
      type: nodeType,
      key: uniqueId(`md_${nodeType}_`),
      content: token.content || undefined,
      attributes: attributes || undefined,
      children: [],
      // Preserve raw markup for blockquotes (needed for Banner extraction)
      ...(nodeType === "blockquote" && token.markup
        ? { raw: token.markup }
        : {}),
      // Preserve ordered flag for lists
      ...(nodeType === "ordered_list" ? { ordered: true } : {}),
      ...(nodeType === "bullet_list" ? { ordered: false } : {}),
      // Preserve image src and alt via attributes
      ...(nodeType === "image"
        ? {
            attributes: {
              ...attributes,
              src: token.attrGet?.("src") ?? attributes?.src ?? "",
              alt: token.content ?? ""
            }
          }
        : {})
    };

    if (token.nesting === 1) {
      // Opening token — parse children
      const [childNodes, nextIndex] = parseFrom(index + 1);

      // For blockquotes, collect raw content from children recursively
      const rawContent =
        nodeType === "blockquote"
          ? collectTextContent(childNodes)
          : undefined;

      const nodeWithChildren: MarkdownNode = {
        ...node,
        children: childNodes,
        ...(rawContent ? { raw: rawContent } : {})
      };
      const [restNodes, finalIndex] = parseFrom(nextIndex);
      return [[nodeWithChildren, ...restNodes], finalIndex];
    }

    // Self-closing / inline token (nesting === 0)
    const [restNodes, finalIndex] = parseFrom(index + 1);
    return [[node, ...restNodes], finalIndex];
  };

  const [nodes] = parseFrom(0);
  return nodes;
};

/**
 * Computes the enabled types set from the full set minus disabled types.
 */
const getEnabledTypes = (
  disabledTypes?: ReadonlyArray<string>
): Set<string> => {
  if (!disabledTypes || disabledTypes.length === 0) {
    return ALL_TYPES;
  }
  const disabled = new Set(disabledTypes);
  return new Set([...ALL_TYPES].filter(t => !disabled.has(t)));
};

/**
 * Parses a markdown source string into an AST.
 * @param source The markdown string.
 * @param disabledTypes Node types to exclude from parsing.
 * @returns Array of MarkdownNode.
 */
export const parse = (
  source: string,
  disabledTypes?: ReadonlyArray<MarkdownNodeType>
): Array<MarkdownNode> => {
  const enabledTypes = getEnabledTypes(disabledTypes);
  const needsHtml =
    enabledTypes.has("html_block") || enabledTypes.has("html_inline");
  const md = needsHtml ? mdFull : mdLite;

  return pipe(
    md.parse(source, {}),
    flattenInline,
    tokens => tokensToAST(tokens, enabledTypes)
  );
};

/**
 * Parses markdown with the lite subset of rules only.
 * Backwards-compatible with the original parseLite API.
 */
export const parseLite = (source: string): Array<MarkdownNode> =>
  parse(source, LITE_DISABLED_TYPES);
