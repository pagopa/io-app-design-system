/* eslint-disable arrow-body-style */
import { useMemo } from "react";
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
