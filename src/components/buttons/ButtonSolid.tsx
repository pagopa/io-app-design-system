import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef
} from "react";
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOColors,
  enterTransitionInnerContent,
  enterTransitionInnerContentSmall,
  exitTransitionInnerContent,
  hexToRgba,
  useIONewTypeface,
  useIOTheme
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import {
  AnimatedIconWithColorTransition,
  IOIconSizeScale,
  IOIcons,
  Icon
} from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { IOText } from "../typography";
import { buttonTextFontSize } from "../typography/ButtonText";

export type ButtonColor = "primary" | "danger" | "contrast";
export type ButtonVariant = "solid" | "outline";

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  foreground: {
    default: IOColors;
    pressed: IOColors;
    disabled: IOColors;
  };
};

type ColorStatesLink = {
  foreground: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const ICON_MARGIN = 8;
const DISABLED_OPACITY = 0.5;

const useButtonColorMap = (variant: ButtonVariant) => {
  const theme = useIOTheme();

  const mapColorStatesVariantSolid: Record<
    NonNullable<ButtonProps["color"]>,
    ColorStates
  > = {
    // Primary button
    primary: {
      background: {
        default: IOColors[theme["interactiveElem-default"]],
        pressed: IOColors[theme["interactiveElem-pressed"]],
        disabled: IOColors[theme["interactiveElem-disabled"]]
      },
      foreground: {
        default: theme["buttonText-default"],
        pressed: theme["buttonText-default"],
        disabled: theme["buttonText-disabled"]
      }
    },
    // Danger button
    danger: {
      background: {
        default: IOColors["error-600"],
        pressed: IOColors["error-500"],
        disabled: IOColors[theme["interactiveElem-disabled"]]
      },
      foreground: {
        default: theme["buttonText-danger"],
        pressed: theme["buttonText-danger"],
        disabled: theme["buttonText-disabled"]
      }
    },
    // Contrast button
    contrast: {
      background: {
        default: IOColors.white,
        pressed: IOColors["blueIO-50"],
        disabled: IOColors["blueIO-50"]
      },
      foreground: {
        default: "blueIO-500",
        pressed: "blueIO-500",
        disabled: "blueIO-500"
      }
    }
  };

  const mapColorStatesVariantOutline: Record<
    NonNullable<ButtonProps["color"]>,
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
        default: theme["interactiveElem-default"],
        pressed: theme["interactiveElem-pressed"],
        disabled: theme["interactiveOutline-disabled"]
      }
    },
    // Danger button
    danger: {
      background: {
        default: hexToRgba(IOColors["error-600"], 0),
        pressed: hexToRgba(IOColors["error-500"], 0.1),
        disabled: "transparent"
      },
      foreground: {
        default: theme["buttonText-danger"],
        pressed: theme["buttonText-danger"],
        disabled: theme["buttonText-disabled"]
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
        default: "white",
        pressed: "white",
        disabled: "blueIO-200"
      }
    }
  };

  const mapColorStatesVariantLink: Record<
    NonNullable<ButtonProps["color"]>,
    ColorStatesLink
  > = {
    // Primary button
    primary: {
      foreground: {
        default: IOColors[theme["interactiveElem-default"]],
        pressed: IOColors[theme["interactiveElem-pressed"]],
        disabled: hexToRgba(IOColors[theme["interactiveElem-default"]], 0.85)
      }
    },
    danger: {
      foreground: {
        default: theme["buttonText-danger"],
        pressed: theme["buttonText-danger"],
        disabled: theme["buttonText-disabled"]
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

  const colorMap = {
    solid: mapColorStatesVariantSolid,
    outline: mapColorStatesVariantOutline,
    link: mapColorStatesVariantLink
  };

  return colorMap[variant];
};

const useButtonAnimatedStyles = (
  variant: ButtonVariant,
  color: ButtonColor,
  progress: SharedValue<number>
) => {
  const mapColorStates = useButtonColorMap(variant);

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
        IOColors[mapColorStates[color].foreground.default],
        IOColors[mapColorStates[color].foreground.pressed]
      ]
    );

    return variant === "outline"
      ? { backgroundColor, borderColor }
      : { backgroundColor };
  });

  const pressedColorLabelAnimationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [
        IOColors[mapColorStates[color].foreground.default],
        IOColors[mapColorStates[color].foreground.pressed]
      ]
    )
  }));

  const iconColorAnimatedStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [
        IOColors[mapColorStates[color]?.foreground?.default],
        IOColors[mapColorStates[color]?.foreground?.pressed]
      ]
    )
  }));

  return {
    buttonAnimatedStyle: pressedAnimationStyle,
    labelAnimatedStyle: pressedColorLabelAnimationStyle,
    iconColorAnimatedStyle
  };
};

// Visual attributes
const btnBorderRadius = 8;
const btnSizeDefault = 48;
const iconSize: IOIconSizeScale = 20;
const borderWidthOutline = 2;

export type ButtonProps = WithTestID<
  {
    /**
     * @default solid
     */
    variant?: ButtonVariant;
    /**
     * @default primary
     */
    color?: ButtonColor;
    label: string;
    /**
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @default false
     */
    loading?: boolean;
    icon?: IOIcons;
    /**
     * @default start
     */
    iconPosition?: "start" | "end";
    onPress: (event: GestureResponderEvent) => void;
  } & Pick<
    ComponentProps<typeof Pressable>,
    "disabled" | "accessibilityLabel" | "accessibilityHint"
  >
>;

export const ButtonSolid = forwardRef<View, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      label,
      fullWidth = false,
      disabled = false,
      loading = false,
      icon,
      iconPosition = "start",
      onPress,
      accessibilityLabel,
      accessibilityHint,
      testID
    },
    ref
  ) => {
    const mapColorStates = useButtonColorMap(variant);
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();

    const { buttonAnimatedStyle, labelAnimatedStyle, iconColorAnimatedStyle } =
      useButtonAnimatedStyles(variant, color, progress);

    const reducedMotion = useReducedMotion();

    const { newTypefaceEnabled } = useIONewTypeface();
    const AnimatedIOText = Animated.createAnimatedComponent(IOText);

    /* Prevent the component from triggering the `isEntering' transition
       on the on the first render. Solution from this discussion:
       https://github.com/software-mansion/react-native-reanimated/discussions/2513
    */
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
      // eslint-disable-next-line functional/immutable-data
      isMounted.current = true;
    }, []);

    const handleOnPress = useCallback(
      (event: GestureResponderEvent) => {
        /* Don't call `onPress` if the button is
        in loading state */
        if (loading) {
          return;
        }
        ReactNativeHapticFeedback.trigger("impactLight");
        onPress(event);
      },
      [loading, onPress]
    );

    // Background
    const backgroundColor: ColorValue = disabled
      ? mapColorStates[color]?.background?.disabled
      : mapColorStates[color]?.background?.default;

    // Label & Icons colors
    const foregroundColor: IOColors = disabled
      ? mapColorStates[color]?.foreground?.disabled
      : mapColorStates[color]?.foreground?.default;

    const borderWidth: number = variant === "outline" ? borderWidthOutline : 0;

    // Render button content
    const renderButtonContent = () => (
      <>
        {loading && (
          <Animated.View
            style={styles.buttonInner}
            entering={
              isMounted.current ? enterTransitionInnerContentSmall : undefined
            }
            exiting={exitTransitionInnerContent}
          >
            <LoadingSpinner color={foregroundColor} />
          </Animated.View>
        )}

        {!loading && (
          <Animated.View
            style={[
              styles.buttonInner,
              { columnGap: ICON_MARGIN },
              iconPosition === "end" && { flexDirection: "row-reverse" }
            ]}
            entering={
              isMounted.current ? enterTransitionInnerContent : undefined
            }
          >
            {icon &&
              (!disabled ? (
                <AnimatedIconWithColorTransition
                  allowFontScaling
                  name={icon}
                  animatedProps={iconColorAnimatedStyle}
                  size={iconSize}
                />
              ) : (
                <Icon
                  allowFontScaling
                  name={icon}
                  color={mapColorStates[color]?.foreground?.disabled}
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
                { alignSelf: "center" },
                disabled
                  ? {
                      color:
                        IOColors[mapColorStates[color]?.foreground?.disabled]
                    }
                  : labelAnimatedStyle
              ]}
            >
              {label}
            </AnimatedIOText>
          </Animated.View>
        )}
      </>
    );

    return (
      <Pressable
        testID={testID}
        ref={ref}
        accessible={true}
        // Using || operator because empty string is not an accepted value
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityState={{
          busy: loading,
          disabled: disabled || false
        }}
        accessibilityRole={"button"}
        onPress={handleOnPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={
          fullWidth
            ? { flexShrink: 0, alignSelf: "stretch" }
            : { flexShrink: 1, alignSelf: "auto" }
        }
      >
        <Animated.View
          style={[
            styles.button,
            fullWidth && { paddingHorizontal: 16 },
            {
              height: btnSizeDefault,
              backgroundColor,
              borderWidth,
              borderColor: IOColors[foregroundColor]
            },
            disabled ? { opacity: DISABLED_OPACITY } : {},
            /* Prevent Reanimated from overriding background colors
              if button is disabled */
            !disabled && !reducedMotion && scaleAnimatedStyle,
            !disabled && buttonAnimatedStyle
          ]}
        >
          {renderButtonContent()}
        </Animated.View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center", // Prop supported on Android only
    borderRadius: btnBorderRadius,
    borderCurve: "continuous",
    paddingHorizontal: 24,
    overflow: "hidden",
    elevation: 0
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ButtonSolid;
