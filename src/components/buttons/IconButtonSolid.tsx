import * as React from "react";
import { useCallback } from "react";
import { GestureResponderEvent, Pressable } from "react-native";
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
  IOButtonStyles,
  IOIconButtonStyles,
  IOScaleValues,
  IOSpringValues
} from "../../core";
import { IOColors, hexToRgba } from "../../core/IOColors";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons } from "../icons";

export type IconButtonSolid = WithTestID<{
  icon: IOIcons;
  color?: "primary" | "contrast";
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  icon: {
    default: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<IconButtonSolid["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-100"]
    },
    icon: {
      default: IOColors.white,
      disabled: IOColors["grey-450"]
    }
  },
  contrast: {
    background: {
      default: IOColors.white,
      pressed: IOColors["blueIO-50"],
      disabled: hexToRgba(IOColors.white, 0.25)
    },
    icon: {
      default: IOColors["blueIO-500"],
      disabled: IOColors["blueIO-500"]
    }
  }
};

export const IconButtonSolid = ({
  icon,
  color = "primary",
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButtonSolid) => {
  const isPressed = useSharedValue(0);
  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.exaggeratedButton?.pressedState;

  // Using a spring-based animation for our interpolations
  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const pressedAnimationStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [
        mapColorStates[color].background.default,
        mapColorStates[color].background.pressed
      ]
    );

    // Scale down button slightly when pressed
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolation.CLAMP
    );

    return {
      backgroundColor,
      transform: [{ scale }]
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
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      accessibilityState={{ disabled }}
      testID={testID}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessible={true}
      disabled={disabled}
      style={IOButtonStyles.dimensionsDefault}
    >
      <Animated.View
        style={[
          IOIconButtonStyles.button,
          IOIconButtonStyles.buttonSizeLarge,
          !disabled && pressedAnimationStyle,
          disabled
            ? {
                backgroundColor: mapColorStates[color]?.background?.disabled
              }
            : {
                backgroundColor: mapColorStates[color]?.background?.default
              }
        ]}
      >
        <AnimatedIcon
          name={icon}
          color={
            !disabled
              ? mapColorStates[color]?.icon?.default
              : mapColorStates[color]?.icon?.disabled
          }
        />
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonSolid;
