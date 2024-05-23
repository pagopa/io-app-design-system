import * as React from "react";
import { View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  SearchInput
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

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
      <SearchInput
        placeholder="Cerca nei messaggi"
        accessibilityLabel="Search input"
        cancelButtonLabel="Annulla"
      />

      {/* Insert here the component you're willing to test */}
    </View>
  </Screen>
);
