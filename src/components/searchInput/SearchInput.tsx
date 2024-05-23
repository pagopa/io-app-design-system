import React, { useMemo, useState } from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  TextInput,
  TextInputProps,
  View
} from "react-native";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {
  IOColors,
  IOSpacingScale,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { ButtonLink, ButtonSolid } from "../buttons";
import { Icon } from "../icons";
import { VSpacer } from "../spacer";
import { HStack } from "../stack";

/* Component visual attributes */
const inputPaddingVertical: IOSpacingScale = 8;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputRadius: number = 8;
const inputBgColorDefault = IOColors["grey-50"];
const inputBgColorFocused = IOColors["grey-100"];
const inputColorPlaceholder = IOColors["grey-700"];
const iconMargin: IOSpacingScale = 8;
const iconColor: IOColors = "grey-700";
const inputFontSizePlaceholder = 14;
const cancelButtonMargin: IOSpacingScale = 8;
const inputTransitionDuration = 400;
const inputHeightIOS = 36;
const inputHeightAndroid = 48;

type SearchInputProps = {
  placeholder: TextInputProps["placeholder"];
  accessibilityLabel: TextInputProps["accessibilityLabel"];
  cancelButtonLabel: string;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const inputWithTimingConfig = {
  duration: inputTransitionDuration,
  easing: Easing.inOut(Easing.cubic)
};

export const SearchInput = ({
  placeholder,
  accessibilityLabel,
  cancelButtonLabel
}: SearchInputProps) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();

  /* Component visual attributes */
  const inputCaretColor = IOColors[theme["interactiveElem-default"]];

  const searchInputRef = React.useRef<TextInput>(null);

  /* Width of the `Cancel` button */
  const [cancelButtonWidth, setCancelButtonWidth] =
    useState<LayoutRectangle["width"]>(0);

  const getCancelButtonWidth = ({ nativeEvent }: LayoutChangeEvent) => {
    setCancelButtonWidth(nativeEvent.layout.width);
  };
  const inputWidth: number = useMemo(
    () =>
      Dimensions.get("window").width - IOVisualCostants.appMarginDefault * 4,
    []
  );

  const inputWidthWithCancel = useMemo(
    () => inputWidth - cancelButtonWidth,
    [cancelButtonWidth, inputWidth]
  );

  // eslint-disable-next-line no-console
  console.log(`inputWidth: ${inputWidth}`);
  // const [focused, setFocused] = React.useState(false);
  const inputAnimatedWidth = useSharedValue<number>(inputWidth);
  const isFocused = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      isFocused.value,
      [0, 1],
      [inputBgColorDefault, inputBgColorFocused]
    )
  }));

  const animatedInputStyle = useAnimatedStyle(() => ({
    width: withTiming(inputAnimatedWidth.value, inputWithTimingConfig)
  }));

  const cancelAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          isFocused.value,
          [0, 1],
          [cancelButtonWidth + IOVisualCostants.appMarginDefault, 0],
          Extrapolate.CLAMP
        )
      }
    ],
    opacity: interpolate(isFocused.value, [0, 1], [0.5, 1])
  }));

  const handleFocus = () => {
    // setFocused(true);
    // eslint-disable-next-line functional/immutable-data
    isFocused.value = withTiming(1, inputWithTimingConfig);
    // eslint-disable-next-line functional/immutable-data
    inputAnimatedWidth.value = inputWidthWithCancel;
  };

  const handleBlur = () => {
    // setFocused(false);
    // eslint-disable-next-line functional/immutable-data
    isFocused.value = withTiming(0, inputWithTimingConfig);
    // eslint-disable-next-line functional/immutable-data
    inputAnimatedWidth.value = inputWidth;
  };

  const focus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const blur = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  const clear = () => {
    if (searchInputRef.current) {
      searchInputRef.current.clear();
    }
  };

  // eslint-disable-next-line no-console
  console.log(`cancelButtonWidth: ${cancelButtonWidth}`);

  return (
    <>
      <Animated.View style={styles.searchBar}>
        <Animated.View style={[styles.searchInput, animatedStyle]}>
          <View style={styles.iconContainer}>
            <Icon name="search" size={16} color={iconColor} />
          </View>
          <AnimatedTextInput
            ref={searchInputRef}
            inputMode="search"
            returnKeyType="search"
            accessibilityLabel={accessibilityLabel}
            style={[
              styles.textInput,
              isExperimental ? styles.placeholder : styles.placeholderLegacy,
              animatedInputStyle
            ]}
            selectionColor={inputCaretColor}
            cursorColor={inputCaretColor}
            placeholder={placeholder}
            placeholderTextColor={inputColorPlaceholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>
        <Animated.View
          onLayout={getCancelButtonWidth}
          style={[styles.cancelButton, cancelAnimatedStyle]}
          // exiting={SlideOutRight.duration(inputTransitionDuration).easing(
          //   Easing.in(Easing.ease)
          // )}
          // entering={SlideInRight.duration(inputTransitionDuration).easing(
          //   Easing.out(Easing.ease)
          // )}
        >
          <ButtonLink label={cancelButtonLabel} onPress={blur} />
        </Animated.View>
      </Animated.View>
      <VSpacer size={16} />
      <HStack space={8}>
        <ButtonSolid label={"Focus"} onPress={focus} />
        <ButtonSolid label={"Blur"} onPress={blur} />
        <ButtonSolid label={"Clear"} onPress={clear} />
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  searchInput: {
    // flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: inputRadius,
    borderCurve: "continuous",
    // borderColor: hexToRgba(IOColors.black, 0.1),
    // borderWidth: 1,
    // paddingVertical: inputPaddingVertical,
    paddingHorizontal: inputPaddingHorizontal
  },
  textInput: {
    height: inputHeightIOS
  },
  iconContainer: {
    marginRight: iconMargin
  },
  placeholder: {
    fontSize: inputFontSizePlaceholder,
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  placeholderLegacy: {
    fontSize: inputFontSizePlaceholder,
    ...makeFontStyleObject("Regular", false, "TitilliumWeb")
  },
  cancelButton: {
    position: "absolute",
    right: 0,
    paddingLeft: cancelButtonMargin,
    flexShrink: 0
  }
});
