import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { AccessibilityInfo, View } from "react-native";
import Animated from "react-native-reanimated";
import { IOColors } from "../../core/IOColors";
import {
  enterTransitionInputIcon,
  exitTransitionInputIcon
} from "../../core/IOTransitions";
import { triggerHaptic } from "../../functions";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { TextInputBase } from "./TextInputBase";

type TextInputValidationProps = Omit<
  React.ComponentProps<typeof TextInputBase>,
  "rightElement" | "status" | "bottomMessageColor" | "isPassword"
> & {
  onValidate: (value: string) => boolean;
  errorMessage: string;
};

const feedbackIconSize: IOIconSizeScale = 24;

export const TextInputValidation = ({
  onValidate,
  errorMessage,
  value,
  bottomMessage,
  onBlur,
  onFocus,
  ...props
}: TextInputValidationProps) => {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const onBlurHandler = useCallback(() => {
    const validation = onValidate(value);
    setIsValid(validation);
    if (!validation) {
      triggerHaptic("notificationError");
      AccessibilityInfo.announceForAccessibilityWithOptions(errorMessage, {
        queue: true
      });
    } else {
      triggerHaptic("notificationSuccess");
    }
    onBlur?.();
  }, [onValidate, value, onBlur, errorMessage]);

  const onFocusHandler = useCallback(() => {
    setIsValid(undefined);
    onFocus?.();
  }, [onFocus]);

  const labelError = useMemo(
    () => (isValid === false && errorMessage ? errorMessage : bottomMessage),
    [isValid, errorMessage, bottomMessage]
  );

  const labelErrorColor: IOColors | undefined = useMemo(
    () => (isValid === false && errorMessage ? "error-600" : undefined),
    [isValid, errorMessage]
  );

  const feedbackIconAttrMap: Record<
    string,
    { name: IOIcons; color: IOColors }
  > = useMemo(
    () => ({
      valid: {
        name: "success",
        color: "green"
      },
      notValid: {
        name: "errorFilled",
        color: "error-600"
      }
    }),
    []
  );

  const feedbackIcon = useMemo(() => {
    const validationStatus = isValid ? "valid" : "notValid";

    return isValid !== undefined ? (
      <Animated.View
        entering={enterTransitionInputIcon}
        exiting={exitTransitionInputIcon}
      >
        <Icon
          name={feedbackIconAttrMap[validationStatus].name}
          color={feedbackIconAttrMap[validationStatus].color}
          size={feedbackIconSize}
        />
      </Animated.View>
    ) : (
      <View style={{ width: feedbackIconSize, height: feedbackIconSize }} />
    );
  }, [feedbackIconAttrMap, isValid]);

  return (
    <TextInputBase
      {...props}
      value={value}
      status={isValid === false ? "error" : undefined}
      bottomMessage={labelError}
      bottomMessageColor={labelErrorColor}
      rightElement={feedbackIcon}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    />
  );
};

export default TextInputValidation;
