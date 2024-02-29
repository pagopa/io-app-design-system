import { HeaderSecondLevel } from "@pagopa/io-app-design-system";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Accordion } from "../pages/Accordion";
import { DSAdvice } from "../pages/Advice";
import { DSAlert } from "../pages/Alert";
import { Badges } from "../pages/Badges";
import { Buttons } from "../pages/Buttons";
import { Colors } from "../pages/Colors";
import { EndOfPageScreen, EndOfPageScreenWithCTA } from "../pages/EndOfPage";
import { FooterWithButton } from "../pages/FooterWithButton";
import { FooterWithButtonEmptyState } from "../pages/FooterWithButtonEmptyState";
import { ForceScrollDownViewPage } from "../pages/ForceScrollDownViewPage";
import { HeaderFirstLevelScreen } from "../pages/HeaderFirstLevel";
import { HeaderSecondLevelScreen } from "../pages/HeaderSecondLevel";
import { HeaderSecondLevelWithStepper } from "../pages/HeaderSecondLevelWithStepper";
import { Icons } from "../pages/Icons";
import { ImageScreen } from "../pages/Image";
import { Layout } from "../pages/Layout";
import { ListItems } from "../pages/ListItem";
import { Logos } from "../pages/Logos";
import MainScreen from "../pages/MainScreen";
import Modules from "../pages/Modules";
import { NumberPadScreen } from "../pages/NumberPad";
import { OTPInputScreen } from "../pages/OTPInput";
import { Pictograms } from "../pages/Pictograms";
import { Sandbox } from "../pages/Sandbox";
import { Search } from "../pages/Search";
import { Selection } from "../pages/Selection";
import { StaticHeaderSecondLevelScreen } from "../pages/StaticHeaderSecondLevel";
import { StepperPage } from "../pages/Stepper";
import { TabNavigationScreen } from "../pages/TabNavigation";
import { TextInputs } from "../pages/TextInputs";
import { Toasts } from "../pages/Toasts";
import { Typography } from "../pages/Typography";
import { Loaders } from "../pages/Loaders";
import { AppParamsList } from "./params";
import APP_ROUTES from "./routes";

const Stack = createNativeStackNavigator<AppParamsList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={APP_ROUTES.MAIN}
    screenOptions={{
      headerTitleStyle: {
        fontFamily: "Readex Pro",
        fontSize: 14,
        fontWeight: "normal"
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
      name={APP_ROUTES.COMPONENTS.NUMBER_PAD.route}
      component={NumberPadScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.NUMBER_PAD.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.IMAGE.route}
      component={ImageScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.IMAGE.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.OTP_INPUT.route}
      component={OTPInputScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.OTP_INPUT.title,
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
        presentation: "modal",
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
      name={APP_ROUTES.FOUNDATION.LOADERS.route}
      component={Loaders}
      options={{
        headerTitle: APP_ROUTES.FOUNDATION.LOADERS.title,
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
      name={APP_ROUTES.COMPONENTS.STEPPER.route}
      component={StepperPage}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.STEPPER.title,
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
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.MODULES.route}
      component={Modules}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.MODULES.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.TAB_NAVIGATION.route}
      component={TabNavigationScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.TAB_NAVIGATION.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.TEXT_INPUT.route}
      component={TextInputs}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.TEXT_INPUT.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.SCREENS.FOOTER_WITH_BUTTON.route}
      component={FooterWithButton}
      options={{
        headerTitle: APP_ROUTES.SCREENS.FOOTER_WITH_BUTTON.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.SCREENS.FOOTER_WITH_BUTTON_EMPTY.route}
      component={FooterWithButtonEmptyState}
      options={{
        headerShown: false,
        headerTitle: APP_ROUTES.SCREENS.FOOTER_WITH_BUTTON.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.FORCE_SCROLL_DOWN.route}
      component={ForceScrollDownViewPage}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.FORCE_SCROLL_DOWN.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.END_OF_PAGE.route}
      component={EndOfPageScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.END_OF_PAGE.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.END_OF_PAGE_WITH_CTA.route}
      component={EndOfPageScreenWithCTA}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.END_OF_PAGE_WITH_CTA.title,
        headerBackTitleVisible: false
      }}
    />
    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.HEADER_FIRST_LEVEL.route}
      component={HeaderFirstLevelScreen}
      options={{
        statusBarTranslucent: true,
        statusBarStyle: "light",
        headerTitle: APP_ROUTES.COMPONENTS.HEADER_FIRST_LEVEL.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL.route}
      component={HeaderSecondLevelScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL_STATIC.route}
      component={StaticHeaderSecondLevelScreen}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL_STATIC.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL_STEPPER.route}
      component={HeaderSecondLevelWithStepper}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.HEADER_SECOND_LEVEL_STEPPER.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.COMPONENTS.TOASTS.route}
      component={Toasts}
      options={{
        headerTitle: APP_ROUTES.COMPONENTS.TOASTS.title
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.SCREENS.SEARCH.route}
      component={Search}
      options={{
        headerTitle: APP_ROUTES.SCREENS.SEARCH.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Screen
      name={APP_ROUTES.SANDBOX.SANDBOX_SCREEN.route}
      component={Sandbox}
      options={{
        headerTitle: APP_ROUTES.SANDBOX.SANDBOX_SCREEN.title,
        headerBackTitleVisible: false
      }}
    />

    <Stack.Group screenOptions={{ presentation: "formSheet" }}>
      <Stack.Screen
        name={APP_ROUTES.SCREENS.FULL_SCREEN_MODAL.route}
        component={ListItems}
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <HeaderSecondLevel
              title={APP_ROUTES.SCREENS.FULL_SCREEN_MODAL.title}
              transparent
              isModal
              type="singleAction"
              firstAction={{
                icon: "closeMedium",
                onPress: () => {
                  navigation.goBack();
                },
                accessibilityLabel: ""
              }}
            />
          )
        }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default AppNavigator;
