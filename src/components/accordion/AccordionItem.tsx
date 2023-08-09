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
  withSpring
} from "react-native-reanimated";
import { makeFontStyleObject } from "../../utils/fonts";
import { IOColors } from "../../core/IOColors";
import { H6 } from "../typography";
import { IOSpringValues } from "../../core/IOAnimations";
import { Icon } from "../icons/Icon";

export type AccordionItem = {
  id: number;
  title: string;
  body: string | React.ReactNode;
};

type AccordionBody = {
  children: React.ReactNode;
  expanded: boolean;
};

/* The code below is a re-adaptation of Dima Portenko's code:
https://github.com/dimaportenko/reanimated-collapsable-card-tutorial
*/
export const AccordionBody = ({ children, expanded }: AccordionBody) => {
  const [height, setHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height: onLayoutHeight } = event.nativeEvent.layout;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const animatedHeightStyle = useAnimatedStyle(
    () => ({
      height: expanded
        ? withSpring(height, IOSpringValues.accordion)
        : withSpring(0, IOSpringValues.accordion)
    }),
    [expanded]
  );

  return (
    <Animated.View
      style={[animatedHeightStyle, styles.accordionCollapsableContainer]}
    >
      <View style={styles.accordionBodyContainer} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  );
};

export const AccordionItem = ({ title, body }: AccordionItem) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  const animatedChevron = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate: expanded
            ? withSpring(`180deg`, IOSpringValues.accordion)
            : withSpring(`0deg`, IOSpringValues.accordion)
        }
      ]
    }),
    [expanded]
  );

  return (
    <View style={styles.wrap}>
      <TouchableWithoutFeedback onPress={onItemPress}>
        <View style={styles.textContainer}>
          <View style={{ flexShrink: 1, marginRight: 8 }}>
            <H6 color="black">{title}</H6>
          </View>
          <Animated.View style={animatedChevron}>
            <Icon name="chevronBottom" color="blueIO-500" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <AccordionBody expanded={expanded}>
        {typeof body === "string" ? (
          <Text style={styles.accordionBodyText}>{body}</Text>
        ) : (
          body
        )}
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
  accordionCollapsableContainer: {
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
