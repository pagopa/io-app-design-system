import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Accordion } from "../pages/Accordion";
import { DSAdvice } from "../pages/Advice";
import { DSAlert } from "../pages/Alert";
import { Badges } from "../pages/Badges";
import { Buttons } from "../pages/Buttons";
import { Colors } from "../pages/Colors";
import { Icons } from "../pages/Icons";
import { Layout } from "../pages/Layout";
import { ListItems } from "../pages/ListItem";
import { Logos } from "../pages/Logos";
import MainScreen from "../pages/MainScreen";
import { Pictograms } from "../pages/Pictograms";
import { Selection } from "../pages/Selection";
import { Typography } from "../pages/Typography";
import { AppParamsList } from "./params";
import APP_ROUTES from "./routes";

const Stack = createStackNavigator<AppParamsList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={APP_ROUTES.MAIN}
    screenOptions={{
      headerTitleStyle: {
        fontFamily: "ReadexPro",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal"
      },
      headerTitleAlign: "center",
      headerShown: true
    }}
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
      name={APP_ROUTES.COMPONENTS.BADGE.route}
      component={Badges}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.BADGE.title,
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
      name={APP_ROUTES.FOUNDATION.COLOR.route}
      component={Colors}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.COLOR.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.BUTTONS.route}
      component={Buttons}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.BUTTONS.title,

        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.ACCORDION.route}
      component={Accordion}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.ACCORDION.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.FOUNDATION.LAYOUT.route}
      component={Layout}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.LAYOUT.title,
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
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.SELECTION.route}
      component={Selection}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.SELECTION.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.LIST_ITEMS.route}
      component={ListItems}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.LIST_ITEMS.title,
        headerBackTitleVisible: false
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
