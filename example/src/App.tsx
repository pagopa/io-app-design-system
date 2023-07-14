import { IOStyles } from "@pagopa/io-app-design-system";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { IOStyles } from "@pagopa/io-app-design-system";
import AppNavigator from "./navigation/navigator";

export default function App() {
  useFonts({
    "Titillium Web": require("../assets/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf"),
    "Readex Pro": require("../assets/fonts/ReadexPro/ReadexPro-Regular.ttf"),
  });

  return (
    <SafeAreaView style={IOStyles.flex}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
