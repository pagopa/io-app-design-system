/* eslint-disable arrow-body-style */
import React, { useMemo } from "react";
import { Markdown } from "react-native-remark";
import { parse } from "./parser";
import { render } from "./renderer";
import { LinkNodeRenderParams, RenderRules } from "./type";

export type IOMarkdownProps = {
  content: string;
  rules?: Partial<RenderRules>;
  onLinkPress?: LinkNodeRenderParams["onLinkPress"];
};

/**
 * Component to render markdown content.
 */
export const IOMarkdown = ({ content, rules }: IOMarkdownProps) => {
  const tree = useMemo(() => parse(content), [content]);
  return render(tree, rules);
};

/**
 * Lighter version of IOMarkdown that only parses and renders a limited set of markdown features.
 */
export const IOMarkdownLite = ({ content, rules }: IOMarkdownProps) => {
  const tree = useMemo(() => parse(content), [content]);
  return render(tree, rules);
};
