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
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { IOColors, IOSpacingScale, IOStyles } from "../../core";
import { IOIcons, Icon } from "../icons";
import { HSpacer } from "../spacer";
import { LabelSmall } from "../typography";

type InputStatus = "initial" | "focused" | "disabled" | "error";

type RNTextInputProps = Pick<
  React.ComponentProps<typeof TextInput>,
  "keyboardType" | "inputMode" | "textContentType" | "autoComplete"
>;

type InputTextProps = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  textInputProps?: RNTextInputProps;
  valueFormat?: (value: string) => string;
  status?: InputStatus;
  icon?: IOIcons;
  rightElement?: React.ReactNode;
  counterLimit?: number;
  bottomMessage?: string;
  bottomMessageColor?: IOColors;
  disabled?: boolean;
  isPassword?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
};

const styles = StyleSheet.create({
  textInput: {
    ...IOStyles.row,
    alignItems: "center",
    paddingVertical: 8,
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 12
  },
  textInputStyle: {
    ...IOStyles.flex,
    fontSize: 16,
    marginTop: IOSpacingScale[2],
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "Readex Pro",
    height: "100%"
  },
  textInputLabelWrapper: {
    position: "absolute",
    paddingHorizontal: 12,
    zIndex: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center"
  }
});

type InputTextHelperRow = Pick<
  InputTextProps,
  "value" | "counterLimit" | "bottomMessage" | "bottomMessageColor"
>;

const HelperRow = ({
  value,
  counterLimit,
  bottomMessage,
  bottomMessageColor = "grey-700"
}: InputTextHelperRow) => {
  const valueCount = useMemo(() => value.length, [value]);

  const helperRowStyle: ViewStyle = useMemo(() => {
    if (counterLimit && bottomMessage) {
      return {
        justifyContent: "space-between"
      };
    }
    if (counterLimit) {
      return {
        justifyContent: "flex-end"
      };
    }
    if (bottomMessage) {
      return {
        justifyContent: "flex-start"
      };
    }
    return {};
  }, [counterLimit, bottomMessage]);

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
      {bottomMessage && (
        <LabelSmall weight="Regular" color={bottomMessageColor}>
          {bottomMessage}
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
  onChangeText,
  textInputProps,
  valueFormat,
  status,
  icon,
  rightElement,
  counterLimit,
  bottomMessage,
  bottomMessageColor,
  onBlur,
  onFocus,
  isPassword
}: InputTextProps) => {
  const labelSharedValue = useSharedValue<boolean>(false);
  const [inputStatus, setInputStatus] = React.useState<InputStatus>(
    disabled ? "disabled" : "initial"
  );
  const isSecretInput = useMemo(() => isPassword, [isPassword]);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (status) {
      setInputStatus(status);
    }
  }, [status]);

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
    fontSize: withTiming(labelSharedValue.value ? 12 : 16, {
      duration: 300,
      easing: Easing.elastic(0.85)
    }),
    transform: [
      {
        translateY: withTiming(labelSharedValue.value ? -14 : 0, {
          duration: 300,
          easing: Easing.elastic(0.85)
        })
      }
    ]
  }));

  useEffect(() => {
    if (value.length > 0) {
      labelSharedValue.value = true;
    } else {
      if (inputStatus !== "focused") {
        labelSharedValue.value = false;
      }
    }
  }, [labelSharedValue, value, inputStatus]);

  const onTextInputPress = () => {
    if (disabled) {
      return;
    }
    labelSharedValue.value = true;
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
      labelSharedValue.value = false;
    }
    onBlur?.();
    setInputStatus("initial");
  }, [value, labelSharedValue, onBlur]);

  const inputValue = useMemo(
    () => (valueFormat ? valueFormat(value) : value),
    [value, valueFormat]
  );

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
            <Icon name={icon} color="grey-300" size={24} />
            <HSpacer size={8} />
          </>
        )}
        <TextInput
          {...textInputProps}
          editable={!disabled}
          secureTextEntry={isSecretInput}
          disableFullscreenUI={true}
          blurOnSubmit={true}
          ref={inputRef}
          onFocus={() => {
            setInputStatus("focused");
            labelSharedValue.value = true;
            onFocus?.();
          }}
          maxLength={counterLimit}
          onBlur={onBlurHandler}
          value={inputValue}
          onChangeText={onChangeTextHandler}
          style={styles.textInputStyle}
        />
        {/** Left value is due to the absolute position of the label in order to let it
         * translate to top on focus
         */}
        <Animated.View
          style={[styles.textInputLabelWrapper, icon ? { left: 32 } : {}]}
        >
          <Animated.Text
            numberOfLines={1}
            style={[
              animatedLabelProps,
              {
                color: IOColors["grey-700"]
              }
            ]}
          >
            {placeholder}
          </Animated.Text>
        </Animated.View>
        {rightElement && (
          <View style={{ marginLeft: "auto" }}>
            <HSpacer size={8} />
            {rightElement}
          </View>
        )}
      </Pressable>
      {(bottomMessage || counterLimit) && (
        <HelperRow
          value={value}
          bottomMessage={bottomMessage}
          bottomMessageColor={bottomMessageColor}
          counterLimit={counterLimit}
        />
      )}
    </>
  );
};
