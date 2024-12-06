import * as React from "react";
import { View } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";
import { IOColors, useIOTheme } from "../../core";
import { Icon } from "../icons";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HStack } from "../stack";
import { BodySmall, H6 } from "../typography";
import { PressableListItemBase } from "./PressableListItemBase";

export type ListItemRadioWithAmountProps = {
  onValueChange?: (newValue: boolean) => void;
  selected?: boolean;
  label: string;
  formattedAmountString: string;
  accessibilityLabel?: string;
} & (
  | {
      isSuggested?: false;
      suggestReason?: never;
    }
  | {
      isSuggested?: true;
      suggestReason: string;
    }
);
export const ListItemRadioWithAmount = ({
  onValueChange,
  selected,
  label,
  accessibilityLabel,
  isSuggested = false,
  suggestReason,
  formattedAmountString
}: ListItemRadioWithAmountProps) => {
  const [toggleValue, setToggleValue] = React.useState(selected ?? false);

  const pressHandler = () => {
    RNReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(val => !val);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };
  const theme = useIOTheme();

  const suggestColor: IOColors = "hanPurple-500";

  return (
    <PressableListItemBase
      onPress={pressHandler}
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{
        checked: selected ?? toggleValue
      }}
    >
      <View style={{ flexShrink: 1 }}>
        <H6 numberOfLines={1} color={theme["textBody-default"]}>
          {label}
        </H6>
        {isSuggested && (
          <HStack space={4} style={{ alignItems: "center" }}>
            <Icon name="sparkles" size={16} color={suggestColor} />
            <BodySmall weight="Regular" color={suggestColor}>
              {suggestReason}
            </BodySmall>
          </HStack>
        )}
      </View>
      <HStack
        space={8}
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        <H6 color={theme["interactiveElem-default"]}>
          {formattedAmountString}
        </H6>
        <AnimatedRadio checked={selected ?? toggleValue} />
      </HStack>
    </PressableListItemBase>
  );
};
