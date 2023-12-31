import * as React from "react";
import { useState } from "react";
import { Pressable, View } from "react-native";
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

// disabled: the component is no longer touchable
// onPress:
type OwnProps = Props &
  Pick<React.ComponentProps<typeof AnimatedRadio>, "disabled" | "checked"> &
  Pick<React.ComponentProps<typeof Pressable>, "onPress">;

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
  onValueChange
}: OwnProps) => {
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
      disabled={disabled}
      onPress={toggleRadioButton}
      testID="AnimatedRadioButton"
      style={{
        alignSelf: "flex-start",
        opacity: disabled ? DISABLED_OPACITY : 1
      }}
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
        <H6 style={{ flexShrink: 1 }} color={"black"}>
          {label}
        </H6>
      </View>
    </Pressable>
  );
};
