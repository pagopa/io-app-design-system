import * as React from "react";
import { useCallback, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
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
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";

type ListItemRadioGraphicProps =
  | { icon?: never; paymentLogo: IOLogoPaymentType; uri?: never }
  | { icon?: never; paymentLogo?: never; uri: string }
  | { icon: IOIcons; paymentLogo?: never; uri?: never };

type ListItemRadioLoadingProps =
  | {
      state: true;
      skeletonDescription?: boolean;
      skeletonIcon?: boolean;
    }
  | {
      state?: false;
      skeletonDescription?: never;
      skeletonIcon?: never;
    };

type Props = WithTestID<{
  value: string;
  description?: string | React.ReactNode;
  selected: boolean;
  onValueChange?: (newValue: boolean) => void;
  startImage?: ListItemRadioGraphicProps;
  loadingProps?: ListItemRadioLoadingProps;
}>;

const DISABLED_OPACITY = 0.5;

type ListItemRadioProps = Props &
  Pick<
    React.ComponentProps<typeof Pressable>,
    "onPress" | "accessibilityLabel" | "accessibilityHint" | "disabled"
  >;

const styles = StyleSheet.create({
  imageSize: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    resizeMode: "contain"
  }
});

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
  accessibilityLabel,
  accessibilityHint,
  loadingProps,
  testID
}: ListItemRadioProps) => {
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

  const SkeletonDescriptionLines = () => (
    <>
      <VSpacer size={8} />
      <Placeholder.Box animate="fade" radius={8} width={"100%"} height={8} />
      <VSpacer size={8} />
      <Placeholder.Box animate="fade" radius={8} width={"100%"} height={8} />
      <VSpacer size={8} />
      <Placeholder.Box animate="fade" radius={8} width={"100%"} height={8} />
    </>
  );

  const SkeletonIcon = () => (
    <View
      style={{
        marginRight: IOSelectionListItemVisualParams.iconMargin
      }}
    >
      <Placeholder.Box
        animate="fade"
        radius={4}
        width={IOSelectionListItemVisualParams.iconSize}
        height={IOSelectionListItemVisualParams.iconSize}
      />
    </View>
  );

  const SkeletonComponent = () => (
    <View style={IOSelectionListItemStyles.listItem}>
      <View style={IOSelectionListItemStyles.listItemInner}>
        <View
          style={[
            IOStyles.flex,
            IOStyles.rowSpaceBetween,
            IOStyles.alignCenter
          ]}
        >
          <View style={[IOStyles.row, IOStyles.alignCenter]}>
            {loadingProps?.skeletonIcon && <SkeletonIcon />}
            <Placeholder.Box
              animate="fade"
              radius={8}
              width={179}
              height={16}
            />
          </View>
          <HSpacer size={8} />
          <View pointerEvents="none" style={disabledStyle}>
            <AnimatedRadio checked={toggleValue} />
          </View>
        </View>
      </View>
      {loadingProps?.skeletonDescription && <SkeletonDescriptionLines />}
    </View>
  );

  return loadingProps?.state ? (
    <SkeletonComponent />
  ) : (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{
        checked: selected ?? toggleValue,
        disabled: !!disabled
      }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
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
                  {startImage.uri && (
                    <Image
                      accessibilityIgnoresInvertColors
                      source={startImage}
                      style={styles.imageSize}
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

              <H6 color={theme["textBody-default"]} style={{ flexShrink: 1 }}>
                {value}
              </H6>
            </View>
            <HSpacer size={8} />
            <View
              pointerEvents="none"
              importantForAccessibility="no-hide-descendants"
            >
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
