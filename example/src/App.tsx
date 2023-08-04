import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import {
  IOThemeContext,
  IOThemeDark,
  IOThemeLight,
  IOThemes
} from "@pagopa/io-app-design-system";
import { useColorScheme } from "react-native";
import AppNavigator from "./navigation/navigator";

const IONavigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: IOThemeDark["appBackground-primary"],
    card: IOThemeDark["appBackground-primary"]
  }
};

const IONavigationLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: IOThemeLight["appBackground-primary"],
    card: IOThemeLight["appBackground-primary"]
  }
};

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <IOThemeContext.Provider
      value={colorScheme === "dark" ? IOThemes.dark : IOThemes.light}
    >
      <NavigationContainer
        theme={
          colorScheme === "dark"
            ? IONavigationDarkTheme
            : IONavigationLightTheme
        }
      >
        <AppNavigator />
      </NavigationContainer>
    </IOThemeContext.Provider>
  );
}
