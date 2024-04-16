import * as React from "react";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { useIOTheme } from "../../core";
import { IOStyles } from "../../core/IOStyles";
import { triggerHaptic } from "../../functions/haptic-feedback/hapticFeedback";
import { HSpacer } from "../spacer/Spacer";
import { H6 } from "../typography/H6";
import { AnimatedRadio } from "./AnimatedRadio";

type Props = {
  label: string;
  // dispatch the new value after the radio button changes state
  onValueChange?: (newValue: boolean) => void;
};

const DISABLED_OPACITY = 0.5;

type RadioButtonLabelProps = Props &
  Pick<React.ComponentProps<typeof AnimatedRadio>, "disabled" | "checked"> &
  Pick<
    React.ComponentProps<typeof Pressable>,
    "onPress" | "accessibilityLabel" | "accessibilityHint"
  >;

/**
 * A radio button with the automatic state management that uses a {@link AnimatedRadio}
 * The toggleValue change when a `onPress` event is received and dispatch the `onValueChange`.
 *
 * @param props
 * @constructor
 */
export const RadioButtonLabel = ({
  label,
  checked,
  disabled,
  onValueChange,
  accessibilityLabel,
  accessibilityHint
}: RadioButtonLabelProps) => {
  const theme = useIOTheme();

  const [toggleValue, setToggleValue] = useState(checked ?? false);

  const toggleRadioButton = () => {
    triggerHaptic("impactLight");
    setToggleValue(!toggleValue);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };

  return (
    <Pressable
      onPress={toggleRadioButton}
      style={{
        alignSelf: "flex-start",
        opacity: disabled ? DISABLED_OPACITY : 1
      }}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{
        checked: checked ?? toggleValue,
        disabled: !!disabled
      }}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID="AnimatedRadioButton"
    >
      <View
        style={[
          IOStyles.row,
          { alignItems: "flex-start", flexShrink: 1, width: "100%" }
        ]}
      >
        <View pointerEvents="none">
          <AnimatedRadio checked={checked ?? toggleValue} />
        </View>
        <HSpacer size={8} />
        <H6 style={{ flexShrink: 1 }} color={theme["textBody-default"]}>
          {label}
        </H6>
      </View>
    </Pressable>
  );
};
