import React, { useCallback } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOColors,
  IOListItemStyles,
  IOListItemVisualParams,
  IOScaleValues,
  IOSpringValues,
  IOStyles,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons, Icon } from "../icons";
import { buttonTextFontSize } from "../typography/ButtonText";

export type ListItemAction = WithTestID<{
  label: string;
  variant: "primary" | "danger";
  onPress: (event: GestureResponderEvent) => void;
  icon?: IOIcons;
  // Accessibility
  accessibilityLabel: string;
}>;

const styles = StyleSheet.create({
  label: {
    fontSize: buttonTextFontSize,
    lineHeight: 20,
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  }
});

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyStyles = StyleSheet.create({
  labelLegacy: {
    fontSize: buttonTextFontSize,
    lineHeight: 20,
    ...makeFontStyleObject("SemiBold", false, "TitilliumWeb")
  }
});

export const ListItemAction = ({
  variant,
  label,
  onPress,
  icon,
  accessibilityLabel,
  testID
}: ListItemAction) => {
  const isPressed = useSharedValue(0);

  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

  const mapLegacyForegroundColor: Record<
    NonNullable<ListItemAction["variant"]>,
    IOColors
  > = {
    primary: "blue",
    danger: "error-850"
  };

  const mapForegroundColor: Record<
    NonNullable<ListItemAction["variant"]>,
    string
  > = {
    primary: IOColors[theme["interactiveElem-default"]],
    danger: IOColors[theme.errorText]
  };

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyItemActionIcon = (icon: IOIcons) => (
    <Icon
      name={icon}
      color={mapLegacyForegroundColor[variant]}
      size={IOListItemVisualParams.iconSize}
    />
  );

  const itemActionIcon = (icon: IOIcons) => (
    <>
      <AnimatedIcon
        name={icon}
        color={mapForegroundColor[variant] as IOColors}
        size={IOListItemVisualParams.iconSize}
      />
    </>
  );

  const itemActionIconComponent = (icon: IOIcons) =>
    isExperimental ? itemActionIcon(icon) : legacyItemActionIcon(icon);

  const textStyle = [styles.label, { color: mapForegroundColor[variant] }];

  const legacyTextStyle = [
    legacyStyles.labelLegacy,
    { color: IOColors[mapLegacyForegroundColor[variant]] }
  ];

  const textStyleComponent = isExperimental ? textStyle : legacyTextStyle;

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const animatedScaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }]
    };
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [mapBackgroundStates.default, mapBackgroundStates.pressed]
    );

    return {
      backgroundColor
    };
  });

  const handlePressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const handlePressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
        importantForAccessibility="no-hide-descendants"
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {icon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              {itemActionIconComponent(icon)}
            </View>
          )}
          <View style={IOStyles.flex}>
            <Text style={textStyleComponent}>{label}</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemAction;
