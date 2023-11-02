import * as React from "react";
import { Alert, View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  NumberPad,
  H3
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const NumberPadScreen = () => {
  const [value, setValue] = React.useState("");
  return (
    <Screen>
      <View
        style={[
          IOStyles.flex,
          { paddingTop: IOVisualCostants.appMarginDefault }
        ]}
      >
        <H1>NumberPad</H1>
        <H5>{"Value Typed on the NumberPad component"}</H5>
        <VSpacer />
        <H3>{value}</H3>
        <VSpacer />
        <NumberPad
          deleteAccessibilityLabel="Delete"
          onValueChange={setValue}
          variant="light"
          biometricType="FACE_ID"
          biometricAccessibilityLabel="Face ID"
          onBiometricPress={() => Alert.alert("biometric")}
        />
      </View>
    </Screen>
  );
};
