/* eslint-disable functional/immutable-data */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  Easing,
  WithTimingConfig,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { IOColors, IOSpacingScale, hexToRgba, useIOTheme } from "../../core";
import { IOFontSize, makeFontStyleObject } from "../../utils/fonts";
import { RNTextInputProps, getInputPropsByType } from "../../utils/textInput";
import { InputType, WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { HSpacer } from "../spacer";
import { LabelSmall } from "../typography";

type InputStatus = "initial" | "focused" | "disabled" | "error";

type InputTextProps = WithTestID<{
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  textInputProps?: RNTextInputProps;
  inputType?: InputType;
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
  autoFocus?: boolean;
}>;

const inputMarginTop: IOSpacingScale = 16;
const inputHeight: number = 60;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputPaddingVertical: IOSpacingScale = 8;
const inputRadius: number = 8;
const inputTransitionDuration: number = 250;
const inputLabelScaleFactor: number = 0.75; /* 16pt becomes 12pt */
const inputLabelFontSize: IOFontSize = 16;
const inputDisabledOpacity: number = 0.5;
const inputRightElementMargin: IOSpacingScale = 8;
const iconColor: IOColors = "grey-300";
const iconSize: IOIconSizeScale = 24;
const iconMargin: IOSpacingScale = 8;
const inputLabelColor: ColorValue = IOColors["grey-700"];
const inputTextColor: ColorValue = IOColors.black;
const inputDisabledTextColor: ColorValue = IOColors["grey-850"];

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    height: inputHeight,
    paddingVertical: inputPaddingVertical,
    paddingHorizontal: inputPaddingHorizontal
  },
  textInputOuterBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: inputRadius,
    borderCurve: "continuous",
    borderWidth: 1
  },
  textInputInnerBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: inputRadius,
    borderCurve: "continuous",
    borderWidth: 2
  },
  textInputStyle: {
    flexGrow: 1,
    flexShrink: 1,
    /* The following `paddingVertical` property fixes a weird bug on
    Android where the text input scrolls, if the user apply some
    gestures on it with keyboard open */
    paddingVertical: 0,
    marginTop: inputMarginTop,
    height: "100%",
    /* Slightly move the input on the left on Android
       to align to the label */
    ...(Platform.OS === "android" && { marginLeft: -4 })
  },
  textInputStyleFont: {
    ...makeFontStyleObject(
      inputLabelFontSize,
      "ReadexPro",
      undefined,
      "Regular"
    )
  },
  textInputLabelWrapper: {
    position: "absolute",
    paddingHorizontal: inputPaddingHorizontal,
    zIndex: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center"
  },
  textInputLabel: {
    ...makeFontStyleObject(
      inputLabelFontSize,
      "TitilliumSansPro",
      undefined,
      "Regular"
    ),
    color: inputLabelColor
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
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: inputPaddingHorizontal
        },
        helperRowStyle
      ]}
      // in case of error message the element should be ignored by VO or Talkback
      accessibilityElementsHidden={bottomMessageColor === "error-600"}
      importantForAccessibility={
        bottomMessageColor === "error-600" ? "no-hide-descendants" : "auto"
      }
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
  accessibilityLabel,
  accessibilityHint,
  textInputProps,
  inputType = "default",
  status,
  icon,
  rightElement,
  counterLimit,
  bottomMessage,
  bottomMessageColor,
  onBlur,
  onFocus,
  isPassword,
  autoFocus,
  testID
}: InputTextProps) => {
  const inputRef = useRef<TextInput>(null);
  const isSecretInput = useMemo(() => isPassword, [isPassword]);
  const [inputStatus, setInputStatus] = React.useState<InputStatus>(
    disabled ? "disabled" : "initial"
  );
  const focusedState = useSharedValue<number>(0);
  const theme = useIOTheme();

  /* Get the label width to enable the correct translation */
  const [labelWidth, setLabelWidth] = React.useState<number>(0);

  const getLabelWidth = ({ nativeEvent }: LayoutChangeEvent) => {
    setLabelWidth(nativeEvent.layout.width);
  };

  /* Set `inputStatus` when `status` changes
     (e.g. when it's passed as a prop) */
  useEffect(() => {
    if (status) {
      setInputStatus(status);
    }
  }, [status]);

  /* Visual attributes */
  const appBackground: ColorValue = IOColors[theme["appBackground-primary"]];

  const borderColorMap: Record<InputStatus, string> = useMemo(
    () => ({
      initial: IOColors["grey-200"],
      disabled: IOColors["grey-200"],
      focused: IOColors[theme["interactiveElem-default"]],
      error: IOColors["error-600"]
    }),
    [theme]
  );

  const easingConf: WithTimingConfig = {
    duration: inputTransitionDuration,
    easing: Easing.inOut(Easing.cubic)
  };

  const animatedLabelStyle = useAnimatedStyle(() => {
    const enableTransition = focusedState.value || value.length > 0;

    return {
      transform: [
        {
          /* Since we can't have RN 0.73 yet, we use this calculation
          to simulate `transformOrigin: left` */
          translateX: withTiming(
            enableTransition
              ? (-labelWidth * (1 - inputLabelScaleFactor)) / 2
              : 0,
            easingConf
          )
        },
        {
          translateY: withTiming(enableTransition ? -12 : 0, easingConf)
        },
        {
          scale: withTiming(
            enableTransition ? inputLabelScaleFactor : 1,
            easingConf
          )
        }
      ]
    };
  });

  /* Interpolate border color based on input status,
     but not apply the transition on `focus` state
     because it's already managed by the
     `animatedInnerBorderStyle` */
  const animatedOuterBorderStyle = useAnimatedStyle(() => ({
    borderColor:
      inputStatus !== "focused"
        ? interpolateColor(
            1,
            [0, 1],
            [borderColorMap.initial, borderColorMap[inputStatus]]
          )
        : borderColorMap.initial
  }));

  const animatedInnerBorderStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focusedState.value ? 1 : 0, easingConf)
  }));

  const onTextInputPress = () => {
    if (disabled) {
      return;
    }
    focusedState.value = 1;
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
    focusedState.value = 0;
    onBlur?.();
    setInputStatus("initial");
  }, [focusedState, onBlur]);

  const onFocusHandler = () => {
    focusedState.value = 1;
    onFocus?.();
    setInputStatus("focused");
  };

  const derivedInputProps = useMemo(
    () => getInputPropsByType(inputType),
    [inputType]
  );

  const inputValue = useMemo(
    () =>
      derivedInputProps && derivedInputProps.valueFormat
        ? derivedInputProps.valueFormat(value)
        : value,
    [value, derivedInputProps]
  );

  return (
    <>
      <Pressable
        onPress={onTextInputPress}
        style={[
          inputStatus === "disabled" ? { opacity: inputDisabledOpacity } : {},
          styles.textInput
        ]}
        accessible={false}
        accessibilityRole={"none"}
        importantForAccessibility="no"
      >
        {/* Fake border managed with Animated.View to avoid
            little jumps when the border is animated */}
        <Animated.View
          style={[styles.textInputOuterBorder, animatedOuterBorderStyle]}
        />
        {!disabled && (
          <Animated.View
            style={[
              { borderColor: borderColorMap.focused },
              styles.textInputInnerBorder,
              animatedInnerBorderStyle
            ]}
          />
        )}

        {icon && (
          <>
            <Icon name={icon} color={iconColor} size={iconSize} />
            <HSpacer size={iconMargin} />
          </>
        )}
        <TextInput
          ref={inputRef}
          testID={testID}
          {...(derivedInputProps
            ? derivedInputProps.textInputProps
            : textInputProps)}
          accessible
          importantForAccessibility="yes"
          accessibilityElementsHidden={false}
          editable={!disabled}
          secureTextEntry={isSecretInput}
          disableFullscreenUI={true}
          accessibilityState={{ disabled }}
          accessibilityLabel={accessibilityLabel ?? placeholder}
          accessibilityHint={accessibilityHint}
          selectionColor={IOColors[theme["interactiveElem-default"]]} // Caret on iOS
          cursorColor={IOColors[theme["interactiveElem-default"]]} // Caret Android
          maxLength={counterLimit}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          blurOnSubmit={true}
          onChangeText={onChangeTextHandler}
          style={[
            styles.textInputStyle,
            styles.textInputStyleFont,
            !disabled
              ? { color: inputTextColor }
              : { color: inputDisabledTextColor }
          ]}
          autoFocus={autoFocus}
          value={inputValue}
        />
        {/* We translate the label to the right if icon is present
            to align it to the `TextInput` */}
        <Animated.View
          pointerEvents={"none"}
          style={[
            styles.textInputLabelWrapper,
            icon ? { left: iconSize + iconMargin } : {}
          ]}
        >
          <Animated.Text
            onLayout={getLabelWidth}
            numberOfLines={1}
            accessible={false}
            style={[styles.textInputLabel, animatedLabelStyle]}
          >
            {placeholder}
          </Animated.Text>
        </Animated.View>
        {rightElement && (
          <Animated.View
            style={{
              alignSelf: "stretch",
              overflow: "visible",
              justifyContent: "center"
            }}
          >
            <LinearGradient
              useAngle={true}
              angle={90}
              style={{
                width: inputRightElementMargin * 3,
                position: "absolute",
                left: -inputRightElementMargin * 3,
                top: 0,
                bottom: 0
              }}
              colors={[hexToRgba(appBackground, 0), appBackground]}
            />
            <HSpacer size={inputRightElementMargin} />
            {rightElement}
          </Animated.View>
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
