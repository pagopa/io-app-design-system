import { Body, EndOfPage } from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Screen } from "../components/Screen";

export const EndOfPageScreen = () => (
  <SafeAreaView>
    <Screen>
      <ScrollView>
        {[...Array(50)].map((_el, i) => (
          <Body key={`body-${i}`}>Repeated text</Body>
        ))}
        <EndOfPage />
      </ScrollView>
    </Screen>
  </SafeAreaView>
);

export const EndOfPageScreenWithCTA = () => (
  <SafeAreaView>
    <Screen>
      <ScrollView>
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
      </ScrollView>
    </Screen>
  </SafeAreaView>
);
