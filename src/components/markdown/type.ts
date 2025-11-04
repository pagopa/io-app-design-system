export type Tag =
  | "unknown"
  | "body"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "hr"
  | "strong"
  | "em"
  | "s"
  | "blockquote"
  | "bullet_list"
  | "ordered_list"
  | "list_item"
  | "code_inline"
  | "code_block"
  | "fence"
  | "table"
  | "thead"
  | "tbody"
  | "th"
  | "tr"
  | "td"
  | "link"
  | "blocklink"
  | "image"
  | "text"
  | "textgroup"
  | "paragraph"
  | "hardbreak"
  | "softbreak"
  | "pre"
  | "inline"
  | "span";

export type ASTNode = {
  type: Tag;
  sourceType?: string;
  key: string;
  content?: string;
  markup?: string;
  tokenIndex?: number;
  index?: number;
  attributes?: Record<string, any>;
  children: ReadonlyArray<ASTNode>;
};

export type NodeRenderParams = {
  node: ASTNode;
  children: ReadonlyArray<React.ReactNode>;
  parentNodes: ReadonlyArray<ASTNode>;
  styles: any;
};

export type LinkNodeRenderParams = NodeRenderParams & {
  onLinkPress?: (url: string) => boolean;
};

export type ImageNodeRenderParams = NodeRenderParams & {
  allowedImageHandlers?: ReadonlyArray<string>;
  defaultImageHandler?: string;
};

export type RenderRules = {
  [name in Exclude<Tag, "link" | "blocklink" | "image">]: (
    params: NodeRenderParams
  ) => React.ReactNode;
} & {
  link: (params: LinkNodeRenderParams) => React.ReactNode;
  blocklink: (params: LinkNodeRenderParams) => React.ReactNode;
  image: (params: ImageNodeRenderParams) => React.ReactNode;
};
