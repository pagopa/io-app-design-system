import * as React from "react";
import { View } from "react-native";
import { IOColors, IOModuleStyles, useIOTheme } from "../../core";

type ModuleStaticProps = {
  startBlock: React.ReactNode;
  endBlock?: React.ReactNode;
};

export const ModuleStatic = ({ startBlock, endBlock }: ModuleStaticProps) => {
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
