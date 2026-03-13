import React from "react";
import type { IOColors } from "../../core";
import { IOText } from "../typography/IOText";
import type { MarkdownLiteNode } from "./types";

export type RenderContext = {
  onLinkPress?: (url: string) => void;
  headingColor: IOColors;
  bodyColor: IOColors;
  linkColor: IOColors;
};

type HeadingConfig = {
  size: number;
  lineHeight: number;
};

const headingConfigMap: Record<string, HeadingConfig> = {
  heading1: { size: 28, lineHeight: 42 },
  heading2: { size: 26, lineHeight: 34 },
  heading3: { size: 22, lineHeight: 33 },
  heading4: { size: 20, lineHeight: 24 },
  heading5: { size: 14, lineHeight: 16 },
  heading6: { size: 16, lineHeight: 24 }
};

type InlineStyle = {
  bold: boolean;
  italic: boolean;
  link?: string;
};

type StyledSegment = {
  key: string;
  text: string;
  style: InlineStyle;
};

/**
 * Recursively walks inline AST nodes and produces flat styled segments
 * with accumulated bold/italic/link state.
 */
const flattenInlineNodes = (
  nodes: ReadonlyArray<MarkdownLiteNode>,
  inherited: InlineStyle
): Array<StyledSegment> =>
  nodes.reduce<Array<StyledSegment>>((acc, node) => {
    switch (node.type) {
      case "text":
        return [
          ...acc,
          { key: node.key, text: node.content ?? "", style: inherited }
        ];

      case "softbreak":
      case "hardbreak":
        return [
          ...acc,
          { key: node.key, text: "\n", style: inherited }
        ];

      case "strong":
        return [
          ...acc,
          ...flattenInlineNodes(node.children, {
            ...inherited,
            bold: true
          })
        ];

      case "em":
        return [
          ...acc,
          ...flattenInlineNodes(node.children, {
            ...inherited,
            italic: true
          })
        ];

      case "link": {
        const href = node.attributes?.href;
        return [
          ...acc,
          ...flattenInlineNodes(node.children, {
            ...inherited,
            link: href
          })
        ];
      }

      default:
        return acc;
    }
  }, []);

/**
 * Renders a single styled segment as either a raw string
 * or an IOText element with the appropriate props.
 */
const renderSegment = (
  segment: StyledSegment,
  context: RenderContext
): React.ReactNode => {
  const { bold, italic, link } = segment.style;
  const hasStyle = bold || italic || link;

  if (!hasStyle) {
    return segment.text;
  }

  return (
    <IOText
      key={segment.key}
      {...(bold ? { weight: "Semibold" } : {})}
      {...(italic ? { fontStyle: "italic" } : {})}
      {...(link
        ? {
            color: context.linkColor,
            onPress: () => context.onLinkPress?.(link),
            accessibilityRole: "link" as const,
            textStyle: { textDecorationLine: "underline" as const }
          }
        : {})}
    >
      {segment.text}
    </IOText>
  );
};

/**
 * Renders a block-level node (heading or paragraph) with its inline children
 * flattened into styled segments.
 */
const renderBlock = (
  node: MarkdownLiteNode,
  context: RenderContext
): React.ReactNode => {
  const segments = flattenInlineNodes(node.children, {
    bold: false,
    italic: false
  });

  const headingConfig = headingConfigMap[node.type];
  const isHeading = headingConfig !== undefined;

  return (
    <IOText
      key={node.key}
      size={isHeading ? headingConfig.size : 16}
      lineHeight={isHeading ? headingConfig.lineHeight : 24}
      weight={isHeading ? "Semibold" : "Regular"}
      color={isHeading ? context.headingColor : context.bodyColor}
    >
      {segments.map(seg => renderSegment(seg, context))}
    </IOText>
  );
};

/**
 * Renders the AST nodes into an array of React nodes.
 */
export const renderAST = (
  nodes: ReadonlyArray<MarkdownLiteNode>,
  context: RenderContext
): ReadonlyArray<React.ReactNode> =>
  nodes.map(node => renderBlock(node, context));
