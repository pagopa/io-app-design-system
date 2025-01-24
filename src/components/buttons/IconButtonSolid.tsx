import * as React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOButtonStyles,
  IOIconButtonStyles,
  useIOExperimentalDesign
} from "../../core";
import { IOColors, hexToRgba } from "../../core/IOColors";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons } from "../icons";

export type IconButtonSolid = WithTestID<{
  icon: IOIcons;
  color?: "primary" | "contrast";
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  icon: {
    default: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<IconButtonSolid["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-100"]
    },
    icon: {
      default: IOColors.white,
      disabled: IOColors["grey-450"]
    }
  },
  contrast: {
    background: {
      default: IOColors.white,
      pressed: IOColors["blueIO-50"],
      disabled: hexToRgba(IOColors.white, 0.25)
    },
    icon: {
      default: IOColors["blueIO-500"],
      disabled: IOColors["blueIO-500"]
    }
  }
};

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const mapLegacyColorStates: Record<
  NonNullable<IconButtonSolid["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: IOColors["blue-500"],
      pressed: IOColors["blue-600"],
      disabled: IOColors["grey-100"]
    },
    icon: {
      default: IOColors.white,
      disabled: IOColors["grey-450"]
    }
  },
  contrast: {
    background: {
      default: IOColors.white,
      pressed: IOColors["blue-50"],
      disabled: hexToRgba(IOColors.white, 0.25)
    },
    icon: {
      default: IOColors["blue-500"],
      disabled: IOColors["blue-500"]
    }
  }
};

export const IconButtonSolid = ({
  icon,
  color = "primary",
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButtonSolid) => {
  const { isExperimental } = useIOExperimentalDesign();

  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("exaggerated");
  const reducedMotion = useReducedMotion();

  const colorMap = React.useMemo(
    () => (isExperimental ? mapColorStates : mapLegacyColorStates),
    [isExperimental]
  );

  const backgroundColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colorMap[color].background.default, colorMap[color].background.pressed]
    )
  }));

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
      accessibilityState={{ disabled }}
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      disabled={disabled}
      style={IOButtonStyles.dimensionsDefault}
    >
      <Animated.View
        style={[
          IOIconButtonStyles.button,
          IOIconButtonStyles.buttonSizeLarge,
          !disabled && !reducedMotion && scaleAnimatedStyle,
          !disabled && backgroundColorAnimationStyle,
          disabled
            ? {
                backgroundColor: colorMap[color]?.background?.disabled
              }
            : {
                backgroundColor: colorMap[color]?.background?.default
              }
        ]}
      >
        <AnimatedIcon
          allowFontScaling
          name={icon}
          color={
            !disabled
              ? colorMap[color]?.icon?.default
              : colorMap[color]?.icon?.disabled
          }
        />
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonSolid;
