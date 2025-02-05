import React, { useMemo } from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOColors,
  IOIconButtonStyles,
  IOStyles,
  IOThemeLight,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
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
  persistentColorMode?: boolean;
}>;

type ColorStates = {
  icon: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<IconButton["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    icon: {
      default: IOColors["blue-500"],
      pressed: IOColors["blue-600"],
      disabled: hexToRgba(IOColors["blue-500"], 0.25)
    }
  },
  // Neutral button
  neutral: {
    icon: {
      default: IOColors.black,
      pressed: IOColors["grey-850"],
      disabled: IOColors["grey-450"]
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
  persistentColorMode = false,
  icon,
  iconSize = 24,
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButton) => {
  const theme = useIOTheme();
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("exaggerated");
  const reducedMotion = useReducedMotion();

  const { isExperimental } = useIOExperimentalDesign();

  const mapColorStates = useMemo<
    Record<NonNullable<IconButton["color"]>, ColorStates>
  >(
    () => ({
      // Primary button
      primary: {
        icon: {
          default: IOColors[theme["interactiveElem-default"]],
          pressed: IOColors[theme["interactiveElem-pressed"]],
          disabled: IOColors[theme["interactiveElem-disabled"]]
        }
      },
      // Neutral button
      neutral: {
        icon: {
          default: persistentColorMode
            ? IOColors[IOThemeLight["neutralButton-default"]]
            : IOColors[theme["neutralButton-default"]],
          pressed: persistentColorMode
            ? IOColors[IOThemeLight["neutralButton-pressed"]]
            : IOColors[theme["neutralButton-pressed"]],
          disabled: persistentColorMode
            ? IOColors[IOThemeLight["neutralButton-disabled"]]
            : IOColors[theme["neutralButton-disabled"]]
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
    }),
    [persistentColorMode, theme]
  );

  const colorMap = useMemo(
    () => (isExperimental ? mapColorStates : mapLegacyColorStates),
    [isExperimental, mapColorStates]
  );

  // Animate the <Icon> color prop
  const animatedColor = useAnimatedProps(() => {
    const iconColor = interpolateColor(
      progress.value,
      [0, 1],
      [colorMap[color].icon.default, colorMap[color].icon.pressed]
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
            color={colorMap[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon
            allowFontScaling
            name={icon}
            size={iconSize}
            color={colorMap[color]?.icon?.disabled}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButton;
