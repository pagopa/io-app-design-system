/* eslint-disable complexity */
import { uniqueId } from "lodash";
import React from "react";
import { renderRules } from "./rules";
import { ASTNode, LinkNodeRenderParams, RenderRules } from "./type";

const renderNode = (
  node: ASTNode,
  parentNodes: ReadonlyArray<ASTNode>,
  rules: RenderRules,
  onLinkPress?: LinkNodeRenderParams["onLinkPress"],
  isRoot: boolean = false
): React.ReactNode => {
  const renderFunction = rules[node.type] || rules.unknown;

  let str = "";

  for (let a = 0; a < parentNodes.length; a++) {
    str = str + "-";
  }

  console.log(`${str}${node.type}`);

  // eslint-disable-next-line functional/no-let
  const children = node.children.map(value =>
    renderNode(value, [node, ...parentNodes], rules)
  );

  // render any special types of nodes that have different renderRule function signatures
  if (node.type === "link" || node.type === "blocklink") {
    return renderFunction({
      node,
      children,
      parentNodes,
      styles: {}, // TODO: pass actual styles
      onLinkPress
    });
  }

  if (node.type === "image") {
    return renderFunction({
      node,
      children,
      parentNodes,
      styles: {}, // TODO: pass actual styles
      allowedImageHandlers: [], // TODO: pass actual allowedImageHandlers
      defaultImageHandler: "" // TODO : pass actual defaultImageHandler
    });
  }

  // render anythign else that has a normal signature

  return renderFunction({
    node,
    children,
    parentNodes,
    styles: {} // TODO: pass actual styles
  });
};

export const render = (
  nodes: Array<ASTNode>,
  customRules?: Partial<RenderRules>,
  onLinkPress?: LinkNodeRenderParams["onLinkPress"]
): React.ReactNode => {
  const rules = { ...renderRules, ...customRules };
  const rootNode: ASTNode = {
    type: "paragraph",
    key: uniqueId("md_root_"),
    children: nodes
  };
  return renderNode(rootNode, [], rules, onLinkPress, true);
};
