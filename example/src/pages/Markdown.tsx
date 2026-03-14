import {
  ContentWrapper,
  IOMarkdown,
  IOMarkdownLite,
  TabItem,
  TabNavigation,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useMemo, useState } from "react";
import { Alert } from "react-native";
import { NoMarginScreen } from "../components/Screen";

const EXAMPLE_MARKDOWN = `

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Overview

This guide walks you through activating a service on the **IO app**. Each step is designed to be accessible with *VoiceOver* and *TalkBack*.

Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835) or the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app). Read the **[terms and conditions](https://io.italia.it/terms)** and the *[privacy policy](https://io.italia.it/privacy)* before continuing.

### Heading levels

#### Sub-subsection heading

##### Minor heading

###### Smallest heading

## Complex formatting

This paragraph has ***bold italic text*** mixed with regular words. You can also nest styles: **this is bold with *italic inside* it** and *this is italic with **bold inside** it*.

**Entirely bold paragraph with a [link inside](https://io.italia.it) and more bold text.**

*Entirely italic paragraph with [another link](https://io.italia.it/privacy) embedded in it.*

A paragraph with **bold**, *italic*, [a link](https://io.italia.it), ***bold italic***, and \`inline code\` all together in the same sentence.

Read the **[terms and conditions](https://io.italia.it/terms)**, see the *[privacy policy](https://io.italia.it/privacy)*, and review the ***[complete documentation](https://io.italia.it/docs)*** for all features.

[First link](https://example.com/1) and [second link](https://example.com/2) placed side by side, followed by **bold text** and then *italic text* in the same line.

## What you need

Before you begin, make sure you have:

- A valid **SPID** or **CIE** credential
- The latest version of the [IO app](https://io.italia.it)
- An active internet connection
- A device running *iOS 16+* or *Android 10+*

## Activation steps

Follow these steps:

1. Open the **IO app** and go to the *Services* section
2. Search for the service you want to activate
3. Tap **Activate** and follow the on-screen instructions
4. Confirm your identity using [SPID](https://www.spid.gov.it) or CIE
5. Review the terms and tap **Confirm**

>[!notification]
># Confirmation
>You will receive a push notification and an email confirming the activation.

>[!attention]
># Identity verification required
>Some services require additional identity verification before activation. Check your email for instructions.

## Screenshots

Below is an example of the service detail screen:

![Service detail screen (300×500)](https://picsum.photos/300/500)

Here are several images with different aspect ratios:

![Wide landscape (600×200)](https://picsum.photos/600/200)

![Small square (200×200)](https://picsum.photos/200/200)

![Tall portrait (200×400)](https://picsum.photos/200/400)

## Technical notes

Use \`adb logcat\` to view Android device logs. The configuration file is located at \`~/.config/io-app/settings.json\`.

Example API response:

\`\`\`
{
  "service_id": "svc_12345",
  "status": "active",
  "activated_at": "2026-03-13T10:00:00Z"
}
\`\`\`

## Troubleshooting

If you encounter problems:

- Ensure the app is **up to date**
- Verify your *internet connection* is stable
- Try restarting the app
- Contact [IO support](https://io.italia.it/aiuto) for help

---

The Italian digital public services ecosystem is built around several key components. The [IO app](https://io.italia.it) serves as the primary citizen-facing interface, allowing users to receive messages, make payments through [PagoPA](https://www.pagopa.it), and manage their digital identity. Authentication is handled through **SPID** ([Sistema Pubblico di Identità Digitale](https://www.spid.gov.it)), which provides three levels of identity assurance, or through the **CIE** (*Carta d'Identità Elettronica*), which uses NFC technology for secure authentication. Citizens can access a wide range of services from both local and national administrations, including tax payments, health services, school enrollment, and municipal certificates, all from a single application.

For developers and service providers, the [IO Developer Portal](https://developer.io.italia.it) offers comprehensive API documentation, sandbox environments, and integration guides. Services are onboarded through a structured process that ensures compliance with accessibility standards, data protection regulations under **GDPR**, and the [AgID guidelines](https://www.agid.gov.it) for digital public services. The platform supports both *push notifications* and *in-app messaging*, with end-to-end encryption for sensitive communications. Technical support is available through the [IO help center](https://io.italia.it/aiuto) and the developer community on [GitHub](https://github.com/pagopa/io-app). Every ***public administration*** in Italy can publish services on the platform, making IO the single ***digital front door*** for citizens interacting with their government.

>[!settings]
># Notification preferences
>You can configure push notifications, email alerts, and in-app messages in the Settings section.

*Last updated: March 2026*`;

const MARKDOWN_IT_DEMO = `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`;

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

export const Markdown = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const content = useMemo(() => {
    switch (selectedTab) {
      case 0:
        return (
          <IOMarkdown content={EXAMPLE_MARKDOWN} onLinkPress={onLinkPress} />
        );
      case 1:
        return (
          <IOMarkdownLite
            content={EXAMPLE_MARKDOWN}
            onLinkPress={onLinkPress}
          />
        );
      case 2:
        return (
          <IOMarkdown content={MARKDOWN_IT_DEMO} onLinkPress={onLinkPress} />
        );
      default:
        return "";
    }
  }, [selectedTab]);

  return (
    <NoMarginScreen>
      <VSpacer size={16} />
      <TabNavigation
        selectedIndex={selectedTab}
        onItemPress={setSelectedTab}
        tabAlignment="start"
      >
        <TabItem label="Full" accessibilityLabel="Full markdown" />
        <TabItem label="Lite" accessibilityLabel="Lite markdown" />
        <TabItem
          label="Full (Markdown-it demo)"
          accessibilityLabel="Lite markdown"
        />
      </TabNavigation>
      <ContentWrapper style={{ paddingVertical: 16 }}>{content}</ContentWrapper>
    </NoMarginScreen>
  );
};
