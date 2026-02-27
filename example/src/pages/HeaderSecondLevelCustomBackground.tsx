import {
  Body,
  H3,
  HeaderSecondLevel,
  IOColors,
  IOVisualCostants,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLayoutEffect, useState } from "react";
import { Alert, LayoutChangeEvent, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// This is defined as about the half of a default ListItem… component
const defaultTriggerOffsetValue: number = 32;

export const HeaderSecondLevelCustomBackground = () => {
  const [triggerOffsetValue, setTriggerOffsetValue] = useState(
    defaultTriggerOffsetValue
  );
  const translationY = useSharedValue(0);

  const headerHeight = useHeaderHeight();
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

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          scrollValues={{
            contentOffsetY: translationY,
            triggerOffset: triggerOffsetValue
          }}
          title={"Questo è un titolo lungo, ma lungo lungo davvero, eh!"}
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
          variant="contrast"
          backgroundColor={IOColors["blueIO-500"]}
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
  }, [navigation, translationY, triggerOffsetValue]);

  return (
    <Animated.ScrollView
      contentContainerStyle={{
        paddingTop: headerHeight,
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
        style={{
          backgroundColor: IOColors["blueIO-500"],
          height: 400,
          position: "absolute",
          top: -400 + headerHeight + triggerOffsetValue * 2,
          left: 0,
          right: 0
        }}
      />
      <View onLayout={getTitleHeight}>
        <H3 color="white">Page title</H3>
      </View>
      <VSpacer size={48} />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </Animated.ScrollView>
  );
};
