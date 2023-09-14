import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IOColors, useIOExperimentalDesign } from "../../core";
import { IOStyles } from "../../core/IOStyles";
import { triggerHaptic } from "../../functions/haptic-feedback/hapticFeedback";
import { makeFontStyleObject } from "../../utils/fonts";
import { HSpacer } from "../spacer/Spacer";
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
  Pick<React.ComponentProps<typeof AnimatedCheckbox>, "disabled" | "checked"> &
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
export const CheckboxLabel = ({
  label,
  checked,
  disabled,
  onValueChange
}: OwnProps) => {
  const [toggleValue, setToggleValue] = useState(checked ?? false);

  const { isExperimental } = useIOExperimentalDesign();
  const checkboxLabelText = (
    <H6 style={{ flexShrink: 1 }} color={"black"}>
      {label}
    </H6>
  );

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyCheckboxlabelText = (
    <Text style={styles.legacyTextValue}>{label}</Text>
  );

  const checkboxLabelTextComponent = isExperimental
    ? checkboxLabelText
    : legacyCheckboxlabelText;

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
      // This is required to avoid opacity
      // inheritance on Android
      needsOffscreenAlphaCompositing={true}
    >
      <View style={[IOStyles.row, { alignItems: "center", width: "100%" }]}>
        <View
          pointerEvents="none"
          style={{
            alignSelf: "flex-start"
          }}
        >
          <AnimatedCheckbox checked={checked ?? toggleValue} />
        </View>
        <HSpacer size={8} />
        {checkboxLabelTextComponent}
      </View>
    </Pressable>
  );
};
