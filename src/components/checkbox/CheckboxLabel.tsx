import * as React from "react";
import { ComponentProps, useState } from "react";
import { Pressable, View } from "react-native";
import { useIOTheme } from "../../core";
import { IOStyles } from "../../core/IOStyles";
import { triggerHaptic } from "../../functions/haptic-feedback/hapticFeedback";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { H6 } from "../typography/H6";
import { AnimatedCheckbox } from "./AnimatedCheckbox";

type Props = {
  label: string;
  // dispatch the new value after the checkbox changes state
  onValueChange?: (newValue: boolean) => void;
};

const DISABLED_OPACITY = 0.5;

// disabled: the component is no longer touchable
// onPress:
type OwnProps = Props &
  Pick<ComponentProps<typeof AnimatedCheckbox>, "disabled" | "checked"> &
  Pick<ComponentProps<typeof Pressable>, "onPress">;

/**
 * A checkbox with the automatic state management that uses a {@link AnimatedCheckBox}
 * The toggleValue change when a `onPress` event is received and dispatch the `onValueChange`.
 *
 * @param props
 * @constructor
 */
export const CheckboxLabel = ({
  label,
  checked,
  disabled,
  onValueChange
}: OwnProps) => {
  const theme = useIOTheme();
  const fontScale = useIOFontDynamicScale();

  const [toggleValue, setToggleValue] = useState(checked ?? false);

  const toggleCheckbox = () => {
    triggerHaptic("impactLight");
    setToggleValue(!toggleValue);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={toggleCheckbox}
      testID="AnimatedCheckbox"
      style={{
        alignSelf: "flex-start",
        opacity: disabled ? DISABLED_OPACITY : 1
      }}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: checked ?? toggleValue,
        disabled: !!disabled
      }}
      // This is required to avoid opacity
      // inheritance on Android
      needsOffscreenAlphaCompositing={true}
    >
      <View
        style={[
          IOStyles.row,
          {
            alignItems: "center",
            width: "100%",
            columnGap: 8 * fontScale
          }
        ]}
      >
        <View
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={{
            alignSelf: "flex-start"
          }}
        >
          <AnimatedCheckbox checked={checked ?? toggleValue} />
        </View>
        <H6 style={{ flexShrink: 1 }} color={theme["textBody-default"]}>
          {label}
        </H6>
      </View>
    </Pressable>
  );
};
