import { uniqueId } from "lodash";
import MarkdownIt, { Token } from "markdown-it";
import { pipe } from "../../utils/pipe";
import { ASTNode, Tag } from "./type";

type ParseOptions = {
  disable: string | Array<string>;
};

const DEFAULT_PARSER_OPTIONS: ParseOptions = {
  disable: []
};

/**
 * Derives a simplified token type string from a markdown-it Token.
 *
 * This removes the `_open` and `_close` suffixes that markdown-it uses for
 * paired tokens, and normalizes heading tokens by appending the heading
 * level (e.g. "heading1", "heading2", ...).
 *
 * @param {Token} token - The markdown-it token to derive the type from.
 * @returns {string} A normalized token type string (e.g. "paragraph", "text", "heading2").
 *
 * @example
 * // For a token with type "heading_open" and tag "h2"
 * getTokenTypeByToken(token) // => "heading2"
 */
export const getTokenTypeByToken = (token: Token): Tag => {
  const cleanedType = token.type.replace(/_open|_close/g, "");

  switch (cleanedType) {
    case "heading": {
      // Append heading level to type (e.g., heading1, heading2, etc.)
      return `${cleanedType}${token.tag.slice(1)}` as Tag;
    }
    default: {
      return cleanedType as Tag;
    }
  }
};

/**
 * Create an ASTNode from a markdown-it Token.
 *
 * Maps token properties to the project's ASTNode shape:
 * - derives a simplified node type with getTokenTypeByToken
 * - converts token.attrs (if present) from [name, value][] to a plain object
 * - assigns a unique key
 * - preserves markup, content and source token type
 * - computes tokenIndex and initial index (updated later)
 * - recurses into token.children to produce node.children
 *
 * @param {Token} token - The markdown-it token to convert.
 * @param {number} tokenIndex - The index of the token in the tokens array.
 * @returns {ASTNode} The resulting AST node representing the token.
 */
const createASTNode = (token: Token, tokenIndex: number): ASTNode => {
  const type = getTokenTypeByToken(token);

  const attributes = token.attrs?.reduce((prev, curr) => {
    const [name, value] = curr;
    return { ...prev, [name]: value };
  }, {});

  return {
    type,
    sourceType: token.type,
    markup: token.markup,
    key: uniqueId(`md_${type}_`),
    content: token.content,
    tokenIndex,
    index: 0,
    attributes: attributes || {},
    children: tokensToAST(token.children)
  };
};

/**
 * Converts an array of tokens into an Abstract Syntax Tree (AST) structure.
 *
 * This function recursively parses tokens and builds a hierarchical AST where:
 * - Opening tokens (nesting = 1) create parent nodes with children
 * - Closing tokens (nesting = -1) terminate the current parsing level
 * - Self-closing/inline tokens (nesting = 0) are added as standalone nodes
 * - Empty text nodes are filtered out during parsing
 * - All nodes are indexed sequentially within their parent scope
 *
 * @param tokens - Array of tokens to parse, or null if no tokens available
 * @returns Array of AST nodes with hierarchical structure and indexed positions
 *
 * @example
 * ```typescript
 * const tokens = [
 *   { type: 'paragraph_open', nesting: 1 },
 *   { type: 'text', nesting: 0, content: 'Hello' },
 *   { type: 'paragraph_close', nesting: -1 }
 * ];
 * const ast = tokensToAST(tokens);
 * // Returns: [{ type: 'paragraph', children: [{ type: 'text', content: 'Hello', index: 0 }], index: 0 }]
 * ```
 */
const tokensToAST = (tokens: ReadonlyArray<Token> | null): Array<ASTNode> => {
  if (!tokens || tokens.length === 0) {
    return [];
  }

  const makeIndexed = (nodes: Array<ASTNode>) =>
    nodes.map((n, idx) => ({ ...n, index: idx }));

  const parseFrom = (index: number): [Array<ASTNode>, number] => {
    if (index >= tokens.length) {
      return [[], index];
    }

    const token = tokens[index];
    const astNode = createASTNode(token, index);

    const isEmptyText =
      astNode.type === "text" &&
      astNode.children.length === 0 &&
      astNode.content === "";

    if (isEmptyText) {
      return parseFrom(index + 1);
    }

    if (token.nesting === -1) {
      // closing token - stop and return to caller after consuming it
      return [[], index + 1];
    }

    if (token.nesting === 1) {
      // opening token - parse children starting at next index
      const [childNodes, nextIndex] = parseFrom(index + 1);
      const nodeWithChildren = { ...astNode, children: childNodes };
      const [restNodes, finalIndex] = parseFrom(nextIndex);
      return [makeIndexed([nodeWithChildren, ...restNodes]), finalIndex];
    }

    // token.nesting === 0 (self or inline token)
    const [restNodes, finalIndex] = parseFrom(index + 1);
    return [makeIndexed([astNode, ...restNodes]), finalIndex];
  };

  const [nodes] = parseFrom(0);
  return nodes;
};

/**
 * Flattens nested inline tokens into a single-level array.
 * This is required because markdown-it nests inline content within 'inline' tokens.
 * @param tokens - The array of tokens to flatten.
 * @returns A flattened array of tokens.
 */
const flattenTokens = (tokens: ReadonlyArray<Token>): ReadonlyArray<Token> =>
  tokens.reduce<ReadonlyArray<Token>>((acc, curr) => {
    if (curr.type === "inline" && curr.children && curr.children.length > 0) {
      const children = flattenTokens(curr.children);
      return [...acc, ...children];
    } else {
      return [...acc, curr];
    }
  }, []);

const renderInlineAsText = (tokens: ReadonlyArray<Token> | null): string => {
  if (!tokens) {
    return "";
  }

  return tokens.reduce<string>((acc, token) => {
    if (token.type === "text") {
      return acc + token.content;
    } else if (token.type === "image") {
      return acc + renderInlineAsText(token.children);
    } else {
      return acc;
    }
  }, "");
};

export function cleanupTokens(
  tokens: ReadonlyArray<Token>
): ReadonlyArray<Token> {
  const adjustedTokens = tokens.map(token => {
    // Set img alt text
    if (token.type === "image") {
      token.attrSet("alt", renderInlineAsText(token.children));
    }

    return {
      ...token,
      type: getTokenTypeByToken(token),
      block: token.type === "image" || token.type === "hardbreak"
    };
  });

  /**
   * changing a link token to a blocklink to fix issue where link tokens with
   * nested non text tokens breaks component
   */
  const stack: Array<Token> = [];
  const result = adjustedTokens.reduce<{
    tokens: Array<Token>;
    stack: Array<Token>;
  }>(
    (acc, token) => {
      if (token.type === "link" && token.nesting === 1) {
        return {
          ...acc,
          tokens: [...tokens, token]
        };
      } else if (
        stack.length > 0 &&
        token.type === "link" &&
        token.nesting === -1
      ) {
        if (stack.some(stackToken => stackToken.block)) {
          stack[0].type = "blocklink";
          stack[0].block = true;
          token.type = "blocklink";
          token.block = true;
        }

        return {
          tokens: [...acc.tokens, ...acc.stack, token],
          stack: []
        };
      } else if (stack.length > 0) {
        return {
          ...acc,
          stack: [...acc.stack, token]
        };
      } else {
        return {
          ...acc,
          tokens: [...acc.tokens, token]
        };
      }

      return acc;
    },
    { tokens: [], stack: [] }
  );

  return result.tokens;
}

const groupTextTokens = (
  tokens: ReadonlyArray<Token>
): ReadonlyArray<Token> => {
  const result = tokens.reduce<{ tokens: Array<Token>; hasGroup: boolean }>(
    (acc, token) => {
      const { tokens: accTokens, hasGroup } = acc;

      if (!token.block && !hasGroup) {
        const openToken: Token = {
          type: "textgroup",
          nesting: 1
        };
        return {
          tokens: [...accTokens, openToken, token],
          hasGroup: true
        };
      } else if (!token.block && hasGroup) {
        return {
          tokens: [...accTokens, token],
          hasGroup
        };
      } else if (token.block && hasGroup) {
        const closeToken: Token = {
          type: "textgroup",
          nesting: -1
        };
        return {
          tokens: [...accTokens, closeToken, token],
          hasGroup: false
        };
      } else {
        return {
          tokens: [...accTokens, token],
          hasGroup
        };
      }
    },
    { tokens: [], hasGroup: false }
  );

  return result.tokens;
};

/**
 * Parses a markdown source string into an Abstract Syntax Tree (AST) representation.
 *
 * @param source - The markdown source string to parse
 * @param options - Configuration options for the parser. Defaults to DEFAULT_PARSER_OPTIONS
 * @returns An array of ASTNode objects representing the parsed markdown structure
 *
 * @example
 * ```typescript
 * const markdownSource = "# Hello World\nThis is a paragraph.";
 * const ast = parse(markdownSource);
 * console.log(ast); // Array of ASTNode objects
 * ```
 */
export const parse = (
  source: string,
  options: ParseOptions = DEFAULT_PARSER_OPTIONS
): Array<ASTNode> => {
  const mdIt = MarkdownIt({ typographer: true }).disable(options.disable, true);
  return pipe(
    mdIt.parse(source, {}), // Parse markdown into tokens
    flattenTokens, // Flatten inline tokens ( heading1 -> inline -> text becomes heading1 -> text )
    // cleanupTokens, // Clean up tokens by adjusting types and properties
    groupTextTokens, // Group consecutive text tokens into textgroup tokens
    tokensToAST // Convert tokens to AST
  );
};
