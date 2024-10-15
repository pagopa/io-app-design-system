import {
  Body,
  H3,
  HeaderSecondLevel,
  IOVisualCostants,
  useIOTheme,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useLayoutEffect } from "react";
import { Alert } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HeaderSecondLevelScreenDiscreteTransition = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const theme = useIOTheme();

  const animatedScrollViewRef = useAnimatedRef<Animated.ScrollView>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          enableDiscreteTransition
          animatedRef={animatedScrollViewRef as any}
          title={"Questo è un titolo lungo, ma lungo lungo davvero, eh!"}
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
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
  }, [animatedScrollViewRef, navigation]);

  return (
    <Animated.ScrollView
      ref={animatedScrollViewRef}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      scrollEventThrottle={8}
    >
      <H3 color={theme["textHeading-default"]}>
        Questo è un titolo lungo, ma lungo lungo davvero, eh!
      </H3>
      <VSpacer />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
