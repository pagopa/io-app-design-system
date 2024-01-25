import React from "react";
import { Decorator } from "@storybook/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { IOColors, IOThemeContext, IOThemes, hexToRgba } from "../src/core";

export const withTheme: Decorator = (StoryFn, context) => {
  const themeContext =
    context.globals.backgrounds && context.globals.backgrounds.value === "dark"
      ? IOThemes.dark
      : IOThemes.light;

  // console.log("context", context);
  return (
    <IOThemeContext.Provider value={themeContext}>
      <StoryFn />
    </IOThemeContext.Provider>
  );
};

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
