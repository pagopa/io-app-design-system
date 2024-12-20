import React, { useEffect, useMemo } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOColors,
  IOSpringValues,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { BodySmall } from "../typography";

type ColorMode = "light" | "dark";

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
    disabled: string;
  };
  background: {
    default: string;
    selected: string;
    pressed: string;
  };
  foreground: {
    default: IOColors;
    selected: IOColors;
    disabled: IOColors;
  };
};

const mapColorStates: Record<NonNullable<TabItem["color"]>, ColorStates> = {
  light: {
    border: {
      default: IOColors["grey-300"],
      selected: IOColors["blueIO-500"],
      disabled: IOColors["grey-300"]
    },
    background: {
      default: IOColors.white,
      selected: IOColors["blueIO-50"],
      pressed: IOColors.white
    },
    foreground: {
      default: "black",
      selected: "blueIO-500",
      disabled: "grey-700"
    }
  },
  dark: {
    border: {
      default: hexToRgba(IOColors.white, 0),
      selected: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.5)
    },
    background: {
      default: hexToRgba(IOColors.white, 0),
      selected: IOColors.white,
      pressed: IOColors.white
    },
    foreground: {
      default: "white",
      selected: "black",
      disabled: "white"
    }
  }
};

const mapLegacyColorStates: Record<
  NonNullable<TabItem["color"]>,
  ColorStates
> = {
  light: {
    border: {
      default: IOColors["grey-300"],
      selected: IOColors.blue,
      disabled: hexToRgba(IOColors.white)
    },
    background: {
      default: IOColors.white,
      selected: hexToRgba(IOColors.blue, 0.1),
      pressed: IOColors.white
    },
    foreground: {
      default: "black",
      selected: "blue",
      disabled: "grey-700"
    }
  },
  dark: {
    border: {
      default: hexToRgba(IOColors.white, 0),
      selected: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.5)
    },
    background: {
      default: "#ffffff00",
      selected: IOColors.white,
      pressed: IOColors.white
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
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation();
  const reducedMotion = useReducedMotion();

  const { isExperimental } = useIOExperimentalDesign();
  const colors = useMemo(
    () =>
      isExperimental ? mapColorStates[color] : mapLegacyColorStates[color],
    [isExperimental, color]
  );

  const foregroundColor = useMemo(
    () =>
      colors.foreground[
        selected ? "selected" : disabled ? "disabled" : "default"
      ],
    [colors.foreground, selected, disabled]
  );

  const borderColor = useMemo(
    () =>
      colors.border[selected ? "selected" : disabled ? "disabled" : "default"],
    [colors.border, selected, disabled]
  );

  const opaquePressedBackgroundColor = hexToRgba(
    colors.background.pressed,
    0.1
  );

  const isSelected: SharedValue<number> = useSharedValue(0);
  const progressSelected = useDerivedValue(() =>
    withSpring(isSelected.value, IOSpringValues.selection)
  );

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    isSelected.value = selected ? 1 : 0;
  }, [isSelected, selected]);

  // Interpolate animation values from `pressed` values
  const animatedStyle = useAnimatedStyle(() => {
    // Link color states to the pressed states
    const pressedBackgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.background.default, opaquePressedBackgroundColor]
    );

    const selectedBackgroundColor = interpolateColor(
      progressSelected.value,
      [0, 1],
      [opaquePressedBackgroundColor, colors.background.selected]
    );

    const selectedBorderColor = interpolateColor(
      progressSelected.value,
      [0, 1],
      [colors.border.default, colors.border.selected]
    );

    return {
      backgroundColor: selected
        ? selectedBackgroundColor
        : pressedBackgroundColor,
      borderColor: selected ? selectedBorderColor : borderColor
    };
  }, [progress, progressSelected, selected]);

  const activeIcon = selected ? iconSelected ?? icon : icon;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      accessibilityState={{ selected }}
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      disabled={disabled}
    >
      <Animated.View
        style={[
          styles.container,
          { columnGap: 4 },
          !reducedMotion && scaleAnimatedStyle,
          animatedStyle,
          fullWidth && styles.fullWidth,
          disabled && styles.disabled
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
  },
  disabled: { opacity: 0.5 }
});

export { TabItem };
