import React, { forwardRef } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOButtonStyles,
  IOColors,
  IOSpacingScale,
  hexToRgba,
  useIONewTypeface
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";
import { IOText, buttonTextFontSize } from "../typography";

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
      testID
    },
    ref
  ) => {
    const { newTypefaceEnabled } = useIONewTypeface();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      const labelColor = interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].label.default,
          mapColorStates[color].label.pressed
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
          mapColorStates[color].label.default,
          mapColorStates[color].label.pressed
        ]
      );

      return { color: iconColor };
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
                animatedProps={pressedColorIconAnimationStyle}
                color={mapColorStates[color]?.label?.default}
                size={iconSize}
              />
            ) : (
              <AnimatedIcon
                allowFontScaling
                name={icon}
                color={mapColorStates[color]?.label?.disabled}
                size={iconSize}
              />
            ))}
          <AnimatedIOText
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            font={newTypefaceEnabled ? "Titillio" : "TitilliumSansPro"}
            weight={"Semibold"}
            size={buttonTextFontSize}
            style={
              disabled
                ? { color: mapColorStates[color]?.label?.disabled }
                : { ...pressedColorLabelAnimationStyle }
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
