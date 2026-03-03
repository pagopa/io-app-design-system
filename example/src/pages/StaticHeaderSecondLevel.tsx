import {
  Body,
  H3,
  HeaderSecondLevel,
  IOVisualCostants,
  useIOTheme,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Alert, LayoutChangeEvent, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// This is defined as about the half of a default ListItem… component
const defaultTriggerOffsetValue: number = 32;

export const HeaderSecondLevelScreenStatic = () => {
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

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          title="Some title"
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
          type="twoActions"
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
              Alert.alert("Contextual Help");
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
