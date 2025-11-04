import React from "react";
import { Text, View } from "react-native";
import { H1, H2, H3, H4, H5, H6, IOText } from "../typography";
import { RenderRules } from "./type";

export const renderRules: RenderRules = {
  // Unknown elements returns null to avoid rendering crashes
  unknown: () => null,

  // The main container
  body: ({ node, children }) => <View key={node.key}>{children}</View>,

  // Headings
  heading1: ({ node, children }) => (
    <H1 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H1>
  ),
  heading2: ({ node, children }) => (
    <H2 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H2>
  ),
  heading3: ({ node, children }) => (
    <H3 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H3>
  ),
  heading4: ({ node, children }) => (
    <H4 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H4>
  ),
  heading5: ({ node, children }) => (
    <H5 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H5>
  ),
  heading6: ({ node, children }) => (
    <H6 key={node.key} style={{ flexDirection: "row" }}>
      {children}
    </H6>
  ),

  // Horizontal Rule
  hr: () => null,

  // Emphasis
  strong: ({ node, children, styles }) => (
    <Text key={node.key} style={{ fontWeight: "bold" }}>
      {children}
    </Text>
  ),
  em: ({ node, children }) => (
    <IOText key={node.key} fontStyle="italic">
      {children}
    </IOText>
  ),
  s: ({ node, children }) => <IOText key={node.key}>{children}</IOText>,

  // Blockquotes
  blockquote: () => null,

  // Lists
  bullet_list: () => null,
  ordered_list: () => null,
  list_item: () => null,

  // Code
  code_inline: () => null,
  code_block: () => null,
  fence: () => null,

  // Tables
  table: () => null,
  thead: () => null,
  tbody: () => null,
  th: () => null,
  tr: () => null,
  td: () => null,

  // Links
  link: () => null,
  blocklink: () => null,

  // Images
  image: () => null,

  // Text Output
  text: ({ node, styles }) => <Text key={node.key}>{node.content}</Text>,
  textgroup: ({ node, children }) => <Text key={node.key}>{children}</Text>,
  paragraph: ({ node, children }) => (
    <View
      key={node.key}
      style={{
        borderColor: "red",
        borderWidth: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%"
      }}
    >
      {children}
    </View>
  ),
  hardbreak: ({ node }) => <Text key={node.key}>{"\n"}</Text>,
  softbreak: ({ node }) => <Text key={node.key}>{"\n"}</Text>,

  // For completeness
  pre: ({ node, children }) => <Text key={node.key}>{children}</Text>,
  inline: ({ node, children }) => <Text key={node.key}>{children}</Text>,
  span: ({ node, children }) => <Text key={node.key}>{children}</Text>
};
