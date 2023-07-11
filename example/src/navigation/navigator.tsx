import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icons } from "../pages/Icons";
import { Logos } from "../pages/Logos";

import MainScreen from "../pages/MainScreen";
import { Typography } from "../pages/Typography";
import { AppParamsList } from "./params";
import APP_ROUTES from "./routes";

const Stack = createStackNavigator<AppParamsList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={APP_ROUTES.MAIN}
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen name={APP_ROUTES.MAIN} component={MainScreen} options={{
      headerTitle: "Design System",
    }} />
    <Stack.Screen name={APP_ROUTES.FOUNDATION.ICONS.route} component={Icons} options={{
      headerTitle: "Icons", headerBackTitleVisible: false
    }} />
    <Stack.Screen name={APP_ROUTES.FOUNDATION.LOGOS.route} component={Logos} options={{
      headerTitle: "Logos", headerBackTitleVisible: false
    }} />
    <Stack.Screen name={APP_ROUTES.FOUNDATION.TYPOGRAPHY.route} component={Typography} options={{
      headerTitle: "Typography", headerBackTitleVisible: false
    }} />
  </Stack.Navigator>
);

export default AppNavigator;
