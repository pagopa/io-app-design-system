import * as React from "react";
import { View } from "react-native";
import {
  H1,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  Stepper
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const StepperPage = () => (
  <Screen>
    <View
      style={[IOStyles.flex, { paddingTop: IOVisualCostants.appMarginDefault }]}
    >
      <H1>Stepper</H1>
      <VSpacer size={24} />
      <Stepper steps={8} currentStep={1} />
      <VSpacer size={24} />
      <Stepper steps={6} currentStep={4} />
      <VSpacer size={24} />
      <Stepper steps={4} currentStep={4} />
      <VSpacer size={24} />
      <Stepper steps={5} currentStep={1} />
    </View>
  </Screen>
);
