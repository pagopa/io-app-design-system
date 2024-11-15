import React, { forwardRef, useCallback, useState } from "react";
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  PixelRatio,
  Pressable,
  StyleSheet,
  TextLayoutEventData,
  View
} from "react-native";
import Animated from "react-native-reanimated";
import { IOVisualCostants } from "../../core";
import {
  IOColors,
  IOColorsStatusBackground,
  IOColorsStatusForeground
} from "../../core/IOColors";
import { IOAlertRadius } from "../../core/IOShapes";
import { IOAlertSpacing } from "../../core/IOSpacing";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { VSpacer } from "../spacer";
import { ButtonText } from "../typography";
import { H4 } from "../typography/H4";
import { Label } from "../typography/Label";

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
    borderRadius: IOAlertRadius,
    borderCurve: "continuous"
  },
  spacingFullWidth: {
    padding: spacingFullWidth
  }
});

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
  background: IOColorsStatusBackground;
  foreground: IOColorsStatusForeground;
};

// COMPONENT CONFIGURATION

const mapVariantStates: Record<
  NonNullable<AlertType["variant"]>,
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
  },
  success: {
    icon: "success",
    background: "success-100",
    foreground: "success-850"
  }
};

export const Alert = forwardRef<View, AlertType>(
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
    const { onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation("medium");
    const [isMultiline, setIsMultiline] = useState(false);

    const onTextLayout = useCallback(
      (event: NativeSyntheticEvent<TextLayoutEventData>) => {
        setIsMultiline(event.nativeEvent.lines.length > 1);
      },
      []
    );

    const renderMainBlock = () => (
      <>
        <View
          style={{
            marginRight: IOVisualCostants.iconMargin,
            alignSelf: "flex-start"
          }}
        >
          <Icon
            name={mapVariantStates[variant].icon}
            size={iconSize}
            color={mapVariantStates[variant].foreground}
          />
        </View>
        {/* Sadly we don't have specific alignments style for text
      in React Native, like `text-box-trim` for CSS. So we
      have to put these magic numbers after manual adjustments.
      Tested on both Android and iOS. */}
        <View
          style={[
            !title &&
              isMultiline && { marginTop: -5 * PixelRatio.getFontScale() },
            isMultiline && { marginBottom: -3 * PixelRatio.getFontScale() },
            { flex: 1 }
          ]}
        >
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
            onTextLayout={onTextLayout}
          >
            {content}
          </Label>
          {action && (
            <>
              <VSpacer size={8} />
              <ButtonText
                color={mapVariantStates[variant].foreground}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {action}
              </ButtonText>
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
            !fullWidth && scaleAnimatedStyle
          ]}
        >
          {renderMainBlock()}
        </Animated.View>
      </Pressable>
    );

    return action ? <PressableButton /> : <StaticComponent />;
  }
);
