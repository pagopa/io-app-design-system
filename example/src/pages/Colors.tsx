import {
  BodySmall,
  H2,
  H3,
  IOColorGradients,
  IOColors,
  IOColorsExtra,
  IOColorsNeutral,
  IOColorsStatus,
  IOColorsTints,
  IOThemeDark,
  IOThemeLight,
  IOVisualCostants,
  LabelMini,
  VSpacer,
  hexToRgba,
  themeStatusColorsDarkMode,
  themeStatusColorsLightMode
} from "@pagopa/io-app-design-system";
import React from "react";
import { ColorValue, Dimensions, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Screen } from "../components/Screen";

const gradientItemGutter = 16;
const sectionTitleMargin = 16;
const colorItemGutter = 32;
const colorItemPadding = 8;
const colorItemBorderLightMode = hexToRgba(IOColors.black, 0.1);
const colorItemBorderDarkMode = hexToRgba(IOColors.white, 0.25);

const colorPillBg = hexToRgba(IOColors.black, 0.2);
const contentPadding = 24;

const styles = StyleSheet.create({
  gradientItemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginLeft: (gradientItemGutter / 2) * -1,
    marginRight: (gradientItemGutter / 2) * -1,
    marginBottom: 16
  },
  colorItemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginLeft: (colorItemGutter / 2) * -1,
    marginRight: (colorItemGutter / 2) * -1
  },
  colorWrapperBothModes: {
    width: "50%",
    paddingHorizontal: colorItemGutter / 2,
    paddingTop: 16
  },
  colorWrapper: {
    justifyContent: "flex-start",
    marginBottom: 16
  },
  smallCapsTitle: {
    fontSize: 10,
    textAlign: "right",
    textTransform: "uppercase",
    marginBottom: 12
  },
  smallCapsLightMode: {
    color: IOColors["grey-700"]
  },
  smallCapsDarkMode: {
    color: IOColors["grey-450"]
  },
  colorModeWrapper: {
    position: "absolute",
    height: "100%",
    width: Dimensions.get("window").width / 2
  },
  darkModeWrapper: {
    right: 0,
    marginRight: contentPadding * -1,
    marginLeft: contentPadding * -1,
    backgroundColor: IOColors.black,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12
  },
  lightModeWrapper: {
    left: 0,
    marginRight: contentPadding * -1,
    marginLeft: contentPadding * -1,
    backgroundColor: IOColors.white,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12
  },
  gradientWrapper: {
    width: "50%",
    justifyContent: "flex-start",
    marginBottom: 16,
    paddingHorizontal: gradientItemGutter / 2
  },
  colorItem: {
    width: "100%",
    padding: colorItemPadding,
    borderRadius: 4,
    alignItems: "flex-end",
    borderWidth: 1
  },
  colorItemLightMode: {
    borderColor: colorItemBorderLightMode
  },
  colorItemDarkMode: {
    borderColor: colorItemBorderDarkMode
  },
  gradientItem: {
    aspectRatio: 2 / 1,
    borderRadius: 8,
    padding: 12,
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderColor: colorItemBorderLightMode,
    borderWidth: 1
  },
  colorPill: {
    overflow: "hidden",
    color: IOColors.white,
    fontSize: 9,
    backgroundColor: colorPillBg,
    padding: 4,
    borderRadius: 4
  }
});

const renderColorThemeGroup = (
  name: string,
  colorObjectLightMode: Record<string, string>,
  colorObjectDarkMode: Record<string, string>
) => {
  const colorArrayLightMode = Object.entries(colorObjectLightMode);
  const colorArrayDarkMode = Object.entries(colorObjectDarkMode);

  return (
    <View style={{ marginBottom: 40 }}>
      {name && <H3 style={{ marginBottom: sectionTitleMargin }}>{name}</H3>}
      {/* Show the two different columns
      with both light and dark modes */}
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.colorModeWrapper, styles.darkModeWrapper]} />
        <View style={[styles.colorModeWrapper, styles.lightModeWrapper]} />
        <View style={styles.colorItemsWrapper}>
          <View style={styles.colorWrapperBothModes}>
            <SmallCapsTitle title="Light mode" />
            <View style={{ flex: 1 }}>
              {Object.entries(colorObjectLightMode).map(
                ([name, colorValue], i) => {
                  const [, darkModeColorValue] = colorArrayDarkMode[i];
                  const lightModeColorValue = colorValue;
                  const isSameColorValue =
                    lightModeColorValue === darkModeColorValue;
                  return (
                    <View
                      key={`${name}-lightMode`}
                      style={
                        isSameColorValue && {
                          width:
                            Dimensions.get("window").width -
                            contentPadding -
                            colorItemGutter +
                            colorItemPadding
                        }
                      }
                    >
                      <ColorBox
                        mode={"light"}
                        name={name}
                        color={colorValue}
                        themeVariable
                      />
                    </View>
                  );
                }
              )}
            </View>
          </View>
          <View style={styles.colorWrapperBothModes}>
            <SmallCapsTitle title="Dark mode" darkMode />
            <View style={{ flex: 1 }}>
              {Object.entries(colorObjectDarkMode).map(
                ([name, colorValue], i) => {
                  const [, lightModeColorValue] = colorArrayLightMode[i];
                  const darkModeColorValue = colorValue;
                  const isSameColorValue =
                    lightModeColorValue === darkModeColorValue;

                  return (
                    <ColorBox
                      mode="dark"
                      key={`${name}-darkMode`}
                      name={name}
                      color={colorValue}
                      ghostMode={isSameColorValue}
                      themeVariable
                    />
                  );
                }
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const renderColorGroup = (
  name: string,
  colorObject: Record<string, ColorValue>
) => (
  <View style={{ marginBottom: 24 }}>
    {name && <H3 style={{ marginBottom: sectionTitleMargin }}>{name}</H3>}

    {Object.entries(colorObject).map(([name, colorValue]) => (
      <ColorBox key={name} name={name} color={colorValue} />
    ))}
  </View>
);

export const Colors = () => (
  <Screen>
    <H2
      style={{
        marginBottom: sectionTitleMargin,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Color scales
    </H2>
    {/* Neutrals */}
    {renderColorGroup("Neutrals", IOColorsNeutral)}
    {/* Tints */}
    {renderColorGroup("Main tints", IOColorsTints)}
    {/* Status */}
    {renderColorGroup("Status", IOColorsStatus)}
    {/* Extra */}
    {renderColorGroup("Extra", IOColorsExtra)}

    <H2 style={{ marginBottom: sectionTitleMargin }}>Theme</H2>

    {renderColorThemeGroup("Main", IOThemeLight, IOThemeDark)}

    {renderColorThemeGroup(
      "Status",
      themeStatusColorsLightMode,
      themeStatusColorsDarkMode
    )}

    {/* Gradients */}
    <H2 style={{ marginBottom: sectionTitleMargin }}>Gradients</H2>
    <View style={styles.gradientItemsWrapper}>
      {Object.entries(IOColorGradients).map(([name, colorValues]) => (
        <GradientBox key={name} name={name} colors={colorValues} />
      ))}
    </View>

    <VSpacer size={40} />
  </Screen>
);

type ColorBoxProps = {
  name: string;
  color: ColorValue;
  mode?: "light" | "dark";
  ghostMode?: boolean;
  themeVariable?: boolean;
};

const ColorBox = ({
  name,
  color,
  mode = "light",
  ghostMode,
  themeVariable
}: ColorBoxProps) => (
  <View style={[styles.colorWrapper, ghostMode && { opacity: 0 }]}>
    <View
      style={[
        styles.colorItem,
        mode === "dark" ? styles.colorItemDarkMode : styles.colorItemLightMode,
        themeVariable
          ? { backgroundColor: IOColors[color as IOColors] }
          : { backgroundColor: color }
      ]}
    >
      {color && <Text style={styles.colorPill}>{color.toString()}</Text>}
    </View>

    {name && (
      <LabelMini
        numberOfLines={1}
        color={mode === "dark" ? "grey-200" : "grey-700"}
        weight={"Regular"}
      >
        {name}
      </LabelMini>
    )}
  </View>
);

type GradientBoxProps = {
  name: string;
  colors: Array<string>;
};

const GradientBox = ({ name, colors }: GradientBoxProps) => {
  const [first, last] = colors;
  return (
    <View style={styles.gradientWrapper}>
      <LinearGradient
        colors={colors}
        useAngle={true}
        angle={180}
        style={styles.gradientItem}
      >
        {first && <Text style={styles.colorPill}>{first}</Text>}
        {last && <Text style={styles.colorPill}>{last}</Text>}
      </LinearGradient>
      {name && (
        <BodySmall weight="Regular" color="grey-700">
          {name}
        </BodySmall>
      )}
    </View>
  );
};

type SmallCapsTitleProps = {
  title: string;
  darkMode?: boolean;
};

const SmallCapsTitle = ({ title, darkMode }: SmallCapsTitleProps) => (
  <Text
    style={[
      styles.smallCapsTitle,
      darkMode ? styles.smallCapsDarkMode : styles.smallCapsLightMode
    ]}
  >
    {title}
  </Text>
);
