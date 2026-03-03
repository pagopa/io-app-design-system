import {
  Body,
  H3,
  HeaderSecondLevel,
  IOColors,
  IOVisualCostants,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import { useLayoutEffect } from "react";
import { Alert, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HeaderSecondLevelScreenDiscreteTransitionCustomBg = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  const animatedScrollViewRef = useAnimatedRef<Animated.ScrollView>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          enableDiscreteTransition
          variant="neutral"
          backgroundColor={IOColors["blueIO-100"]}
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
        paddingTop: headerHeight,
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      scrollEventThrottle={8}
    >
      <View
        style={{
          backgroundColor: IOColors["blueIO-100"],
          height: 800,
          position: "absolute",
          top: -400,
          left: 0,
          right: 0
        }}
      />

      <H3 color="white">
        Questo è un titolo lungo, ma lungo lungo davvero, eh!
      </H3>
      <VSpacer />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
