import React, { useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { IOColors, IOStyles } from "../../core";
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
    borderRadius: 8,
    borderWidth: 2
  },
  dotEmpty: {
    borderColor: IOColors["grey-200"]
  },
  wrapper: {
    justifyContent: "center"
  }
});

const EmptyDot = () => <View style={[styles.dotShape, styles.dotEmpty]} />;

const FilletDot = ({ color }: { color: IOColors }) => (
  <View
    style={[
      styles.dotShape,
      { backgroundColor: IOColors[color], borderColor: IOColors[color] }
    ]}
  />
);

export const CodeInput = ({
  length,
  value,
  onValueChange,
  variant = "light",
  onValidate
}: CodeInputProps) => {
  const [status, setStatus] = React.useState<"default" | "error">("default");

  const { translate, animatedStyle, shakeAnimation } = useErrorShakeAnimation();

  const fillColor = useMemo(
    () =>
      status === "error"
        ? "error-600"
        : variant === "light"
        ? "white"
        : "black",
    [variant, status]
  );

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
    <Animated.View style={[IOStyles.row, styles.wrapper, animatedStyle]}>
      <HStack space={DOT_SIZE}>
        {[...Array(length)].map((_, i) => (
          <React.Fragment key={i}>
            {value[i] ? <FilletDot color={fillColor} /> : <EmptyDot />}
          </React.Fragment>
        ))}
      </HStack>
    </Animated.View>
  );
};
