import React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useReducedMotion
} from "react-native-reanimated";
import { IOColors, IOIconButtonStyles, IOStyles, hexToRgba } from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";

export type IconButton = WithTestID<{
  color?: "primary" | "neutral" | "contrast";
  icon: IOIcons;
  iconSize?: IOIconSizeScale;
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  icon: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<NonNullable<IconButton["color"]>, ColorStates> = {
  // Primary button
  primary: {
    icon: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: hexToRgba(IOColors["blueIO-500"], 0.25)
    }
  },
  // Neutral button
  neutral: {
    icon: {
      default: IOColors.black,
      pressed: IOColors["grey-850"],
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    icon: {
      default: IOColors.white,
      pressed: hexToRgba(IOColors.white, 0.85),
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const AnimatedIconClassComponent =
  Animated.createAnimatedComponent(IconClassComponent);

export const IconButton = ({
  color = "primary",
  icon,
  iconSize = 24,
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButton) => {
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("exaggerated");
  const reducedMotion = useReducedMotion();

  // Animate the <Icon> color prop
  const animatedColor = useAnimatedProps(() => {
    const iconColor = interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].icon.default, mapColorStates[color].icon.pressed]
    );
    return { color: iconColor };
  });

  return (
    <Pressable
      disabled={disabled}
      // Events
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      // Accessibility
      accessible={true}
      accessibilityRole={"button"}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      // Usability
      // Add a touchable area around the button
      hitSlop={8}
      // Test
      testID={testID}
    >
      <Animated.View
        style={[
          IOIconButtonStyles.buttonSizeSmall,
          IOStyles.alignCenter,
          IOStyles.centerJustified,
          !disabled && !reducedMotion && scaleAnimatedStyle
        ]}
      >
        {!disabled ? (
          <AnimatedIconClassComponent
            allowFontScaling
            name={icon}
            size={iconSize}
            animatedProps={animatedColor}
            color={mapColorStates[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon
            allowFontScaling
            name={icon}
            size={iconSize}
            color={mapColorStates[color]?.icon?.disabled}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButton;
