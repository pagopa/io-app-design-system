import {
  IODSExperimentalContextProvider,
  IOThemeContextProvider,
  ToastProvider
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/navigator";
import { StatusBannerProvider } from "./components/StatusBannerProvider";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <IODSExperimentalContextProvider>
          <IOThemeContextProvider theme={colorScheme}>
            <StatusBannerProvider>
              <ToastProvider>
                <AppNavigator />
              </ToastProvider>
            </StatusBannerProvider>
          </IOThemeContextProvider>
        </IODSExperimentalContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
