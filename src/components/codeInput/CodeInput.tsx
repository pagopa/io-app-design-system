import React, { useEffect, useState } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { hexToRgba, IOColors, useIOThemeContext } from "../../core";
import { triggerHaptic } from "../../functions";
import { useErrorShakeAnimation } from "../../utils/hooks/useErrorShakeAnimation";
import { HStack } from "../stack";

type CodeInputProps = {
  value: string;
  onValueChange: (value: string) => void;
  length: number;
  onValidate: (value: string) => boolean;
  variant?: "light" | "dark";
};

const DOT_SIZE = 16;

const styles = StyleSheet.create({
  dotShape: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2
  }
});

const EmptyDot = ({ color: borderColor }: { color: ColorValue }) => (
  <View
    style={[
      styles.dotShape,
      {
        borderColor,
        backgroundColor: hexToRgba(borderColor, 0)
      }
    ]}
  />
);

const FilledDot = ({ color: backgroundColor }: { color: ColorValue }) => (
  <View
    style={[styles.dotShape, { backgroundColor, borderColor: backgroundColor }]}
  />
);

export const CodeInput = ({
  length,
  value,
  onValueChange,
  variant = "light",
  onValidate
}: CodeInputProps) => {
  const [status, setStatus] = useState<"default" | "error">("default");
  const { themeType } = useIOThemeContext();

  const { translate, animatedStyle, shakeAnimation } = useErrorShakeAnimation();

  /* Empty Dot
  - Right color depending on both theme and variant */
  const emptyDotColorLightBg = IOColors["grey-650"];
  const emptyDotColorDarkBg = hexToRgba(IOColors.white, 0.75);
  const emptyDotColorThemeBased =
    themeType === "light" ? emptyDotColorLightBg : emptyDotColorDarkBg;

  const emptyDotColor =
    variant === "light" ? emptyDotColorDarkBg : emptyDotColorThemeBased;

  /* Filled Dot
  - Right color depending on theme, variant and status */
  const filledDotColorLightBg = IOColors.black;
  const filledDotColorDarkBg = IOColors.white;
  const filledDotColorThemeBased =
    themeType === "light" ? filledDotColorLightBg : filledDotColorDarkBg;

  const filledDotColor =
    status === "error"
      ? IOColors["error-600"]
      : variant === "light"
      ? filledDotColorDarkBg
      : filledDotColorThemeBased;

  useEffect(() => {
    if (onValidate && value.length === length) {
      const isValid = onValidate(value);

      if (!isValid) {
        setStatus("error");
        triggerHaptic("notificationError");

        // eslint-disable-next-line functional/immutable-data
        translate.value = shakeAnimation();

        const timer = setTimeout(() => {
          setStatus("default");
          onValueChange("");
        }, 500);
        return () => clearTimeout(timer);
      }
    }
    return;
  }, [value, onValidate, length, onValueChange, translate, shakeAnimation]);

  return (
    <Animated.View
      style={[
        { flexDirection: "row", justifyContent: "center" },
        animatedStyle
      ]}
    >
      <HStack space={DOT_SIZE}>
        {[...Array(length)].map((_, i) =>
          value[i] ? (
            <FilledDot key={i} color={filledDotColor} />
          ) : (
            <EmptyDot key={i} color={emptyDotColor} />
          )
        )}
      </HStack>
    </Animated.View>
  );
};
