import React, { Fragment } from "react";
import { View } from "react-native";
import { Banner } from "../banner";
import { Divider, HSpacer, VSpacer } from "../layout";
import { IOPictogramsBleed } from "../pictograms";
import { Body, bodyFontSize, bodyLineHeight } from "../typography/Body";
import { BodyMonospace } from "../typography/BodyMonospace";
import { h1FontSize, h1LineHeight } from "../typography/H1";
import { h2FontSize, h2LineHeight } from "../typography/H2";
import { h3FontSize, h3LineHeight } from "../typography/H3";
import { h4FontSize, h4LineHeight } from "../typography/H4";
import { h5FontSize, h5LineHeight } from "../typography/H5";
import { h6FontSize, h6LineHeight } from "../typography/H6";
import { IOText } from "../typography/IOText";
import { ImageRenderer } from "./ImageRenderer";
import type {
  MarkdownNode,
  MarkdownNodeType,
  RenderContext,
  RenderRule
} from "./types";

/* ─── Heading config ─── */

type HeadingConfig = {
  size: number;
  lineHeight: number;
};

const headingConfigMap: Record<string, HeadingConfig> = {
  heading1: { size: h1FontSize, lineHeight: h1LineHeight },
  heading2: { size: h2FontSize, lineHeight: h2LineHeight },
  heading3: { size: h3FontSize, lineHeight: h3LineHeight },
  heading4: { size: h4FontSize, lineHeight: h4LineHeight },
  heading5: { size: h5FontSize, lineHeight: h5LineHeight },
  heading6: { size: h6FontSize, lineHeight: h6LineHeight }
};

/* ─── Inline flattening (shared between heading and paragraph rendering) ─── */

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
  nodes: ReadonlyArray<MarkdownNode>,
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
        return [...acc, { key: node.key, text: "\n", style: inherited }];

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

      case "code_inline":
        return [
          ...acc,
          { key: node.key, text: node.content ?? "", style: inherited }
        ];

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
  context: RenderContext,
  isCode?: boolean
): React.ReactNode => {
  if (isCode) {
    return <BodyMonospace key={segment.key}>{segment.text}</BodyMonospace>;
  }

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

/* ─── Block rendering helpers ─── */

/**
 * Renders a heading or paragraph block by flattening inline children
 * into styled segments.
 */
const renderTextBlock = (
  node: MarkdownNode,
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
      size={isHeading ? headingConfig.size : bodyFontSize}
      lineHeight={isHeading ? headingConfig.lineHeight : bodyLineHeight}
      weight={isHeading ? "Semibold" : "Regular"}
      color={isHeading ? context.headingColor : context.bodyColor}
    >
      {segments.map(seg => {
        const matchingNode = node.children.find(c => c.key === seg.key);
        const isCode = matchingNode?.type === "code_inline";
        return renderSegment(seg, context, isCode);
      })}
    </IOText>
  );
};

/* ─── List helpers ─── */

const BULLET_FULL = "\u2022";

/* ─── Blockquote / Banner helpers ─── */

const PICTOGRAM_REGEXP = /^\s*\[!(.*?)\]/;
const HEADING_REGEXP = /^#{1,6}\s+(.+)/m;

/**
 * Extracts pictogram name from blockquote raw content.
 * Format: `>[!pictogramName]`
 */
const extractPictogramName = (raw: string): IOPictogramsBleed => {
  const match = PICTOGRAM_REGEXP.exec(raw);
  const value = match?.[1];
  const isValid = value != null && value in IOPictogramsBleed;
  return isValid ? (value as IOPictogramsBleed) : "notification";
};

/**
 * Extracts title from blockquote raw content.
 * Format: `># Title text`
 */
const extractBannerTitle = (raw: string): string | undefined => {
  const match = HEADING_REGEXP.exec(raw);
  return match?.[1]?.trim();
};

/**
 * Extracts body content from blockquote, removing pictogram and heading lines.
 */
const extractBannerContent = (raw: string): string =>
  raw
    .replace(new RegExp(PICTOGRAM_REGEXP.source, "g"), "")
    .replace(new RegExp(HEADING_REGEXP.source, "gm"), "")
    .replace(/^>*/gm, "")
    .trim();

/* ─── HTML helpers ─── */

const isBrTag = (content: string): boolean => {
  const match = content.match(/<([^\s/>]+)\s*\/?>/);
  return match?.[1] === "br";
};

/* ─── Default render rules ─── */

const makeHeadingRule = (): RenderRule => (node, _renderChildren, context) =>
  renderTextBlock(node, context);

const paragraphRule: RenderRule = (node, _renderChildren, context) =>
  renderTextBlock(node, context);

const textRule: RenderRule = node => (
  <Fragment key={node.key}>{node.content ?? ""}</Fragment>
);

const strongRule: RenderRule = (node, renderChildren) => (
  <IOText key={node.key} weight="Semibold">
    {renderChildren(node.children)}
  </IOText>
);

const emRule: RenderRule = (node, renderChildren) => (
  <IOText key={node.key} fontStyle="italic">
    {renderChildren(node.children)}
  </IOText>
);

const linkRule: RenderRule = (node, renderChildren, context) => {
  const href = node.attributes?.href;
  return (
    <IOText
      key={node.key}
      color={context.linkColor}
      onPress={href ? () => context.onLinkPress?.(href) : undefined}
      accessibilityRole="link"
      textStyle={{ textDecorationLine: "underline" }}
    >
      {renderChildren(node.children)}
    </IOText>
  );
};

const softbreakRule: RenderRule = node => (
  <Fragment key={node.key}>{"\n"}</Fragment>
);

const hardbreakRule: RenderRule = node => (
  <Fragment key={node.key}>{"\n"}</Fragment>
);

const bulletListRule: RenderRule = (node, renderChildren) => (
  <View
    key={node.key}
    accessible={true}
    accessibilityRole="list"
    style={{ paddingLeft: 12 }}
  >
    <VSpacer size={8} />
    {node.children.map(child => (
      <View key={child.key} style={{ flexDirection: "row" }}>
        <Body>{BULLET_FULL}</Body>
        <HSpacer size={8} />
        <View style={{ flex: 1, flexShrink: 1 }}>
          {renderChildren(child.children)}
        </View>
      </View>
    ))}
    <VSpacer size={8} />
  </View>
);

const orderedListRule: RenderRule = (node, renderChildren) => (
  <View
    key={node.key}
    accessible={true}
    accessibilityRole="list"
    style={{ paddingLeft: 12 }}
  >
    <VSpacer size={8} />
    {node.children.map((child, i) => (
      <View key={child.key} style={{ flexDirection: "row" }}>
        <Body>{i + 1}.</Body>
        <HSpacer size={8} />
        <View style={{ flex: 1, flexShrink: 1 }}>
          {renderChildren(child.children)}
        </View>
      </View>
    ))}
    <VSpacer size={8} />
  </View>
);

const listItemRule: RenderRule = (node, renderChildren) => (
  <View key={node.key} style={{ flex: 1, flexShrink: 1 }}>
    {renderChildren(node.children)}
  </View>
);

const blockquoteRule: RenderRule = node => {
  // Collect raw text from all descendant text/paragraph nodes
  const collectRawText = (n: MarkdownNode): string => {
    if (n.content) {
      return n.content;
    }
    return n.children.map(collectRawText).join("\n");
  };

  const rawContent = node.raw || collectRawText(node);
  const pictogramName = extractPictogramName(rawContent);
  const title = extractBannerTitle(rawContent);
  const content = extractBannerContent(rawContent);

  return (
    <Banner
      key={node.key}
      pictogramName={pictogramName}
      color="neutral"
      title={title}
      content={content || undefined}
    />
  );
};

const imageRule: RenderRule = node => (
  <View key={node.key} style={{ marginVertical: 16 }}>
    <ImageRenderer node={node} />
  </View>
);

const codeInlineRule: RenderRule = node => (
  <BodyMonospace key={node.key}>{node.content ?? ""}</BodyMonospace>
);

const fenceRule: RenderRule = node => (
  <Body key={node.key}>{node.content ?? ""}</Body>
);

const hrRule: RenderRule = node => <Divider key={node.key} />;

const htmlBlockRule: RenderRule = node => {
  if (node.content && isBrTag(node.content)) {
    return <Fragment key={node.key}>{"\n"}</Fragment>;
  }
  return null;
};

const htmlInlineRule: RenderRule = node => {
  if (node.content && isBrTag(node.content)) {
    return <Fragment key={node.key}>{"\n"}</Fragment>;
  }
  return null;
};

/**
 * The complete set of default render rules for all supported node types.
 */
export const DEFAULT_RULES: Record<MarkdownNodeType, RenderRule> = {
  heading1: makeHeadingRule(),
  heading2: makeHeadingRule(),
  heading3: makeHeadingRule(),
  heading4: makeHeadingRule(),
  heading5: makeHeadingRule(),
  heading6: makeHeadingRule(),
  paragraph: paragraphRule,
  text: textRule,
  strong: strongRule,
  em: emRule,
  link: linkRule,
  softbreak: softbreakRule,
  hardbreak: hardbreakRule,
  bullet_list: bulletListRule,
  ordered_list: orderedListRule,
  list_item: listItemRule,
  blockquote: blockquoteRule,
  image: imageRule,
  code_inline: codeInlineRule,
  fence: fenceRule,
  hr: hrRule,
  html_block: htmlBlockRule,
  html_inline: htmlInlineRule
};
