import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { IOColors } from "../../core";
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
  },
  defaultBox: {
    borderWidth: 1,
    borderColor: IOColors["grey-650"]
  },
  focusedBox: {
    borderWidth: 2,
    borderColor: IOColors["blueIO-500"]
  },
  errorBox: {
    borderWidth: 1,
    borderColor: IOColors["error-850"],
    backgroundColor: IOColors["error-100"]
  }
});

// FIXME Replace this component with H3 once the legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const SecretValue = () => (
  <IOText
    font="DMMono"
    weight="Semibold"
    color="grey-850"
    size={22}
    lineHeight={33}
    accessible={false}
  >
    {"•"}
  </IOText>
);

export const BoxedInput = ({ status, value, secret }: Props) => {
  const derivedStyle = useMemo(() => {
    switch (status) {
      case "error":
        return styles.errorBox;
      case "focus":
        return styles.focusedBox;
      case "default":
      default:
        return styles.defaultBox;
    }
  }, [status]);
  return (
    <View style={[styles.baseBox, derivedStyle]} accessible={false}>
      {value &&
        (secret ? <SecretValue /> : <H6 accessible={false}>{value}</H6>)}
    </View>
  );
};
