import * as React from "react";
import { PressableProps, View } from "react-native";
import { IOColors, IOModuleStyles, useIOTheme } from "../../core";

type ModuleStaticProps =
  | ModuleStaticSingleBlockProps
  | ModuleStaticMultipleBlockProps;

type ModuleStaticMultipleBlockProps = {
  startBlock: React.ReactNode;
  endBlock?: React.ReactNode;
  children?: never;
  disabled?: PressableProps["disabled"];
};

type ModuleStaticSingleBlockProps = {
  startBlock?: never;
  endBlock?: never;
  children: React.ReactNode;
  disabled?: PressableProps["disabled"];
};

const DISABLED_OPACITY = 0.5;

export const ModuleStatic = ({
  disabled = false,
  startBlock,
  endBlock,
  children
}: ModuleStaticProps) => {
  const theme = useIOTheme();

  return (
    <View
      style={[
        IOModuleStyles.button,
        {
          borderColor: IOColors[theme["cardBorder-default"]],
          opacity: disabled ? DISABLED_OPACITY : 1
        }
      ]}
      accessible={false}
    >
      {startBlock && (
        <React.Fragment>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {startBlock}
          </View>
          {endBlock}
        </React.Fragment>
      )}

      {children}
    </View>
  );
};
