import * as React from "react";
import { SafeAreaView, View } from "react-native";
import {
  H1,
  IOStyles,
  FooterWithButtons,
  VSpacer
} from "@pagopa/io-app-design-system";
import { constVoid } from "fp-ts/lib/function";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const FooterWithButton = () => (
  <SafeAreaView style={IOStyles.flex}>
    <View style={{ flexGrow: 1 }}>
      <Screen>
        <VSpacer />
        <H1>Footer with button</H1>
      </Screen>
      <FooterWithButtons
        primary={{
          type: "Solid",
          buttonProps: {
            fullWidth: true,
            color: "primary",
            accessibilityLabel: "primary button",
            onPress: constVoid,
            label: "Primary button"
          }
        }}
        secondary={{
          type: "Outline",
          buttonProps: {
            color: "primary",
            fullWidth: true,
            accessibilityLabel: "secondary button",
            onPress: constVoid,
            label: "Secondary button"
          }
        }}
        type="TwoButtonsInlineHalf"
      />
    </View>
  </SafeAreaView>
);
