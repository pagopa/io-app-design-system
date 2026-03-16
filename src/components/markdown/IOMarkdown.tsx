import { useCallback, useMemo } from "react";
import { Linking, View } from "react-native";
import { useIOTheme } from "../../context";
import { parse } from "./parser";
import { DEFAULT_RULES } from "./rules";
import type {
  IOMarkdownProps,
  MarkdownNode,
  MarkdownNodeType,
  RenderContext,
  RenderRule
} from "./types";

/**
 * Full-featured markdown component that renders markdown content
 * using design system primitives.
 *
 * Supports headings, paragraphs, bold, italic, links, lists,
 * blockquotes (as Banner), images, code, horizontal rules, and HTML breaks.
 *
 * Individual node types can be disabled via `disabledRules`, and
 * render rules can be overridden via the `rules` prop.
 */
export const IOMarkdown = ({
  content,
  onLinkPress,
  testID,
  disabledRules,
  rules = {}
}: IOMarkdownProps) => {
  const theme = useIOTheme();

  const ast = useMemo(
    () => parse(content, disabledRules),
    [content, disabledRules]
  );

  const handleLinkPress = useCallback(
    (url: string) => {
      if (onLinkPress) {
        onLinkPress(url);
      } else {
        Linking.openURL(url).catch(() => null);
      }
    },
    [onLinkPress]
  );

  const context = useMemo<RenderContext>(
    () => ({
      onLinkPress: handleLinkPress,
      bodyColor: theme["textBody-default"],
      linkColor: theme["interactiveElem-default"]
    }),
    [handleLinkPress, theme]
  );

  const mergedRules = useMemo<Record<MarkdownNodeType, RenderRule>>(
    () => ({ ...DEFAULT_RULES, ...rules }),
    [rules]
  );

  const renderChildren = useCallback(
    (nodes: ReadonlyArray<MarkdownNode>) =>
      nodes.map(node => {
        const rule = mergedRules[node.type];
        return rule ? rule(node, renderChildren, context) : null;
      }),
    [mergedRules, context]
  );

  const rendered = renderChildren(ast);

  return (
    <View style={{ gap: 8 }} testID={testID}>
      {rendered}
    </View>
  );
};
