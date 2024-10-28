import React, { useCallback } from "react";
import {
  AccessibilityRole,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOBannerBigSpacing,
  IOBannerRadius,
  IOBannerSmallHSpacing,
  IOBannerSmallVSpacing,
  IOScaleValues,
  IOSpringValues,
  IOStyles,
  useIOExperimentalDesign,
  useIOTheme,
  useIOThemeContext
} from "../../core";
import { hexToRgba, IOColors } from "../../core/IOColors";
import { WithTestID } from "../../utils/types";
import { IconButton } from "../buttons";
import {
  IOPictogramsBleed,
  IOPictogramSizeScale,
  PictogramBleed
} from "../pictograms";
import { VSpacer } from "../spacer";
import { buttonTextFontSize, H6, IOText, LabelSmall } from "../typography";

/* Styles */
const sizePictogramBig: IOPictogramSizeScale = 80;
const sizePictogramSmall: IOPictogramSizeScale = 64;
const closeButtonDistanceFromEdge: number = 6;
const closeButtonOpacity = 0.6;
const sizeBigPadding = IOBannerBigSpacing;
const sizeSmallHPadding = IOBannerSmallHSpacing;
const sizeSmallVPadding = IOBannerSmallVSpacing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
    borderRadius: IOBannerRadius,
    borderCurve: "continuous"
  },
  bleedPictogram: {
    marginRight: -sizeBigPadding
  },
  closeIconButton: {
    position: "absolute",
    right: closeButtonDistanceFromEdge,
    top: closeButtonDistanceFromEdge,
    opacity: closeButtonOpacity
  }
});

/* Component Types */

type BaseBannerProps = WithTestID<{
  size: "big" | "small";
  color: "neutral" | "turquoise";
  pictogramName: IOPictogramsBleed;
  viewRef?: React.RefObject<View>;
  // A11y related props
  accessibilityLabel?: string;
  accessibilityHint?: string;
}>;

/* Description only */
type BannerPropsDescOnly = { title: never; content?: string };
/* Title only */
type BannerPropsTitleOnly = { title?: string; content: never };
/* Title + Description */
type BannerPropsTitleAndDesc = { title?: string; content?: string };

type RequiredBannerProps =
  | BannerPropsDescOnly
  | BannerPropsTitleOnly
  | BannerPropsTitleAndDesc;

type BannerActionProps =
  | {
      action?: string;
      onPress: (event: GestureResponderEvent) => void;
      accessibilityRole?: never;
    }
  | {
      action?: never;
      onPress?: never;
      accessibilityRole?: AccessibilityRole;
    };

// Banner will display a close button if this event is provided
type BannerCloseProps =
  | {
      onClose?: (event: GestureResponderEvent) => void;
      labelClose?: string;
    }
  | {
      onClose?: never;
      labelClose?: never;
    };

export type Banner = BaseBannerProps &
  RequiredBannerProps &
  BannerActionProps &
  BannerCloseProps;

// COMPONENT CONFIGURATION

/* Used to generate automatically the colour variants
in the Design System screen */
export const bannerBackgroundColours: Array<BaseBannerProps["color"]> = [
  "neutral",
  "turquoise"
];

const mapBackgroundColorLightMode: Record<
  NonNullable<BaseBannerProps["color"]>,
  IOColors
> = {
  neutral: "grey-50",
  turquoise: "turquoise-50"
};

const mapBackgroundColorDarkMode: Record<
  NonNullable<BaseBannerProps["color"]>,
  IOColors
> = {
  neutral: "grey-50",
  turquoise: "turquoise-300"
};

export const Banner = ({
  viewRef,
  size,
  color,
  pictogramName,
  title,
  content,
  action,
  labelClose,
  onPress,
  onClose,
  accessibilityHint,
  accessibilityLabel,
  testID
}: Banner) => {
  const isPressed: SharedValue<number> = useSharedValue(0);

  const { isExperimental } = useIOExperimentalDesign();
  const { themeType } = useIOThemeContext();
  const theme = useIOTheme();

  // Dynamic colors
  const colorTitle: IOColors = themeType === "dark" ? "grey-50" : "blueIO-850";
  const colorCloseButton: IconButton["color"] =
    themeType === "dark" ? "contrast" : "neutral";
  const colorMainButton =
    themeType === "dark" ? "blueIO-200" : theme["interactiveElem-default"];

  const dynamicContainerStyles: ViewStyle = {
    backgroundColor:
      themeType === "dark"
        ? hexToRgba(IOColors[mapBackgroundColorDarkMode[color]], 0.1)
        : IOColors[mapBackgroundColorLightMode[color]],
    paddingVertical: size === "big" ? sizeBigPadding : sizeSmallVPadding,
    paddingHorizontal: size === "big" ? sizeBigPadding : sizeSmallHPadding
  };

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.magnifiedButton?.pressedState;

  // Using a spring-based animation for our interpolations
  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const pressedAnimationStyle = useAnimatedStyle(() => {
    // Link color states to the pressed states

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

  const renderMainBlock = () => (
    <>
      <View
        style={[IOStyles.flex, IOStyles.selfCenter]}
        accessible={true}
        // A11y related props
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole={action !== undefined ? "button" : undefined}
      >
        {title && (
          <>
            {/* Once we get 'gap' property, we can get rid of
          these <VSpacer> components */}
            <H6 color={colorTitle}>{title}</H6>
            <VSpacer size={4} />
          </>
        )}
        {content && (
          <>
            <LabelSmall color={theme["textBody-tertiary"]} weight={"Regular"}>
              {content}
            </LabelSmall>
            {action && <VSpacer size={8} />}
          </>
        )}
        {action && (
          /* Disable pointer events to avoid
                      pressed state on the button */
          <View
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
          >
            <VSpacer size={4} />
            <IOText
              font={isExperimental ? "ReadexPro" : "TitilliumSansPro"}
              weight={isExperimental ? "Regular" : "Bold"}
              color={colorMainButton}
              size={buttonTextFontSize}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {action}
            </IOText>
          </View>
        )}
      </View>
      <View style={[styles.bleedPictogram, IOStyles.selfCenter]}>
        <PictogramBleed
          name={pictogramName}
          size={size === "big" ? sizePictogramBig : sizePictogramSmall}
        />
      </View>
      {onClose && labelClose && (
        <View style={styles.closeIconButton}>
          <IconButton
            icon="closeSmall"
            color={colorCloseButton}
            onPress={onClose}
            accessibilityLabel={labelClose}
          />
        </View>
      )}
    </>
  );

  const PressableButton = () => (
    <Pressable
      ref={viewRef}
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={false}
    >
      <Animated.View
        style={[
          styles.container,
          dynamicContainerStyles,
          pressedAnimationStyle
        ]}
      >
        {renderMainBlock()}
      </Animated.View>
    </Pressable>
  );

  const StaticComponent = () => (
    <View
      ref={viewRef}
      testID={testID}
      style={[styles.container, dynamicContainerStyles]}
      // A11y related props
      accessible={false}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={"text"}
    >
      {renderMainBlock()}
    </View>
  );

  return action ? <PressableButton /> : <StaticComponent />;
};
