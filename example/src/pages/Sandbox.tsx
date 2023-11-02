import * as React from "react";
import { Alert, View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  NumberPad
} from "@pagopa/io-app-design-system";
import { constNull } from "fp-ts/lib/function";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => (
  <Screen>
    <View
      style={[IOStyles.flex, { paddingTop: IOVisualCostants.appMarginDefault }]}
    >
      <H1>Sandbox</H1>
      <H5>{"Insert here the component you're willing to test"}</H5>
      <VSpacer />
      {/* Insert here the component you're willing to test */}
      <NumberPad
        onValueChange={constNull}
        variant="light"
        biometricType="FACE_ID"
        biometricAccessibilityLabel="Face ID"
        onBiometricPress={() => Alert.alert("biometric")}
      />
    </View>
  </Screen>
);
