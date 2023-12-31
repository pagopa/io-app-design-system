import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import * as React from "react";
import {
  IODSExperimentalContextProvider,
  IOStyles,
  IOThemeContext,
  IOThemeDark,
  IOThemeLight,
  IOThemes,
  ToastProvider
} from "@pagopa/io-app-design-system";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IOThemeContext.Provider
        value={colorScheme === "dark" ? IOThemes.dark : IOThemes.light}
      >
        <IODSExperimentalContextProvider>
          <ToastProvider>
            <NavigationContainer
              theme={
                colorScheme === "dark"
                  ? IONavigationDarkTheme
                  : IONavigationLightTheme
              }
            >
              <GestureHandlerRootView style={IOStyles.flex}>
                <AppNavigator />
              </GestureHandlerRootView>
            </NavigationContainer>
          </ToastProvider>
        </IODSExperimentalContextProvider>
      </IOThemeContext.Provider>
    </GestureHandlerRootView>
  );
}
