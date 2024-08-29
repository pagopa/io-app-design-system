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

export type ValidationWithOptions = { isValid: boolean; errorMessage: string };

type TextInputValidationProps = Omit<
  React.ComponentProps<typeof TextInputBase>,
  "rightElement" | "status" | "bottomMessageColor" | "isPassword" | "accessibilityHint"
> & {
  onValidate: (value: string) => boolean | ValidationWithOptions;
  errorMessage: string;
};

function isValidationWithOptions(validation: boolean | ValidationWithOptions): validation is ValidationWithOptions {
  return typeof validation === 'object' && 'isValid' in validation && 'errorMessage' in validation;
}

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
  const [errMessage, setErrMessage] = useState(errorMessage);
  const inputNotValid = isValid === false;

  const getErrorFeedback = useCallback((isValid: boolean, message: string) => {
    if (!isValid) {
      triggerHaptic("notificationError");
      AccessibilityInfo.announceForAccessibilityWithOptions(message, {
        queue: true
      });
    } else {
      triggerHaptic("notificationSuccess");
    }
  }, []);

  const onBlurHandler = useCallback(() => {
    const validation = onValidate(value);

    if (isValidationWithOptions(validation)) {
      setIsValid(validation.isValid);
      setErrMessage(validation.errorMessage);
      getErrorFeedback(validation.isValid, validation.errorMessage);
    } else {
      setIsValid(validation);
      setErrMessage(errorMessage);
      getErrorFeedback(validation, errorMessage);
    }

    onBlur?.();
  }, [value, errorMessage, onBlur, onValidate, getErrorFeedback]);

  const onFocusHandler = useCallback(() => {
    setIsValid(undefined);
    onFocus?.();
  }, [onFocus]);

  const labelError = useMemo(
    () => (isValid === false && errMessage ? errMessage : bottomMessage),
    [isValid, errMessage, bottomMessage]
  );

  const labelErrorColor: IOColors | undefined = useMemo(
    () => (isValid === false && errMessage ? "error-600" : undefined),
    [isValid, errMessage]
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
      status={inputNotValid ? "error" : undefined}
      accessibilityHint={inputNotValid ? labelError : undefined}
      bottomMessage={labelError}
      bottomMessageColor={labelErrorColor}
      rightElement={feedbackIcon}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    />
  );
};

export default TextInputValidation;
