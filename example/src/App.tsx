import * as React from "react";
import {
  IODSExperimentalContextProvider,
  IOThemeContextProvider,
  ToastProvider
} from "@pagopa/io-app-design-system";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/navigator";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IOThemeContextProvider theme={colorScheme === "dark" ? "dark" : "light"}>
        <IODSExperimentalContextProvider>
          <ToastProvider>
            <AppNavigator />
          </ToastProvider>
        </IODSExperimentalContextProvider>
      </IOThemeContextProvider>
    </GestureHandlerRootView>
  );
}
