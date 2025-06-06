import React, { Fragment } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import { useIOTheme } from "../../context";
import {
  hexToRgba,
  IOAccordionRadius,
  IOColors,
  IOSpacingScale
} from "../../core";
import { useAccordionAnimation } from "../../hooks/useAccordionAnimation";
import { Divider } from "../divider";
import { Icon } from "../icons";
import { ListItemCheckbox, ListItemInfo } from "../listitems";
import { H6 } from "../typography";

const accordionBodySpacing: IOSpacingScale = 16;

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
  selectionEnabled = true
}: Props) => {
  const theme = useIOTheme();
  const {
    expanded,
    toggleAccordion,
    onBodyLayout,
    iconAnimatedStyle,
    bodyAnimatedStyle,
    bodyInnerStyle
  } = useAccordionAnimation({
    defaultExpanded
  });

  const accordionBackground: IOColors = theme["appBackground-secondary"];
  const accordionBorder: IOColors = theme["cardBorder-default"];

  const onItemPress = () => {
    toggleAccordion();
    onToggle?.(!expanded);
  };

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
        <View style={styles.textContainer}>
          <H6 color={theme["textBody-default"]}>{title}</H6>
          <Animated.View style={iconAnimatedStyle}>
            <Icon
              name="chevronBottom"
              color={theme["interactiveElem-default"]}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={bodyAnimatedStyle}>
        <View
          style={[bodyInnerStyle, styles.bodyInnerContainer]}
          onLayout={onBodyLayout}
        >
          {items.map(renderClaimItem)}
        </View>
      </Animated.View>

      {/* This gradient adds a smooth end to the content. If it is missing,
      the content will be cut sharply during the height transition. */}
      <LinearGradient
        style={styles.linearGradient}
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
  linearGradient: {
    height: accordionBodySpacing,
    position: "absolute",
    // Place at the bottom
    bottom: 0,
    // Avoid gradient overlaps with border radius
    left: accordionBodySpacing,
    right: accordionBodySpacing
  },
  imageClaim: {
    width: 160,
    aspectRatio: 3 / 4
  }
});
