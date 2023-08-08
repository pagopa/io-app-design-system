import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutChangeEvent
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { IOColors } from "../../core/IOColors";
import { Body, H6 } from "../typography";
import { IOSpringValues } from "../../core/IOAnimations";

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

/* The code below is a re-adaptation of Dima Portenko's code:
https://github.com/dimaportenko/reanimated-collapsable-card-tutorial
*/
export const AccordionBody = ({
  children,
  expanded
}: {
  children: React.ReactNode;
  expanded: boolean;
}) => {
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    // eslint-disable-next-line functional/immutable-data
    animatedHeight.value = expanded
      ? withSpring(height, IOSpringValues.accordion)
      : withSpring(0, IOSpringValues.accordion);

    return {
      height: animatedHeight.value
    };
  }, [expanded]);

  return (
    <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
      <View style={{ position: "absolute" }} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  );
};

export const AccordionItem = ({ item }: { item: FaqItem }) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.wrap}>
      <TouchableWithoutFeedback onPress={onItemPress}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <H6 style={styles.text}>{item.question}</H6>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <AccordionBody expanded={expanded}>
        <Body>{item.answer}</Body>
      </AccordionBody>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderColor: IOColors["grey-200"],
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: IOColors.white
  },
  container: {
    flexDirection: "row",
    padding: 16
  },
  textContainer: { alignItems: "center" },
  text: { opacity: 0.7 }
});
