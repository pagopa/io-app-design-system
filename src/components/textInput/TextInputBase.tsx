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
import Animated, {
  Easing,
  WithTimingConfig,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {
  IOColors,
  IOSpacingScale,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
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

const inputMarginTop: IOSpacingScale = Platform.OS === "ios" ? 16 : 20;
const inputHeight: number = 60;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputRadius: number = 8;
const inputTransitionDuration: number = 250;
const inputLabelScaleFactor: number = 0.8;
const inputDisabledOpacity: number = 0.5;
const iconSize: IOIconSizeScale = 24;
const iconMargin: IOSpacingScale = 8;
const inputLabelColor: ColorValue = IOColors["grey-700"];

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: inputRadius,
    height: inputHeight,
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
    fontSize: 16,
    marginTop: inputMarginTop,
    height: "100%",
    color: IOColors.black,
    /* Slightly move the input on the left on Android
       to align to the label */
    ...(Platform.OS === "android" && { marginLeft: -4 })
  },
  textInputStyleFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  textInputStyleLegacyFont: {
    ...makeFontStyleObject("SemiBold", false, "TitilliumWeb")
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
    ...makeFontStyleObject("Regular", false, "TitilliumWeb"),
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
  const theme = useIOTheme();

  const focusedState = useSharedValue<number>(0);

  const [inputStatus, setInputStatus] = React.useState<InputStatus>(
    disabled ? "disabled" : "initial"
  );
  const isSecretInput = useMemo(() => isPassword, [isPassword]);
  const inputRef = useRef<TextInput>(null);

  /* Get the label width to enable the correct translation */
  const [labelWidth, setLabelWidth] = React.useState<number>(0);

  const getLabelWidth = ({ nativeEvent }: LayoutChangeEvent) => {
    setLabelWidth(nativeEvent.layout.width);
  };

  useEffect(() => {
    if (status) {
      setInputStatus(status);
    }
  }, [status]);

  // Visual attributes
  const borderColorMap = useMemo(
    () => ({
      default: IOColors["grey-200"],
      focused: IOColors[theme["interactiveElem-default"]],
      error: IOColors["error-600"]
    }),
    [theme]
  );

  const boxStyle: ViewStyle = useMemo(() => {
    if (inputStatus === "focused") {
      return {
        borderColor: borderColorMap.focused,
        borderWidth: 0
      };
    }
    if (inputStatus === "error") {
      return {
        borderColor: borderColorMap.error,
        borderWidth: 0
      };
    }
    return {
      borderColor: borderColorMap.default,
      borderWidth: 0
    };
  }, [borderColorMap, inputStatus]);

  const easingConf: WithTimingConfig = {
    duration: inputTransitionDuration,
    easing: Easing.inOut(Easing.cubic)
  };

  // Used for color interpolation
  const progressFocused = useDerivedValue(() =>
    withTiming(focusedState.value, easingConf)
  );

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

  const animatedOuterBorderStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      progressFocused.value,
      [0, 1],
      [borderColorMap.default, borderColorMap.focused]
    )
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

  const { isExperimental } = useIOExperimentalDesign();

  return (
    <>
      <Pressable
        onPress={onTextInputPress}
        style={[
          inputStatus === "disabled" ? { opacity: inputDisabledOpacity } : {},
          boxStyle,
          styles.textInput
        ]}
        accessible={false}
        accessibilityRole={"none"}
      >
        {/* Fake border managed with Animated.View to avoid
            little jumps when the border is animated */}
        <Animated.View
          style={[
            { borderColor: borderColorMap.default },
            styles.textInputOuterBorder,
            !disabled && animatedOuterBorderStyle
          ]}
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
            <Icon name={icon} color="grey-300" size={iconSize} />
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
          editable={!disabled}
          secureTextEntry={isSecretInput}
          disableFullscreenUI={true}
          accessibilityState={{ disabled }}
          accessibilityLabel={accessibilityLabel ?? placeholder}
          selectionColor={IOColors[theme["interactiveElem-default"]]} // Caret on iOS
          cursorColor={IOColors[theme["interactiveElem-default"]]} // Caret Android
          maxLength={counterLimit}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          blurOnSubmit={true}
          onChangeText={onChangeTextHandler}
          style={[
            styles.textInputStyle,
            isExperimental
              ? styles.textInputStyleFont
              : styles.textInputStyleLegacyFont
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
            style={[animatedLabelStyle, styles.textInputLabel]}
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
