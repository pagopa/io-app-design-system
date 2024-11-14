import * as React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  AnimatedIcon,
  IOIcons,
  IconClassComponent
} from "../../components/icons";
import {
  IOButtonStyles,
  IOColors,
  IOIconButtonStyles,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";
import { WithTestID } from "../../utils/types";
import { useAnimatedButton } from "./useScaleButton";

export type IconButtonContained = WithTestID<{
  icon: IOIcons;
  color?: "primary" | "neutral" | "contrast";
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
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<IconButtonContained["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(IOColors["blueIO-500"], 0),
      pressed: hexToRgba(IOColors["blueIO-500"], 0.15),
      disabled: "transparent"
    },
    icon: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: hexToRgba(IOColors["blueIO-500"], 0.25)
    }
  },
  // Neutral button
  neutral: {
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    icon: {
      default: IOColors.bluegrey,
      pressed: IOColors.black,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const mapLegacyColorStates: Record<
  NonNullable<IconButtonContained["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(IOColors.blue, 0),
      pressed: hexToRgba(IOColors.blue, 0.15),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.blue,
      pressed: IOColors.blue,
      disabled: hexToRgba(IOColors.blue, 0.25)
    }
  },
  // Neutral button
  neutral: {
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    icon: {
      default: IOColors.bluegrey,
      pressed: IOColors.black,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(IOColors.white, 0),
      pressed: hexToRgba(IOColors.white, 0.2),
      disabled: "transparent"
    },
    icon: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: hexToRgba(IOColors.white, 0.25)
    }
  }
};

const AnimatedIconClassComponent =
  Animated.createAnimatedComponent(IconClassComponent);

export const IconButtonContained = ({
  icon,
  color = "primary",
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: IconButtonContained) => {
  const { isExperimental } = useIOExperimentalDesign();

  const { progressPressed, onPressIn, onPressOut, scaleAnimationStyle } =
    useAnimatedButton("exaggerated");
  const reducedMotion = useReducedMotion();

  const colorMap = React.useMemo(
    () => (isExperimental ? mapColorStates : mapLegacyColorStates),
    [isExperimental]
  );

  const backgroundColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progressPressed.value,
      [0, 1],
      [colorMap[color].background.default, colorMap[color].background.pressed]
    )
  }));

  // Animate the <Icon> color prop
  const iconColorAnimationStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progressPressed.value,
      [0, 1],
      [colorMap[color].icon.default, colorMap[color].icon.pressed]
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
          IOIconButtonStyles.buttonSizeDefault,
          !disabled && !reducedMotion && scaleAnimationStyle,
          !disabled && backgroundColorAnimationStyle
        ]}
      >
        {!disabled ? (
          <AnimatedIconClassComponent
            name={icon}
            animatedProps={iconColorAnimationStyle}
            color={colorMap[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon name={icon} color={colorMap[color]?.icon?.disabled} />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonContained;
