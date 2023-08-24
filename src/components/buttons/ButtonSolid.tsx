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
import { IOScaleValues, IOSpringValues } from "../../core/IOAnimations";
import { IOColors } from "../../core/IOColors";
import { IOButtonStyles } from "../../core/IOStyles";
import { IOIcons, Icon } from "../icons";
import { WithTestID } from "../../utils/types";
import { HSpacer } from "../spacer/Spacer";
import { ButtonText, ButtonTextAllowedColors } from "../typography/ButtonText";

type ButtonSolidColor = "primary" | "danger" | "contrast";

type ColorStates = {
  default: string;
  pressed: string;
  label: {
    default: ButtonTextAllowedColors;
    disabled: ButtonTextAllowedColors;
  };
};

const colorPrimaryButtonDisabled: IOColors = "grey-200";
const DISABLED_OPACITY = 0.5;

const styles = StyleSheet.create({
  backgroundDisabled: {
    backgroundColor: IOColors[colorPrimaryButtonDisabled],
    opacity: DISABLED_OPACITY
  }
});

export type ButtonSolidProps = WithTestID<{
  color?: ButtonSolidColor;
  label: string;
  small?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: IOIcons;
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

export const ButtonSolid = React.memo(
  ({
    color = "primary",
    label,
    small = false,
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

    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

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
        [mapColorStates[color].default, mapColorStates[color].pressed]
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
    const foregroundColor = disabled
      ? mapColorStates[color]?.label?.disabled
      : mapColorStates[color]?.label?.default;

    // Icon size
    const iconSize = small ? 16 : 20;

    const Button = () => (
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
            IOButtonStyles.button,
            iconPosition === "end" && { flexDirection: "row-reverse" },
            small
              ? IOButtonStyles.buttonSizeSmall
              : IOButtonStyles.buttonSizeDefault,
            disabled
              ? styles.backgroundDisabled
              : { backgroundColor: mapColorStates[color]?.default },
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
    return <Button />;
  }
);

export default ButtonSolid;
