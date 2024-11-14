import React, { useCallback, useMemo } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IOScaleEffect,
  IOSpringValues,
  IOVisualCostants,
  enterTransitionAlertEdgeToEdge,
  enterTransitionAlertEdgeToEdgeContent,
  exitTransitionAlertEdgeToEdge
} from "../../core";
import {
  IOColors,
  IOColorsStatusBackground,
  IOColorsStatusForeground
} from "../../core/IOColors";
import { IOAlertSpacing } from "../../core/IOSpacing";
import { IOStyles } from "../../core/IOStyles";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { Label } from "../typography/Label";

const iconSize: IOIconSizeScale = 24;

const [spacingDefault] = IOAlertSpacing;

const styles = StyleSheet.create({
  alert: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    padding: spacingDefault
  }
});

type AlertProps = WithTestID<{
  variant: "error" | "warning" | "info";
  content: string;
  viewRef?: React.RefObject<View>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}>;

type AlertActionProps =
  | {
      action?: string;
      onPress: (event: GestureResponderEvent) => void;
    }
  | {
      action?: never;
      onPress?: never;
    };

export type AlertEdgeToEdgeProps = AlertProps & AlertActionProps;

type VariantStates = {
  icon: IOIcons;
  background: IOColorsStatusBackground;
  foreground: IOColorsStatusForeground;
};

// COMPONENT CONFIGURATION

const mapVariantStates: Record<
  NonNullable<AlertEdgeToEdgeProps["variant"]>,
  VariantStates
> = {
  error: {
    icon: "errorFilled",
    background: "error-100",
    foreground: "error-850"
  },
  warning: {
    icon: "warningFilled",
    background: "warning-100",
    foreground: "warning-850"
  },
  info: {
    icon: "infoFilled",
    background: "info-100",
    foreground: "info-850"
  }
};

export const AlertEdgeToEdge = ({
  variant,
  content,
  action,
  onPress,
  accessibilityHint,
  testID
}: AlertEdgeToEdgeProps) => {
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);

  const insets = useSafeAreaInsets();

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleEffect?.slight;

  // Using a spring-based animation for our interpolations
  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const pressedAnimationStyle = useAnimatedStyle(() => {
    // Scale down button slightly when pressed
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

  const onPressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const onPressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  const backgroundColor = useMemo(
    () => IOColors[mapVariantStates[variant].background],
    [variant]
  );

  const renderMainBlock = () => (
    <>
      <View
        style={{
          marginRight: IOVisualCostants.iconMargin,
          alignSelf: "center"
        }}
      >
        <Icon
          name={mapVariantStates[variant].icon}
          size={iconSize}
          color={mapVariantStates[variant].foreground}
        />
      </View>
      <View style={IOStyles.flex}>
        <Label
          color={mapVariantStates[variant].foreground}
          weight={"Regular"}
          accessibilityRole="text"
        >
          {content}
          {action && (
            <Text
              style={{
                ...makeFontStyleObject(
                  16,
                  "TitilliumSansPro",
                  undefined,
                  "Bold"
                ),
                color: IOColors[mapVariantStates[variant].foreground]
              }}
            >
              {` ${action}`}
            </Text>
          )}
        </Label>
      </View>
    </>
  );

  const PressableButton = () => (
    <Pressable
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      // A11y related props
      accessible={true}
      accessibilityHint={accessibilityHint}
      accessibilityRole={"button"}
    >
      <Animated.View
        entering={enterTransitionAlertEdgeToEdgeContent}
        style={[styles.alert, pressedAnimationStyle]}
      >
        {renderMainBlock()}
      </Animated.View>
    </Pressable>
  );

  const StaticComponent = () => (
    <Animated.View
      entering={enterTransitionAlertEdgeToEdgeContent}
      style={styles.alert}
      testID={testID}
      accessible={false}
      accessibilityRole="alert"
      accessibilityHint={accessibilityHint}
    >
      {renderMainBlock()}
    </Animated.View>
  );

  return (
    <Animated.View
      entering={enterTransitionAlertEdgeToEdge}
      exiting={exitTransitionAlertEdgeToEdge}
      style={{
        paddingTop: insets.top,
        backgroundColor
      }}
    >
      {action ? PressableButton() : StaticComponent()}
    </Animated.View>
  );
};
