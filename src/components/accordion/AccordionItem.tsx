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
import { makeFontStyleObject } from "../../utils/fonts";
import { IOColors } from "../../core/IOColors";
import { H6 } from "../typography";
import { IOSpringValues } from "../../core/IOAnimations";
import { Icon } from "../icons/Icon";

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
    <Animated.View style={[collapsableStyle, styles.collapsableContainer]}>
      <View style={styles.accordionBodyContainer} onLayout={onLayout}>
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
        <View style={styles.textContainer}>
          <View style={{ flexShrink: 1, marginRight: 8 }}>
            <H6 color="black">{item.question}</H6>
          </View>
          <Icon name="chevronBottom" color="blueIO-500" />
        </View>
      </TouchableWithoutFeedback>

      <AccordionBody expanded={expanded}>
        <Text style={styles.accordionBodyText}>{item.answer}</Text>
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
    flexDirection: "row"
  },
  collapsableContainer: {
    overflow: "hidden"
  },
  accordionBodyContainer: {
    position: "absolute",
    padding: 16,
    paddingTop: 0
  },
  accordionBodyText: {
    fontSize: 14,
    lineHeight: 21,
    color: IOColors["grey-700"],
    ...makeFontStyleObject("Regular", undefined, "TitilliumWeb")
  },
  textContainer: {
    padding: 16,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
