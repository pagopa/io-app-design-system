import {
  IODSExperimentalContextProvider,
  IONewTypefaceContextProvider,
  IOThemeContextProvider,
  ToastProvider
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBannerProvider } from "./components/StatusBannerProvider";
import AppNavigator from "./navigation/navigator";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <IODSExperimentalContextProvider>
          <IONewTypefaceContextProvider>
            <IOThemeContextProvider theme={colorScheme}>
              <StatusBannerProvider>
                <ToastProvider>
                  <AppNavigator />
                </ToastProvider>
              </StatusBannerProvider>
            </IOThemeContextProvider>
          </IONewTypefaceContextProvider>
        </IODSExperimentalContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
