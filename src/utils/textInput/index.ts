import * as React from "react";
import { TextInputProps } from "react-native";
import { TextInputBase } from "../../components/textInput/TextInputBase";
import { InputType } from "../types";

export type RNTextInputProps = Pick<
  TextInputProps,
  | "keyboardType"
  | "inputMode"
  | "textContentType"
  | "autoComplete"
  | "returnKeyType"
  | "autoCapitalize"
  | "autoCorrect"
>;

type InputProps = Pick<
  React.ComponentProps<typeof TextInputBase>,
  "textInputProps"
> & {
  valueFormat?: (value: string) => string;
  textInputProps?: RNTextInputProps;
};

export const getInputPropsByType = (
  type: InputType
): InputProps | undefined => {
  switch (type) {
    case "credit-card":
      return {
        valueFormat: v => v.replace(/\D/g, "").replace(/\d{4}?(?=.)/g, "$& "),
        textInputProps: {
          autoComplete: "cc-number",
          keyboardType: "numeric",
          textContentType: "creditCardNumber",
          inputMode: "numeric",
          returnKeyType: "done"
        }
      };
    default:
      return undefined;
  }
};
