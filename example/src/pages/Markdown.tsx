import {
  IOMarkdownLite,
  ListItemHeader,
  VSpacer
} from "@pagopa/io-app-design-system";
import { Alert } from "react-native";
import { Screen } from "../components/Screen";

/* ─── Headings ─── */

const HEADINGS = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`;

/* ─── Inline styles ─── */

const INLINE_STYLES = `This is **bold text** and this is *italic text*.

You can combine **bold and *italic* together** in a sentence.

This sentence has ***bold italic*** applied to a single phrase.`;

/* ─── Links ─── */

const LINKS_BASIC = `Visit the [IO App website](https://io.italia.it) for more information.

You can also check [PagoPA](https://www.pagopa.it) for payment services.`;

const LINKS_WITH_STYLES = `Read the **[terms and conditions](https://io.italia.it/terms)** carefully before proceeding.

For details see the *[privacy policy](https://io.italia.it/privacy)* on our website.

Review the ***[complete documentation](https://io.italia.it/docs)*** for all features.`;

const LINKS_IN_CONTEXT = `To activate SPID, visit [the official SPID page](https://www.spid.gov.it) and follow the instructions. If you need help, contact [SPID support](https://www.spid.gov.it/supporto) or write to [assistenza@spid.gov.it](mailto:assistenza@spid.gov.it).`;

const LINKS_ADJACENT = `[First link](https://example.com/1) and [second link](https://example.com/2) appear side by side.

Here is a [link](https://example.com) followed by **bold text** and then *italic text*.`;

/* ─── Accessibility: heading hierarchy ─── */

const A11Y_HEADING_HIERARCHY = `# Main title of the page

This paragraph provides context under the main title.

## First section

Content of the first section goes here.

### Subsection 1.1

More detailed content nested under the first section.

## Second section

Content of the second section, at the same level as the first.`;

/* ─── Accessibility: links with meaningful labels ─── */

const A11Y_LINKS = `Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835) or the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app).

For assistance, visit the [IO help center](https://io.italia.it/aiuto) or call [support at 06 1234 5678](tel:+390612345678).`;

/* ─── Long-form content ─── */

const LONG_FORM = `# How to activate a digital service

## Prerequisites

Before you begin, make sure you have your **SPID credentials** or your **CIE** (Carta d'Identità Elettronica) ready. If you don't have SPID yet, visit [the SPID activation page](https://www.spid.gov.it/richiedi-spid) to get started.

## Step 1: Access the service

Open the IO app and navigate to the *Services* section. Search for the service you want to activate and tap on it.

## Step 2: Confirm your identity

You will be asked to verify your identity. Follow the on-screen instructions to complete the authentication with **SPID** or **CIE**.

## Step 3: Review and confirm

Carefully read the **[terms of service](https://io.italia.it/terms)** and the *[privacy policy](https://io.italia.it/privacy)* before confirming.

If you encounter any issues, contact [IO support](https://io.italia.it/aiuto).`;

/* ─── Edge cases ─── */

const EDGE_CASES = `Single word paragraph.

A paragraph with a soft
break in the middle.

**Entirely bold paragraph with a [link inside](https://example.com) and more bold text.**

*Entirely italic paragraph with [another link](https://example.com) embedded.*`;

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

export const Markdown = () => (
  <Screen>
    <ListItemHeader label="Headings" />
    <IOMarkdownLite content={HEADINGS} />

    <ListItemHeader label="Inline styles" />
    <IOMarkdownLite content={INLINE_STYLES} />

    <ListItemHeader label="Links (basic)" />
    <IOMarkdownLite content={LINKS_BASIC} />

    <ListItemHeader label="Links (with styles)" />
    <IOMarkdownLite content={LINKS_WITH_STYLES} />

    <ListItemHeader label="Links (in context)" />
    <IOMarkdownLite content={LINKS_IN_CONTEXT} />

    <ListItemHeader label="Links (adjacent elements)" />
    <IOMarkdownLite content={LINKS_ADJACENT} />

    <ListItemHeader label="Links (custom onLinkPress)" />
    <IOMarkdownLite content={A11Y_LINKS} onLinkPress={onLinkPress} />

    <ListItemHeader label="Accessibility: heading hierarchy" />
    <IOMarkdownLite content={A11Y_HEADING_HIERARCHY} />

    <ListItemHeader label="Accessibility: meaningful link labels" />
    <IOMarkdownLite content={A11Y_LINKS} />

    <ListItemHeader label="Long-form content" />
    <IOMarkdownLite content={LONG_FORM} />

    <ListItemHeader label="Edge cases" />
    <IOMarkdownLite content={EDGE_CASES} />
    <VSpacer size={48} />
  </Screen>
);
