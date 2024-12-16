import * as React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  AnimatedIcon,
  IOIcons,
  IconClassComponent
} from "../../components/icons";
import {
  IOButtonStyles,
  IOColors,
  IOIconButtonStyles,
  hexToRgba
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";

export type IconButtonContained = WithTestID<{
  icon: IOIcons;
  color?: "primary" | "neutral" | "contrast";
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
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<IconButtonContained["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(IOColors["blueIO-500"], 0),
      pressed: hexToRgba(IOColors["blueIO-500"], 0.15),
      disabled: "transparent"
    },
    icon: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: hexToRgba(IOColors["blueIO-500"], 0.25)
    }
  },
  // Neutral button
  neutral: {
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    icon: {
      default: IOColors.bluegrey,
      pressed: IOColors.black,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const AnimatedIconClassComponent =
  Animated.createAnimatedComponent(IconClassComponent);

export const IconButtonContained = ({
  icon,
  color = "primary",
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButtonContained) => {
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("exaggerated");
  const reducedMotion = useReducedMotion();

  const backgroundColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [
        mapColorStates[color].background.default,
        mapColorStates[color].background.pressed
      ]
    )
  }));

  // Animate the <Icon> color prop
  const iconColorAnimationStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].icon.default, mapColorStates[color].icon.pressed]
    )
  }));

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      accessibilityState={{ disabled }}
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      disabled={disabled}
      style={IOButtonStyles.dimensionsDefault}
    >
      <Animated.View
        style={[
          IOIconButtonStyles.button,
          IOIconButtonStyles.buttonSizeDefault,
          !disabled && !reducedMotion && scaleAnimatedStyle,
          !disabled && backgroundColorAnimationStyle
        ]}
      >
        {!disabled ? (
          <AnimatedIconClassComponent
            name={icon}
            animatedProps={iconColorAnimationStyle}
            color={mapColorStates[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon
            name={icon}
            color={mapColorStates[color]?.icon?.disabled}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonContained;
