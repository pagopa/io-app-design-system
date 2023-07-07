import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  Text
} from "react-native";
import React, { useCallback } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { Label } from "../typography/Label";
import {
  IOColors,
  IOColorsStatusBackground,
  IOColorsStatusForeground
} from "../../core/IOColors";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { IOStyles } from "../../core/IOStyles";
import { IOAlertRadius } from "../../core/IOShapes";
import { IOAlertSpacing } from "../../core/IOSpacing";
import { H4 } from "../typography/H4";
import { IOScaleValues, IOSpringValues } from "../../core/IOAnimations";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";

const iconSize: IOIconSizeScale = 24;

const [spacingDefault, spacingFullWidth] = IOAlertSpacing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center"
  },
  spacingDefault: {
    padding: spacingDefault,
    borderRadius: IOAlertRadius
  },
  spacingFullWidth: {
    padding: spacingFullWidth
  },
  label: {
    fontSize: 16,
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  }
});

type AlertProps = WithTestID<{
  variant: "error" | "warning" | "info" | "success";
  title?: string;
  content: string;
  fullWidth?: boolean;
  viewRef: React.RefObject<View>;
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

export type Alert = AlertProps & AlertActionProps;

type VariantStates = {
  icon: IOIcons;
  background: IOColorsStatusBackground;
  foreground: IOColorsStatusForeground;
};

// COMPONENT CONFIGURATION

const mapVariantStates: Record<NonNullable<Alert["variant"]>, VariantStates> = {
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
  },
  success: {
    icon: "success",
    background: "success-100",
    foreground: "success-850"
  }
};

export const Alert = ({
  viewRef,
  variant,
  title,
  content,
  action,
  onPress,
  fullWidth = false,
  accessibilityHint,
  testID
}: Alert) => {
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.magnifiedButton?.pressedState;

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

  const renderMainBlock = () => (
    <>
      <Icon
        name={mapVariantStates[variant].icon}
        size={iconSize}
        color={mapVariantStates[variant].foreground}
      />
      <HSpacer />
      <View style={IOStyles.flex}>
        {title && (
          <>
            <H4 color={mapVariantStates[variant].foreground}>{title}</H4>
            <VSpacer size={8} />
          </>
        )}
        <Label
          color={mapVariantStates[variant].foreground}
          weight={"Regular"}
          accessibilityRole="text"
        >
          {content}
        </Label>
        {action && (
          <>
            <VSpacer size={8} />
            <Text
              style={[
                styles.label,
                { color: IOColors[mapVariantStates[variant].foreground] }
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {action}
            </Text>
          </>
        )}
      </View>
    </>
  );

  const StaticComponent = () => (
    <View
      ref={viewRef}
      style={[
        styles.container,
        fullWidth ? styles.spacingFullWidth : styles.spacingDefault,
        { backgroundColor: IOColors[mapVariantStates[variant].background] }
      ]}
      testID={testID}
      accessible={false}
      accessibilityRole="alert"
      accessibilityHint={accessibilityHint}
    >
      {renderMainBlock()}
    </View>
  );

  const PressableButton = () => (
    <Pressable
      ref={viewRef}
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
        style={[
          styles.container,
          fullWidth ? styles.spacingFullWidth : styles.spacingDefault,
          { backgroundColor: IOColors[mapVariantStates[variant].background] },
          // Disable pressed animation when component is full width
          !fullWidth && pressedAnimationStyle
        ]}
      >
        {renderMainBlock()}
      </Animated.View>
    </Pressable>
  );

  return action ? <PressableButton /> : <StaticComponent />;
};
