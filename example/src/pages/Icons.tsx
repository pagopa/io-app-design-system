import {
  H2,
  H3,
  H4,
  HSpacer,
  IOBiometricIcons,
  IOCategoryIcons,
  IOColors,
  IOIconSizeScale,
  IOIcons,
  IONavIcons,
  IOProductIcons,
  IOStyles,
  IOSystemIcons,
  IOThemeContext,
  IOVisualCostants,
  Icon,
  IconContained,
  SVGIconProps,
  IOIconsNew
} from "@pagopa/io-app-design-system";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { IconViewerBox, iconItemGutter } from "../components/IconViewerBox";
import { Screen } from "../components/Screen";
import { ComponentViewerBox } from "../components/ComponentViewerBox";

// Filter the main object, removing already displayed icons in the other sets
type IconSubsetObject = Record<
  string,
  ({ size, style }: SVGIconProps) => JSX.Element
>;
interface IconSetObject {
  [key: string]: ({ size, style }: SVGIconProps) => JSX.Element;
}

const filterIconSet = (
  iconSubsetObject: IconSubsetObject,
  iconSetObject: IconSetObject
): IconSetObject =>
  Object.fromEntries(
    Object.entries(iconSetObject).filter(
      ([key]) => !Object.keys(iconSubsetObject).includes(key)
    )
  );

const filteredIOIcons = filterIconSet(
  {
    ...IONavIcons,
    ...IOCategoryIcons,
    ...IOProductIcons,
    ...IOBiometricIcons,
    ...IOSystemIcons
  },
  IOIcons
);

// Just for demo purposes
// Once we defined a general set of icon sizes,
// just replace the following array:
const IOIconSizes: Array<IOIconSizeScale> = [16, 24, 32, 48];
const IOIconColors = [
  "grey-200",
  "grey-450",
  "grey-650",
  "blueIO-500",
  "error-500"
];

const styles = StyleSheet.create({
  itemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginLeft: (iconItemGutter / 2) * -1,
    marginRight: (iconItemGutter / 2) * -1,
    marginBottom: 16,
    paddingTop: IOVisualCostants.appMarginDefault
  }
});

export const Icons = () => {
  const theme = useContext(IOThemeContext);
  return (
    <Screen>
      <View style={styles.itemsWrapper}>
        {Object.entries(filteredIOIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="small"
            image={
              <Icon
                name={iconItemName as IOIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
            withDot={Object.keys(IOIconsNew).includes(iconItemName)}
          />
        ))}
      </View>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Navigation
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IONavIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="medium"
            image={
              <Icon
                name={iconItemName as IONavIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
          />
        ))}
      </View>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        System
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOSystemIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="small"
            image={
              <Icon
                name={iconItemName as IOBiometricIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
          />
        ))}
      </View>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Biometric
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOBiometricIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="large"
            image={
              <Icon
                name={iconItemName as IOBiometricIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
          />
        ))}
      </View>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Categories
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOCategoryIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="medium"
            image={
              <Icon
                name={iconItemName as IOCategoryIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
          />
        ))}
      </View>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Product
      </H2>
      <View style={styles.itemsWrapper}>
        {Object.entries(IOProductIcons).map(([iconItemName]) => (
          <IconViewerBox
            key={iconItemName}
            name={iconItemName}
            size="large"
            image={
              <Icon
                name={iconItemName as IOProductIcons}
                color={theme["icon-default"]}
                size="100%"
              />
            }
          />
        ))}
      </View>

      <H4 color={theme["textHeading-default"]} style={{ marginBottom: 12 }}>
        IconContained
      </H4>
      <ComponentViewerBox name={"IconContained, default variant"}>
        <View style={IOStyles.row}>
          <IconContained icon="device" variant="tonal" color="neutral" />
          <HSpacer size={8} />
          <IconContained icon="institution" variant="tonal" color="neutral" />
        </View>
      </ComponentViewerBox>

      <H3
        color={theme["textHeading-default"]}
        weight={"Bold"}
        style={{ marginBottom: 12 }}
      >
        Sizes
      </H3>
      <View style={styles.itemsWrapper}>
        {/* If you want to render another icon in different sizes,
      just change the name below */}
        {IOIconSizes.map(size => (
          <IconViewerBox
            key={`iconSize-${size}`}
            name={`${size}`}
            image={
              <Icon
                name="creditCard"
                color={theme["icon-default"]}
                size={size}
              />
            }
          />
        ))}
      </View>
      <H3 color={theme["textHeading-default"]} style={{ marginBottom: 12 }}>
        Colors
      </H3>
      <View style={styles.itemsWrapper}>
        {IOIconColors.map(color => (
          <IconViewerBox
            key={`iconColor-${color}`}
            name={`${color}`}
            size="medium"
            image={
              <Icon name="messageLegal" size={24} color={color as IOColors} />
            }
          />
        ))}
      </View>
    </Screen>
  );
};
