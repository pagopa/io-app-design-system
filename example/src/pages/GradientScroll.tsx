import {
  Body,
  ButtonOutline,
  GradientScrollView,
  H2,
  IOColors,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, View } from "react-native";

export const GradientScroll = () => (
  <View
    style={{
      flexGrow: 1,
      backgroundColor: IOColors.white
    }}
  >
    <GradientScrollView
      // debugMode
      primaryActionProps={{
        label: "Primary action",
        accessibilityLabel: "",
        onPress: () => Alert.alert("Primary action pressed! (⁠⁠ꈍ⁠ᴗ⁠ꈍ⁠)")
      }}
    >
      <H2>Start</H2>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
      <VSpacer />
      <View
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
          borderRadius: 32,
          borderCurve: "continuous",
          backgroundColor: IOColors["blueIO-850"]
        }}
      />
      <VSpacer />
      <ButtonOutline
        label="Test"
        accessibilityLabel={""}
        onPress={() => Alert.alert("Test button")}
      />
      {[...Array(2)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
      <H2>End</H2>
    </GradientScrollView>
  </View>
);
