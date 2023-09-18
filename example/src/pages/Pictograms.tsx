import {
  H2,
  IOPictograms,
  IOPictogramsBleed,
  IOPictogramsLegacy,
  IOPictogramsObject,
  IOThemeContext,
  IOVisualCostants,
  Pictogram,
  PictogramBleed,
  SVGPictogramProps
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
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

// Filter the main object, removing already displayed pictograms in the other sets
type PictogramSubsetObject = Record<
  string,
  ({ size }: SVGPictogramProps) => JSX.Element
>;
interface PictogramSetObject {
  [key: string]: ({ size }: SVGPictogramProps) => JSX.Element;
}

const filterPictogramSet = (
  pictogramSubsetObject: PictogramSubsetObject,
  pictogramSetObject: PictogramSetObject
): PictogramSetObject =>
  Object.fromEntries(
    Object.entries(pictogramSetObject).filter(
      ([key]) => !Object.keys(pictogramSubsetObject).includes(key)
    )
  );

const filteredIOPictograms = filterPictogramSet(
  {
    ...IOPictogramsObject,
    ...IOPictogramsLegacy
  },
  IOPictograms
);

export const Pictograms = () => {
  const theme = useContext(IOThemeContext);
  return (
    <Screen>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Pictograms
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(filteredIOPictograms).map(([pictogramItemName]) => (
          <AssetViewerBox
            key={pictogramItemName}
            name={pictogramItemName}
            type={
              Object.keys(IOPictogramsBleed).includes(pictogramItemName)
                ? "hasBleed"
                : "vector"
            }
            image={
              <Pictogram name={pictogramItemName as IOPictograms} size="100%" />
            }
          />
        ))}
      </View>

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Bleed Pictograms
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOPictogramsBleed).map(([pictogramItemName]) => (
          <AssetViewerBox
            type="bleed"
            key={pictogramItemName}
            name={pictogramItemName}
            size="small"
            image={
              <PictogramBleed
                name={pictogramItemName as IOPictogramsBleed}
                size="100%"
              />
            }
          />
        ))}
      </View>

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Objects Pictograms
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOPictogramsObject).map(([pictogramItemName]) => (
          <AssetViewerBox
            key={pictogramItemName}
            name={pictogramItemName}
            image={
              <Pictogram
                name={pictogramItemName as IOPictogramsObject}
                size="100%"
              />
            }
          />
        ))}
      </View>

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Legacy Pictograms
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOPictogramsLegacy).map(([pictogramItemName]) => (
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
};
