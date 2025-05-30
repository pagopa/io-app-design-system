import {
  H2,
  HSpacer,
  IOColors,
  IOPictograms,
  IOPictogramsBleed,
  IOPictogramsObject,
  IOVisualCostants,
  Pictogram,
  PictogramBleed,
  SVGPictogramProps,
  hexToRgba
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { JSX } from "react";
import { StyleSheet, View } from "react-native";
import { AssetViewerBox, assetItemGutter } from "../components/AssetViewerBox";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
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

const sortPictogramSet = (
  pictogramSetObject: PictogramSetObject
): PictogramSetObject =>
  Object.fromEntries(
    [...Object.entries(pictogramSetObject)].sort(([l], [r]) =>
      l.localeCompare(r)
    )
  );

const filteredIOPictograms = filterPictogramSet(
  IOPictogramsObject,
  IOPictograms
);

const sortedIOPictograms = sortPictogramSet(filteredIOPictograms);
const sortedIOPictogramsBleed = sortPictogramSet(IOPictogramsBleed);
const sortedIOPictogramsObject = sortPictogramSet(IOPictogramsObject);

export const Pictograms = () => (
  <Screen>
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Pictograms
    </H2>
    <View style={styles.itemsWrapper}>
      {Object.entries(sortedIOPictograms).map(([pictogramItemName]) => (
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
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Bleed Pictograms
    </H2>
    <View style={styles.itemsWrapper}>
      {Object.entries(sortedIOPictogramsBleed).map(([pictogramItemName]) => (
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
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Objects Pictograms
    </H2>
    <View style={styles.itemsWrapper}>
      {Object.entries(sortedIOPictogramsObject).map(([pictogramItemName]) => (
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
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Color mode agnostic
    </H2>
    <ComponentViewerBox name={`pictogramStyle = "light-content"`}>
      <View
        style={{
          borderRadius: 8,
          padding: 16,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: IOColors["blueIO-500"],
          flexDirection: "row"
        }}
      >
        <Pictogram name="feature" pictogramStyle="light-content" />
        <HSpacer size={24} />
        <Pictogram name="umbrella" pictogramStyle="light-content" />
      </View>
    </ComponentViewerBox>

    <ComponentViewerBox name={`pictogramStyle = "dark-content"`}>
      <View
        style={{
          borderRadius: 8,
          padding: 16,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: IOColors.white,
          flexDirection: "row",
          borderColor: hexToRgba(IOColors.black, 0.1),
          borderWidth: 1
        }}
      >
        <Pictogram name="feedback" pictogramStyle="dark-content" />
        <HSpacer size={24} />
        <Pictogram name="charity" pictogramStyle="dark-content" />
      </View>
    </ComponentViewerBox>
  </Screen>
);
