import React, { forwardRef, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOButtonStyles,
  IOColors,
  IOSpacingScale,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";
import { IOText, buttonTextFontSize } from "../typography";
import { useAnimatedButton } from "./useScaleButton";

export type ColorButtonLink = "primary" | "contrast";

export type ButtonLinkProps = WithTestID<{
  color?: ColorButtonLink;
  label: string;
  disabled?: boolean;
  // Icons
  icon?: IOIcons;
  iconPosition?: "start" | "end";
  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
  // Events
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  label: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<ButtonLinkProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    label: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-700"]
    }
  },
  contrast: {
    label: {
      default: IOColors.white,
      pressed: hexToRgba(IOColors.white, 0.85),
      disabled: hexToRgba(IOColors.white, 0.5)
    }
  }
};

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<ButtonLinkProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    label: {
      default: IOColors.blue,
      pressed: IOColors["blue-600"],
      disabled: IOColors["grey-700"]
    }
  },
  contrast: {
    label: {
      default: IOColors.white,
      pressed: hexToRgba(IOColors.white, 0.85),
      disabled: hexToRgba(IOColors.white, 0.5)
    }
  }
};

const DISABLED_OPACITY = 0.5;

export const ButtonLink = forwardRef<View, ButtonLinkProps>(
  (
    {
      color = "primary",
      label,
      disabled = false,
      icon,
      iconPosition = "start",
      onPress,
      accessibilityLabel,
      accessibilityHint,
      testID
    },
    ref
  ) => {
    const { isExperimental } = useIOExperimentalDesign();
    const { progressPressed, onPressIn, onPressOut, scaleAnimationStyle } =
      useAnimatedButton();
    const reducedMotion = useReducedMotion();

    const colorMap = useMemo(
      () => (isExperimental ? mapColorStates : mapLegacyColorStates),
      [isExperimental]
    );

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const pressedColorAnimationStyle = useAnimatedStyle(() => {
      const labelColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [colorMap[color].label.default, colorMap[color].label.pressed]
      );

      return {
        color: labelColor
      };
    });

    const AnimatedIconClassComponent =
      Animated.createAnimatedComponent(IconClassComponent);

    // Icon size
    const iconSize: IOIconSizeScale = 24;
    const iconMargin: IOSpacingScale = 8;

    return (
      <Pressable
        ref={ref}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityRole={"button"}
        accessibilityState={{ disabled }}
        testID={testID}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onTouchEnd={onPressOut}
        accessible={true}
        disabled={disabled}
        hitSlop={{ top: 14, right: 24, bottom: 14, left: 24 }}
        style={IOButtonStyles.dimensionsDefault}
      >
        <Animated.View
          style={[
            IOButtonStyles.buttonLink,
            iconPosition === "end" && { flexDirection: "row-reverse" },
            { columnGap: iconMargin },
            disabled ? { opacity: DISABLED_OPACITY } : {},
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !disabled && !reducedMotion && scaleAnimationStyle
          ]}
        >
          {icon &&
            (!disabled ? (
              <AnimatedIconClassComponent
                name={icon}
                animatedProps={pressedColorAnimationStyle}
                color={colorMap[color]?.label?.default}
                size={iconSize}
              />
            ) : (
              <AnimatedIcon
                name={icon}
                color={colorMap[color]?.label?.disabled}
                size={iconSize}
              />
            ))}
          <AnimatedIOText
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            font={isExperimental ? "Titillio" : "TitilliumSansPro"}
            weight={isExperimental ? "Semibold" : "Bold"}
            size={buttonTextFontSize}
            style={
              disabled
                ? { color: colorMap[color]?.label?.disabled }
                : { ...pressedColorAnimationStyle }
            }
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {label}
          </AnimatedIOText>
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonLink;
