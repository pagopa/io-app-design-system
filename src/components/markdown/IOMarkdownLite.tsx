import { IOMarkdown } from "./IOMarkdown";
import { LITE_DISABLED_TYPES } from "./parser";
import type { IOMarkdownLiteProps } from "./types";

/**
 * Lightweight markdown component supporting only headings,
 * paragraphs, bold, italic, links, and line breaks.
 *
 * This is a thin wrapper around `IOMarkdown` with extra node types
 * (lists, blockquotes, images, code, etc.) disabled.
 */
export const IOMarkdownLite = (props: IOMarkdownLiteProps) => (
  <IOMarkdown {...props} disabledRules={LITE_DISABLED_TYPES} />
);
