import React, { ComponentProps, forwardRef } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import { useIOTheme } from "../../context";
import { IOButtonStyles, IOColors, hexToRgba } from "../../core/";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  AnimatedIconWithColorTransition,
  IOIconSizeScale,
  IOIcons
} from "../icons";
import { IOText, buttonTextFontSize } from "../typography";

type ColorButtonOutline = "primary" | "contrast";
export type ButtonOutline = WithTestID<
  {
    color?: ColorButtonOutline;
    label: string;
    fullWidth?: boolean;
    // Icons
    icon?: IOIcons;
    iconPosition?: "start" | "end";
    // Events
    onPress: (event: GestureResponderEvent) => void;
  } & Pick<
    ComponentProps<typeof Pressable>,
    "disabled" | "accessibilityLabel" | "accessibilityHint"
  >
>;

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  foreground: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

// Icon size
const iconSize: IOIconSizeScale = 20;

const DISABLED_OPACITY = 0.5;
const ICON_MARGIN = 8;

const IOButtonStylesLocal = StyleSheet.create({
  buttonWithBorder: {
    borderWidth: 2
  }
});

/**
 * @deprecated Use `Button` with variant `outline` instead
 */
export const ButtonOutline = forwardRef<View, ButtonOutline>(
  (
    {
      color = "primary",
      label,
      fullWidth = false,
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
    const theme = useIOTheme();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const mapColorStates: Record<
      NonNullable<ButtonOutline["color"]>,
      ColorStates
    > = {
      // Primary button
      primary: {
        background: {
          default: hexToRgba(IOColors[theme["interactiveElem-pressed"]], 0),
          pressed: hexToRgba(IOColors[theme["interactiveElem-pressed"]], 0.1),
          disabled: "transparent"
        },
        foreground: {
          default: IOColors[theme["interactiveElem-default"]],
          pressed: IOColors[theme["interactiveElem-pressed"]],
          disabled: IOColors[theme["interactiveOutline-disabled"]]
        }
      },
      // Contrast button
      contrast: {
        background: {
          default: hexToRgba(IOColors["blueIO-600"], 0),
          pressed: hexToRgba(IOColors["blueIO-600"], 0.5),
          disabled: "transparent"
        },
        foreground: {
          default: IOColors.white,
          pressed: IOColors.white,
          disabled: IOColors["blueIO-200"]
        }
      }
    };

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states
      const backgroundColor = interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].background.default,
          mapColorStates[color].background.pressed
        ]
      );

      const borderColor = interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].foreground.default,
          mapColorStates[color].foreground.pressed
        ]
      );

      return {
        borderColor,
        backgroundColor
      };
    });

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].foreground.default,
          mapColorStates[color].foreground.pressed
        ]
      )
    }));

    // Animate the <Icon> color prop
    const pressedColorIconAnimationStyle = useAnimatedProps(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].foreground.default,
          mapColorStates[color].foreground.pressed
        ]
      )
    }));

    return (
      <Pressable
        ref={ref}
        accessible={true}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityRole={"button"}
        accessibilityState={{ disabled: disabled || false }}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={
          fullWidth
            ? { flexShrink: 0, alignSelf: "stretch" }
            : { flexShrink: 1, alignSelf: "auto" }
        }
        testID={testID}
      >
        <Animated.View
          style={[
            IOButtonStyles.button,
            IOButtonStyles.buttonSizeDefault,
            IOButtonStylesLocal.buttonWithBorder,
            fullWidth && { paddingHorizontal: 16 },
            { columnGap: ICON_MARGIN },
            iconPosition === "end" && { flexDirection: "row-reverse" },
            disabled
              ? {
                  backgroundColor: mapColorStates[color]?.background?.disabled,
                  borderColor: mapColorStates[color]?.foreground?.disabled,
                  opacity: DISABLED_OPACITY
                }
              : {
                  backgroundColor: mapColorStates[color]?.background?.default,
                  borderColor: mapColorStates[color]?.foreground.default
                },
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !reducedMotion && !disabled && scaleAnimatedStyle,
            !disabled && pressedAnimationStyle
          ]}
        >
          {icon &&
            (!disabled ? (
              <AnimatedIconWithColorTransition
                allowFontScaling
                name={icon}
                animatedProps={pressedColorIconAnimationStyle}
                color={mapColorStates[color]?.foreground?.default}
                size={iconSize}
              />
            ) : (
              <AnimatedIcon
                allowFontScaling
                name={icon}
                color={mapColorStates[color]?.foreground?.disabled}
                size={iconSize}
              />
            ))}
          <AnimatedIOText
            font={"Titillio"}
            weight={"Semibold"}
            size={buttonTextFontSize}
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              { alignSelf: "center" },
              disabled
                ? { color: mapColorStates[color]?.foreground?.disabled }
                : { ...pressedColorLabelAnimationStyle }
            ]}
          >
            {label}
          </AnimatedIOText>
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonOutline;
