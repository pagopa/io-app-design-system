import { IOStyles } from "@pagopa/io-app-design-system";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/navigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={IOStyles.flex}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
