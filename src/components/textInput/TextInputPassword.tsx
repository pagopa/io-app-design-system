import * as React from "react";
import { IconButton } from "../buttons";
import { TextInputBase } from "./TextInputBase";

type TextInputPasswordProps = Omit<
  React.ComponentProps<typeof TextInputBase>,
  "isPassword"
>;

export const TextInputPassword = (props: TextInputPasswordProps) => {
  const { onBlur } = props;
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const rightElement = (
    <IconButton
      icon={showPassword ? "eyeHide" : "eyeShow"}
      onPress={() => setShowPassword(v => !v)}
      accessibilityLabel="Toggle secret input"
    />
  );

  const onBlurHandler = React.useCallback(() => {
    setShowPassword(false);
    onBlur?.();
  }, [onBlur]);

  return (
    <TextInputBase
      {...props}
      onBlur={onBlurHandler}
      rightElement={rightElement}
      isPassword={!showPassword}
    />
  );
};
