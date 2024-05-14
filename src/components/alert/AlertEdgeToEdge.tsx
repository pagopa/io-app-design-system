import React, { useMemo } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IOVisualCostants,
  enterTransitionAlertEdgeToEdge,
  enterTransitionAlertEdgeToEdgeContent,
  exitTransitionAlertEdgeToEdge,
  exitTransitionAlertEdgeToEdgeContent,
  useIOExperimentalDesign
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
import { VSpacer } from "../spacer";
import { Label } from "../typography/Label";

const iconSize: IOIconSizeScale = 24;

const [spacingDefault] = IOAlertSpacing;

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  alert: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    padding: spacingDefault
  },
  label: {
    fontSize: 16,
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  labelLegacy: {
    fontSize: 16,
    ...makeFontStyleObject("Bold", false, "TitilliumWeb")
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
  }
};

export const AlertEdgeToEdge = ({
  viewRef,
  variant,
  content,
  action,
  accessibilityHint,
  testID
}: AlertType): JSX.Element => {
  const { isExperimental } = useIOExperimentalDesign();

  const insets = useSafeAreaInsets();

  const backgroundColor = useMemo(
    () => IOColors[mapVariantStates[variant].background],
    [variant]
  );

  return (
    <Animated.View
      entering={enterTransitionAlertEdgeToEdge}
      exiting={exitTransitionAlertEdgeToEdge}
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor
        }
      ]}
    >
      <Animated.View
        entering={enterTransitionAlertEdgeToEdgeContent}
        exiting={exitTransitionAlertEdgeToEdgeContent}
        // ref={viewRef}
        style={styles.alert}
        testID={testID}
        accessible={false}
        accessibilityRole="alert"
        accessibilityHint={accessibilityHint}
      >
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
          </Label>
          {action && (
            <>
              <VSpacer size={8} />
              <Text
                style={[
                  isExperimental ? styles.label : styles.labelLegacy,
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
      </Animated.View>
    </Animated.View>
  );
};