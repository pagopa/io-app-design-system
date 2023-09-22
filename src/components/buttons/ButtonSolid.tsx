import React, { useCallback } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { WithTestID } from "../../utils/types";
import { HSpacer } from "../spacer/Spacer";
import { ButtonText } from "../typography/ButtonText";
import {
  IOButtonLegacyStyles,
  IOButtonStyles,
  IOColors,
  IOScaleValues,
  IOSpringValues,
  useIOExperimentalDesign
} from "../../core";

type ButtonSolidColor = "primary" | "danger" | "contrast";

type ColorStates = {
  default: string;
  pressed: string;
  label: {
    default: IOColors;
    disabled: IOColors;
  };
};

// Disabled state
// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const colorPrimaryLegacyButtonDisabled: IOColors = "bluegreyLight";
const legacyStyles = StyleSheet.create({
  backgroundDisabled: {
    backgroundColor: IOColors[colorPrimaryLegacyButtonDisabled]
  }
});

const colorPrimaryButtonDisabled: IOColors = "grey-200";
const DISABLED_OPACITY = 0.5;

// Icon size
const iconSize: IOIconSizeScale = 20;

const styles = StyleSheet.create({
  backgroundDisabled: {
    backgroundColor: IOColors[colorPrimaryButtonDisabled],
    opacity: DISABLED_OPACITY
  }
});

export type ButtonSolidProps = WithTestID<{
  /**
   * @default primary
   */
  color?: ButtonSolidColor;
  label: string;
  /**
   * @default false
   */
  fullWidth?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
  icon?: IOIcons;
  /**
   * @default start
   */
  iconPosition?: "start" | "end";
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

const mapColorStates: Record<
  NonNullable<ButtonSolidProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    default: IOColors["blueIO-500"],
    pressed: IOColors["blueIO-600"],
    label: {
      default: "white",
      disabled: "grey-700"
    }
  },
  // Danger button
  danger: {
    default: IOColors["error-850"],
    pressed: IOColors["error-600"],
    label: {
      default: "white",
      disabled: "grey-700"
    }
  },
  // Contrast button
  contrast: {
    default: IOColors.white,
    pressed: IOColors["blueIO-50"],
    label: {
      default: "blueIO-500",
      disabled: "grey-700"
    }
  }
};

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<ButtonSolidProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    default: IOColors.blue,
    pressed: IOColors["blue-600"],
    label: {
      default: "white",
      disabled: "white"
    }
  },
  // Danger button
  danger: {
    default: IOColors["error-600"],
    pressed: IOColors["error-500"],
    label: {
      default: "white",
      disabled: "white"
    }
  },
  // Contrast button
  contrast: {
    default: IOColors.white,
    pressed: IOColors["blue-50"],
    label: {
      default: "blue",
      disabled: "white"
    }
  }
};

export const ButtonSolid = React.memo(
  ({
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
  }: ButtonSolidProps) => {
    const isPressed = useSharedValue(0);
    const { isExperimental } = useIOExperimentalDesign();
    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

    const colorMap = React.useMemo(
      () => (isExperimental ? mapColorStates : mapLegacyColorStates),
      [isExperimental]
    );

    const buttonStyles = React.useMemo(
      () => (isExperimental ? IOButtonStyles : IOButtonLegacyStyles),
      [isExperimental]
    );

    // Using a spring-based animation for our interpolations
    const progressPressed = useDerivedValue(() =>
      withSpring(isPressed.value, IOSpringValues.button)
    );

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states
      const bgColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [colorMap[color].default, colorMap[color].pressed]
      );

      // Scale down button slightly when pressed
      const scale = interpolate(
        progressPressed.value,
        [0, 1],
        [1, animationScaleValue],
        Extrapolate.CLAMP
      );

      return {
        backgroundColor: bgColor,
        transform: [{ scale }]
      };
    });

    const onPressIn = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 1;
    }, [isPressed]);
    const onPressOut = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 0;
    }, [isPressed]);

    // Label & Icons colors
    const foregroundColor: IOColors = disabled
      ? colorMap[color]?.label?.disabled
      : colorMap[color]?.label?.default;

    return (
      <Pressable
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole={"button"}
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
            iconPosition === "end" && { flexDirection: "row-reverse" },
            buttonStyles.buttonSizeDefault,
            disabled
              ? isExperimental
                ? styles.backgroundDisabled
                : legacyStyles.backgroundDisabled
              : { backgroundColor: colorMap[color]?.default },
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !disabled && pressedAnimationStyle
          ]}
        >
          {icon && (
            <>
              {/* If 'iconPosition' is set to 'end', we use 
            reverse flex property to invert the position */}
              <Icon name={icon} size={iconSize} color={foregroundColor} />
              {/* Once we have support for 'gap' property,
            we can get rid of that spacer */}
              <HSpacer size={8} />
            </>
          )}
          <ButtonText
            color={foregroundColor}
            style={IOButtonStyles.label}
            numberOfLines={1}
            ellipsizeMode="tail"
            /* A11y-related props:
                DON'T UNCOMMENT THEM */
            /* allowFontScaling
                maxFontSizeMultiplier={1.3} */
          >
            {label}
          </ButtonText>
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonSolid;
