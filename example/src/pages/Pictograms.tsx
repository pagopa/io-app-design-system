import {
  H2,
  IOPictograms,
  IOVisualCostants,
  Pictogram
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { AssetViewerBox, assetItemGutter } from "../components/AssetViewerBox";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
  itemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginLeft: (assetItemGutter / 2) * -1,
    marginRight: (assetItemGutter / 2) * -1,
    marginBottom: 24
  }
});

export const Pictograms = () => (
  <Screen>
    <H2
      color={"bluegrey"}
      weight={"SemiBold"}
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Pictograms
    </H2>
    <View style={styles.itemsWrapper}>
      {Object.entries(IOPictograms).map(([pictogramItemName]) => (
        <AssetViewerBox
          key={pictogramItemName}
          name={pictogramItemName}
          image={
            <Pictogram name={pictogramItemName as IOPictograms} size="100%" />
          }
        />
      ))}
    </View>
  </Screen>
);
