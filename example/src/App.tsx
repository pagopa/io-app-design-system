import { IOStyles } from "@pagopa/io-app-design-system";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./navigation/navigator";

export default function App() {
  const [loaded] = useFonts({
    "Titillium Web": require("../assets/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf"),
    "Titillium Web-Bold": require("../assets/fonts/TitilliumWeb/TitilliumWeb-Bold.ttf"),
    "Readex Pro": require("../assets/fonts/ReadexPro/ReadexPro-Regular.ttf"),
  });

  if (!loaded) {
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
