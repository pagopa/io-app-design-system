import {
  ContentWrapper,
  H1,
  IOVisualCostants,
  Stepper,
  VStack
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { View } from "react-native";
import { NoMarginScreen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const StepperPage = () => (
  <NoMarginScreen>
    <View
      style={{
        flex: 1,
        paddingTop: IOVisualCostants.appMarginDefault,
        gap: 24
      }}
    >
      <ContentWrapper>
        <H1>Stepper</H1>
      </ContentWrapper>
      <VStack space={24}>
        <Stepper steps={8} currentStep={1} />
        <Stepper steps={6} currentStep={4} />
        <Stepper steps={4} currentStep={4} />
        <Stepper steps={5} currentStep={1} />
      </VStack>
    </View>
  </NoMarginScreen>
);
