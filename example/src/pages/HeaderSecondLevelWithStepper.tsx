import * as React from "react";
import { useState } from "react";
import { Alert, View, LayoutChangeEvent } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  Body,
  H3,
  HeaderSecondLevel,
  IOVisualCostants,
  Stepper,
  useIOTheme,
  VSpacer
} from "@pagopa/io-app-design-system";

// This is defined as about the half of a default ListItem… component
const defaultTriggerOffsetValue: number = 32;

export const HeaderSecondLevelWithStepper = () => {
  const [triggerOffsetValue, setTriggerOffsetValue] = useState(
    defaultTriggerOffsetValue
  );
  const translationY = useSharedValue(0);

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
      header: () => (
        <>
          <HeaderSecondLevel
            title={"Questo è un titolo statico"}
            goBack={() => navigation.goBack()}
            backAccessibilityLabel="Torna indietro"
            type="singleAction"
            firstAction={{
              icon: "help",
              onPress: () => {
                Alert.alert("Contextual Help");
              },
              accessibilityLabel: ""
            }}
          />
          <Stepper steps={6} currentStep={1} />
        </>
      )
    });
  }, [navigation, translationY, triggerOffsetValue]);

  return (
    <Animated.ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      onScroll={scrollHandler}
      scrollEventThrottle={8}
      snapToOffsets={[0, triggerOffsetValue]}
      snapToEnd={false}
      decelerationRate="normal"
    >
      <View onLayout={getTitleHeight}>
        <H3 color={theme["textHeading-default"]}>
          Questo è un titolo lungo, ma lungo lungo davvero, eh!
        </H3>
      </View>
      <VSpacer />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
