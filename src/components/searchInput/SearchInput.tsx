import React, { ComponentProps, useMemo, useState } from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  LayoutRectangle,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
  NativeSyntheticEvent,
  Platform
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
  hexToRgba,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { ButtonLink, ButtonSolid, IconButton } from "../buttons";
import { IOIconSizeScale, Icon } from "../icons";
import { VSpacer } from "../spacer";
import { HStack } from "../stack";

/* Component visual attributes */
const inputPaddingVertical: IOSpacingScale = 8;
const inputPaddingHorizontal: IOSpacingScale = 12;
const inputPaddingClearButton: IOSpacingScale = 4;
const inputRadius: number = 8;
const inputBgColorDefault = IOColors["grey-50"];
const inputBgColorFocused = IOColors["grey-100"];
const inputColorPlaceholder = IOColors["grey-700"];
const iconMargin: IOSpacingScale = 8;
const iconColor: IOColors = "grey-700";
const iconSize: IOIconSizeScale = 16;
const inputFontSizePlaceholder = 14;
const cancelButtonMargin: IOSpacingScale = 8;
const inputTransitionDuration = 250;
const inputHeightIOS = 36;
const inputHeightAndroid = 48;

type SearchInputProps = {
  placeholder: TextInputProps["placeholder"];
  accessibilityLabel: TextInputProps["accessibilityLabel"];
  clearAccessibilityLabel: ComponentProps<
    typeof IconButton
  >["accessibilityLabel"];
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
  const showClearButton = useSharedValue(0);
  const [searchText, setSearchText] = useState("");

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
    if (searchInputRef.current) {
      /* Clear the text input when blurring */
      searchInputRef.current.clear();
    }
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
        <Animated.View
          style={[
            styles.searchInput,
            Platform.OS === "ios"
              ? styles.searchInputIOS
              : styles.searchInputAndroid,
            animatedStyle
          ]}
        >
          <View style={styles.iconContainer}>
            <Icon name="search" size={iconSize} color={iconColor} />
          </View>
          <AnimatedTextInput
            ref={searchInputRef}
            inputMode="search"
            returnKeyType="search"
            accessibilityLabel={accessibilityLabel}
            style={[
              // styles.textInput,
              isExperimental ? styles.placeholder : styles.placeholderLegacy,
              animatedInputStyle
            ]}
            selectionColor={inputCaretColor}
            cursorColor={inputCaretColor}
            placeholder={placeholder}
            placeholderTextColor={inputColorPlaceholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            // onChangeText={handleClearButton}
            clearButtonMode="while-editing"
          />
          {/* <Pressable
            onPress={clear}
            accessibilityLabel={clearAccessibilityLabel}
            accessibilityRole="button"
          >
            <Icon name="closeMedium" size={iconSize} color={iconColor} />
          </Pressable> */}
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
      <Text>{showClearButton.value ? "Show" : "Hide"}</Text>
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
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: inputRadius,
    borderCurve: "continuous",
    // borderColor: hexToRgba(IOColors.black, 0.1),
    // borderWidth: 1,
    paddingVertical: inputPaddingVertical
  },
  searchInputIOS: {
    paddingLeft: inputPaddingHorizontal,
    paddingRight: inputPaddingClearButton
  },
  searchInputAndroid: {
    paddingHorizontal: inputPaddingHorizontal
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
