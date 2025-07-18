import * as React from "react";
import { createRef, forwardRef, useEffect, useRef, useState } from "react";
import {
  AccessibilityInfo,
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputKeyPressEventData,
  View
} from "react-native";
import Animated from "react-native-reanimated";
import { useIOTheme } from "../../context";
import { triggerHaptic } from "../../functions";
import { useErrorShakeAnimation } from "../../utils/hooks/useErrorShakeAnimation";
import { VSpacer } from "../layout";
import { BodySmall } from "../typography";
import { BoxedInput } from "./BoxedInput";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  length: number;
  secret?: boolean;
  autocomplete?: boolean;
  onValidate?: (value: string) => boolean;
  errorMessage?: string;
  accessibilityLabel?: string;
  deleteButtonAccessibilityLabel?: string;
  accessibilityHint?: string;
  inputAccessoryViewID?: string;
  autoFocus?: boolean;
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
export const OTPInput = forwardRef<View, Props>(
  (
    {
      value,
      onValueChange,
      length,
      accessibilityLabel,
      accessibilityHint,
      onValidate,
      errorMessage = "",
      secret = false,
      autocomplete = false,
      inputAccessoryViewID,
      autoFocus = false,
      deleteButtonAccessibilityLabel
    },
    ref
  ) => {
    const [hasFocus, setHasFocus] = useState(autoFocus);
    const [hasError, setHasError] = useState(false);

    const theme = useIOTheme();

    const { translate, animatedStyle, shakeAnimation } =
      useErrorShakeAnimation();

    const inputRef = createRef<TextInput>();
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

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
          onValueChange("");
        }, 500);
      }
    };

    useEffect(
      () => () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      },
      []
    );

    const handleChange = (value: string) => {
      if (value.length > length) {
        return;
      }
      onValueChange(value);
      handleValidate(value);
    };

    const handleKeyPress = ({
      nativeEvent
    }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      switch (nativeEvent.key) {
        case "Backspace":
          if (deleteButtonAccessibilityLabel && value.length > 0) {
            AccessibilityInfo.announceForAccessibility(
              deleteButtonAccessibilityLabel
            );
          }
          break;
        default:
          AccessibilityInfo.announceForAccessibility(nativeEvent.key);
          break;
      }
    };

    return (
      <Animated.View style={[{ flexGrow: 1 }, animatedStyle]}>
        <Pressable
          onPress={() => {
            inputRef.current?.focus();
            setHasFocus(true);
          }}
          ref={ref}
          style={{ flexDirection: "row", justifyContent: "space-around" }}
          accessible={true}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityValue={{ text: value }}
        >
          <TextInput
            value={value}
            onChangeText={handleChange}
            onKeyPress={handleKeyPress}
            style={{ position: "absolute", opacity: 0 }}
            maxLength={length}
            ref={inputRef}
            onBlur={() => setHasFocus(false)}
            keyboardType="numeric"
            inputMode="numeric"
            returnKeyType="done"
            textContentType="oneTimeCode"
            autoComplete={autocomplete ? "sms-otp" : undefined}
            inputAccessoryViewID={inputAccessoryViewID}
            accessible={true}
            autoFocus={autoFocus}
            secureTextEntry={true}
          />
          {[...Array(length)].map((_, i) => (
            <BoxedInput
              key={i}
              status={
                hasError
                  ? "error"
                  : hasFocus && value.length === i
                  ? "focus"
                  : "default"
              }
              secret={secret}
              value={value[i]}
            />
          ))}
        </Pressable>
        <VSpacer size={4} />
        {hasError && errorMessage && (
          <BodySmall
            weight="Semibold"
            color={theme.errorText}
            style={{ textAlign: "center" }}
          >
            {errorMessage}
          </BodySmall>
        )}
      </Animated.View>
    );
  }
);
