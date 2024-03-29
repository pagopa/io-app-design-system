import React from "react";
import { StyleSheet, View } from "react-native";
import { IOAlertRadius, IOColors } from "../../core";
import { Icon } from "../icons";
import { HSpacer } from "../spacer";
import { ButtonText } from "../typography";
import { Toast, ToastVariant } from "./types";

type ColorVariant = {
  background: IOColors;
  stroke: IOColors;
};

const toastColorVariants: Record<ToastVariant, ColorVariant> = {
  neutral: {
    background: "turquoise-150",
    stroke: "turquoise-850"
  },
  error: {
    background: "error-100",
    stroke: "error-850"
  },
  info: {
    background: "info-100",
    stroke: "info-850"
  },
  success: {
    background: "success-100",
    stroke: "success-850"
  },
  warning: {
    background: "warning-100",
    stroke: "warning-850"
  }
};

type Props = Pick<Toast, "message" | "variant" | "icon">;

const ToastNotification = ({ message, variant = "neutral", icon }: Props) => {
  const colors = toastColorVariants[variant];

  return (
    <View
      style={[
        styles.toast,
        {
          backgroundColor: IOColors[colors.background],
          borderColor: IOColors[colors.stroke]
        }
      ]}
      accessible={true}
      accessibilityRole={"alert"}
      accessibilityLabel={message}
    >
      <ButtonText color={colors.stroke} style={styles.content}>
        {message}
      </ButtonText>
      {icon && (
        <>
          <HSpacer size={16} />
          <Icon name={icon} size={24} color={colors.stroke} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    borderRadius: IOAlertRadius,
    borderWidth: 1,
    borderCurve: "continuous",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  content: {
    flexShrink: 1,
    paddingVertical: 2
  }
});

export { ToastNotification };
