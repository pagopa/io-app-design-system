import * as React from "react";
import { SafeAreaView } from "react-native";
import {
  IOStyles,
  ForceScrollDownView,
  Body
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const ForceScrollDownViewPage = () => (
  <SafeAreaView style={IOStyles.flex}>
    <ForceScrollDownView>
      <Screen>
        {[...Array(50)].map((_el, i) => (
          <Body key={`body-${i}`}>Repeated text</Body>
        ))}
      </Screen>
    </ForceScrollDownView>
  </SafeAreaView>
);
