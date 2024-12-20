import * as React from "react";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { useIOTheme } from "../../core";
import { IOStyles } from "../../core/IOStyles";
import { triggerHaptic } from "../../functions/haptic-feedback/hapticFeedback";
import { HSpacer } from "../spacer/Spacer";
import { H6 } from "../typography/H6";
import { AnimatedSwitch } from "./AnimatedSwitch";

type Props = {
  label: string;
  // dispatch the new value after the checkbox changes state
  onValueChange?: (newValue: boolean) => void;
};

const DISABLED_OPACITY = 0.5;

// disabled: the component is no longer touchable
// onPress:
type OwnProps = Props &
  Pick<React.ComponentProps<typeof AnimatedSwitch>, "disabled" | "checked"> &
  Pick<React.ComponentProps<typeof Pressable>, "onPress">;

/**
 * A checkbox with the automatic state management that uses a {@link AnimatedCheckBox}
 * The toggleValue change when a `onPress` event is received and dispatch the `onValueChange`.
 *
 * @param props
 * @constructor
 */
export const SwitchLabel = ({
  label,
  checked,
  disabled,
  onValueChange
}: OwnProps) => {
  const theme = useIOTheme();
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
      accessibilityRole="switch"
      accessibilityState={{
        checked: checked ?? toggleValue,
        disabled: !!disabled
      }}
      style={{
        alignSelf: "flex-start",
        opacity: disabled ? DISABLED_OPACITY : 1
      }}
      testID="SwitchLabel"
    >
      <View
        style={[
          IOStyles.row,
          { alignItems: "flex-start", flexShrink: 1, width: "100%" }
        ]}
      >
        <View pointerEvents="none">
          <AnimatedSwitch checked={checked ?? toggleValue} />
        </View>
        <HSpacer size={8} />
        <H6 style={{ flexShrink: 1 }} color={theme["textBody-default"]}>
          {label}
        </H6>
      </View>
    </Pressable>
  );
};
