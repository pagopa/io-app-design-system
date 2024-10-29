import React, { ComponentProps, useCallback } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
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
  hexToRgba
} from "../../core/";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIcon,
  IOIconSizeScale,
  IOIcons,
  IconClassComponent
} from "../icons";
import { HSpacer } from "../spacer/Spacer";
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
      default: IOColors.red,
      pressed: IOColors.red,
      disabled: IOColors.bluegreyLight
    },
    background: {
      default: hexToRgba(IOColors.red, 0),
      pressed: hexToRgba(IOColors.red, 0.15),
      disabled: "transparent"
    },
    label: {
      default: IOColors.red,
      pressed: IOColors.red,
      disabled: IOColors.grey
    }
  }
};

// Icon size
const iconSize: IOIconSizeScale = 20;

const DISABLED_OPACITY = 0.5;

const IOButtonStylesLocal = StyleSheet.create({
  buttonWithBorder: {
    borderWidth: 2
  }
});

export const ButtonOutline = React.forwardRef<View, ButtonOutline>(
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
    const isPressed: SharedValue<number> = useSharedValue(0);

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
      const backgroundColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [
          mapColorStates[color].background.default,
          mapColorStates[color].background.pressed
        ]
      );

      const borderColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [
          mapColorStates[color].border.default,
          mapColorStates[color].border.pressed
        ]
      );

      // Scale down button slightly when pressed
      const scale = interpolate(
        progressPressed.value,
        [0, 1],
        [1, animationScaleValue],
        Extrapolation.CLAMP
      );

      return {
        borderColor,
        backgroundColor,
        transform: [{ scale }]
      };
    });

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      const labelColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [
          mapColorStates[color].border.default,
          mapColorStates[color].border.pressed
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
            font={"ReadexPro"}
            weight={"Regular"}
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
