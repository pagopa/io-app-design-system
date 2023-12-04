import * as React from "react";
import { useEffect, useState } from "react";
import { Pressable, TextInput } from "react-native";
import Animated from "react-native-reanimated";
import { IOStyles } from "../../core/IOStyles";
import { LabelSmall } from "../typography";
import { triggerHaptic } from "../../functions";
import { VSpacer } from "../spacer";
import { useErrorShakeAnimation } from "../../utils/hooks/useErrorShakeAnimation";
import { BoxedInput } from "./BoxedInput";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  length: number;
  secret?: boolean;
  autocomplete?: boolean;
  onValidate?: (value: string) => boolean;
  errorMessage?: string;
};

export const OTPInput = ({
  value,
  onValueChange,
  length,
  onValidate,
  errorMessage = "",
  secret = false,
  autocomplete = false
}: Props) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const { translate, animatedStyle, shakeAnimation } = useErrorShakeAnimation();

  const inputRef = React.useRef<TextInput>(null);
  const handleChange = (value: string) => {
    if (value.length > length) {
      return;
    }
    setInputValue(value);
    onValueChange(value);
  };

  useEffect(() => {
    if (onValidate && value.length === length) {
      const isValid = onValidate(value);

      if (!isValid) {
        setHasError(true);
        triggerHaptic("notificationError");

        // eslint-disable-next-line functional/immutable-data
        translate.value = shakeAnimation();

        const timer = setTimeout(() => {
          setHasError(false);
          setInputValue("");
          onValueChange("");
        }, 500);
        return () => clearTimeout(timer);
      }
    }
    return;
  }, [value, onValidate, length, onValueChange, translate, shakeAnimation]);

  return (
    <Animated.View style={[{ flexGrow: 1 }, animatedStyle]}>
      <Pressable
        onPress={() => {
          inputRef.current?.focus();
          setHasFocus(true);
        }}
        style={[IOStyles.row, { justifyContent: "space-around" }]}
        accessible={false}
      >
        <TextInput
          value={inputValue}
          onChangeText={handleChange}
          style={{ display: "none" }}
          ref={inputRef}
          keyboardType="number-pad"
          autoComplete={autocomplete ? "sms-otp" : "off"}
          accessible={true}
        />
        {[...Array(length)].map((_, i) => (
          <BoxedInput
            key={i}
            status={
              hasError
                ? "error"
                : hasFocus && inputValue.length === i
                ? "focus"
                : "default"
            }
            secret={secret}
            value={inputValue[i]}
          />
        ))}
      </Pressable>
      <VSpacer size={4} />
      {hasError && errorMessage && (
        <LabelSmall color="error-850" style={{ textAlign: "center" }}>
          {errorMessage}
        </LabelSmall>
      )}
    </Animated.View>
  );
};
