import React, { ComponentProps, useCallback } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOButtonLegacyStyles,
  IOButtonStyles,
  IOColors,
  IOScaleValues,
  IOSpringValues,
  hexToRgba,
  useIOExperimentalDesign
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

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<ButtonOutline["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    border: {
      default: IOColors.blue,
      pressed: IOColors.blue,
      disabled: IOColors.bluegreyLight
    },
    background: {
      default: hexToRgba(IOColors.blue, 0),
      pressed: hexToRgba(IOColors.blue, 0.15),
      disabled: "transparent"
    },
    label: {
      default: IOColors.blue,
      pressed: IOColors.blue,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    border: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.5)
    },
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    label: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.5)
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

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const IOButtonLegacyStylesLocal = StyleSheet.create({
  buttonWithBorder: {
    borderWidth: 1
  }
});

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
    const { isExperimental } = useIOExperimentalDesign();
    const isPressed: Animated.SharedValue<number> = useSharedValue(0);

    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    const colorMap = React.useMemo(
      () => (isExperimental ? mapColorStates : mapLegacyColorStates),
      [isExperimental]
    );

    const buttonStyles = React.useMemo(
      () => (isExperimental ? IOButtonStyles : IOButtonLegacyStyles),
      [isExperimental]
    );

    const buttonStylesLocal = React.useMemo(
      () => (isExperimental ? IOButtonStylesLocal : IOButtonLegacyStylesLocal),
      [isExperimental]
    );
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
        [colorMap[color].background.default, colorMap[color].background.pressed]
      );

      const borderColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [colorMap[color].border.default, colorMap[color].border.pressed]
      );

      // Scale down button slightly when pressed
      const scale = interpolate(
        progressPressed.value,
        [0, 1],
        [1, animationScaleValue],
        Extrapolate.CLAMP
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
        [colorMap[color].border.default, colorMap[color].border.pressed]
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
        [colorMap[color].label.default, colorMap[color].label.pressed]
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
            buttonStyles.button,
            isExperimental && fullWidth && { paddingHorizontal: 16 },
            buttonStylesLocal.buttonWithBorder,
            buttonStyles.buttonSizeDefault,
            iconPosition === "end" && { flexDirection: "row-reverse" },
            disabled
              ? {
                  backgroundColor: colorMap[color]?.background?.disabled,
                  borderColor: colorMap[color]?.border?.disabled,
                  opacity: DISABLED_OPACITY
                }
              : {
                  backgroundColor: colorMap[color]?.background?.default,
                  borderColor: colorMap[color]?.border.default
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
                  color={colorMap[color]?.label?.default}
                  size={iconSize}
                />
              ) : (
                <AnimatedIcon
                  name={icon}
                  color={colorMap[color]?.label?.disabled}
                  size={iconSize}
                />
              )}
              <HSpacer size={8} />
            </>
          )}
          <AnimatedIOText
            font={isExperimental ? "ReadexPro" : "TitilliumSansPro"}
            weight={isExperimental ? "Regular" : "Bold"}
            size={buttonTextFontSize}
            accessible={false}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              buttonStyles.label,
              disabled
                ? { color: colorMap[color]?.label?.disabled }
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
