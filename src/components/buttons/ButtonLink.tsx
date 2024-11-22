import React, { useCallback } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOButtonStyles,
  IOColors,
  IOScaleValues,
  IOSpringValues,
  hexToRgba,
  useIONewTypeface
} from "../../core";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";
import { HSpacer } from "../spacer/Spacer";
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

export const ButtonLink = React.forwardRef<View, ButtonLinkProps>(
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
    const isPressed = useSharedValue(0);
    const { newTypefaceEnabled } = useIONewTypeface();

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

    // Using a spring-based animation for our interpolations
    const progressPressed = useDerivedValue(() =>
      withSpring(isPressed.value, IOSpringValues.button)
    );

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      // Scale down button slightly when pressed
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

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      const labelColor = interpolateColor(
        progressPressed.value,
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
        progressPressed.value,
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

    const onPressIn = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 1;
    }, [isPressed]);
    const onPressOut = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 0;
    }, [isPressed]);

    // Icon size
    const iconSize: IOIconSizeScale = 24;

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
            disabled ? { opacity: DISABLED_OPACITY } : {},
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !disabled && pressedAnimationStyle
          ]}
        >
          {icon && (
            <>
              {!disabled ? (
                <AnimatedIconClassComponent
                  name={icon}
                  animatedProps={pressedColorIconAnimationStyle}
                  color={mapColorStates[color]?.label?.default}
                  size={iconSize}
                />
              ) : (
                <AnimatedIcon
                  name={icon}
                  color={mapColorStates[color]?.label?.disabled}
                  size={iconSize}
                />
              )}
              <HSpacer size={8} />
            </>
          )}
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
