/* eslint-disable functional/immutable-data */
import React, { useMemo, useRef, useState } from "react";
import {
  ColorValue,
  Dimensions,
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
  IOSpacingScale,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { ButtonLink, ButtonSolid } from "../buttons";
import { IOIconSizeScale, Icon } from "../icons";
import { VSpacer } from "../spacer";
import { HStack } from "../stack";

/* Component visual attributes */
// const inputPaddingVertical: IOSpacingScale = 8;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputPaddingClearButton: IOSpacingScale = 8;
const inputRadius: number = 8;
const inputBgColorDefault: ColorValue = IOColors["grey-50"];
const inputBgColorFocused: ColorValue = IOColors["grey-100"];
const inputColorPlaceholder: ColorValue = IOColors["grey-700"];
const iconMargin: IOSpacingScale = 8;
const iconColor: IOColors = "grey-700";
const iconSize: IOIconSizeScale = 16;
const iconCloseSize: IOIconSizeScale = 24;
const inputFontSizePlaceholder: number = 12;
const cancelButtonMargin: IOSpacingScale = 16;
const inputTransitionDuration: number = 250;
const inputHeightIOS: number = 36;
const inputHeightAndroid: number = 42;

type SearchInputProps = {
  placeholder: TextInputProps["placeholder"];
  accessibilityLabel: TextInputProps["accessibilityLabel"];
  clearAccessibilityLabel: string;
  cancelButtonLabel: string;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
  const searchInputRef = useRef<TextInput>(null);

  /* Component visual attributes */
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();
  const inputCaretColor = IOColors[theme["interactiveElem-default"]];

  /* Widths used for the transition:
     - Entire `SearchInput`
     - `Cancel` button */
  const inputWidth: number = useMemo(
    () =>
      Dimensions.get("window").width - IOVisualCostants.appMarginDefault * 2,
    []
  );

  const [cancelButtonWidth, setCancelButtonWidth] =
    useState<LayoutRectangle["width"]>(0);

  const getCancelButtonWidth = ({ nativeEvent }: LayoutChangeEvent) => {
    setCancelButtonWidth(nativeEvent.layout.width);
  };

  const inputWidthWithCancel: number = useMemo(
    () => inputWidth - cancelButtonWidth,
    [inputWidth, cancelButtonWidth]
  );

  /* Reanimated styles */
  const inputAnimatedWidth = useSharedValue<number>(inputWidth);
  const isFocused = useSharedValue(0);
  const [searchText, setSearchText] = useState("");

  /* Applied to the `SearchInput` */
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(inputAnimatedWidth.value, inputWithTimingConfig),
    backgroundColor: interpolateColor(
      isFocused.value,
      [0, 1],
      [inputBgColorDefault, inputBgColorFocused]
    )
  }));

  /* Applied to the `Cancel` button */
  const cancelButtonAnimatedStyle = useAnimatedStyle(() => ({
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

  /* Applied to the `Clear` button inside the `SearchInput` */
  const clearButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale:
          searchText.length > 0
            ? withTiming(1, inputWithTimingConfig)
            : withTiming(0.5, inputWithTimingConfig)
      }
    ],
    opacity: withTiming(searchText.length > 0 ? 1 : 0, inputWithTimingConfig)
  }));

  /* Related event handlers */
  const handleFocus = () => {
    isFocused.value = withTiming(1, inputWithTimingConfig);
    inputAnimatedWidth.value = inputWidthWithCancel;
  };

  const handleBlur = () => {
    isFocused.value = withTiming(0, inputWithTimingConfig);
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

  const cancel = () => {
    setSearchText("");
    if (searchInputRef.current) {
      searchInputRef.current.clear();
      searchInputRef.current.blur();
    }
  };

  const handleClearButton = (text: string) => {
    setSearchText(text);
  };

  const clear = () => {
    setSearchText("");
    if (searchInputRef.current) {
      searchInputRef.current.clear();
    }
  };

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
            accessibilityRole={"search"}
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
            onChangeText={handleClearButton}
          />
          <AnimatedPressable
            style={[styles.clearButton, clearButtonAnimatedStyle]}
            onPress={clear}
            accessibilityLabel={clearAccessibilityLabel}
            accessibilityRole="button"
            hitSlop={16}
          >
            <Icon name="closeSmall" size={iconCloseSize} color={iconColor} />
          </AnimatedPressable>
        </Animated.View>
        <Animated.View
          onLayout={getCancelButtonWidth}
          style={[styles.cancelButton, cancelButtonAnimatedStyle]}
        >
          <ButtonLink label={cancelButtonLabel} onPress={cancel} />
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
    flexGrow: 1
  },
  textInputIOS: {
    height: inputHeightIOS
  },
  textInputAndroid: {
    height: inputHeightAndroid
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
    paddingLeft: cancelButtonMargin
  },
  clearButton: {
    marginLeft: iconMargin
  }
});
