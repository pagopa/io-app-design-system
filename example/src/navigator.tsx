import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./pages/MainScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={"Home"}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={MainScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
