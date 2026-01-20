import React, { Fragment } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useIOTheme } from "../../context";
import {
  IOAccordionRadius,
  IOColors,
  IOSpacingScale
} from "../../core";
import { useAccordionAnimation } from "../../hooks/useAccordionAnimation";
import { Icon } from "../icons";
import { Divider } from "../layout";
import { ListItemCheckbox, ListItemInfo } from "../listitems";
import { H6 } from "../typography";

const accordionBodySpacing: IOSpacingScale = 16;

// Threshold to determine when the accordion is considered fully collapsed
const COLLAPSED_RADIUS_THRESHOLD = 0.001;

type Props = {
  /**
   * The accordion title.
   */
  title: string;
  /**
   * The list of items to display within the accordion.
   */
  items: Array<Item>;
  /**
   * Enable the selection of items with a checkbox.
   * @default true
   */
  selectionEnabled?: boolean;
  /**
   * The IDs of the selected items, when the component is controlled.
   */
  selectedItemIds?: Array<string>;
  /**
   * Whether the accordion starts expanded.
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Function called when a item is selected.
   */
  onItemSelected?: (item: Item, selected: boolean) => void;
  /**
   * Function called when the accordion is toggled to collapsed or expanded state.
   */
  onToggle?: (expanded: boolean) => void;
  accessibilityLabel?: string;
  /**
   * Accordion header gradient colors.
   */
  headerGradientColors?: Array<string>;
};

type Item = {
  id: string;
  value: string;
  description: string;
  type?: "text" | "image";
};

export const ClaimsSelector = ({
  title,
  items,
  defaultExpanded,
  onItemSelected,
  onToggle,
  accessibilityLabel,
  selectedItemIds,
  selectionEnabled = true,
  headerGradientColors
}: Props) => {
  const theme = useIOTheme();
  const {
    expanded,
    toggleAccordion,
    onBodyLayout,
    iconAnimatedStyle,
    bodyAnimatedStyle,
    bodyInnerStyle,
    progress
  } = useAccordionAnimation({
    defaultExpanded
  });

  const accordionBackground: IOColors = theme["appBackground-primary"];
  const accordionBorder: IOColors = theme["cardBorder-default"];

  const onItemPress = () => {
    toggleAccordion();
    onToggle?.(!expanded);
  };

  const hasHeaderGradient = (headerGradientColors?.length ?? 0) >= 2;

  const headerRadiusAnimatedStyle = useAnimatedStyle(() => {
    /**
     * Dynamically adjust bottom corner radius based on the expansion progress.
     * Bottom corners are rounded only when the accordion is fully collapsed to
     * ensure visual consistency with the outer container.
     */
    const bottomRadius =
      progress.value < COLLAPSED_RADIUS_THRESHOLD ? IOAccordionRadius : 0;
    return {
      borderTopLeftRadius: IOAccordionRadius,
      borderTopRightRadius: IOAccordionRadius,
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
      overflow: "hidden"
    };
  });

  const renderClaimItem = (item: Item, index: number) => {
    const { id, value, description, type = "text" } = item;
    return (
      <Fragment key={id}>
        {index !== 0 && <Divider />}
        {
          // We do not support checkbox selection for images, as it is not needed now
          selectionEnabled && type === "text" ? (
            <ListItemCheckbox
              value={value}
              description={description}
              selected={selectedItemIds?.includes(id)}
              onValueChange={
                onItemSelected
                  ? selected => onItemSelected(item, selected)
                  : undefined
              }
            />
          ) : (
            <ListItemInfo
              value={
                type === "image" ? (
                  <Image
                    source={{ uri: value }}
                    style={styles.imageClaim}
                    resizeMode="contain"
                    accessibilityIgnoresInvertColors
                  />
                ) : (
                  value
                )
              }
              label={description}
              accessibilityRole={type}
              reversed
            />
          )
        }
      </Fragment>
    );
  };

  return (
    <View
      style={[
        styles.accordionWrapper,
        {
          backgroundColor: IOColors[accordionBackground],
          borderColor: IOColors[accordionBorder]
        }
      ]}
    >
      <TouchableWithoutFeedback
        accessible={true}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        accessibilityLabel={accessibilityLabel ?? title}
        onPress={onItemPress}
      >
        <Animated.View style={[styles.textContainer, headerRadiusAnimatedStyle]}>
          {hasHeaderGradient && (
            <LinearGradient
              colors={headerGradientColors!}
              style={StyleSheet.absoluteFill}
            />
          )}
          <H6 color={theme["textBody-default"]}>{title}</H6>
          <Animated.View style={iconAnimatedStyle}>
            <Icon name="chevronBottom" color={theme["interactiveElem-default"]} />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>

      <Animated.View style={bodyAnimatedStyle}>
        <View
          style={[bodyInnerStyle, styles.bodyInnerContainer]}
          onLayout={onBodyLayout}
        >
          {items.map(renderClaimItem)}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionWrapper: {
    borderWidth: 1,
    borderRadius: IOAccordionRadius,
    borderCurve: "continuous"
  },
  textContainer: {
    padding: accordionBodySpacing,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bodyInnerContainer: {
    width: "100%"
  },
  imageClaim: {
    width: 160,
    aspectRatio: 3 / 4
  }
});
