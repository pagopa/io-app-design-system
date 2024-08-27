import * as React from "react";
import { PressableProps, View } from "react-native";
import { IOColors, IOModuleStyles, useIOTheme } from "../../core";
import { HStack } from "../stack";

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
        <HStack space={8} style={{ alignItems: "center" }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flexGrow: 1 }}
          >
            {startBlock}
          </View>
          {endBlock}
        </HStack>
      )}

      {children}
    </View>
  );
};
