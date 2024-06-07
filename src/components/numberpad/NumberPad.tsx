import React, { ComponentProps, Fragment, useCallback, useMemo } from "react";
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
  onValueChange: (value: number) => void;
  onDeletePress: () => void;
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
  onDeletePress,
  biometricAccessibilityLabel,
  deleteAccessibilityLabel
}: NumberPadProps) => {
  // eslint-disable-next-line arrow-body-style
  const renderButtons = useCallback((row: Array<any>) => {
    return row.map((item) => {
      if (typeof item === "number") {
        return (
          <NumberButton
            key={item}
            number={item}
            onPress={onValueChange}
            variant={variant}
          />
        );
      }

      if (item === "delete") {
        return (
          <ButtonWrapper key={item}>
            <IconButton
              icon="cancel"
              color={variant === "dark" ? "contrast" : "primary"}
              onPress={onDeletePress}
              accessibilityLabel={deleteAccessibilityLabel}
            />
          </ButtonWrapper>
        );
      }
      if (biometricType) {
        return (
          <ButtonWrapper key={item}>
            <IconButton
              icon={mapIconSpecByBiometric[biometricType].icon}
              iconSize={mapIconSpecByBiometric[biometricType].size}
              color={variant === "dark" ? "contrast" : "primary"}
              onPress={onBiometricPress}
              accessibilityLabel={biometricAccessibilityLabel}
            />
          </ButtonWrapper>
        );
      }
      
      return <View key={"emptyElem"} style={IONumberPadButtonStyles.buttonSize} />;
    });
  }, [biometricAccessibilityLabel, biometricType, deleteAccessibilityLabel, onBiometricPress, onDeletePress, onValueChange, variant]);

  // eslint-disable-next-line arrow-body-style
  const numberPad = useMemo(() => {
    return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [biometricType, 0, 'delete']].map((row, i, self) =>
      <Fragment key={i}>
        <View
          style={[
            IOStyles.rowSpaceBetween,
            {
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1
            }
          ]}
        >
          {renderButtons(row)}
        </View>
        {i < self.length - 1 && <VSpacer />}
      </Fragment>
    );
  }, [biometricType, renderButtons]);

  return (
    <View style={IOStyles.horizontalContentPadding}>
      {numberPad}
    </View>
  );
};
