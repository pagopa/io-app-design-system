import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useIOTheme } from "../../context";
import { hexToRgba, IOColors } from "../../core/IOColors";
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

  const statusStyle: Record<Props["status"], ViewStyle> = useMemo(
    () => ({
      error: {
        borderWidth: 1,
        borderColor: IOColors[theme["otpInputBorder-error"]],
        backgroundColor: hexToRgba(
          IOColors[theme["otpInputBorder-error"]],
          0.15
        )
      },
      focus: {
        borderWidth: 2,
        borderColor: IOColors[theme["interactiveElem-default"]]
      },
      default: {
        borderWidth: 1,
        borderColor: IOColors[theme["otpInputBorder-default"]]
      }
    }),
    [theme]
  );

  return (
    <View style={[styles.baseBox, statusStyle[status]]} accessible={false}>
      {value &&
        (secret ? <SecretValue /> : <H6 accessible={false}>{value}</H6>)}
    </View>
  );
};
