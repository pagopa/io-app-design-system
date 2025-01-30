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
import {
  IOButtonStyles,
  IOColors,
  hexToRgba,
  useIONewTypeface
} from "../../core/";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";
import { IOText, buttonTextFontSize } from "../typography";

type ColorButtonOutline = "primary" | "contrast" | "danger";
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
  border: {
    default: string;
    pressed: string;
    disabled: string;
  };
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  label: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<ButtonOutline["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    border: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-200"]
    },
    background: {
      default: hexToRgba(IOColors["blueIO-50"], 0),
      pressed: hexToRgba(IOColors["blueIO-50"], 1),
      disabled: "transparent"
    },
    label: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-700"]
    }
  },
  // Contrast button
  contrast: {
    border: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: IOColors["blueIO-200"]
    },
    background: {
      default: hexToRgba(IOColors["blueIO-600"], 0),
      pressed: IOColors["blueIO-600"],
      disabled: "transparent"
    },
    label: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: IOColors["blueIO-200"]
    }
  },
  // Danger button
  danger: {
    border: {
      default: IOColors["error-600"],
      pressed: IOColors["error-600"],
      disabled: IOColors["grey-200"]
    },
    background: {
      default: hexToRgba(IOColors["error-600"], 0),
      pressed: hexToRgba(IOColors["error-600"], 0.15),
      disabled: "transparent"
    },
    label: {
      default: IOColors["error-600"],
      pressed: IOColors["error-600"],
      disabled: IOColors["grey-450"]
    }
  }
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
    const { newTypefaceEnabled } = useIONewTypeface();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

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
          mapColorStates[color].border.default,
          mapColorStates[color].border.pressed
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
          mapColorStates[color].border.default,
          mapColorStates[color].border.pressed
        ]
      )
    }));

    // Animate the <Icon> color prop
    const pressedColorIconAnimationStyle = useAnimatedProps(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [
          mapColorStates[color].label.default,
          mapColorStates[color].label.pressed
        ]
      )
    }));

    const AnimatedIconClassComponent =
      Animated.createAnimatedComponent(IconClassComponent);

    return (
      <Pressable
        ref={ref}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityRole={"button"}
        accessibilityState={{ disabled: disabled || false }}
        testID={testID}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessible={true}
        disabled={disabled}
        style={!fullWidth ? IOButtonStyles.dimensionsDefault : {}}
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
                  borderColor: mapColorStates[color]?.border?.disabled,
                  opacity: DISABLED_OPACITY
                }
              : {
                  backgroundColor: mapColorStates[color]?.background?.default,
                  borderColor: mapColorStates[color]?.border.default
                },
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !reducedMotion && !disabled && scaleAnimatedStyle,
            !disabled && pressedAnimationStyle
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
            font={newTypefaceEnabled ? "Titillio" : "TitilliumSansPro"}
            weight={"Semibold"}
            size={buttonTextFontSize}
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              IOButtonStyles.label,
              disabled
                ? { color: mapColorStates[color]?.label?.disabled }
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
