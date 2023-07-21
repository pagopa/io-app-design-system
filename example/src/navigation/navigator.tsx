import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icons } from "../pages/Icons";
import { Logos } from "../pages/Logos";

import { DSAdvice } from "../pages/Advice";
import { DSAlert } from "../pages/Alert";
import MainScreen from "../pages/MainScreen";
import { Pictograms } from "../pages/Pictograms";
import { Typography } from "../pages/Typography";
import { AppParamsList } from "./params";
import APP_ROUTES from "./routes";

const Stack = createStackNavigator<AppParamsList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={APP_ROUTES.MAIN}
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name={APP_ROUTES.MAIN}
      component={MainScreen}
      options={{
        headerTitle: "Design System"
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.FOUNDATION.ICONS.route}
      component={Icons}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.ICONS.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.FOUNDATION.LOGOS.route}
      component={Logos}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.LOGOS.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.FOUNDATION.TYPOGRAPHY.route}
      component={Typography}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.TYPOGRAPHY.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.FOUNDATION.PICTOGRAMS.route}
      component={Pictograms}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.PICTOGRAMS.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.ADVICE.route}
      component={DSAdvice}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.ADVICE.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.ALERT.route}
      component={DSAlert}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.ALERT.title,
        headerBackTitleVisible: false
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
