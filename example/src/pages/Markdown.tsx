import {
  ContentWrapper,
  IOMarkdown,
  IOMarkdownLite,
  TabItem,
  TabNavigation,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useState } from "react";
import { Alert } from "react-native";
import { NoMarginScreen } from "../components/Screen";

export const EXAMPLE_MARKDOWN = `# How to activate a digital service

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

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

export const Markdown = () => {
  const [selectedTab, setSelectedTab] = useState(0);

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
      </TabNavigation>
      <ContentWrapper style={{ paddingVertical: 16 }}>
        {selectedTab === 0 ? (
          <IOMarkdown content={EXAMPLE_MARKDOWN} onLinkPress={onLinkPress} />
        ) : (
          <IOMarkdownLite
            content={EXAMPLE_MARKDOWN}
            onLinkPress={onLinkPress}
          />
        )}
      </ContentWrapper>
    </NoMarginScreen>
  );
};
