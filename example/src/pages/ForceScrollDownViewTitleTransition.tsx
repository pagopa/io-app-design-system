import {
  Body,
  ForceScrollDownView,
  HeaderSecondLevel
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useLayoutEffect } from "react";
import { Alert } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const ForceScrollDownViewTitleTransition = () => {
  const navigation = useNavigation();
  const animatedScrollViewRef = useAnimatedRef<Animated.ScrollView>();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          enableDiscreteTransition
          animatedRef={animatedScrollViewRef}
          title={"Questo è un titolo lungo, ma lungo lungo davvero, eh!"}
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
          type="base"
        />
      )
    });
  }, [animatedScrollViewRef, navigation]);

  return (
    <ForceScrollDownView
      animatedScrollRef={animatedScrollViewRef}
      footerActions={{
        actions: {
          type: "SingleButton",
          primary: {
            label: "Continua",
            onPress: () => {
              Alert.alert("Button pressed");
            }
          }
        }
      }}
    >
      <Screen>
        {[...Array(34)].map((_el, i) => (
          <Body key={`body-${i}`}>Repeated text</Body>
        ))}
      </Screen>
    </ForceScrollDownView>
  );
};
