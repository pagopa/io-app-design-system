import React, { forwardRef, useMemo } from "react";
import {
  GestureResponderEvent,
  Pressable,
  View,
  TextStyle
} from "react-native";
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
import {
  IOText,
  buttonTextFontSize,
  buttonTextLineHeight
} from "../typography";

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
  numberOfLines?: number;
  textAlign?: TextStyle["textAlign"];
  // Events
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  foreground: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<ButtonLinkProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    foreground: {
      default: IOColors["blue-500"],
      pressed: IOColors["blue-600"],
      disabled: IOColors["grey-700"]
    }
  },
  contrast: {
    foreground: {
      default: IOColors.white,
      pressed: hexToRgba(IOColors.white, 0.85),
      disabled: hexToRgba(IOColors.white, 0.5)
    }
  }
};

const DISABLED_OPACITY = 0.5;
const ICON_MARGIN = 8;

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
      numberOfLines = 1,
      textAlign = "auto",
      testID
    },
    ref
  ) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const mapColorStates = useMemo<
      Record<NonNullable<ButtonLinkProps["color"]>, ColorStates>
    >(
      () => ({
        // Primary button
        primary: {
          foreground: {
            default: IOColors[theme["interactiveElem-default"]],
            pressed: IOColors[theme["interactiveElem-pressed"]],
            disabled: hexToRgba(
              IOColors[theme["interactiveElem-default"]],
              0.85
            )
          }
        },
        contrast: {
          foreground: {
            default: IOColors.white,
            pressed: hexToRgba(IOColors.white, 0.85),
            disabled: hexToRgba(IOColors.white, 0.5)
          }
        }
      }),
      [theme]
    );

    const colorMap = useMemo(
      () => (isExperimental ? mapColorStates : mapLegacyColorStates),
      [isExperimental, mapColorStates]
    );

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const pressedColorAnimationStyle = useAnimatedStyle(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [colorMap[color].foreground.default, colorMap[color].foreground.pressed]
      )
    }));

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
            { columnGap: ICON_MARGIN },
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !disabled && !reducedMotion && scaleAnimatedStyle
          ]}
        >
          {icon &&
            (!disabled ? (
              <AnimatedIconClassComponent
                allowFontScaling
                name={icon}
                animatedProps={pressedColorAnimationStyle}
                color={colorMap[color]?.foreground?.default}
                size={iconSize}
              />
            ) : (
              <AnimatedIcon
                allowFontScaling
                name={icon}
                color={colorMap[color]?.foreground?.disabled}
                size={iconSize}
              />
            ))}
          <AnimatedIOText
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            font={isExperimental ? "Titillio" : "TitilliumSansPro"}
            weight={"Semibold"}
            size={buttonTextFontSize}
            lineHeight={buttonTextLineHeight}
            style={[
              disabled
                ? { color: colorMap[color]?.foreground?.disabled }
                : { ...pressedColorAnimationStyle },
              { textAlign }
            ]}
            numberOfLines={numberOfLines}
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
