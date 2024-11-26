import * as React from "react";
import { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOColors,
  IOScaleValues,
  IOSelectionListItemStyles,
  IOSelectionListItemVisualParams,
  IOSelectionTickVisualParams,
  IOSpringValues,
  IOStyles,
  hexToRgba,
  useIOTheme
} from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { AnimatedCheckbox } from "../checkbox/AnimatedCheckbox";
import { IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { H6, BodySmall } from "../typography";

type Props = {
  value: string;
  description?: string;
  icon?: IOIcons;
  selected?: boolean;
  onValueChange?: (newValue: boolean) => void;
};

const DISABLED_OPACITY = 0.5;

type ListItemCheckboxProps = Props &
  Pick<
    React.ComponentProps<typeof Pressable>,
    "onPress" | "accessibilityLabel" | "accessibilityHint" | "disabled"
  >;

/**
 *  with the automatic state management that uses a {@link AnimatedCheckBox}
 * The toggleValue change when a `onPress` event is received and dispatch the `onValueChange`.
 *
 * @param props
 * @constructor
 */
export const ListItemCheckbox = ({
  value,
  description,
  icon,
  selected,
  accessibilityLabel,
  accessibilityHint,
  disabled,
  onValueChange
}: ListItemCheckboxProps) => {
  const { dynamicFontScale, spacingScaleMultiplier, hugeFontEnabled } =
    useIOFontDynamicScale();

  const [toggleValue, setToggleValue] = useState(selected ?? false);
  // Animations
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Theme
  const theme = useIOTheme();

  // Accessibility
  // Comma = Small pause when announcing content
  const fallbackAccessibilityLabel = description
    ? `${value}, ${description}`
    : value;

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

  // Interpolate animation values from `isPressed` values
  const animatedScaleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }]
    };
  });

  const handlePressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const handlePressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [mapBackgroundStates.default, mapBackgroundStates.pressed]
    );

    return {
      backgroundColor
    };
  });

  const toggleCheckbox = () => {
    ReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(!toggleValue);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };

  return (
    <Pressable
      onPress={toggleCheckbox}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      testID="ListItemCheckbox"
      accessible={true}
      accessibilityLabel={accessibilityLabel || fallbackAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: selected ?? toggleValue,
        disabled: !!disabled
      }}
      disabled={disabled}
    >
      <Animated.View
        style={[
          IOSelectionListItemStyles.listItem,
          animatedBackgroundStyle,
          { opacity: disabled ? DISABLED_OPACITY : 1 }
        ]}
        // This is required to avoid opacity
        // inheritance on Android
        needsOffscreenAlphaCompositing={true}
      >
        <Animated.View style={animatedScaleStyle}>
          <View style={IOSelectionListItemStyles.listItemInner}>
            <View
              style={[
                IOStyles.row,
                {
                  flexShrink: 1,
                  columnGap:
                    IOSelectionListItemVisualParams.iconMargin *
                    dynamicFontScale *
                    spacingScaleMultiplier
                }
              ]}
            >
              {icon && !hugeFontEnabled && (
                <Icon
                  allowFontScaling
                  name={icon}
                  color="grey-300"
                  size={IOSelectionListItemVisualParams.iconSize}
                />
              )}
              <H6 color={theme["textBody-default"]} style={{ flexShrink: 1 }}>
                {value}
              </H6>
            </View>
            <HSpacer size={8} />
            <View
              pointerEvents="none"
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
            >
              <AnimatedCheckbox
                size={IOSelectionTickVisualParams.size * dynamicFontScale}
                checked={selected ?? toggleValue}
              />
            </View>
          </View>
          {description && (
            <View>
              <VSpacer
                size={IOSelectionListItemVisualParams.descriptionMargin}
              />
              <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
                {description}
              </BodySmall>
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
