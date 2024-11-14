import React, { ComponentProps, ReactNode, useCallback } from "react";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View
} from "react-native";
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
  IOScaleEffect,
  IOSelectionListItemVisualParams,
  IOSpringValues,
  IOStyles,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { HSpacer, VSpacer } from "../spacer";
import { Caption, H6, LabelSmall } from "../typography";

type ListItemTopElementProps =
  | {
      badgeProps: React.ComponentProps<typeof Badge>;
      dateValue?: never;
    }
  | {
      badgeProps?: never;
      dateValue: string;
    };

type ListItemNavPartialProps = WithTestID<
  {
    value: string | React.ReactNode;
    /**
     * The maximum number of lines to display for the value.
     */
    numberOfLines?: number;
    description?: string | React.ReactNode;
    loading?: boolean;
    onPress: (event: GestureResponderEvent) => void;
    hideChevron?: boolean;
    topElement?: ListItemTopElementProps;
  } & Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >
>;

export type ListItemNavGraphicProps =
  | {
      avatarProps: Omit<ComponentProps<typeof Avatar>, "size">;
      icon?: never;
      iconColor?: never;
      paymentLogoUri?: never;
    }
  | {
      avatarProps?: never;
      icon?: never;
      iconColor?: never;
      paymentLogoUri: string;
    }
  | {
      avatarProps?: never;
      icon: IOIcons;
      iconColor?: IOColors;
      paymentLogoUri?: never;
    }
  | {
      avatarProps?: never;
      icon?: never;
      iconColor?: never;
      paymentLogoUri?: never;
    };

export type ListItemNav = ListItemNavPartialProps & ListItemNavGraphicProps;

const styles = StyleSheet.create({
  paymentLogoSize: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize
  }
});

export const ListItemNav = ({
  value,
  description,
  onPress,
  icon,
  iconColor = "grey-450",
  avatarProps: avatar,
  paymentLogoUri,
  accessibilityLabel,
  accessibilityHint,
  testID,
  hideChevron = false,
  topElement,
  loading,
  numberOfLines
}: ListItemNav) => {
  const isPressed = useSharedValue(0);
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  const withMargin = (GraphicalAsset: ReactNode) => (
    <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
      {GraphicalAsset}
    </View>
  );

  const listItemNavContent = (
    <>
      {topElement && (
        <>
          {topElement.badgeProps && (
            <>
              <View style={{ alignSelf: "flex-start" }}>
                <Badge {...topElement.badgeProps} />
              </View>
              <VSpacer size={8} />
            </>
          )}
          {topElement.dateValue && (
            <>
              <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
                <Icon name="calendar" size={16} color="grey-300" />
                <HSpacer size={4} />
                <Caption color={theme["textBody-tertiary"]}>
                  {topElement.dateValue}
                </Caption>
              </View>
              <VSpacer size={4} />
            </>
          )}
        </>
      )}
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof value === "string" ? (
        <H6 color={theme["textBody-default"]} numberOfLines={numberOfLines}>
          {value}
        </H6>
      ) : (
        value
      )}
      {description && (
        <>
          {typeof description === "string" ? (
            <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
              {description}
            </LabelSmall>
          ) : (
            description
          )}
        </>
      )}
    </>
  );

  const mapBackgroundStates: Record<string, string> = {
    default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
    pressed: IOColors[theme["listItem-pressed"]]
  };

  const navIconColor = isExperimental
    ? theme["interactiveElem-default"]
    : "blue";

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleEffect?.slight;

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

  const handleOnPress = (event: GestureResponderEvent) => {
    if (!loading) {
      onPress(event);
    }
  };

  const primaryColor: IOColors = isExperimental ? "blueIO-500" : "blue";

  return (
    <Pressable
      onPress={handleOnPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessible={true}
      accessibilityState={{ busy: loading }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {/* Possibile graphical assets
          - Icon
          - Image URL (for payment logos)
          - Avatar
          */}
          {icon &&
            withMargin(
              <Icon
                name={icon}
                color={iconColor}
                size={IOListItemVisualParams.iconSize}
              />
            )}
          {paymentLogoUri &&
            withMargin(
              <Image
                accessibilityIgnoresInvertColors
                source={{ uri: paymentLogoUri }}
                style={styles.paymentLogoSize}
              />
            )}
          {avatar && withMargin(<Avatar size="small" {...avatar} />)}

          <View style={IOStyles.flex}>{listItemNavContent}</View>
          {loading && <LoadingSpinner color={primaryColor} />}
          {!loading && !hideChevron && (
            <Icon
              name="chevronRightListItem"
              color={navIconColor}
              size={IOListItemVisualParams.chevronSize}
            />
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemNav;
