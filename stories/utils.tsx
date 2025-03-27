import { Decorator } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IOColors, IOThemeContextProvider, hexToRgba } from "../src/core";

export const withTheme: Decorator = (StoryFn, context) => {
  const themeContext =
    context.globals.backgrounds && context.globals.backgrounds.value === "black"
      ? "dark"
      : "light";

  // console.log("context", context);
  return (
    <IOThemeContextProvider theme={themeContext}>
      <StoryFn />
    </IOThemeContextProvider>
  );
};

export const withEperimentalDs: Decorator = StoryFn => <StoryFn />;

export const withMaxWitdth: Decorator = StoryFn => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        minWidth: "400px",
        maxWidth: "420px"
      }}
    >
      <View
        style={{
          borderRightColor: hexToRgba(IOColors.black, 0.15),
          borderRightWidth: 1,
          borderLeftColor: hexToRgba(IOColors.black, 0.15),
          borderLeftWidth: 1,
          paddingHorizontal: 16
        }}
      >
        <StoryFn />
      </View>
    </div>
  </div>
);

export const withSafeAreaProvider: Decorator = StoryFn => (
  <SafeAreaProvider>
    <StoryFn />
  </SafeAreaProvider>
);
