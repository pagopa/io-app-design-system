import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { hexToRgba, IOColors, useIOTheme } from "../../core";
import { H6, IOText } from "../typography";

type Props = {
  status: "default" | "focus" | "error";
  secret?: boolean;
  value?: string;
};

const styles = StyleSheet.create({
  baseBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 60,
    borderRadius: 8,
    borderCurve: "continuous"
  }
});

const SecretValue = () => (
  <IOText
    font="DMMono"
    weight="Semibold"
    size={22}
    lineHeight={33}
    accessible={false}
  >
    {"•"}
  </IOText>
);

export const BoxedInput = ({ status, value, secret }: Props) => {
  const theme = useIOTheme();

  const derivedStyle: ViewStyle = useMemo(() => {
    switch (status) {
      case "error":
        return {
          borderWidth: 1,
          borderColor: IOColors[theme["otpInputBorder-error"]],
          backgroundColor: hexToRgba(
            IOColors[theme["otpInputBorder-error"]],
            0.15
          )
        };
      case "focus":
        return {
          borderWidth: 2,
          borderColor: IOColors[theme["interactiveElem-default"]]
        };
      case "default":
      default:
        return {
          borderWidth: 1,
          borderColor: IOColors[theme["otpInputBorder-default"]]
        };
    }
  }, [status, theme]);

  return (
    <View style={[styles.baseBox, derivedStyle]} accessible={false}>
      {value &&
        (secret ? <SecretValue /> : <H6 accessible={false}>{value}</H6>)}
    </View>
  );
};
