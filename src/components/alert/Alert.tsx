import React, { useCallback, useState } from "react";
import {
  ColorValue,
  GestureResponderEvent,
  NativeSyntheticEvent,
  Pressable,
  TextLayoutEventData,
  View
} from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { IOVisualCostants, useIOThemeContext } from "../../core";
import { IOScaleValues, IOSpringValues } from "../../core/IOAnimations";
import { IOColors, hexToRgba } from "../../core/IOColors";
import { IOAlertRadius } from "../../core/IOShapes";
import { IOAlertSpacing, IOSpacer } from "../../core/IOSpacing";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { HStack, VStack } from "../stack";
import { Body, ButtonText } from "../typography";
import { H4 } from "../typography/H4";

const ICON_SIZE: IOIconSizeScale = 24;

const [padding, paddingFullWidth] = IOAlertSpacing;

type AlertProps = WithTestID<{
  variant: "error" | "warning" | "info" | "success";
  title?: string;
  content: string;
  fullWidth?: boolean;
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

type AlertType = AlertProps & AlertActionProps;

type VariantStates = {
  icon: IOIcons;
  background: ColorValue;
  foreground: IOColors;
};

// COMPONENT CONFIGURATION

const mapVariantStatesLightMode: Record<
  NonNullable<AlertType["variant"]>,
  VariantStates
> = {
  error: {
    icon: "errorFilled",
    background: IOColors["error-100"],
    foreground: "error-850"
  },
  warning: {
    icon: "warningFilled",
    background: IOColors["warning-100"],
    foreground: "warning-850"
  },
  info: {
    icon: "infoFilled",
    background: IOColors["info-100"],
    foreground: "info-850"
  },
  success: {
    icon: "success",
    background: IOColors["success-100"],
    foreground: "success-850"
  }
};

const bgOpacityDarkMode = 0.2;

const mapVariantStatesDarkMode: Record<
  NonNullable<AlertType["variant"]>,
  VariantStates
> = {
  error: {
    icon: "errorFilled",
    background: hexToRgba(IOColors["error-400"], bgOpacityDarkMode),
    foreground: "error-100"
  },
  warning: {
    icon: "warningFilled",
    background: hexToRgba(IOColors["warning-400"], bgOpacityDarkMode),
    foreground: "warning-100"
  },
  info: {
    icon: "infoFilled",
    background: hexToRgba(IOColors["info-400"], bgOpacityDarkMode),
    foreground: "info-100"
  },
  success: {
    icon: "success",
    background: hexToRgba(IOColors["success-400"], bgOpacityDarkMode),
    foreground: "success-100"
  }
};

export const Alert = React.forwardRef<View, AlertType>(
  (
    {
      variant,
      title,
      content,
      action,
      onPress,
      fullWidth = false,
      accessibilityHint,
      testID
    }: AlertType,
    viewRef
  ): JSX.Element => {
    const { themeType } = useIOThemeContext();
    const isPressed: SharedValue<number> = useSharedValue(0);
    const { dynamicFontScale, spacingScaleMultiplier } =
      useIOFontDynamicScale();

    const [isMultiline, setIsMultiline] = useState(false);

    const onTextLayout = useCallback(
      (event: NativeSyntheticEvent<TextLayoutEventData>) => {
        setIsMultiline(event.nativeEvent.lines.length > 1);
      },
      []
    );

    const paddingDefaultVariant = {
      padding,
      borderRadius: IOAlertRadius * dynamicFontScale * spacingScaleMultiplier,
      borderCurve: "continuous"
    };

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
        Extrapolation.CLAMP
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

    const mapVariantStates =
      themeType === "light"
        ? mapVariantStatesLightMode
        : mapVariantStatesDarkMode;

    const renderMainBlock = () => (
      <HStack
        space={IOVisualCostants.iconMargin as IOSpacer}
        allowScaleSpacing
        style={{ alignItems: isMultiline ? "flex-start" : "center" }}
      >
        <Icon
          allowFontScaling
          name={mapVariantStates[variant].icon}
          size={ICON_SIZE}
          color={mapVariantStates[variant].foreground}
        />
        {/* Sadly we don't have specific alignments style for text
      in React Native, like `text-box-trim` for CSS. So we
      have to put these magic numbers after manual adjustments.
      Tested on both Android and iOS. */}
        <View
          style={[
            !title && isMultiline && { marginTop: -6 * dynamicFontScale },
            isMultiline && { marginBottom: -4 * dynamicFontScale },
            { flex: 1 }
          ]}
        >
          <VStack space={8} allowScaleSpacing>
            {title && (
              <H4 color={mapVariantStates[variant].foreground}>{title}</H4>
            )}
            <Body
              color={mapVariantStates[variant].foreground}
              weight={"Regular"}
              accessibilityRole="text"
              onTextLayout={onTextLayout}
            >
              {content}
            </Body>
            {action && (
              <ButtonText
                color={mapVariantStates[variant].foreground}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {action}
              </ButtonText>
            )}
          </VStack>
        </View>
      </HStack>
    );

    const StaticComponent = () => (
      <View
        ref={viewRef}
        style={[
          fullWidth ? { padding } : paddingDefaultVariant,
          { backgroundColor: mapVariantStates[variant].background }
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
            fullWidth ? { padding: paddingFullWidth } : paddingDefaultVariant,
            { backgroundColor: mapVariantStates[variant].background },
            // Disable pressed animation when component is full width
            !fullWidth && pressedAnimationStyle
          ]}
        >
          {renderMainBlock()}
        </Animated.View>
      </Pressable>
    );

    return action ? <PressableButton /> : <StaticComponent />;
  }
);
