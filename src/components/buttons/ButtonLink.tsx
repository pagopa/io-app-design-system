import React, { forwardRef } from "react";
import {
  AccessibilityRole,
  GestureResponderEvent,
  Pressable,
  TextStyle,
  View
} from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import { useIOTheme } from "../../context";
import {
  IOButtonStyles,
  IOColors,
  IOSpacingScale,
  hexToRgba
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  AnimatedIconWithColorTransition,
  IOIconSizeScale,
  IOIcons
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
  accessibilityRole?: Extract<AccessibilityRole, "button" | "link">;
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

const DISABLED_OPACITY = 0.5;
const ICON_MARGIN = 8;

/**
 * @deprecated Use `Button` with variant `link` instead
 */
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
      accessibilityRole = "button",
      accessibilityHint,
      numberOfLines = 1,
      textAlign = "auto",
      testID
    },
    ref
  ) => {
    const theme = useIOTheme();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const mapColorStates: Record<
      NonNullable<ButtonLinkProps["color"]>,
      ColorStates
    > = {
      // Primary button
      primary: {
        foreground: {
          default: IOColors[theme["interactiveElem-default"]],
          pressed: IOColors[theme["interactiveElem-pressed"]],
          disabled: hexToRgba(IOColors[theme["interactiveElem-default"]], 0.85)
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

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      const labelColor = interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].foreground.default,
          mapColorStates[color].foreground.pressed
        ]
      );

      return {
        color: labelColor
      };
    });

    // Animate the <Icon> color prop
    const pressedColorIconAnimationStyle = useAnimatedProps(() => {
      const iconColor = interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].foreground.default,
          mapColorStates[color].foreground.pressed
        ]
      );

      return { color: iconColor };
    });

    // Icon size
    const iconSize: IOIconSizeScale = 24;
    const iconMargin: IOSpacingScale = 8;

    return (
      <Pressable
        ref={ref}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
        accessibilityState={{ disabled }}
        testID={testID}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onTouchEnd={onPressOut}
        accessible={true}
        disabled={disabled}
        hitSlop={{ top: 14, right: 24, bottom: 14, left: 24 }}
        style={{ alignSelf: "flex-start" }}
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
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            font={"Titillio"}
            weight={"Semibold"}
            size={buttonTextFontSize}
            lineHeight={buttonTextLineHeight}
            style={[
              disabled
                ? { color: mapColorStates[color]?.foreground?.disabled }
                : { ...pressedColorLabelAnimationStyle },
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
