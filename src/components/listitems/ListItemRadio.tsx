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
import Placeholder from "rn-placeholder";
import {
  IOColors,
  IOScaleValues,
  IOSelectionListItemStyles,
  IOSelectionListItemVisualParams,
  IOSpringValues,
  IOStyles,
  hexToRgba,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { IOLogoPaymentType, LogoPayment } from "../logos";

type ListItemRadioGraphicProps =
  | { icon?: never; paymentLogo: IOLogoPaymentType }
  | { icon: IOIcons; paymentLogo?: never };

type ListItemRadioLoadingProps =
  | {
      state: true;
      skeletonType: "base" | "extended" | "extended_icon";
    }
  | {
      state?: false;
      skeletonType?: never;
    };

type Props = WithTestID<{
  value: string;
  description?: string;
  selected: boolean;
  onValueChange?: (newValue: boolean) => void;
  startImage?: ListItemRadioGraphicProps;
  loadingProps?: ListItemRadioLoadingProps;
}>;

const DISABLED_OPACITY = 0.5;

// disabled: the component is no longer touchable
// onPress:
type OwnProps = Props &
  Pick<
    React.ComponentProps<typeof Pressable>,
    "onPress" | "accessibilityLabel" | "disabled"
  >;

/**
 * `ListItemRadio` component with the automatic state management that uses a {@link AnimatedCheckBox}
 * The toggleValue change when a `onPress` event is received and dispatch the `onValueChange`.
 *
 * @param props
 * @constructor
 */
export const ListItemRadio = ({
  value,
  description,
  startImage,
  selected,
  disabled,
  onValueChange,
  loadingProps,
  testID
}: OwnProps) => {
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

  const toggleRadioItem = () => {
    ReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(!toggleValue);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };

  const disabledStyle = { opacity: disabled ? DISABLED_OPACITY : 1 };

  const SkeletonComponent = () =>
    loadingProps && loadingProps.state ? (
      <View
        style={[
          IOSelectionListItemStyles.listItem,
          { backgroundColor: mapBackgroundStates.default }
        ]}
        // This is required to avoid opacity
        // inheritance on Android
        needsOffscreenAlphaCompositing={true}
      >
        <View style={IOSelectionListItemStyles.listItemInner}>
          <View
            style={[
              IOStyles.flex,
              IOStyles.rowSpaceBetween,
              IOStyles.alignCenter
            ]}
          >
            {loadingProps.skeletonType === "extended_icon" && (
              <View
                style={{
                  marginRight: IOSelectionListItemVisualParams.iconMargin
                }}
              >
                <Placeholder.Box
                  animate="fade"
                  radius={8}
                  width={IOSelectionListItemVisualParams.iconSize}
                  height={16}
                />
              </View>
            )}
            <Placeholder.Box
              animate="fade"
              radius={8}
              width={179}
              height={16}
            />
            <HSpacer size={8} />
            <View pointerEvents="none" style={disabledStyle}>
              <AnimatedRadio checked={toggleValue} />
            </View>
          </View>
        </View>
        {loadingProps.skeletonType !== "base" && (
          <>
            <VSpacer size={8} />
            <Placeholder.Box
              animate="fade"
              radius={8}
              width={"100%"}
              height={8}
            />
            <VSpacer size={8} />
            <Placeholder.Box
              animate="fade"
              radius={8}
              width={"100%"}
              height={8}
            />
            <VSpacer size={8} />
            <Placeholder.Box
              animate="fade"
              radius={8}
              width={"100%"}
              height={8}
            />
          </>
        )}
      </View>
    ) : null;

  return loadingProps && loadingProps.state ? (
    <SkeletonComponent />
  ) : (
    <Pressable
      onPress={toggleRadioItem}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      testID={testID}
      disabled={disabled}
    >
      <Animated.View
        style={[
          IOSelectionListItemStyles.listItem,
          animatedBackgroundStyle,
          disabledStyle
        ]}
        // This is required to avoid opacity
        // inheritance on Android
        needsOffscreenAlphaCompositing={true}
      >
        <Animated.View style={animatedScaleStyle}>
          <View style={IOSelectionListItemStyles.listItemInner}>
            <View style={[IOStyles.row, { flexShrink: 1 }]}>
              {startImage && (
                <View
                  style={{
                    marginRight: IOSelectionListItemVisualParams.iconMargin
                  }}
                >
                  {/* icon or paymentLogo props are mutually exclusive */}
                  {startImage.icon && (
                    <Icon
                      name={startImage.icon}
                      color="grey-300"
                      size={IOSelectionListItemVisualParams.iconSize}
                    />
                  )}
                  {startImage.paymentLogo && (
                    <LogoPayment
                      name={startImage.paymentLogo}
                      size={IOSelectionListItemVisualParams.iconSize}
                    />
                  )}
                </View>
              )}

              <H6 color={"black"} style={{ flexShrink: 1 }}>
                {value}
              </H6>
            </View>
            <HSpacer size={8} />
            <View pointerEvents="none">
              <AnimatedRadio checked={selected ?? toggleValue} />
            </View>
          </View>
          {description && (
            <View>
              <VSpacer
                size={IOSelectionListItemVisualParams.descriptionMargin}
              />
              <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                {description}
              </LabelSmall>
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
