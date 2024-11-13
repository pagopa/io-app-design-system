import React, { ComponentProps, useCallback, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated, {
  Extrapolation,
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
  hexToRgba,
  useIOTheme
} from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons } from "../icons";
import { ButtonText } from "../typography/ButtonText";

export type ListItemAction = WithTestID<{
  label: string;
  variant: "primary" | "danger";
  onPress: (event: GestureResponderEvent) => void;
  icon?: IOIcons;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemAction = ({
  variant,
  label,
  onPress,
  icon,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemAction) => {
  const isPressed = useSharedValue(0);

  const theme = useIOTheme();

  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  const listItemAccessibilityLabel = useMemo(
    () => (accessibilityLabel ? accessibilityLabel : `${label}`),
    [label, accessibilityLabel]
  );

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

  const mapForegroundColor: Record<
    NonNullable<ListItemAction["variant"]>,
    IOColors
  > = {
    primary: theme["interactiveElem-default"],
    danger: theme.errorText
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
      Extrapolation.CLAMP
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
      accessibilityLabel={listItemAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
      >
        <Animated.View
          style={[
            IOListItemStyles.listItemInner,
            {
              columnGap:
                IOListItemVisualParams.iconMargin *
                dynamicFontScale *
                spacingScaleMultiplier
            },
            animatedScaleStyle
          ]}
        >
          {icon && (
            <AnimatedIcon
              allowFontScaling
              name={icon}
              color={IOColors[mapForegroundColor[variant]]}
              size={IOListItemVisualParams.iconSize}
            />
          )}
          <View style={{ flexGrow: 1, flexShrink: 1 }}>
            <ButtonText color={mapForegroundColor[variant]}>{label}</ButtonText>
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemAction;
