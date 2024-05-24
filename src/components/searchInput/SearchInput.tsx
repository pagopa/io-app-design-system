import React, { useMemo, useState, useRef } from "react";
import {
  Dimensions,
  Keyboard,
  LayoutChangeEvent,
  LayoutRectangle,
  Platform,
  Pressable,
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
  IOSpacer,
  IOSpacingScale,
  IOVisualCostants,
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { ButtonLink, ButtonSolid } from "../buttons";
import { IOIconSizeScale, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { HStack } from "../stack";

/* Component visual attributes */
// const inputPaddingVertical: IOSpacingScale = 8;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputPaddingClearButton: IOSpacingScale = 8;
const inputRadius: number = 8;
const inputBgColorDefault = IOColors["grey-50"];
const inputBgColorFocused = IOColors["grey-100"];
const inputColorPlaceholder = IOColors["grey-700"];
const iconMargin: IOSpacingScale = 8;
const iconColor: IOColors = "grey-700";
const iconSize: IOIconSizeScale = 16;
const iconCloseSize: IOIconSizeScale = 24;
const inputFontSizePlaceholder = 12;
const cancelButtonMargin: IOSpacingScale = 16;
const inputTransitionDuration = 250;
const inputHeightIOS = 36;
const inputHeightAndroid = 42;

type SearchInputProps = {
  placeholder: TextInputProps["placeholder"];
  accessibilityLabel: TextInputProps["accessibilityLabel"];
  clearAccessibilityLabel: string;
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
  clearAccessibilityLabel,
  cancelButtonLabel
}: SearchInputProps) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();

  /* Component visual attributes */
  const inputCaretColor = IOColors[theme["interactiveElem-default"]];

  const searchInputRef = useRef<TextInput>(null);

  /* Width of the `Cancel` button */
  const [cancelButtonWidth, setCancelButtonWidth] =
    useState<LayoutRectangle["width"]>(0);

  const getCancelButtonWidth = ({ nativeEvent }: LayoutChangeEvent) => {
    setCancelButtonWidth(nativeEvent.layout.width);
  };

  const inputWidth: number = useMemo(
    () =>
      Dimensions.get("window").width - IOVisualCostants.appMarginDefault * 2,
    []
  );

  const inputWidthWithCancel: number = useMemo(
    () => inputWidth - cancelButtonWidth,
    [inputWidth, cancelButtonWidth]
  );

  // const [focused, setFocused] = React.useState(false);
  const inputAnimatedWidth = useSharedValue<number>(inputWidth);
  const isFocused = useSharedValue(0);
  // const showClearButton = useSharedValue(0);
  // const [searchText, setSearchText] = useState("");

  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(inputAnimatedWidth.value, inputWithTimingConfig),
    backgroundColor: interpolateColor(
      isFocused.value,
      [0, 1],
      [inputBgColorDefault, inputBgColorFocused]
    )
  }));

  // const animatedInputStyle = useAnimatedStyle(() => ({}));

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
    // eslint-disable-next-line functional/immutable-data
    isFocused.value = withTiming(1, inputWithTimingConfig);
    // eslint-disable-next-line no-console
    console.log(`inputWidthWithCancel: ${inputWidthWithCancel}`);
    // eslint-disable-next-line functional/immutable-data
    inputAnimatedWidth.value = inputWidthWithCancel;
  };

  const handleBlur = () => {
    // if (searchInputRef.current) {
    //   /* Clear the text input when blurring */
    //   searchInputRef.current.clear();
    // }
    // eslint-disable-next-line functional/immutable-data
    isFocused.value = withTiming(0, inputWithTimingConfig);
    // eslint-disable-next-line no-console
    console.log(`inputWidth: ${inputWidth}`);
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
      /* Clear the text input before blurring */
      searchInputRef.current.blur();
    }
  };

  // const handleClearButton = (text: string) => {
  //   // eslint-disable-next-line functional/immutable-data
  //   showClearButton.value = text.length >= 0;
  //   setSearchText(text);
  //   // eslint-disable-next-line no-console
  //   console.log(
  //     `showClearButton: ${showClearButton.value}, text: ${text.length}`
  //   );
  // };

  // const handleClearSearch = () => {
  //   setSearchText("");
  // };

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
            <Icon name="search" size={iconSize} color={iconColor} />
          </View>
          <AnimatedTextInput
            ref={searchInputRef}
            inputMode="search"
            returnKeyType="search"
            accessibilityLabel={accessibilityLabel}
            style={[
              styles.textInput,
              Platform.OS === "ios"
                ? styles.textInputIOS
                : styles.textInputAndroid,
              isExperimental ? styles.placeholder : styles.placeholderLegacy
            ]}
            selectionColor={inputCaretColor}
            cursorColor={inputCaretColor}
            placeholder={placeholder}
            placeholderTextColor={inputColorPlaceholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            // onChangeText={handleClearButton}
          />
          <Pressable
            style={styles.clearButton}
            onPress={clear}
            accessibilityLabel={clearAccessibilityLabel}
            accessibilityRole="button"
            hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          >
            <Icon name="closeSmall" size={iconCloseSize} color={iconColor} />
          </Pressable>
        </Animated.View>
        <Animated.View
          onLayout={getCancelButtonWidth}
          style={[styles.cancelButton, cancelAnimatedStyle]}
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
    flexShrink: 0,
    borderRadius: inputRadius,
    borderCurve: "continuous",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: inputPaddingHorizontal,
    paddingRight: inputPaddingClearButton
  },
  textInput: {
    flexShrink: 1,
    flexGrow: 1,
    borderColor: hexToRgba(IOColors.red, 0.2),
    borderWidth: 1
  },
  textInputIOS: {
    height: inputHeightIOS
  },
  textInputAndroid: {
    height: inputHeightAndroid
  },
  iconContainer: {
    borderColor: hexToRgba(IOColors.red, 0.2),
    borderWidth: 1,
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
    paddingLeft: cancelButtonMargin
  },
  clearButton: {
    borderColor: hexToRgba(IOColors.red, 0.2),
    borderWidth: 1,
    marginLeft: iconMargin
  }
});
