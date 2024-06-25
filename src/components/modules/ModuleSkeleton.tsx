import * as React from "react";
import { View } from "react-native";
import { IOColors, IOModuleStyles, useIOTheme } from "../../core";

type ModuleSkeletonProps = {
  startBlock: React.ReactNode;
  endBlock?: React.ReactNode;
};

export const ModuleSkeleton = ({
  startBlock,
  endBlock
}: ModuleSkeletonProps) => {
  const theme = useIOTheme();

  return (
    <View
      style={[
        IOModuleStyles.button,
        { borderColor: IOColors[theme["cardBorder-default"]] }
      ]}
      accessible={false}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {startBlock}
      </View>
      {endBlock}
    </View>
  );
};
