import React, { ComponentProps, useCallback, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
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
  IOListItemStyles,
  IOListItemVisualParams,
  IOScaleValues,
  IOSpringValues,
  IOStyles,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Icon } from "../icons";
import { H6, LabelSmall } from "../typography";

export type ListItemNavAlert = WithTestID<{
  value: string | React.ReactNode;
  description?: string | React.ReactNode;
  withoutIcon?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemNavAlert = ({
  value,
  description,
  withoutIcon = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemNavAlert) => {
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);
  const { isExperimental } = useIOExperimentalDesign();

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const componentDescriptionToAccessibility = useMemo(
    () => (typeof description === "string" ? description : ""),
    [description]
  );

  const listItemAccessibilityLabel = useMemo(
    () =>
      accessibilityLabel
        ? accessibilityLabel
        : `${componentValueToAccessibility}; ${componentDescriptionToAccessibility}`,
    [
      componentDescriptionToAccessibility,
      componentValueToAccessibility,
      accessibilityLabel
    ]
  );
  const theme = useIOTheme();

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const listItemNavAlertContent = (
    <>
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof value === "string" ? (
        <H6 color={theme["textBody-default"]}>{value}</H6>
      ) : (
        value
      )}
      {description && (
        <>
          {typeof description === "string" ? (
            <LabelSmall weight="Semibold" color={theme.errorText}>
              {description}
            </LabelSmall>
          ) : (
            description
          )}
        </>
      )}
    </>
  );

  const iconColor = isExperimental ? theme["interactiveElem-default"] : "blue";

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

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

  const handlePressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const handlePressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessible={true}
      accessibilityLabel={listItemAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {!withoutIcon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <Icon
                name="errorFilled"
                color={theme.errorIcon}
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={IOStyles.flex}>{listItemNavAlertContent}</View>
          <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
            <Icon
              name="chevronRightListItem"
              color={iconColor}
              size={IOListItemVisualParams.chevronSize}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemNavAlert;
