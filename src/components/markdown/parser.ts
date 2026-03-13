import { uniqueId } from "lodash";
import MarkdownIt, { Token } from "markdown-it";
import { pipe } from "../../utils/pipe";
import { MarkdownLiteNode, MarkdownLiteNodeType } from "./types";

const md = MarkdownIt({ html: false, typographer: false, linkify: false });

const SUPPORTED_TYPES = new Set<string>([
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
  "hardbreak"
]);

/**
 * Maps a markdown-it token type to a MarkdownLiteNodeType.
 * Normalizes heading_open/heading_close → heading1–heading6.
 * Returns undefined for unsupported types.
 */
const getNodeType = (token: Token): MarkdownLiteNodeType | undefined => {
  const cleanedType = token.type.replace(/_open|_close/g, "");

  const type =
    cleanedType === "heading"
      ? (`${cleanedType}${token.tag.slice(1)}` as string)
      : cleanedType;

  return SUPPORTED_TYPES.has(type) ? (type as MarkdownLiteNodeType) : undefined;
};

/**
 * Flattens nested inline tokens into the parent token stream.
 * markdown-it wraps inline content in `inline` tokens with children.
 */
const flattenInline = (
  tokens: ReadonlyArray<Token>
): ReadonlyArray<Token> =>
  tokens.reduce<ReadonlyArray<Token>>((acc, token) => {
    if (token.type === "inline" && token.children && token.children.length > 0) {
      return [...acc, ...flattenInline(token.children)];
    }
    return [...acc, token];
  }, []);

/**
 * Converts a flat array of tokens into a hierarchical AST,
 * skipping unsupported token types entirely.
 */
const tokensToAST = (
  tokens: ReadonlyArray<Token>
): Array<MarkdownLiteNode> => {
  if (!tokens || tokens.length === 0) {
    return [];
  }

  const parseFrom = (index: number): [Array<MarkdownLiteNode>, number] => {
    if (index >= tokens.length) {
      return [[], index];
    }

    const token = tokens[index];
    const nodeType = getNodeType(token);

    // Closing token — stop and return to caller
    if (token.nesting === -1) {
      return [[], index + 1];
    }

    // Unsupported type — skip it
    if (nodeType === undefined) {
      if (token.nesting === 1) {
        // Opening token: skip ahead to matching close
        const findMatchingClose = (
          pos: number,
          depth: number
        ): number =>
          pos >= tokens.length || depth === 0
            ? pos
            : findMatchingClose(pos + 1, depth + tokens[pos].nesting);
        return parseFrom(findMatchingClose(index + 1, 1));
      }
      // Self-closing / inline token: skip single token
      return parseFrom(index + 1);
    }

    // Skip empty text nodes
    if (
      nodeType === "text" &&
      token.content === ""
    ) {
      return parseFrom(index + 1);
    }

    const attributes = token.attrs?.reduce<Record<string, string>>(
      (prev, [name, value]) => ({ ...prev, [name]: value }),
      {}
    );

    const node: MarkdownLiteNode = {
      type: nodeType,
      key: uniqueId(`mdl_${nodeType}_`),
      content: token.content || undefined,
      attributes: attributes || undefined,
      children: []
    };

    if (token.nesting === 1) {
      // Opening token — parse children
      const [childNodes, nextIndex] = parseFrom(index + 1);
      const nodeWithChildren: MarkdownLiteNode = { ...node, children: childNodes };
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
 * Parses a markdown source string into a lite AST,
 * keeping only supported node types.
 */
export const parseLite = (source: string): Array<MarkdownLiteNode> =>
  pipe(
    md.parse(source, {}),
    flattenInline,
    tokensToAST
  );
