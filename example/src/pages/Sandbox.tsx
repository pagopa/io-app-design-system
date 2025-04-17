import {
  H1,
  H5,
  IOVisualCostants,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { View } from "react-native";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => (
  <Screen>
    <View
      style={{
        flex: 1,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      <H1>Sandbox</H1>
      <H5>{"Insert here the component you're willing to test"}</H5>

      <VSpacer />
      {/* Insert here the component you're willing to test */}
    </View>
  </Screen>
);
