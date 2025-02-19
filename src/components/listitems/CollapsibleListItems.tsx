import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import {
  hexToRgba,
  IOAccordionRadius,
  IOColors,
  IOSelectionListItemStyles,
  IOSelectionListItemVisualParams,
  IOSpacingScale,
  useIOTheme
} from "../../core";
import { useAccordionAnimation } from "../../hooks/useAccordionAnimation";
import { Divider } from "../divider";
import { BodySmall, H6 } from "../typography";
import { VSpacer } from "../spacer";
import { Icon } from "../icons";
import { ListItemCheckbox } from "./ListItemCheckbox";

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
  title: string;
  description?: string;
};

export const CollapsibleListItems = ({
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

  const body = items.map((item, index) => (
    <Fragment key={item.id}>
      {index !== 0 && <Divider />}
      {selectionEnabled ? (
        <ListItemCheckbox
          value={item.title}
          description={item.description}
          selected={selectedItemIds?.includes(item.id)}
          onValueChange={
            onItemSelected
              ? selected => onItemSelected(item, selected)
              : undefined
          }
        />
      ) : (
        <SimpleListItem value={item.title} description={item.description} />
      )}
    </Fragment>
  ));

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
          {body}
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

type SimpleListItemProps = {
  value: string;
  description?: string;
};

const SimpleListItem = ({ value, description }: SimpleListItemProps) => {
  const theme = useIOTheme();

  return (
    <View style={IOSelectionListItemStyles.listItem}>
      <H6 color={theme["textBody-default"]}>{value}</H6>
      {description && (
        <View>
          <VSpacer size={IOSelectionListItemVisualParams.descriptionMargin} />
          <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
            {description}
          </BodySmall>
        </View>
      )}
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
  }
});
