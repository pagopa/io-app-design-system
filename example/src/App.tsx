import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { IOStyles } from "@pagopa/io-app-design-system";
import AppNavigator from "./navigator";

export default function App() {
  return (
    <SafeAreaView style={IOStyles.flex}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
