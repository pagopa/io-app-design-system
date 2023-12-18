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
  VSpacer
} from "@pagopa/io-app-design-system";

// This is defined as about the half of a default ListItem… component
const defaultTriggerOffsetValue: number = 32;

export const HeaderSecondLevelScreen = () => {
  const [triggerOffsetValue, setTriggerOffsetValue] = useState(
    defaultTriggerOffsetValue
  );
  const translationY = useSharedValue(0);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

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
          scrollValues={{
            contentOffsetY: translationY,
            triggerOffset: triggerOffsetValue
          }}
          title={"Questo è un titolo lungo, ma lungo lungo davvero, eh!"}
          // goBack={() => navigation.goBack()}
          // backAccessibilityLabel="Torna indietro"
          transparent={true}
          type="singleAction"
          firstAction={{
            icon: "help",
            onPress: () => {
              Alert.alert("Contextual Help");
            },
            accessibilityLabel: ""
          }}
          // secondAction={{
          //   icon: "add",
          //   onPress: () => {
          //     Alert.alert("add");
          //   },
          //   accessibilityLabel: ""
          // }}
          // thirdAction={{
          //   icon: "coggle",
          //   onPress: () => {
          //     Alert.alert("Settings");
          //   },
          //   accessibilityLabel: ""
          // }}
        />
      )
    });
  }, [navigation, translationY, triggerOffsetValue]);

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
        <H3>Questo è un titolo lungo, ma lungo lungo davvero, eh!</H3>
      </View>
      <VSpacer />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
