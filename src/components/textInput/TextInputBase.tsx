/* eslint-disable react-native/no-unused-styles */
/* eslint-disable functional/immutable-data */
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle
} from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { IOColors, IOSpacingScale, IOStyles } from "../../core";
import { IOIcons, Icon } from "../icons";
import { HSpacer } from "../spacer";
import { LabelSmall } from "../typography";
import { IconButton } from "../buttons";

type InputStatus = "initial" | "focused" | "disabled" | "error";

interface InputTextProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  icon?: IOIcons;
  counterLimit?: number;
  helperText?: string;
  disabled?: boolean;
  secretInput?: boolean;
  onValidate?: (value: string) => boolean;
  errorMessage?: string;
}

const styles = StyleSheet.create({
  helperRow: {
    ...IOStyles.row,
    alignItems: "center",
    paddingHorizontal: 10
  },
  textInput: {
    ...IOStyles.row,
    alignItems: "center",
    paddingVertical: 8,
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 12
  },
  textInputStyle: {
    fontSize: 16,
    marginTop: IOSpacingScale[2],
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "Readex Pro",
    height: "100%"
  },
  textInputLabelWrapper: {
    position: "absolute",
    paddingHorizontal: 10,
    zIndex: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center"
  }
});

type InputTextHelperRow = {
  value: string;
  counterLimit?: number;
  helperText?: string;
  errorMessage?: string;
  isValid?: boolean;
};

const HelperRow = ({
  value,
  counterLimit,
  helperText,
  errorMessage,
  isValid
}: InputTextHelperRow) => {
  const valueCount = useMemo(() => value.length, [value]);

  const helperRowStyle: ViewStyle = useMemo(() => {
    if (counterLimit && helperText) {
      return {
        justifyContent: "space-between"
      };
    }
    if (counterLimit) {
      return {
        justifyContent: "flex-end"
      };
    }
    if (helperText) {
      return {
        justifyContent: "flex-start"
      };
    }
    return {};
  }, [counterLimit, helperText]);

  return (
    <View
      style={[
        IOStyles.row,
        {
          alignItems: "center",
          paddingHorizontal: 10
        },
        helperRowStyle
      ]}
    >
      {errorMessage && isValid === false && (
        <LabelSmall weight="Regular" color="error-600">
          {errorMessage}
        </LabelSmall>
      )}
      {helperText && !(errorMessage && !isValid) && (
        <LabelSmall weight="Regular" color="grey-700">
          {helperText}
        </LabelSmall>
      )}
      {counterLimit && (
        <LabelSmall
          weight="Regular"
          color="grey-700"
        >{`${valueCount} / ${counterLimit}`}</LabelSmall>
      )}
    </View>
  );
};

export const TextInputBase = ({
  disabled = false,
  placeholder,
  value = "",
  icon,
  counterLimit,
  helperText,
  onChangeText,
  onValidate,
  secretInput,
  errorMessage
}: InputTextProps) => {
  const labelSharedValue = useSharedValue(0);
  const [inputStatus, setInputStatus] = React.useState<InputStatus>(
    disabled ? "disabled" : "initial"
  );
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);
  const [isSecretInput, setSecretInput] = React.useState<boolean>(
    secretInput ?? false
  );

  const inputRef = useRef<TextInput>(null);

  const boxStyle: ViewStyle = useMemo(() => {
    if (inputStatus === "focused") {
      return {
        borderColor: IOColors["blueIO-500"],
        borderWidth: 2
      };
    }
    if (inputStatus === "error") {
      return {
        borderColor: IOColors["error-600"],
        borderWidth: 1
      };
    }
    return {
      borderColor: IOColors["grey-200"],
      borderWidth: 1
    };
  }, [inputStatus]);

  const animatedLabelProps = useAnimatedStyle(() => ({
    fontSize: withTiming(interpolate(labelSharedValue.value, [0, 1], [16, 12])),
    top: withTiming(interpolate(labelSharedValue.value, [0, 1], [0, -16]))
  }));

  useEffect(() => {
    if (value.length > 0) {
      labelSharedValue.value = 1;
    } else {
      if (inputStatus !== "focused") {
        labelSharedValue.value = 0;
      }
    }
  }, [labelSharedValue, value, inputStatus]);

  const onTextInputPress = () => {
    if (disabled) {
      return;
    }
    labelSharedValue.value = 1;
    setInputStatus("focused");
    inputRef?.current?.focus();
  };

  const onChangeTextHandler = useCallback(
    (text: string) => {
      if (counterLimit && text.length > counterLimit) {
        return;
      }
      onChangeText(text);
    },
    [counterLimit, onChangeText]
  );

  const onBlurHandler = useCallback(() => {
    if (!value) {
      labelSharedValue.value = 0;
    }
    if (onValidate) {
      const isValid = onValidate(value);
      setIsValid(isValid);
      if (!isValid) {
        setInputStatus("error");
        return;
      }
    }
    setInputStatus("initial");
  }, [onValidate, value, labelSharedValue]);

  return (
    <>
      <Pressable
        onPress={onTextInputPress}
        style={[
          inputStatus === "disabled" ? { opacity: 0.5 } : {},
          boxStyle,
          styles.textInput
        ]}
      >
        {icon && (
          <>
            <Icon name={icon} size={24} />
            <HSpacer size={8} />
          </>
        )}
        <TextInput
          editable={!disabled}
          secureTextEntry={isSecretInput}
          disableFullscreenUI={true}
          blurOnSubmit={true}
          ref={inputRef}
          onFocus={() => {
            setInputStatus("focused");
            setIsValid(undefined);
            labelSharedValue.value = 1;
          }}
          maxLength={counterLimit}
          onBlur={onBlurHandler}
          value={value}
          onChangeText={onChangeTextHandler}
          style={[
            onValidate || secretInput ? { width: "80%" } : {},
            styles.textInputStyle
          ]}
        />
        <Animated.View
          style={[styles.textInputLabelWrapper, icon ? { left: 32 } : {}]}
        >
          <Animated.Text
            numberOfLines={1}
            style={[
              animatedLabelProps,
              {
                backgroundColor: IOColors.white,
                paddingHorizontal: 2,
                color: IOColors["grey-700"]
              }
            ]}
          >
            {placeholder}
          </Animated.Text>
        </Animated.View>
        {((onValidate && isValid !== undefined) || secretInput) && (
          <RightIcon
            onSecretTap={() => setSecretInput(v => !v)}
            onValidate={onValidate}
            secretInput={secretInput}
            isValid={isValid}
            isSecretInput={isSecretInput}
          />
        )}
      </Pressable>
      {(helperText || counterLimit || (errorMessage && !isValid)) && (
        <HelperRow
          value={value}
          helperText={helperText}
          counterLimit={counterLimit}
          errorMessage={errorMessage}
          isValid={isValid}
        />
      )}
    </>
  );
};

type RightIconProps = {
  onValidate?: (value: string) => boolean;
  isValid?: boolean;
  secretInput?: boolean;
  isSecretInput?: boolean;
  onSecretTap?: () => void;
};

// TODO: The Right button should handle the visualizations of both validation and secret input
const RightIcon = ({
  isValid,
  secretInput,
  isSecretInput,
  onSecretTap
}: RightIconProps) => (
  <View style={{ marginLeft: "auto" }}>
    {isValid !== undefined && (
      <>
        <HSpacer size={8} />
        <Icon
          name={(isValid ? "success" : "errorFilled") as IOIcons}
          color={(isValid ? "green" : "error-600") as IOColors}
          size={24}
        />
      </>
    )}
    {secretInput && onSecretTap && isValid === undefined && (
      <>
        <HSpacer size={8} />
        <IconButton
          icon={isSecretInput ? "eyeHide" : "eyeShow"}
          onPress={onSecretTap}
          accessibilityLabel="Toggle secret input"
        />
      </>
    )}
  </View>
);
