import * as React from "react";
import { View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer
} from "@pagopa/io-app-design-system";
import { constVoid } from "fp-ts/lib/function";
import { Screen } from "../components/Screen";
import { OTPInput } from "../../../src/components";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => (
  <Screen>
    <View
      style={[
        IOStyles.flex,
        {
          paddingTop: IOVisualCostants.appMarginDefault
          // backgroundColor: IOColors["blueIO-500"]
        }
      ]}
    >
      <H1>Sandbox</H1>
      <H5>{"Insert here the component you're willing to test"}</H5>
      <VSpacer />
      {/* Insert here the component you're willing to test */}
      <OTPInput value="" length={8} onValueChange={constVoid} />
    </View>
  </Screen>
);
