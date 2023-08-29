import * as React from "react";
import { SafeAreaView, View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  FooterWithButtons
} from "@pagopa/io-app-design-system";
import { constVoid } from "fp-ts/lib/function";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => (
  <SafeAreaView style={IOStyles.flex}>
    <View style={{ flexGrow: 1 }}>
      <FooterWithButtons
        primary={{
          type: "Solid",
          buttonProps: {
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
