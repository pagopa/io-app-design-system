import {
  Body,
  BodySmall,
  ContentWrapper,
  Divider,
  H4,
  IOButton,
  IOColors,
  IOMarkdown,
  IOMarkdownLite,
  TabItem,
  TabNavigation,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  InteractionManager,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  LITE_DISABLED_TYPES,
  parse
} from "../../../src/components/markdown/parser";
import { MarkdownNodeType } from "../../../src/components/markdown/types";
import { NoMarginScreen } from "../components/Screen";

/* ── Benchmark content ─────────────────────────────────────────────── */

const SMALL_MARKDOWN = `# Welcome

This is a **simple** paragraph with *italic* and **bold** text.

Read the [documentation](https://io.italia.it) for more info.`;

const MEDIUM_MARKDOWN = `# Service Activation Guide

## Overview

This guide walks you through activating a service on the **IO app**. Each step is designed to be accessible with *VoiceOver* and *TalkBack*.

Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835) or the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app).

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

## Technical notes

Use \`adb logcat\` to view Android device logs. The configuration file is located at \`~/.config/io-app/settings.json\`.

Example API response:

\`\`\`
{
  "service_id": "svc_12345",
  "status": "active"
}
\`\`\``;

const LARGE_MARKDOWN = `# Comprehensive IO App Documentation

## Overview

This is the **complete documentation** for the IO app ecosystem. The [IO app](https://io.italia.it) serves as the primary citizen-facing interface, allowing users to receive messages, make payments through [PagoPA](https://www.pagopa.it), and manage their digital identity.

Authentication is handled through **SPID** ([Sistema Pubblico di Identità Digitale](https://www.spid.gov.it)), which provides three levels of identity assurance, or through the **CIE** (*Carta d'Identità Elettronica*), which uses NFC technology for secure authentication.

## Getting Started

### Prerequisites

Before you begin, make sure you have:

- A valid **SPID** or **CIE** credential
- The latest version of the [IO app](https://io.italia.it)
- An active internet connection
- A device running *iOS 16+* or *Android 10+*

### Installation

1. Download the [IO app from the App Store](https://apps.apple.com/app/io/id1501681835)
2. Or download the [IO app from Google Play](https://play.google.com/store/apps/details?id=it.pagopa.io.app)
3. Open the app and follow the on-screen setup wizard
4. Grant the necessary permissions for notifications
5. Complete your profile setup

## Service Activation

### Step-by-step guide

Follow these steps to activate a service:

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

### Available services

The platform provides access to a wide range of public services:

- **Tax payments** — Pay local and national taxes directly from the app
- **Health services** — Access your health records and book appointments
- **School enrollment** — Register for schools and educational programs
- **Municipal certificates** — Request and receive official documents
- **Transportation** — Purchase public transport tickets and passes

## Technical Reference

### API Configuration

Use \`adb logcat\` to view Android device logs. The configuration file is located at \`~/.config/io-app/settings.json\`.

Example API response:

\`\`\`
{
  "service_id": "svc_12345",
  "status": "active",
  "activated_at": "2026-03-13T10:00:00Z",
  "metadata": {
    "version": "2.0",
    "region": "eu-west-1"
  }
}
\`\`\`

### Authentication flow

The authentication process involves several steps:

1. User initiates login with **SPID** or **CIE**
2. The app redirects to the identity provider
3. User completes authentication on the provider's page
4. A secure token is returned to the app
5. The token is validated and stored securely

For more details, see the [developer documentation](https://developer.io.italia.it).

### Error handling

Common error codes and their meanings:

- \`AUTH_001\` — Invalid credentials provided
- \`AUTH_002\` — Session expired, please re-authenticate
- \`SVC_001\` — Service temporarily unavailable
- \`SVC_002\` — Service not available in your region
- \`PAY_001\` — Payment processing failed

## Screenshots

Below is an example of the service detail screen:

![Service detail screen (300×500)](https://picsum.photos/300/500)

Here are additional screenshots:

![Dashboard view (600×400)](https://picsum.photos/600/400)

![Settings screen (300×500)](https://picsum.photos/300/500)

## Troubleshooting

If you encounter problems:

- Ensure the app is **up to date**
- Verify your *internet connection* is stable
- Try restarting the app
- Clear the app cache in settings
- Contact [IO support](https://io.italia.it/aiuto) for help

>[!settings]
># Notification preferences
>You can configure push notifications, email alerts, and in-app messages in the Settings section.

---

The Italian digital public services ecosystem is built around several key components. The [IO app](https://io.italia.it) serves as the primary citizen-facing interface. For developers, the [IO Developer Portal](https://developer.io.italia.it) offers comprehensive API documentation, sandbox environments, and integration guides. Technical support is available through the [IO help center](https://io.italia.it/aiuto) and the developer community on [GitHub](https://github.com/pagopa/io-app). Every ***public administration*** in Italy can publish services on the platform, making IO the single ***digital front door*** for citizens interacting with their government.

*Last updated: March 2026*`;

/* ── Example content ───────────────────────────────────────────────── */

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

## Nested lists

The following example is included to exercise nested list styling across multiple levels:

- Parent bullet item
  - Nested bullet item
    - Third-level bullet item
    - Second third-level bullet item
  - Another nested bullet item
- Second parent bullet item

1. First ordered item
   1. Nested ordered item
      1. Third-level ordered item
      2. Second third-level ordered item
   2. Another nested ordered item
2. Second ordered item

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

/* ── Benchmark hook ────────────────────────────────────────────────── */

type Stats = {
  avg: number;
  min: number;
  max: number;
};

type BenchmarkResults = {
  parse: Stats;
};

type BenchmarkConfig = {
  content: string;
  iterations?: number;
  mode: "full" | "lite";
};

const computeStats = (times: Array<number>): Stats => {
  const min = Math.min(...times);
  const max = Math.max(...times);
  const avg = times.reduce((sum, t) => sum + t, 0) / times.length;
  return {
    avg: Math.round(avg * 100) / 100,
    min: Math.round(min * 100) / 100,
    max: Math.round(max * 100) / 100
  };
};

const useMarkdownBenchmark = () => {
  const [results, setResults] = useState<BenchmarkResults | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const abortRef = useRef(false);

  const run = useCallback(
    ({ content, iterations = 50, mode }: BenchmarkConfig) => {
      setIsRunning(true);
      setResults(null);
      // eslint-disable-next-line functional/immutable-data
      abortRef.current = false;

      const disabledRules: ReadonlyArray<MarkdownNodeType> | undefined =
        mode === "lite" ? LITE_DISABLED_TYPES : undefined;

      const measureBatch = (count: number): ReadonlyArray<number> =>
        Array.from({ length: count }, () => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: performance.now() is available in RN runtime
          const start = performance.now();
          parse(content, disabledRules);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: performance.now() is available in RN runtime
          return performance.now() - start;
        });

      // Use InteractionManager to avoid blocking UI
      void InteractionManager.runAfterInteractions(() => {
        const runBatch = (
          completed: ReadonlyArray<number>,
          remaining: number
        ) => {
          if (abortRef.current) {
            setIsRunning(false);
            return;
          }

          const batchSize = Math.min(10, remaining);
          const batchTimes = measureBatch(batchSize);
          const allTimes = [...completed, ...batchTimes];
          const left = remaining - batchSize;

          if (left > 0) {
            requestAnimationFrame(() => runBatch(allTimes, left));
          } else {
            setResults({ parse: computeStats(allTimes) });
            setIsRunning(false);
          }
        };

        requestAnimationFrame(() => runBatch([], iterations));
      });
    },
    []
  );

  return { results, isRunning, run };
};

/* ── Benchmark UI components ───────────────────────────────────────── */

const MODES = ["Full", "Lite"] as const;
const SIZES = ["Small", "Medium", "Large"] as const;

const contentMap: Record<(typeof SIZES)[number], string> = {
  Small: SMALL_MARKDOWN,
  Medium: MEDIUM_MARKDOWN,
  Large: LARGE_MARKDOWN
};

const StatRow = ({ label, stats }: { label: string; stats: Stats }) => (
  <View style={benchmarkStyles.statRow}>
    <Body weight="Semibold">{label}</Body>
    <View style={benchmarkStyles.statValues}>
      <StatCell label="Avg" value={stats.avg} />
      <StatCell label="Min" value={stats.min} />
      <StatCell label="Max" value={stats.max} />
    </View>
  </View>
);

const StatCell = ({ label, value }: { label: string; value: number }) => (
  <View style={benchmarkStyles.statCell}>
    <BodySmall color="grey-650">{label}</BodySmall>
    <Body weight="Semibold">{value.toFixed(2)} ms</Body>
  </View>
);

const ChipGroup = <T extends string>({
  options,
  selected,
  onSelect
}: {
  options: ReadonlyArray<T>;
  selected: T;
  onSelect: (v: T) => void;
}) => (
  <View style={benchmarkStyles.chipGroup}>
    {options.map(opt => (
      <TouchableOpacity
        key={opt}
        style={[
          benchmarkStyles.chip,
          selected === opt && benchmarkStyles.chipSelected
        ]}
        onPress={() => onSelect(opt)}
      >
        <BodySmall
          weight="Semibold"
          color={selected === opt ? "white" : "blueIO-500"}
        >
          {opt}
        </BodySmall>
      </TouchableOpacity>
    ))}
  </View>
);

const BenchmarkTab = () => {
  const [mode, setMode] = useState<(typeof MODES)[number]>("Full");
  const [size, setSize] = useState<(typeof SIZES)[number]>("Medium");
  const { results, isRunning, run } = useMarkdownBenchmark();

  const contentLength = useMemo(() => contentMap[size].length, [size]);

  const handleRun = () => {
    run({
      content: contentMap[size],
      iterations: 50,
      mode: mode === "Full" ? "full" : "lite"
    });
  };

  return (
    <ScrollView contentContainerStyle={benchmarkStyles.container}>
      <H4>Component</H4>
      <VSpacer size={8} />
      <ChipGroup options={MODES} selected={mode} onSelect={setMode} />

      <VSpacer size={24} />
      <H4>Content size</H4>
      <VSpacer size={8} />
      <ChipGroup options={SIZES} selected={size} onSelect={setSize} />
      <BodySmall color="grey-650">{contentLength} chars</BodySmall>

      <VSpacer size={24} />
      <IOButton
        variant="solid"
        label={isRunning ? "Running…" : "Run Benchmark (50 iterations)"}
        onPress={handleRun}
        disabled={isRunning}
        accessibilityLabel="Run benchmark"
      />

      {isRunning && (
        <>
          <VSpacer size={24} />
          <ActivityIndicator size="large" />
        </>
      )}

      {results && !isRunning && (
        <>
          <VSpacer size={24} />
          <Divider />
          <VSpacer size={16} />
          <H4>Results</H4>
          <VSpacer size={12} />
          <StatRow label="Parse time" stats={results.parse} />
        </>
      )}

      <VSpacer size={48} />
    </ScrollView>
  );
};

const benchmarkStyles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  chipGroup: {
    flexDirection: "row",
    gap: 8
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: IOColors["blueIO-500"]
  },
  chipSelected: {
    backgroundColor: IOColors["blueIO-500"]
  },
  statRow: {
    gap: 8
  },
  statValues: {
    flexDirection: "row",
    gap: 16
  },
  statCell: {
    gap: 2
  }
});

/* ── Main component ────────────────────────────────────────────────── */

const onLinkPress = (url: string) => {
  Alert.alert("Link pressed", url);
};

export const Markdown = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const markdownContent = useMemo(() => {
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
        return <BenchmarkTab />;
      default:
        return null;
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
        <TabItem label="Benchmark" accessibilityLabel="Benchmark" />
      </TabNavigation>
      <ContentWrapper style={{ paddingVertical: 16 }}>
        {markdownContent}
      </ContentWrapper>
      <VSpacer size={48} />
    </NoMarginScreen>
  );
};
