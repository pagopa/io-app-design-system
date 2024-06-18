import React, { useState } from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import { IOAccordionRadius, IOStyles, type IOSpacingScale } from "../../core";
import { IOSpringValues } from "../../core/IOAnimations";
import { IOColors, hexToRgba } from "../../core/IOColors";
import { makeFontStyleObject } from "../../utils/fonts";
import { IOIconSizeScale, IOIcons, Icon } from "../icons/Icon";
import { H6 } from "../typography";

export type AccordionItem = {
  title: string;
  body: string | React.ReactNode;
  icon?: IOIcons;
};

type AccordionBody = {
  children: React.ReactNode;
  expanded: boolean;
};

const accordionBodySpacing: IOSpacingScale = 16;
const accordionIconMargin: IOSpacingScale = 12;
const accordionChevronMargin: IOSpacingScale = 8;
const accordionBorder: IOColors = "grey-200";
const accordionBackground: IOColors = "white";

// Icon size
const iconSize: IOIconSizeScale = 24;

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

export const AccordionItem = ({ title, body, icon }: AccordionItem) => {
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
    <View style={styles.accordionWrapper}>
      <TouchableWithoutFeedback
        accessible={true}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        onPress={onItemPress}
      >
        <View style={styles.textContainer}>
          <View
            style={[
              IOStyles.row,
              IOStyles.alignCenter,
              {
                flexShrink: 1,
                marginRight: accordionChevronMargin
              }
            ]}
          >
            {icon && (
              <View style={{ marginRight: accordionIconMargin }}>
                <Icon name={icon} size={iconSize} color="black" />
              </View>
            )}
            <View style={{ flexShrink: 1 }}>
              <H6 color="black">{title}</H6>
            </View>
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
      {/* This gradient adds a smooth end to the content. If it is missing,
      the content will be cut sharply during the height transition. */}
      <LinearGradient
        style={{
          height: accordionBodySpacing,
          position: "absolute",
          // Place at the bottom
          bottom: 0,
          // Avoid gradient overlaps with border radius
          left: accordionBodySpacing,
          right: accordionBodySpacing
        }}
        colors={[
          hexToRgba(IOColors[accordionBackground], 0),
          IOColors[accordionBackground]
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accordionWrapper: {
    borderColor: IOColors[accordionBorder],
    borderWidth: 1,
    borderRadius: IOAccordionRadius,
    borderCurve: "continuous",
    backgroundColor: IOColors[accordionBackground]
  },
  accordionCollapsableContainer: {
    overflow: "hidden"
  },
  accordionBodyContainer: {
    position: "absolute",
    padding: accordionBodySpacing,
    paddingTop: 0
  },
  accordionBodyText: {
    fontSize: 14,
    lineHeight: 21,
    color: IOColors["grey-700"],
    ...makeFontStyleObject("Regular", undefined, "TitilliumSansPro")
  },
  textContainer: {
    padding: accordionBodySpacing,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
