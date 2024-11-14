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
  IOButtonLegacyStyles,
  IOButtonStyles,
  IOColors,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core/";
import { useScaleAnimation } from "../../utils/hooks";
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

// Icon size
const iconSize: IOIconSizeScale = 20;

const DISABLED_OPACITY = 0.5;

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const IOButtonLegacyStylesLocal = StyleSheet.create({
  buttonWithBorder: {
    borderWidth: 1
  }
});

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
    const { isExperimental } = useIOExperimentalDesign();
    const { progress, onPressIn, onPressOut, scaleAnimationStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

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

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states
      const backgroundColor = interpolateColor(
        progress.value,
        [0, 1],
        [colorMap[color].background.default, colorMap[color].background.pressed]
      );

      const borderColor = interpolateColor(
        progress.value,
        [0, 1],
        [colorMap[color].border.default, colorMap[color].border.pressed]
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
        [colorMap[color].border.default, colorMap[color].border.pressed]
      )
    }));

    // Animate the <Icon> color prop
    const pressedColorIconAnimationStyle = useAnimatedProps(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [colorMap[color].label.default, colorMap[color].label.pressed]
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
            !reducedMotion && !disabled && scaleAnimationStyle,
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
            font={isExperimental ? "Titillio" : "TitilliumSansPro"}
            weight={isExperimental ? "Semibold" : "Bold"}
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
