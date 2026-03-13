import {
  IOMarkdownLite,
  ListItemHeader,
  VSpacer
} from "@pagopa/io-app-design-system";
import { Alert } from "react-native";
import { Screen } from "../components/Screen";

/* ─── Headings: proper semantic hierarchy ─── */

const HEADINGS = `# Main page title

## Section heading

### Subsection heading

#### Sub-subsection heading

##### Minor heading

###### Smallest heading`;

/* ─── Inline formatting ─── */

const INLINE_FORMATTING = `This paragraph contains **bold text**, *italic text*, and ***bold italic text***.

You can nest styles: **this is bold with *italic inside* it**.

Formatting can appear at the *start*, in the **middle**, or at the ***end***.`;

/* ─── Links: descriptive accessible labels ─── */

const LINKS_ACCESSIBLE = `Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835) or the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app).

For assistance, visit the [IO help center](https://io.italia.it/aiuto) or call [support at 06 1234 5678](tel:+390612345678).

Send an email to [io-support@pagopa.it](mailto:io-support@pagopa.it) for further help.`;

/* ─── Links combined with inline styles ─── */

const LINKS_WITH_STYLES = `Read the **[terms and conditions](https://io.italia.it/terms)** before proceeding.

See the *[privacy policy](https://io.italia.it/privacy)* for data handling details.

Review the ***[complete documentation](https://io.italia.it/docs)*** for all features.`;

/* ─── Links in running text ─── */

const LINKS_IN_CONTEXT = `To activate SPID, visit [the official SPID page](https://www.spid.gov.it) and follow the instructions. If you need help, contact [SPID support](https://www.spid.gov.it/supporto). More info is available on the [AgID website](https://www.agid.gov.it).`;

/* ─── Multiple adjacent links ─── */

const LINKS_ADJACENT = `[First link](https://example.com/1) and [second link](https://example.com/2) placed side by side.

Here is a [link](https://example.com) followed by **bold text** and then *italic text* in the same paragraph.`;

/* ─── Heading hierarchy for accessibility (screen reader navigation) ─── */

const A11Y_HEADING_HIERARCHY = `# Service activation

This page explains how to activate a digital service in the IO app.

## Prerequisites

Make sure you have **SPID** or **CIE** credentials ready.

### About SPID

SPID is the *Public Digital Identity System* used to access public services.

### About CIE

CIE is the *Electronic Identity Card* issued by Italian municipalities.

## Activation steps

Follow the instructions below to activate the service.

## Support

Contact [IO support](https://io.italia.it/aiuto) if you need help.`;

/* ─── Line breaks (soft break) ─── */

const LINE_BREAKS = `This paragraph has a soft
break in the middle.

This paragraph has a second line
and a third line
using multiple soft breaks.`;

/* ─── Unsupported tags gracefully ignored ─── */

const UNSUPPORTED_TAGS = `This paragraph renders fine.

- This list item is ignored by IOMarkdownLite
- So is this one

> This blockquote is also ignored.

This paragraph after unsupported content still renders correctly.`;

/* ─── Long-form realistic content ─── */

const LONG_FORM = `# Welcome to IO

## What is IO?

**IO** is the app of the Italian public services. It is a single point of access to interact with *local and national public administrations*.

## Key features

IO lets you receive **messages**, **pay notices**, and manage **documents** from public services — all from your smartphone.

Learn more on the [IO website](https://io.italia.it) or download the app from the [App Store](https://apps.apple.com/app/io/id1501681835) or [Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app).

## Getting started

To use IO, you need:

**SPID** or **CIE** credentials. Visit [the SPID page](https://www.spid.gov.it) to register.

Once logged in, the app will show available services based on your *municipality* and *fiscal code*.

## Need help?

Visit the [IO help center](https://io.italia.it/aiuto) or send an email to [io-support@pagopa.it](mailto:io-support@pagopa.it).`;

/* ─── Edge cases ─── */

const EDGE_CASES = `Single word.

**Entirely bold paragraph with a [link inside](https://example.com) and more bold text.**

*Entirely italic paragraph with [another link](https://example.com) embedded.*

A paragraph with **bold**, *italic*, [a link](https://example.com), and ***bold italic*** all together.`;

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

/* ─── Long paragraphs ─── */

const LONG_PARAGRAPHS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.

Maecenas faucibus mollis interdum. **Donec ullamcorper nulla non metus auctor fringilla**. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. *Donec id elit non mi porta gravida at eget metus*. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ut facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`;

const LONG_PARAGRAPH_WITH_LINKS = `The Italian digital public services ecosystem is built around several key components. The [IO app](https://io.italia.it) serves as the primary citizen-facing interface, allowing users to receive messages, make payments through [PagoPA](https://www.pagopa.it), and manage their digital identity. Authentication is handled through **SPID** ([Sistema Pubblico di Identità Digitale](https://www.spid.gov.it)), which provides three levels of identity assurance, or through the **CIE** (*Carta d'Identità Elettronica*), which uses NFC technology for secure authentication. Citizens can access a wide range of services from both local and national administrations, including tax payments, health services, school enrollment, and municipal certificates, all from a single application.

For developers and service providers, the [IO Developer Portal](https://developer.io.italia.it) offers comprehensive API documentation, sandbox environments, and integration guides. Services are onboarded through a structured process that ensures compliance with accessibility standards, data protection regulations under **GDPR**, and the [AgID guidelines](https://www.agid.gov.it) for digital public services. The platform supports both *push notifications* and *in-app messaging*, with end-to-end encryption for sensitive communications. Technical support is available through the [IO help center](https://io.italia.it/aiuto) and the developer community on [GitHub](https://github.com/pagopa/io-app).`;

export const MarkdownLite = () => (
  <Screen>
    <ListItemHeader label="Headings (H1–H6)" />
    <IOMarkdownLite content={HEADINGS} />

    <ListItemHeader label="Inline formatting" />
    <IOMarkdownLite content={INLINE_FORMATTING} />

    <ListItemHeader label="Links (accessible labels)" />
    <IOMarkdownLite content={LINKS_ACCESSIBLE} />

    <ListItemHeader label="Links (with inline styles)" />
    <IOMarkdownLite content={LINKS_WITH_STYLES} />

    <ListItemHeader label="Links (in running text)" />
    <IOMarkdownLite content={LINKS_IN_CONTEXT} />

    <ListItemHeader label="Links (adjacent)" />
    <IOMarkdownLite content={LINKS_ADJACENT} />

    <ListItemHeader label="Links (custom onLinkPress)" />
    <IOMarkdownLite content={LINKS_ACCESSIBLE} onLinkPress={onLinkPress} />

    <ListItemHeader label="Heading hierarchy (a11y)" />
    <IOMarkdownLite content={A11Y_HEADING_HIERARCHY} />

    <ListItemHeader label="Line breaks (soft break)" />
    <IOMarkdownLite content={LINE_BREAKS} />

    <ListItemHeader label="Unsupported tags (gracefully ignored)" />
    <IOMarkdownLite content={UNSUPPORTED_TAGS} />

    <ListItemHeader label="Long paragraphs" />
    <IOMarkdownLite content={LONG_PARAGRAPHS} />

    <ListItemHeader label="Long paragraph with links" />
    <IOMarkdownLite content={LONG_PARAGRAPH_WITH_LINKS} onLinkPress={onLinkPress} />

    <ListItemHeader label="Long-form content" />
    <IOMarkdownLite content={LONG_FORM} />

    <ListItemHeader label="Edge cases" />
    <IOMarkdownLite content={EDGE_CASES} />
    <VSpacer size={48} />
  </Screen>
);
