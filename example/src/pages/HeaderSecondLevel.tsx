import {
  AlertEdgeToEdgeProps,
  Body,
  ButtonOutline,
  ButtonSolid,
  H3,
  H6,
  HeaderSecondLevel,
  HStack,
  IOVisualCostants,
  useIOTheme,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { Alert, LayoutChangeEvent, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBannerContext } from "../components/StatusBannerProvider";

// This is defined as about the half of a default ListItem… component
const defaultTriggerOffsetValue: number = 32;

export const HeaderSecondLevelScreen = () => {
  const [triggerOffsetValue, setTriggerOffsetValue] = useState(
    defaultTriggerOffsetValue
  );
  const translationY = useSharedValue(0);

  const { showAlert, removeAlert, alert } =
    React.useContext(StatusBannerContext);

  const handleShowAlert = (
    variant: AlertEdgeToEdgeProps["variant"],
    enableAction = true
  ) => {
    const content =
      "Alert content that is very long. And here's another line of text because I need to test a looooonger text.";
    const actionProps = {
      action: "Action text that's very long and could be placed on a new line",
      onPress: () => Alert.alert("Action triggered")
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    enableAction
      ? showAlert({ variant, content, ...actionProps })
      : showAlert({ variant, content });
  };

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const theme = useIOTheme();

  const getTitleHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setTriggerOffsetValue(height);
  };

  const scrollHandler = useAnimatedScrollHandler(event => {
    // eslint-disable-next-line functional/immutable-data
    translationY.value = event.contentOffset.y;
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      header: () => (
        <HeaderSecondLevel
          ignoreSafeAreaMargin={alert !== undefined}
          scrollValues={{
            contentOffsetY: translationY,
            triggerOffset: triggerOffsetValue
          }}
          title={"Questo è un titolo lungo, ma lungo lungo davvero, eh!"}
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
          transparent={true}
          type="threeActions"
          firstAction={{
            icon: "help",
            onPress: () => {
              Alert.alert("Contextual Help");
            },
            accessibilityLabel: ""
          }}
          secondAction={{
            icon: "add",
            onPress: () => {
              Alert.alert("add");
            },
            accessibilityLabel: ""
          }}
          thirdAction={{
            icon: "coggle",
            onPress: () => {
              Alert.alert("Settings");
            },
            accessibilityLabel: ""
          }}
        />
      )
    });
  }, [navigation, translationY, triggerOffsetValue, alert]);

  return (
    <Animated.ScrollView
      contentContainerStyle={{
        marginTop: insets.top + IOVisualCostants.headerHeight,
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      onScroll={scrollHandler}
      scrollEventThrottle={8}
      snapToOffsets={[0, triggerOffsetValue]}
      snapToEnd={false}
      decelerationRate="normal"
    >
      <View
        onLayout={getTitleHeight}
        // style={{ backgroundColor: IOColors["hanPurple-500"] }}
      >
        <H3 color={theme["textHeading-default"]}>
          Questo è un titolo lungo, ma lungo lungo davvero, eh!
        </H3>
      </View>
      <VSpacer />
      {["info", "warning", "error"].map(variant => (
        <VStack space={4} key={variant}>
          <H6 style={{ textTransform: "capitalize" }}>{variant}</H6>
          <HStack space={4}>
            <ButtonSolid
              label="w/ Action"
              onPress={() =>
                handleShowAlert(variant as AlertEdgeToEdgeProps["variant"])
              }
            />
            <ButtonSolid
              label="w/o Action"
              onPress={() =>
                handleShowAlert(
                  variant as AlertEdgeToEdgeProps["variant"],
                  false
                )
              }
            />
          </HStack>
          <ButtonOutline label="Hide" onPress={removeAlert} />
        </VStack>
      ))}
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
