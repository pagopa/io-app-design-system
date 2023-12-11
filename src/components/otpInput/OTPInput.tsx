import * as React from "react";
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

/**
 * `OTPInput` is a component that allows the user to enter a one-time password.
 * It has an hidden `TextInput` that is used to handle the keyboard and the focus.
 * The input handles the autocompletion of the OTP code.
 * @param value - The value of the OTP code
 * @param onValueChange - The function to call when the value changes
 * @param length - The length of the OTP code
 * @param secret - If the OTP code should be hidden
 * @param autocomplete - If the OTP code should be autocompleted
 * @param onValidate - The function to call when the OTP code is validated
 * @param errorMessage - The error message to display
 * @returns
 */
export const OTPInput = ({
  value,
  onValueChange,
  length,
  onValidate,
  errorMessage = "",
  secret = false,
  autocomplete = false
}: Props) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  const { translate, animatedStyle, shakeAnimation } = useErrorShakeAnimation();

  const inputRef = React.createRef<TextInput>();
  const timerRef = React.useRef<NodeJS.Timeout>();

  const handleValidate = (val: string) => {
    if (!onValidate || val.length < length) {
      return;
    }
    const isValid = onValidate(val);
    if (!isValid) {
      setHasError(true);
      triggerHaptic("notificationError");
      // eslint-disable-next-line functional/immutable-data
      translate.value = shakeAnimation();

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // eslint-disable-next-line functional/immutable-data
      timerRef.current = setTimeout(() => {
        setHasError(false);
        setInputValue("");
        onValueChange("");
      }, 500);
    }
  };

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleChange = (value: string) => {
    if (value.length > length) {
      return;
    }
    setInputValue(value);
    onValueChange(value);
    handleValidate(value);
  };

  return (
    <Animated.View style={[{ flexGrow: 1 }, animatedStyle]}>
      <Pressable
        onPress={() => {
          inputRef.current?.focus();
          setHasFocus(true);
        }}
        style={[IOStyles.row, { justifyContent: "space-around" }]}
        accessible={true}
        accessibilityLabel="OTP Input"
        accessibilityValue={{ text: inputValue }}
      >
        <TextInput
          value={inputValue}
          onChangeText={handleChange}
          style={{ position: "absolute", opacity: 0 }}
          maxLength={length}
          ref={inputRef}
          onBlur={() => setHasFocus(false)}
          keyboardType="numeric"
          inputMode="numeric"
          returnKeyType="done"
          textContentType="oneTimeCode"
          autoComplete={autocomplete ? "sms-otp" : undefined}
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
