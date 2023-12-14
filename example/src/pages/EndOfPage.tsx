import { Body, ContentWrapper, EndOfPage } from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const EndOfPageScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom
      }}
    >
      <ContentWrapper>
        {[...Array(50)].map((_el, i) => (
          <Body key={`body-${i}`}>Repeated text</Body>
        ))}
        <EndOfPage />
      </ContentWrapper>
    </ScrollView>
  );
};

export const EndOfPageScreenWithCTA = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom
      }}
    >
      <ContentWrapper>
        {[...Array(50)].map((_el, i) => (
          <Body key={`body-${i}`}>Repeated text</Body>
        ))}
        <EndOfPage
          primaryAction={{
            type: "Solid",
            props: {
              label: "Primary Action",
              accessibilityLabel: "Primary Action",
              onPress: () => Alert.alert("Primary Action")
            }
          }}
          secondaryAction={{
            type: "Link",
            props: {
              label: "Secondary Action",
              accessibilityLabel: "Secondary Action",
              onPress: () => Alert.alert("Secondary Action")
            }
          }}
        />
      </ContentWrapper>
    </ScrollView>
  );
};
