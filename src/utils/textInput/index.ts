import * as React from "react";
import { TextInputBase } from "../../components/textInput/TextInputBase";
import { InputType } from "../types";

type InputProps = Pick<
  React.ComponentProps<typeof TextInputBase>,
  "textInputProps"
> & {
  valueFormat?: (value: string) => string;
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
          inputMode: "numeric"
        }
      };
    default:
      return undefined;
  }
};
