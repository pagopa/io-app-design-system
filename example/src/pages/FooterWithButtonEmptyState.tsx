import {
  Body,
  ContentWrapper,
  FooterWithButtons,
  H2,
  IOColors,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { useState } from "react";
import { Alert, Platform, ScrollView, View } from "react-native";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const FooterWithButtonEmptyState = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: IOColors["error-100"]
      }}
    >
      {/* This extra View is mandatory when you have a fixed
        bottom component to get a consistent behavior
        across platforms */}
      <View style={{ flexGrow: 1, paddingBottom: footerHeight }}>
        <ScrollView
          centerContent
          contentContainerStyle={[
            { backgroundColor: IOColors.white },
            /* Android fallback because `centerContent`
              is only an iOS property */
            Platform.OS === "android" && {
              flexGrow: 1,
              justifyContent: "center"
            }
          ]}
        >
          <ContentWrapper>
            <H2>Start</H2>
            <VSpacer size={24} />
            <Body>Single text</Body>
            <VSpacer size={24} />
            <H2>End</H2>
          </ContentWrapper>
        </ScrollView>
      </View>
      <FooterWithButtons
        onLayoutChange={setFooterHeight}
        sticky={true}
        primary={{
          type: "Solid",
          buttonProps: {
            color: "primary",
            accessibilityLabel: "primary button",
            onPress: () => Alert.alert("Button pressed"),
            label: "Primary button"
          }
        }}
        // secondary={{
        //   type: "Outline",
        //   buttonProps: {
        //     color: "primary",
        //     accessibilityLabel: "secondary button",
        //     onPress: () => Alert.alert("Button pressed"),
        //     label: "Secondary button"
        //   }
        // }}
        type="SingleButton"
      />
    </View>
  );
};
