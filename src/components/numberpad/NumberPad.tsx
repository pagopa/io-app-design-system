/* eslint-disable functional/immutable-data */
import React, { ComponentProps, useRef } from "react";
import { View } from "react-native";
import { BiometricsValidType } from "../../utils/types";
import { IONumberPadButtonStyles, IOStyles } from "../../core";
import { VSpacer } from "../spacer";
import { IconButton } from "../buttons";
import { IOIconSizeScale, IOIcons } from "../icons";
import { NumberButton } from "./NumberButton";

type BiometricAuthProps =
  | {
      biometricType: BiometricsValidType;
      onBiometricPress: () => void;
      biometricAccessibilityLabel: string;
    }
  | {
      biometricType?: never;
      onBiometricPress?: never;
      biometricAccessibilityLabel?: never;
    };

type NumberPadProps = {
  onValueChange: (value: string) => void;
  variant: ComponentProps<typeof NumberButton>["variant"];
  deleteAccessibilityLabel: string;
} & BiometricAuthProps;

const mapIconSpecByBiometric: Record<
  BiometricsValidType,
  { icon: IOIcons; size: IOIconSizeScale }
> = {
  FACE_ID: { icon: "biomFaceID", size: 32 },
  TOUCH_ID: { icon: "fingerprint", size: 24 },
  BIOMETRICS: { icon: "fingerprint", size: 24 }
};

const ButtonWrapper = ({ children }: { children: React.ReactNode }) => (
  <View
    style={[
      IONumberPadButtonStyles.buttonSize,
      IOStyles.alignCenter,
      IOStyles.centerJustified
    ]}
  >
    {children}
  </View>
);
export const NumberPad = ({
  variant = "dark",
  onValueChange,
  biometricType,
  onBiometricPress,
  biometricAccessibilityLabel,
  deleteAccessibilityLabel
}: NumberPadProps) => {
  const numberPadValue = useRef<string>("");

  const numberPadPress = (number: number) => {
    numberPadValue.current = `${numberPadValue.current}${number}`;
    onValueChange(numberPadValue.current);
  };

  const onDeletePress = () => {
    numberPadValue.current = numberPadValue.current.slice(0, -1);
    onValueChange(numberPadValue.current);
  };

  type ButtonType = "biometric" | "delete";

  const RowButtons = ({
    buttons
  }: {
    buttons: ReadonlyArray<number | ButtonType>;
  }) => (
    <View
      style={[
        IOStyles.flex,
        IOStyles.rowSpaceBetween,
        { justifyContent: "space-between", alignItems: "center" }
      ]}
    >
      {buttons.map(elem => {
        if (typeof elem === "number") {
          return (
            <NumberButton
              key={elem}
              number={elem}
              onPress={numberPadPress}
              variant={variant}
            />
          );
        }

        if (elem === "delete") {
          return (
            <ButtonWrapper key={elem}>
              <IconButton
                icon="cancel"
                color={variant === "dark" ? "contrast" : "primary"}
                onPress={onDeletePress}
                accessibilityLabel={deleteAccessibilityLabel}
              />
            </ButtonWrapper>
          );
        }
        return biometricType ? (
          <ButtonWrapper key={elem}>
            <IconButton
              icon={mapIconSpecByBiometric[biometricType].icon}
              iconSize={mapIconSpecByBiometric[biometricType].size}
              color={variant === "dark" ? "contrast" : "primary"}
              onPress={onBiometricPress}
              accessibilityLabel={biometricAccessibilityLabel}
            />
          </ButtonWrapper>
        ) : (
          <View key={"emptyElem"} style={IONumberPadButtonStyles.buttonSize} />
        );
      })}
    </View>
  );

  return (
    <View style={IOStyles.horizontalContentPadding}>
      <RowButtons buttons={[1, 2, 3]} />
      <VSpacer />
      <RowButtons buttons={[4, 5, 6]} />
      <VSpacer />
      <RowButtons buttons={[7, 8, 9]} />
      <VSpacer />
      <RowButtons buttons={["biometric", 0, "delete"]} />
    </View>
  );
};
