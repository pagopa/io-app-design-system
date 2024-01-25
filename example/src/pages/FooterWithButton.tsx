import {
  Body,
  ButtonOutline,
  FooterWithButtons,
  H1,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, View } from "react-native";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const FooterWithButton = () => (
  <View>
    <Screen>
      <VSpacer />
      <H1>Footer with button</H1>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
      ))}
      <ButtonOutline
        color="primary"
        accessibilityLabel="Test ButtonOutline"
        onPress={() => Alert.alert("Button pressed")}
        label="Test Button"
      />
      {[...Array(10)].map((_el, i) => (
        <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
      ))}
    </Screen>
    <FooterWithButtons
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
