import {
  IOMarkdownLite,
  ListItemHeader,
  VSpacer
} from "@pagopa/io-app-design-system";
import { Alert } from "react-native";
import { Screen } from "../components/Screen";

const HEADINGS = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`;

const PARAGRAPHS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.

Cras venenatis euismod malesuada. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`;

const BOLD_AND_ITALIC = `This is **bold text** and this is *italic text*.

This is ***bold and italic*** together.

A paragraph with **multiple bold** words and *multiple italic* words mixed together.`;

const LINKS = `Visit [the project homepage](https://github.com/pagopa/io-app-design-system) or [the other project homepage](https://github.com/pagopa/io-app-design-system) for more info.

You can also check [another link](https://example.com) here.`;

const MIXED_CONTENT = `## Introduction

Welcome to the **IO App Design System**. This component renders *lightweight markdown* safely.

For more details, visit the [documentation](https://github.com/pagopa/io-app-design-system).

### Features

The component supports **bold**, *italic*, and [links](https://example.com) within paragraphs.`;

const UNSUPPORTED_CONTENT = `This paragraph is visible.

- This list item should be skipped
- This one too

This paragraph is also visible.

> This blockquote should be skipped

![This image should be skipped](https://example.com/image.png)

\`\`\`
This code block should be skipped
\`\`\`

---

Final visible paragraph after all unsupported content.`;

export const MarkdownLite = () => (
  <Screen>
    <ListItemHeader label="Headings" />
    <IOMarkdownLite content={HEADINGS} />
    <VSpacer size={24} />

    <ListItemHeader label="Paragraphs" />
    <IOMarkdownLite content={PARAGRAPHS} />
    <VSpacer size={24} />

    <ListItemHeader label="Bold & Italic" />
    <IOMarkdownLite content={BOLD_AND_ITALIC} />
    <VSpacer size={24} />

    <ListItemHeader label="Links" />
    <IOMarkdownLite
      content={LINKS}
      onLinkPress={url => Alert.alert("Link pressed", url)}
    />
    <VSpacer size={24} />

    <ListItemHeader label="Mixed Content" />
    <IOMarkdownLite content={MIXED_CONTENT} />
    <VSpacer size={24} />

    <ListItemHeader label="Unsupported Content (Skipped)" />
    <IOMarkdownLite content={UNSUPPORTED_CONTENT} />
    <VSpacer size={48} />
  </Screen>
);
