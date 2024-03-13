import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IOColors, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOStyles } from "../../core/IOStyles";
import { triggerHaptic } from "../../functions/haptic-feedback/hapticFeedback";
import { makeFontStyleObject } from "../../utils/fonts";
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

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const styles = StyleSheet.create({
  legacyTextValue: {
    fontSize: 16,
    lineHeight: 24,
    color: IOColors.bluegreyDark,
    flexShrink: 1,
    ...makeFontStyleObject("SemiBold", undefined, "TitilliumWeb")
  }
});

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
  const [toggleValue, setToggleValue] = useState(checked ?? false);
  const theme = useIOTheme();

  const { isExperimental } = useIOExperimentalDesign();
  const switchLabelText = (
    <H6 style={{ flexShrink: 1 }} color={theme["textBody-default"]}>
      {label}
    </H6>
  );

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacySwitchlabelText = (
    <Text style={styles.legacyTextValue}>{label}</Text>
  );

  const switchLabelTextComponent = isExperimental
    ? switchLabelText
    : legacySwitchlabelText;

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
        {switchLabelTextComponent}
      </View>
    </Pressable>
  );
};
