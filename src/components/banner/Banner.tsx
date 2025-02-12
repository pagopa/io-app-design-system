import React from "react";
import {
  AccessibilityRole,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import Animated from "react-native-reanimated";
import {
  IOBannerBigSpacing,
  IOBannerRadius,
  IOBannerSmallHSpacing,
  IOBannerSmallVSpacing,
  IOStyles,
  useIOExperimentalDesign,
  useIOTheme,
  useIOThemeContext
} from "../../core";
import { hexToRgba, IOColors } from "../../core/IOColors";
import { useScaleAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IconButton } from "../buttons";
import {
  IOPictogramsBleed,
  IOPictogramSizeScale,
  PictogramBleed
} from "../pictograms";
import { VSpacer } from "../spacer";
import { BodySmall, buttonTextFontSize, H6, IOText } from "../typography";

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
  const { onPressIn, onPressOut, scaleAnimatedStyle } =
    useScaleAnimation("medium");

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

  /* Generates a complete fallbackAccessibilityLabel by concatenating the title, content, and action
   if they are present. */
  const fallbackAccessibilityLabel = [title, content, action]
    .filter(Boolean)
    .join(" ");

  const renderMainBlock = () => (
    <>
      <View
        style={[IOStyles.flex, IOStyles.selfCenter]}
        accessible={true}
        // A11y related props
        accessibilityLabel={accessibilityLabel ?? fallbackAccessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole={action !== undefined ? "button" : undefined}
      >
        {title && (
          <>
            <H6 color={colorTitle}>{title}</H6>
            <VSpacer size={4} />
          </>
        )}
        {content && (
          <>
            <BodySmall color={theme["textBody-tertiary"]} weight={"Regular"}>
              {content}
            </BodySmall>
            {action && <VSpacer size={8} />}
          </>
        )}
        {action && (
          /* Disable pointer events to avoid
             pressed state on the button */
          <Pressable
            pointerEvents="none"
            importantForAccessibility="no-hide-descendants"
            accessible={true}
            accessibilityElementsHidden
            accessibilityLabel={action}
            accessibilityRole="button"
            onPress={onPress}
          >
            <VSpacer size={4} />
            <IOText
              font={isExperimental ? "Titillio" : "TitilliumSansPro"}
              weight="Semibold"
              color={colorMainButton}
              size={buttonTextFontSize}
              numberOfLines={1}
              ellipsizeMode="tail"
              // A11y
              accessible={false}
              importantForAccessibility="no-hide-descendants"
              accessibilityElementsHidden={true}
            >
              {action}
            </IOText>
          </Pressable>
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
        style={[styles.container, dynamicContainerStyles, scaleAnimatedStyle]}
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
