import React from "react";
import { View, StyleSheet } from "react-native";
import { hexToRgba, IOColors } from "../../core";

/* Logos */
import LogoPaymentCardPayPal from "./svg/LogoPaymentCardPayPal";
import LogoPaymentCardBancomatPay from "./svg/LogoPaymentCardBancomatPay";

export const IOPaymentCardLogos = {
  payPal: LogoPaymentCardPayPal,
  bancomatPay: LogoPaymentCardBancomatPay
} as const;

export type IOLogoPaymentCardType = keyof typeof IOPaymentCardLogos;

type IOPaymentLogos = {
  name: IOLogoPaymentCardType;
  align: "start" | "center" | "end";
  width?: "100%" | number;
  height?: number;
  debugMode?: boolean;
};

export type SVGCardLogoProps = {
  preserveAspectRatio: "xMinYMin meet" | "xMidYMid meet" | "xMaxYMax meet";
};

const preserveAspectRatioValues: Record<
  IOPaymentLogos["align"],
  SVGCardLogoProps["preserveAspectRatio"]
> = {
  start: "xMinYMin meet",
  center: "xMidYMid meet",
  end: "xMaxYMax meet"
};

const styles = StyleSheet.create({
  debugMode: {
    backgroundColor: hexToRgba(IOColors["error-500"], 0.2)
  }
});

const LogoPaymentCard = ({
  name,
  width = "100%",
  height = 32,
  align = "center",
  debugMode = false,
  ...props
}: IOPaymentLogos) => {
  const LogoElement = IOPaymentCardLogos[name];
  return (
    <View style={[{ width, height }, debugMode && styles.debugMode]}>
      <LogoElement
        preserveAspectRatio={preserveAspectRatioValues[align]}
        {...props}
      />
    </View>
  );
};

export default LogoPaymentCard;
