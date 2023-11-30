import * as React from "react";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { IOStyles } from "../../core/IOStyles";
import { BoxedInput } from "./BoxedInput";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  length: number;
  secret?: boolean;
  autocomplete?: boolean;
  hasError?: boolean;
};

export const OTPInput = ({
  value,
  onValueChange,
  length,
  hasError,
  secret = false,
  autocomplete = false
}: Props) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = React.useRef<TextInput>(null);
  const handleChange = (value: string) => {
    setInputValue(value);
    onValueChange(value);
  };

  return (
    <Pressable
      onPress={() => {
        inputRef.current?.focus();
        // console.log(inputValue.length);
      }}
      style={[IOStyles.row, { justifyContent: "space-around" }]}
    >
      <TextInput
        value={inputValue}
        onChangeText={handleChange}
        style={{ display: "none" }}
        ref={inputRef}
        keyboardType="number-pad"
        autoComplete={autocomplete ? "sms-otp" : "off"}
      />
      {[...Array(length)].map((_, i) => (
        <BoxedInput
          key={i}
          status={
            hasError
              ? "error"
              : inputRef.current?.isFocused && inputValue.length === i
              ? "focus"
              : "default"
          }
          secret={secret}
          value={inputValue[i]}
        />
      ))}
    </Pressable>
  );
};
