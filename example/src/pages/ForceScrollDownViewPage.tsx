import {
  Body,
  FooterActions,
  ForceScrollDownView
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert } from "react-native";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const ForceScrollDownViewPage = () => (
  <ForceScrollDownView>
    <Screen>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Screen>
    <FooterActions
      fixed={false}
      actions={{
        type: "SingleButton",
        primary: {
          label: "Continua",
          onPress: () => {
            Alert.alert("Button pressed");
          }
        }
      }}
    />
  </ForceScrollDownView>
);
