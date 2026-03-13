import {
  IOMarkdown,
  ListItemHeader,
  VSpacer
} from "@pagopa/io-app-design-system";
import { Alert } from "react-native";
import { Screen } from "../components/Screen";

/* ─── Headings: full hierarchy for screen reader navigation ─── */

const HEADINGS = `# Main page title

## Section heading

### Subsection heading

#### Sub-subsection heading

##### Minor heading

###### Smallest heading`;

/* ─── Inline formatting ─── */

const INLINE_FORMATTING = `This paragraph contains **bold text**, *italic text*, and ***bold italic text***.

You can nest styles: **this is bold with *italic inside* it**.

Plain text flows naturally between styled phrases.`;

/* ─── Links with accessible labels ─── */

const ACCESSIBLE_LINKS = `Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835) or the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app).

Visit the [IO help center](https://io.italia.it/aiuto) for assistance.

Read the **[terms and conditions](https://io.italia.it/terms)** and the *[privacy policy](https://io.italia.it/privacy)* before continuing.`;

/* ─── Unordered list ─── */

const UNORDERED_LIST = `Before you begin, make sure you have:

- A valid **SPID** or **CIE** credential
- The latest version of the [IO app](https://io.italia.it)
- An active internet connection
- A device running *iOS 16+* or *Android 10+*`;

/* ─── Ordered list ─── */

const ORDERED_LIST = `Follow these steps to activate a service:

1. Open the **IO app** and go to the *Services* section
2. Search for the service you want to activate
3. Tap **Activate** and follow the on-screen instructions
4. Confirm your identity using [SPID](https://www.spid.gov.it) or CIE
5. Review the terms and tap **Confirm**`;

/* ─── Nested list ─── */

const NESTED_LIST = `Available authentication methods:

1. **SPID** (Sistema Pubblico di Identità Digitale)
    - Level 1: username and password
    - Level 2: username, password, and OTP
    - Level 3: smart card or digital certificate
2. **CIE** (Carta d'Identità Elettronica)
    - Requires NFC-enabled device
    - PIN provided at issuance
3. **eIDAS** (for EU citizens)
    - Depends on your country's eID scheme`;

/* ─── Blockquote / Banner with pictogram ─── */

const BANNER_SETTINGS = `>[!settings]
># Notification preferences
>You can configure push notifications, email alerts, and in-app messages in the Settings section.`;

const BANNER_NOTIFICATION = `>[!notification]
># Update available
>A new version of the IO app is available. Update now to access the latest features and security fixes.`;

const BANNER_ATTENTION = `>[!attention]
># Identity verification required
>Some services require additional identity verification before activation. Check your email for instructions.`;

/* ─── Inline code ─── */

const CODE_INLINE = `Use \`adb logcat\` to view Android device logs.

The configuration file is at \`~/.config/io-app/settings.json\`.

Call \`Linking.openURL(url)\` to open external links.`;

/* ─── Code block ─── */

const CODE_BLOCK = `Example API response:

\`\`\`
{
  "service_id": "svc_12345",
  "status": "active",
  "activated_at": "2026-03-13T10:00:00Z"
}
\`\`\``;

/* ─── Horizontal rule ─── */

const HORIZONTAL_RULE = `## First section

This content belongs to the first section.

---

## Second section

This content is visually separated from the first by a horizontal rule.`;

/* ─── Images ─── */

const IMAGE_SIMPLE = `![Placeholder image (200×200)](https://picsum.photos/200/200)`;

const IMAGE_WITH_CONTEXT = `## App screenshot

Below is an example banner image illustrating a wide landscape format:

![Wide landscape placeholder (600×200)](https://picsum.photos/600/200)

The image above should scale to fit the available width while preserving its aspect ratio.`;

const IMAGE_MULTIPLE = `### Image gallery

Here are several images with different dimensions:

![Small square (100×100)](https://picsum.photos/100/100)

![Wide rectangle (400×150)](https://picsum.photos/400/150)

![Tall rectangle (200×400)](https://picsum.photos/200/400)

Each image should respect its own aspect ratio and never exceed the screen width.`;

const IMAGE_INLINE_CONTENT = `## How to find your service ID

1. Open the **IO app** and go to *Services*
2. Tap the service you want to inspect

![Service detail screen (300×500)](https://picsum.photos/300/500)

3. The service ID is displayed at the bottom of the detail screen under \`service_id\`
4. Copy it and use it in the [developer portal](https://developer.io.italia.it)

>[!notification]
># Tip
>You can also retrieve the service ID via the REST API.`;

/* ─── Full document: real-world accessibility-focused content ─── */

const FULL_DOCUMENT = `# How to activate a digital service

## Overview

This guide walks you through activating a service on the **IO app**. Each step is designed to be accessible with VoiceOver and TalkBack.

## What you need

- A valid **SPID** or **CIE** credential
- The latest version of the [IO app](https://io.italia.it)
- An internet connection

## Activation steps

1. Open the IO app and navigate to *Services*
2. Search for the service by name or category
3. Tap the **Activate** button
4. Authenticate with [SPID](https://www.spid.gov.it) or CIE
5. Read the [terms of service](https://io.italia.it/terms) carefully
6. Tap **Confirm** to complete activation

>[!notification]
># Confirmation
>You will receive a push notification and an email confirming the activation.

## Troubleshooting

If you encounter problems:

- Ensure the app is **up to date**
- Verify your *internet connection* is stable
- Try restarting the app
- Contact [IO support](https://io.italia.it/aiuto) for help

For developers, check logs with \`adb logcat | grep IOApp\`.

---

*Last updated: March 2026*`;

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

/* ─── Long paragraphs ─── */

const LONG_PARAGRAPHS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.

Maecenas faucibus mollis interdum. **Donec ullamcorper nulla non metus auctor fringilla**. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. *Donec id elit non mi porta gravida at eget metus*. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`;

const LONG_PARAGRAPH_WITH_LINKS = `The Italian digital public services ecosystem is built around several key components. The [IO app](https://io.italia.it) serves as the primary citizen-facing interface, allowing users to receive messages, make payments through [PagoPA](https://www.pagopa.it), and manage their digital identity. Authentication is handled through **SPID** ([Sistema Pubblico di Identità Digitale](https://www.spid.gov.it)), which provides three levels of identity assurance, or through the **CIE** (*Carta d'Identità Elettronica*), which uses NFC technology for secure authentication. Citizens can access a wide range of services from both local and national administrations, including tax payments, health services, school enrollment, and municipal certificates, all from a single application.

For developers and service providers, the [IO Developer Portal](https://developer.io.italia.it) offers comprehensive API documentation, sandbox environments, and integration guides. Services are onboarded through a structured process that ensures compliance with accessibility standards, data protection regulations under **GDPR**, and the [AgID guidelines](https://www.agid.gov.it) for digital public services. The platform supports both *push notifications* and *in-app messaging*, with end-to-end encryption for sensitive communications. Technical support is available through the [IO help center](https://io.italia.it/aiuto) and the developer community on [GitHub](https://github.com/pagopa/io-app).`;

export const Markdown = () => (
  <Screen>
    <ListItemHeader label="Headings (H1–H6)" />
    <IOMarkdown content={HEADINGS} />

    <ListItemHeader label="Inline formatting" />
    <IOMarkdown content={INLINE_FORMATTING} />

    <ListItemHeader label="Links (accessible labels)" />
    <IOMarkdown content={ACCESSIBLE_LINKS} />

    <ListItemHeader label="Links (custom onLinkPress)" />
    <IOMarkdown content={ACCESSIBLE_LINKS} onLinkPress={onLinkPress} />

    <ListItemHeader label="Unordered list" />
    <IOMarkdown content={UNORDERED_LIST} />

    <ListItemHeader label="Ordered list" />
    <IOMarkdown content={ORDERED_LIST} />

    <ListItemHeader label="Nested list" />
    <IOMarkdown content={NESTED_LIST} />

    <ListItemHeader label="Banner (settings)" />
    <IOMarkdown content={BANNER_SETTINGS} />

    <ListItemHeader label="Banner (notification)" />
    <IOMarkdown content={BANNER_NOTIFICATION} />

    <ListItemHeader label="Banner (attention)" />
    <IOMarkdown content={BANNER_ATTENTION} />

    <ListItemHeader label="Inline code" />
    <IOMarkdown content={CODE_INLINE} />

    <ListItemHeader label="Code block" />
    <IOMarkdown content={CODE_BLOCK} />

    <ListItemHeader label="Horizontal rule" />
    <IOMarkdown content={HORIZONTAL_RULE} />

    <ListItemHeader label="Image (simple)" />
    <IOMarkdown content={IMAGE_SIMPLE} />

    <ListItemHeader label="Image with surrounding text" />
    <IOMarkdown content={IMAGE_WITH_CONTEXT} />

    <ListItemHeader label="Multiple images (different sizes)" />
    <IOMarkdown content={IMAGE_MULTIPLE} />

    <ListItemHeader label="Image within mixed content" />
    <IOMarkdown content={IMAGE_INLINE_CONTENT} onLinkPress={onLinkPress} />

    <ListItemHeader label="Long paragraphs" />
    <IOMarkdown content={LONG_PARAGRAPHS} />

    <ListItemHeader label="Long paragraph with links" />
    <IOMarkdown content={LONG_PARAGRAPH_WITH_LINKS} onLinkPress={onLinkPress} />

    <ListItemHeader label="Full document" />
    <IOMarkdown content={FULL_DOCUMENT} onLinkPress={onLinkPress} />
    <VSpacer size={48} />
  </Screen>
);
