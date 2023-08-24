import * as React from "react";
import { IOIcons, Icon } from "../icons";
import { IOColors } from "../../core/IOColors";
import { triggerHaptic } from "../../functions";
import { TextInputBase } from "./TextInputBase";

type TextInputValidationProps = Omit<
  React.ComponentProps<typeof TextInputBase>,
  "rightElement" | "status" | "bottomMessageColor" | "isPassword"
> & {
  onValidate: (value: string) => boolean;
  errorMessage?: string;
};

export const TextInputValidation = (props: TextInputValidationProps) => {
  const { onValidate, errorMessage, value, bottomMessage, onBlur, onFocus } =
    props;
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);

  const onBlurHandler = React.useCallback(() => {
    const validation = onValidate(value);
    setIsValid(validation);
    if (!validation) {
      triggerHaptic("notificationError");
    } else {
      triggerHaptic("notificationSuccess");
    }
    onBlur?.();
  }, [onValidate, value, onBlur]);

  const onFocusHandler = React.useCallback(() => {
    setIsValid(undefined);
    onFocus?.();
  }, [onFocus]);

  const labelError = React.useMemo(
    () => (isValid === false && errorMessage ? errorMessage : bottomMessage),
    [isValid, errorMessage, bottomMessage]
  );

  const labelErrorColor: IOColors | undefined = React.useMemo(
    () => (isValid === false && errorMessage ? "error-600" : undefined),
    [isValid, errorMessage]
  );

  const rightIcon = React.useMemo(
    () =>
      isValid !== undefined && (
        <Icon
          name={(isValid ? "success" : "errorFilled") as IOIcons}
          color={(isValid ? "green" : "error-600") as IOColors}
          size={24}
        />
      ),
    [isValid]
  );

  return (
    <TextInputBase
      {...props}
      status={isValid === false ? "error" : undefined}
      bottomMessage={labelError}
      bottomMessageColor={labelErrorColor}
      rightElement={rightIcon}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    />
  );
};

export default TextInputValidation;
