import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../pages/MainScreen";
import APP_ROUTES from "./routes";
import { AppParamsList } from "./params";

const Stack = createStackNavigator<AppParamsList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={APP_ROUTES.MAIN}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={APP_ROUTES.MAIN} component={MainScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
