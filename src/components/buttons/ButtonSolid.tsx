import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useRef
} from "react";
import {
  AccessibilityRole,
  ColorValue,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  TextProps,
  TextStyle,
  View,
  ViewStyle
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
  AnimatedIcon,
  AnimatedIconWithColorTransition,
  IOIconSizeScale,
  IOIcons
} from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { AnimatedIOText } from "../typography";
import {
  buttonTextFontSize,
  buttonTextLineHeight
} from "../typography/ButtonText";

export type ButtonColor = "primary" | "danger" | "contrast";
export type ButtonVariant = "solid" | "outline" | "link";

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  foreground: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const useButtonColorMap = (variant: ButtonVariant) => {
  const theme = useIOTheme();

  const mapColorStatesVariantSolid: Record<
    NonNullable<ButtonProps["color"]>,
    ColorStates
  > = {
    // Primary
    primary: {
      background: {
        default: IOColors[theme["interactiveElem-default"]],
        pressed: IOColors[theme["interactiveElem-pressed"]],
        disabled: IOColors[theme["interactiveElem-disabled"]]
      },
      foreground: {
        default: IOColors[theme["buttonText-default"]],
        pressed: IOColors[theme["buttonText-default"]],
        disabled: IOColors[theme["buttonText-disabled"]]
      }
    },
    // Danger
    danger: {
      background: {
        default: IOColors["error-600"],
        pressed: IOColors["error-500"],
        disabled: IOColors[theme["interactiveElem-disabled"]]
      },
      foreground: {
        default: IOColors[theme["buttonText-danger"]],
        pressed: IOColors[theme["buttonText-danger"]],
        disabled: IOColors[theme["buttonText-disabled"]]
      }
    },
    // Contrast
    contrast: {
      background: {
        default: IOColors.white,
        pressed: IOColors["blueIO-50"],
        disabled: IOColors["blueIO-50"]
      },
      foreground: {
        default: IOColors["blueIO-500"],
        pressed: IOColors["blueIO-500"],
        disabled: IOColors["blueIO-500"]
      }
    }
  };

  const mapColorStatesVariantOutline: Record<
    NonNullable<ButtonProps["color"]>,
    ColorStates
  > = {
    // Primary
    primary: {
      background: {
        default: hexToRgba(IOColors[theme["interactiveElem-pressed"]], 0),
        pressed: hexToRgba(IOColors[theme["interactiveElem-pressed"]], 0.1),
        disabled: "transparent"
      },
      foreground: {
        default: IOColors[theme["interactiveElem-default"]],
        pressed: IOColors[theme["interactiveElem-pressed"]],
        disabled: IOColors[theme["interactiveOutline-disabled"]]
      }
    },
    // Danger
    danger: {
      background: {
        default: hexToRgba(IOColors["error-600"], 0),
        pressed: hexToRgba(IOColors["error-600"], 0.1),
        disabled: "transparent"
      },
      foreground: {
        default: IOColors[theme.errorText],
        pressed: IOColors[theme.errorText],
        disabled: IOColors[theme["buttonText-disabled"]]
      }
    },
    // Contrast
    contrast: {
      background: {
        default: hexToRgba(IOColors["blueIO-600"], 0),
        pressed: hexToRgba(IOColors["blueIO-600"], 0.5),
        disabled: "transparent"
      },
      foreground: {
        default: IOColors.white,
        pressed: IOColors.white,
        disabled: IOColors["blueIO-200"]
      }
    }
  };

  const transparentLinkBackground: ColorStates["background"] = {
    default: "transparent",
    pressed: "transparent",
    disabled: "transparent"
  };

  const mapColorStatesVariantLink: Record<
    NonNullable<ButtonProps["color"]>,
    ColorStates
  > = {
    // Primary
    primary: {
      foreground: {
        default: IOColors[theme["interactiveElem-default"]],
        pressed: IOColors[theme["interactiveElem-pressed"]],
        disabled: hexToRgba(IOColors[theme["interactiveElem-default"]], 0.85)
      },
      background: transparentLinkBackground
    },
    // Danger
    danger: {
      foreground: {
        default: IOColors[theme.errorText],
        pressed: IOColors[theme.errorText],
        disabled: hexToRgba(IOColors[theme.errorText], 0.85)
      },
      background: transparentLinkBackground
    },
    // Contrast
    contrast: {
      foreground: {
        default: IOColors.white,
        pressed: hexToRgba(IOColors.white, 0.85),
        disabled: hexToRgba(IOColors.white, 0.5)
      },
      background: transparentLinkBackground
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
    // `link` variant doesn't need this animated style
    if (variant === "link") {
      return {};
    }

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
        mapColorStates[color].foreground.default,
        mapColorStates[color].foreground.pressed
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
        mapColorStates[color].foreground.default,
        mapColorStates[color].foreground.pressed
      ]
    )
  }));

  const iconColorAnimatedStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [
        mapColorStates[color]?.foreground?.default,
        mapColorStates[color]?.foreground?.pressed
      ]
    )
  }));

  return {
    buttonAnimatedStyle: pressedAnimationStyle,
    labelAnimatedStyle: pressedColorLabelAnimationStyle,
    iconColorAnimatedStyle
  };
};

type ButtonSpecificProps =
  | {
      variant?: "link";
      numberOfLines?: TextProps["numberOfLines"];
      textAlign?: TextStyle["textAlign"];
      fullWidth?: never;
      loading?: never;
    }
  | {
      variant?: "solid" | "outline";
      fullWidth?: boolean;
      loading?: boolean;
      numberOfLines?: never;
      textAlign?: never;
    };

export type ButtonProps = WithTestID<
  ButtonSpecificProps & {
    /**
     * @default primary
     */
    color?: ButtonColor;
    label: string;
    icon?: IOIcons;
    /**
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @default false
     */
    loading?: boolean;
    /**
     * @default start
     */
    iconPosition?: "start" | "end";
    /**
     * @default 1
     */
    numberOfLines?: number;
    /**
     * @default auto
     */
    textAlign?: TextStyle["textAlign"];
    onPress: (event: GestureResponderEvent) => void;
    /**
     * @default button
     */
    accessibilityRole?: Extract<AccessibilityRole, "button" | "link">;
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
      numberOfLines = 1,
      textAlign = "auto",
      icon,
      iconPosition = "start",
      onPress,
      accessibilityLabel,
      accessibilityHint,
      accessibilityRole = "button",
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

    const isLinkButton = variant === "link";

    // ---------------------------------------
    // VISUAL ATTRIBUTES
    // ---------------------------------------
    const btnIconSizeMap: Record<ButtonVariant, IOIconSizeScale> = {
      solid: 20,
      outline: 20,
      link: 24
    };

    const btnBorderWidthMap: Record<ButtonVariant, ViewStyle["borderWidth"]> = {
      solid: 0,
      outline: 2,
      link: 0
    };

    const btnPaddingHorizontalMap: Record<
      string,
      ViewStyle["paddingHorizontal"]
    > = {
      default: 24,
      fullWidth: 16,
      link: 0
    };

    const btnLinkHitSlop: PressableProps["hitSlop"] = {
      top: 14,
      right: 24,
      bottom: 14,
      left: 24
    };

    const btnIconSize = btnIconSizeMap[variant];
    const btnBorderWidth = btnBorderWidthMap[variant];
    const btnBorderRadius = 8;
    const btnSizeDefault = 48;

    const ICON_MARGIN = 8;
    const DISABLED_OPACITY = 0.5;

    // Background color
    const backgroundColor: ColorValue = disabled
      ? mapColorStates[color].background.disabled
      : mapColorStates[color].background.default;

    // Label & Icons colors
    const foregroundColor: ColorValue = disabled
      ? mapColorStates[color]?.foreground?.disabled
      : mapColorStates[color]?.foreground?.default;

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

    // ---------------------------------------
    // BUTTON INNER CONTENT
    // ---------------------------------------
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
                  size={btnIconSize}
                />
              ) : (
                <AnimatedIcon
                  allowFontScaling
                  name={icon}
                  color={mapColorStates[color]?.foreground?.disabled}
                  size={btnIconSize}
                />
              ))}
            <AnimatedIOText
              font={newTypefaceEnabled ? "Titillio" : "TitilliumSansPro"}
              weight={"Semibold"}
              size={buttonTextFontSize}
              lineHeight={isLinkButton ? buttonTextLineHeight : undefined}
              accessible={false}
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
              numberOfLines={numberOfLines}
              ellipsizeMode="tail"
              style={[
                { textAlign },
                disabled
                  ? { color: mapColorStates[color]?.foreground?.disabled }
                  : { ...labelAnimatedStyle }
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
        ref={ref}
        accessible={true}
        // Using || operator because empty string is not an accepted value
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
        accessibilityState={{
          busy: loading,
          disabled: disabled || false
        }}
        onPress={handleOnPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        hitSlop={isLinkButton ? btnLinkHitSlop : undefined}
        style={
          isLinkButton
            ? { alignSelf: "flex-start" }
            : fullWidth
            ? { flexShrink: 0, alignSelf: "stretch" }
            : { flexShrink: 1, alignSelf: "auto" }
        }
        testID={testID}
      >
        <Animated.View
          style={[
            styles.button,
            {
              paddingHorizontal: isLinkButton
                ? btnPaddingHorizontalMap.link
                : fullWidth
                ? btnPaddingHorizontalMap.fullWidth
                : btnPaddingHorizontalMap.default
            },
            {
              height: isLinkButton ? undefined : btnSizeDefault,
              backgroundColor,
              borderWidth: btnBorderWidth,
              borderRadius: btnBorderRadius,
              borderColor: foregroundColor
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
    borderCurve: "continuous",
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
