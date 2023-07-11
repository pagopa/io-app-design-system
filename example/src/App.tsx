import { IOStyles } from "@pagopa/io-app-design-system";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./navigation/navigator";

export default function App() {
  const isLoaded = useFonts({
    "Titillium Web": require("../assets/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf"),
    "Readex Pro": require("../assets/fonts/ReadexPro/ReadexPro-Regular.ttf"),
    "Roboto Mono": require("../assets/fonts/RobotoMono/RobotoMono-Regular.ttf")
  });

  if (!isLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={IOStyles.flex}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
