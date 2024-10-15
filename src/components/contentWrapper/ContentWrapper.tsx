import React from "react";
import { View } from "react-native";
import { WithTestID } from "src/utils/types";
import type { IOAppMargin } from "../../core";
import { IOVisualCostants } from "../../core/IOStyles";

type IOContentWrapperProps = WithTestID<{
  margin?: IOAppMargin;
  children: React.ReactNode;
}>;

/**
`ContentWrapper` is the main wrapper of the application. It automatically sets side margins,
depending on the size value
@param {IOContentWrapper} margin
 */
export const ContentWrapper = ({
  margin = IOVisualCostants.appMarginDefault,
  testID,
  children
}: IOContentWrapperProps) => (
  <View
    testID={testID}
    style={{
      paddingHorizontal: margin
    }}
  >
    {children}
  </View>
);
