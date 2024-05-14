import {
  AlertProvider,
  IODSExperimentalContextProvider,
  IOThemeContextProvider,
  ToastProvider
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/navigator";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IODSExperimentalContextProvider>
        <IOThemeContextProvider
          theme={colorScheme === "dark" ? "dark" : "light"}
        >
          <ToastProvider>
            <AlertProvider>
              <AppNavigator />
            </AlertProvider>
          </ToastProvider>
        </IOThemeContextProvider>
      </IODSExperimentalContextProvider>
    </GestureHandlerRootView>
  );
}
