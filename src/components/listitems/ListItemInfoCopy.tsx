import React, { ComponentProps, useCallback, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
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
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { BodySmall, H6 } from "../typography";

export type ListItemInfoCopy = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  onPress: (event: GestureResponderEvent) => void;
  icon?: IOIcons;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemInfoCopy = ({
  label,
  value,
  numberOfLines = 2,
  onPress,
  icon,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemInfoCopy) => {
  const isPressed = useSharedValue(0);
  const theme = useIOTheme();

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const listItemAccessibilityLabel = useMemo(
    () =>
      accessibilityLabel
        ? accessibilityLabel
        : `${label}; ${componentValueToAccessibility}`,
    [label, componentValueToAccessibility, accessibilityLabel]
  );

  const foregroundColor = theme["interactiveElem-default"];

  const listItemInfoCopyContent = (
    <>
      <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
        {label}
      </BodySmall>
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof value === "string" ? (
        <H6 color={foregroundColor} numberOfLines={numberOfLines}>
          {value}
        </H6>
      ) : (
        { value }
      )}
    </>
  );

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

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
      accessible={true}
      accessibilityLabel={listItemAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {icon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <Icon
                name={icon}
                color="grey-450"
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={IOStyles.flex}>{listItemInfoCopyContent}</View>
          <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
            <Icon
              name="copy"
              color={foregroundColor}
              size={IOListItemVisualParams.chevronSize}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemInfoCopy;
