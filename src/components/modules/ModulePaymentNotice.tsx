import * as React from "react";
import { useCallback } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import Placeholder from "rn-placeholder";
import { WithTestID } from "../../utils/types";
import { getAccessibleAmountText } from "../../utils/accessibility";
import { H6, LabelSmall } from "../typography";
import { Badge } from "../badge";
import { Icon } from "../icons";
import {
  IOColors,
  IOListItemVisualParams,
  IOScaleValues,
  IOSpringValues,
  IOStyles,
  useIOExperimentalDesign
} from "../../core";
import { VSpacer } from "../spacer";

export type PaymentNoticeStatus =
  | "default"
  | "paid"
  | "error"
  | "expired"
  | "revoked"
  | "canceled"
  | "in-progress";

export type ModulePaymentNoticeProps = WithTestID<
  {
    isLoading?: boolean;
    accessibilityLabel?: string;
    title?: string;
    subtitle: string;
    onPress: (event: GestureResponderEvent) => void;
  } & (
    | {
        paymentNoticeStatus: Extract<PaymentNoticeStatus, "default">;
        paymentNoticeAmount: string;
        badgeText?: never;
      }
    | {
        paymentNoticeStatus: Exclude<PaymentNoticeStatus, "default">;
        paymentNoticeAmount?: never;
        badgeText: string;
      }
  )
>;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    borderColor: IOColors.bluegreyLight,
    backgroundColor: IOColors.white,
    borderStyle: "solid",
    borderWidth: 1
  },
  rightSection: {
    marginLeft: IOListItemVisualParams.iconMargin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

const ModulePaymentNoticeContent = ({
  title,
  subtitle,
  paymentNoticeStatus,
  paymentNoticeAmount,
  badgeText = ""
}: Omit<ModulePaymentNoticeProps, "isLoading" | "onPress" | "testID">) => {
  const { isExperimental } = useIOExperimentalDesign();

  const AmountOrBadgeComponent = () => {
    switch (paymentNoticeStatus) {
      case "default":
        return (
          <H6
            accessibilityLabel={getAccessibleAmountText(paymentNoticeAmount)}
            color={isExperimental ? "blueIO-500" : "blue"}
          >
            {paymentNoticeAmount}
          </H6>
        );
      case "paid":
        return <Badge variant="success" text={badgeText} />;
      case "error":
        return <Badge variant="error" text={badgeText} />;
      case "expired":
        return <Badge variant="default" text={badgeText} />;
      case "revoked":
        return <Badge variant="default" text={badgeText} />;
      case "canceled":
        return <Badge variant="default" text={badgeText} />;
      case "in-progress":
        return <Badge variant="info" text={badgeText} />;
    }
  };

  return (
    <>
      <View style={{ flexGrow: 1, flexShrink: 1, paddingEnd: 8 }}>
        {title && (
          <LabelSmall numberOfLines={1} weight="Regular" color="bluegrey">
            {title}
          </LabelSmall>
        )}
        <LabelSmall
          weight="SemiBold"
          font={isExperimental ? "ReadexPro" : "TitilliumWeb"}
          color={isExperimental ? "blueIO-500" : "bluegrey"}
          numberOfLines={2}
        >
          {subtitle}
        </LabelSmall>
      </View>
      <View style={[styles.rightSection, { flexShrink: 1 }]}>
        <AmountOrBadgeComponent />
        <Icon
          name="chevronRightListItem"
          color={isExperimental ? "blueIO-500" : "blue"}
          size={IOListItemVisualParams.chevronSize}
        />
      </View>
    </>
  );
};

/**
 * The `ModulePaymentNotice` component is a custom button component with an extended outline style.
 * It provides an animated scaling effect when pressed.
 *
 * @param {boolean} isLoading - If true, displays a skeleton loading component.
 * @param {function} onPress - The function to be executed when the item is pressed.
 * @param {string} title - The title text to display.
 * @param {string} subtitle - The subtitle text to display.
 * @param {string} testID - The test ID for testing purposes.
 * @param {string} paymentNoticeAmount - The payment notice amount to display.
 * @param {string} paymentNoticeStatus - The status of the payment notice.
 */
export const ModulePaymentNotice = ({
  isLoading = false,
  testID,
  accessibilityLabel,
  onPress,
  ...rest
}: ModulePaymentNoticeProps) => {
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.magnifiedButton?.pressedState;

  const scaleTraversed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scaleTraversed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
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

  if (isLoading) {
    return <SkeletonComponent />;
  }

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      accessibilityRole={"button"}
      accessibilityLabel={accessibilityLabel}
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <ModulePaymentNoticeContent {...rest} />
      </Animated.View>
    </Pressable>
  );
};

const SkeletonComponent = () => (
  <View style={styles.button} accessible={false}>
    <View style={IOStyles.flex}>
      <Placeholder.Box animate="fade" radius={8} width={179} height={16} />
      <VSpacer size={4} />
      <Placeholder.Box animate="fade" radius={8} width={121} height={13} />
    </View>
    <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
      <Placeholder.Box animate="fade" radius={8} width={62} height={16} />
    </View>
  </View>
);
