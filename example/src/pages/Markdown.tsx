import {
  IOMarkdownLite,
  ListItemHeader,
  VSpacer
} from "@pagopa/io-app-design-system";
import React from "react";
import { Screen } from "../components/Screen";

const ALL = `# Lorem Ipsum

## Introduction

Lorem ipsum dolor sit amet, *consectetur **adipiscing** elit*. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 

### History

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. [Learn more about the history of Lorem Ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum).

## Examples of Use

1. **Graphic Design**
    - Lorem ipsum dolor sit amet
    - Consectetur adipiscing elit
2. **Typography**
    - Vivamus lacinia odio vitae vestibulum
    - Cras venenatis euismod malesuada
3. **Web Development**
    - *Frontend*: HTML, CSS, JavaScript
    - *Backend*: Python, Ruby, Node.js

### Graphic Design

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

### Typography

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Vivamus lacinia odio vitae vestibulum vestibulum.
- Cras venenatis euismod malesuada.

### Web Development

1. *Frontend*
    - HTML
    - CSS
    - JavaScript
2. *Backend*
    - Python
    - Ruby
    - Node.js

## Conclusion

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.`;

const HEADINGS = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`;

const BANNER = `>[!settings]
># Settings
>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const LIST = `## Unordered list
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Vivamus lacinia odio vitae vestibulum vestibulum.
- Cras venenatis euismod malesuada.

## Ordered list
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Vivamus lacinia odio vitae vestibulum vestibulum.
3. Cras venenatis euismod malesuada.

## Nested list
1. **Graphic Design**
    - Lorem ipsum dolor sit amet
    - Consectetur adipiscing elit
2. **Typography**
    - Vivamus lacinia odio vitae vestibulum
    - Cras venenatis euismod malesuada
3. **Web Development**
    - *Frontend*: HTML, CSS, JavaScript
    - *Backend*: Python, Ruby, Node.js`;

const PARAGRAPH = `Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
Praesent commodo cursus magna, _vel scelerisque nisl consectetur et_. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
Curabitur blandit tempus porttitor. **_Nullam quis risus eget urna mollis ornare vel eu leo_**. Sed posuere consectetur est at lobortis.
Vestibulum id ligula porta felis euismod semper. _Cras justo odio_, dapibus ac facilisis in, egestas eget quam. 
Maecenas faucibus mollis interdum. **Donec ullamcorper nulla non metus auctor fringilla**.`;
const LINK = "[This is a link](type_here_your_URL)";

export const Markdown = () => (
  <Screen>
    <ListItemHeader label="All" />
    <IOMarkdownLite content={ALL} />
    <ListItemHeader label="Headings" />
    <IOMarkdownLite content={HEADINGS} />
    <ListItemHeader label="Banners" />
    <IOMarkdownLite content={BANNER} />
    <ListItemHeader label="List" />
    <IOMarkdownLite content={LIST} />
    <ListItemHeader label="Paragraph" />
    <IOMarkdownLite content={PARAGRAPH} />
    <ListItemHeader label="Link" />
    <IOMarkdownLite content={LINK} />
    <VSpacer size={48} />
  </Screen>
);
