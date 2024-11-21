import React, { ComponentProps, ReactNode } from "react";
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import Animated from "react-native-reanimated";
import {
  IOColors,
  IOListItemStyles,
  IOListItemVisualParams,
  IOSelectionListItemVisualParams,
  IOStyles,
  useIOTheme
} from "../../core";
import { useListItemAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { HSpacer, VSpacer } from "../spacer";
import { Caption, H6, BodySmall } from "../typography";

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
  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();
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
            <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
              {description}
            </BodySmall>
          ) : (
            description
          )}
        </>
      )}
    </>
  );

  const interactiveColor = theme["interactiveElem-default"];

  const handleOnPress = (event: GestureResponderEvent) => {
    if (!loading) {
      onPress(event);
    }
  };

  return (
    <Pressable
      onPress={handleOnPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      accessible={true}
      accessibilityState={{ busy: loading }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, backgroundAnimatedStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, scaleAnimatedStyle]}
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
          {loading && <LoadingSpinner color={interactiveColor} />}
          {!loading && !hideChevron && (
            <Icon
              name="chevronRightListItem"
              color={interactiveColor}
              size={IOListItemVisualParams.chevronSize}
            />
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemNav;
