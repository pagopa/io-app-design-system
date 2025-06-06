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
  View
} from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import { useIOTheme } from "../../context";
import {
  IOButtonStyles,
  IOColors,
  enterTransitionInnerContent,
  enterTransitionInnerContentSmall,
  exitTransitionInnerContent
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { ButtonText } from "../typography/ButtonText";

export type ButtonSolidColor = "primary" | "danger" | "contrast";

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  foreground: {
    default: IOColors;
    disabled: IOColors;
  };
};

const ICON_MARGIN = 8;
const DISABLED_OPACITY = 0.5;

// Icon size
const iconSize: IOIconSizeScale = 20;

export type ButtonSolidProps = WithTestID<
  {
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

/**
 * @deprecated Use `Button` with variant `solid` instead
 */
export const ButtonSolid = forwardRef<View, ButtonSolidProps>(
  (
    {
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
    const theme = useIOTheme();
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation();
    const reducedMotion = useReducedMotion();

    const mapColorStates: Record<
      NonNullable<ButtonSolidProps["color"]>,
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
          disabled: "blueIO-500"
        }
      }
    };

    /* Prevent the component from triggering the `isEntering' transition
       on the on the first render. Solution from this discussion:
       https://github.com/software-mansion/react-native-reanimated/discussions/2513
    */
    const isMounted = useRef(false);

    useEffect(() => {
      // eslint-disable-next-line functional/immutable-data
      isMounted.current = true;
    }, []);

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

      return { backgroundColor };
    });

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
            IOButtonStyles.button,
            IOButtonStyles.buttonSizeDefault,
            { backgroundColor, overflow: "hidden" },
            fullWidth && { paddingHorizontal: 16 },
            disabled ? { opacity: DISABLED_OPACITY } : {},
            /* Prevent Reanimated from overriding background colors
              if button is disabled */
            !disabled && !reducedMotion && scaleAnimatedStyle,
            !disabled && pressedAnimationStyle
          ]}
        >
          {loading && (
            <Animated.View
              style={IOButtonStyles.buttonInner}
              entering={
                isMounted.current ? enterTransitionInnerContentSmall : undefined
              }
              exiting={exitTransitionInnerContent}
            >
              <LoadingSpinner color={IOColors[foregroundColor]} />
            </Animated.View>
          )}

          {!loading && (
            <Animated.View
              style={[
                IOButtonStyles.buttonInner,
                { columnGap: ICON_MARGIN },
                /* If 'iconPosition' is set to 'end', we use 
                   reverse flex property to invert the position */
                iconPosition === "end" && { flexDirection: "row-reverse" }
              ]}
              entering={
                isMounted.current ? enterTransitionInnerContent : undefined
              }
            >
              {icon && (
                <Icon
                  allowFontScaling
                  name={icon}
                  size={iconSize}
                  color={foregroundColor}
                />
              )}
              <ButtonText
                color={foregroundColor}
                style={IOButtonStyles.label}
                numberOfLines={1}
                ellipsizeMode="tail"
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
              >
                {label}
              </ButtonText>
            </Animated.View>
          )}
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonSolid;
