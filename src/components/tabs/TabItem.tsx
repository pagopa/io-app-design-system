import React, { useCallback, useMemo } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  withSpring
} from "react-native-reanimated";
import {
  IOColors,
  IOSpringValues,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { BodySmall } from "../typography";

type ColorMode = "light" | "dark";

type TabItemState = "default" | "selected" | "disabled";

export type TabItem = WithTestID<{
  label: string;
  color?: ColorMode;
  selected?: boolean;
  fullWidth?: boolean;
  // Icons
  icon?: IOIcons;
  iconSelected?: IOIcons;
  // Accessibility
  accessibilityLabel: string;
  accessibilityHint?: string;
  // Events
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}>;

type ColorStates = {
  border: {
    default: string;
    selected: string;
  };
  background: {
    default: string;
    selected: string;
  };
  foreground: {
    default: IOColors;
    selected: IOColors;
    disabled: IOColors;
  };
};

const DISABLED_OPACITY = 0.5;

const mapLegacyColorStates: Record<
  NonNullable<TabItem["color"]>,
  ColorStates
> = {
  light: {
    border: {
      default: IOColors["grey-450"],
      selected: IOColors["blue-500"]
    },
    background: {
      default: IOColors.white,
      selected: hexToRgba(IOColors["blue-500"], 0.1)
    },
    foreground: {
      default: "black",
      selected: "blue-500",
      disabled: "grey-700"
    }
  },
  dark: {
    border: {
      default: hexToRgba(IOColors.white, 0),
      selected: IOColors.white
    },
    background: {
      default: hexToRgba(IOColors.white, 0.1),
      selected: IOColors.white
    },
    foreground: {
      default: "white",
      selected: "black",
      disabled: "white"
    }
  }
};

const TabItem = ({
  label,
  color = "light",
  selected = false,
  fullWidth = false,
  accessibilityLabel,
  accessibilityHint,
  testID,
  onPress,
  disabled = false,
  icon,
  iconSelected
}: TabItem) => {
  const { onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("medium");
  const theme = useIOTheme();
  const reducedMotion = useReducedMotion();

  const { isExperimental } = useIOExperimentalDesign();

  const mapColorStates: Record<
    NonNullable<TabItem["color"]>,
    ColorStates
  > = useMemo(
    () => ({
      light: {
        border: {
          default: IOColors[theme["tab-item-border-default"]],
          selected: hexToRgba(
            IOColors[theme["tab-item-foreground-selected"]],
            0.5
          )
        },
        background: {
          default: hexToRgba(
            IOColors[theme["tab-item-background-selected"]],
            0
          ),
          selected: hexToRgba(
            IOColors[theme["tab-item-background-selected"]],
            0.25
          ),
          pressed: IOColors[theme["appBackground-primary"]]
        },
        foreground: {
          default: theme["tab-item-foreground-default"],
          selected: theme["tab-item-foreground-selected"],
          disabled: "grey-700"
        }
      },
      dark: {
        border: {
          default: hexToRgba(IOColors.white, 0),
          selected: IOColors.white
        },
        background: {
          default: hexToRgba(IOColors.white, 0.1),
          selected: IOColors.white,
          pressed: IOColors.white
        },
        foreground: {
          default: "white",
          selected: "black",
          disabled: "white"
        }
      }
    }),
    [theme]
  );

  const colors = useMemo(
    () =>
      isExperimental ? mapColorStates[color] : mapLegacyColorStates[color],
    [isExperimental, mapColorStates, color]
  );

  const itemState: TabItemState = selected
    ? "selected"
    : disabled
    ? "disabled"
    : "default";

  const foregroundColor = useMemo(
    () => colors.foreground[itemState],
    [colors.foreground, itemState]
  );

  const selectedStateTransition = useDerivedValue(() =>
    withSpring(selected ? 1 : 0, IOSpringValues.selection)
  );

  // Interpolate animation values from `pressed` values
  const animatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        selectedStateTransition.value,
        [0, 1],
        [colors.background.default, colors.background.selected]
      ),
      borderColor: interpolateColor(
        selectedStateTransition.value,
        [0, 1],
        [colors.border.default, colors.border.selected]
      )
    }),
    [selectedStateTransition]
  );

  const activeIcon = selected ? iconSelected ?? icon : icon;

  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      if (onPress) {
        ReactNativeHapticFeedback.trigger("impactLight");
        onPress(event);
      }
    },
    [onPress]
  );

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      accessibilityState={{ selected }}
      testID={testID}
      onPress={handleOnPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      disabled={disabled}
    >
      <Animated.View
        style={[
          styles.container,
          { columnGap: 4 },
          !disabled && !reducedMotion && scaleAnimatedStyle,
          animatedStyle,
          fullWidth && styles.fullWidth,
          disabled && { opacity: DISABLED_OPACITY }
        ]}
      >
        {activeIcon && (
          <Icon name={activeIcon} color={foregroundColor} size={16} />
        )}
        <BodySmall weight="Semibold" color={foregroundColor}>
          {label}
        </BodySmall>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 64,
    borderCurve: "continuous",
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  fullWidth: {
    alignSelf: "auto"
  }
});

export { TabItem };
