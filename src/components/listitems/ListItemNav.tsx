import React, { useCallback } from "react";
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
import { IOIcons, Icon } from "../icons";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { H6, LabelSmall } from "../typography";

type ListItemNavPartialProps = WithTestID<{
  value: string | React.ReactNode;
  description?: string | React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  // Accessibility
  accessibilityLabel: string;
}>;

export type ListItemNavGraphicProps =
  | { icon?: never; iconColor?: never; paymentLogo: IOLogoPaymentType }
  | { icon: IOIcons; iconColor?: IOColors; paymentLogo?: never }
  | { icon?: never; iconColor?: never; paymentLogo?: never };

export type ListItemNav = ListItemNavPartialProps & ListItemNavGraphicProps;

export const ListItemNav = ({
  value,
  description,
  onPress,
  icon,
  iconColor = "grey-450",
  paymentLogo,
  accessibilityLabel,
  testID
}: ListItemNav) => {
  const isPressed = useSharedValue(0);
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const listItemNavContent = (
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
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {icon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <Icon
                name={icon}
                color={iconColor}
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          {paymentLogo && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <LogoPayment
                name={paymentLogo}
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={IOStyles.flex}>{listItemNavContent}</View>
          <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
            <Icon
              name="chevronRightListItem"
              color={navIconColor}
              size={IOListItemVisualParams.chevronSize}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemNav;
