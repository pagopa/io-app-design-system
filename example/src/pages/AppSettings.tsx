import {
  Body,
  IOVisualCostants,
  ListItemHeader,
  ListItemRadio,
  useIOThemeContext,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { ScrollView, useColorScheme } from "react-native";

export const AppSettings = () => {
  const { setTheme, themeType, themePreference } = useIOThemeContext();
  const systemColorScheme = useColorScheme();

  const handleThemeChange = (preference: "auto" | "light" | "dark") => {
    if (preference === "auto") {
      setTheme(null);
    } else {
      setTheme(preference);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      scrollEventThrottle={8}
    >
      <ListItemHeader label="Theme Appearance" />
      <ListItemRadio
        value="Automatic"
        selected={themePreference === undefined}
        onValueChange={() => handleThemeChange("auto")}
      />
      <ListItemRadio
        value="Dark"
        selected={themePreference === "dark"}
        onValueChange={() => handleThemeChange("dark")}
      />
      <ListItemRadio
        value="Light"
        selected={themePreference === "light"}
        onValueChange={() => handleThemeChange("light")}
      />
      <VSpacer />
      <Body>Current theme: {themeType || "light"}</Body>
      <Body>System theme: {systemColorScheme || "light"}</Body>
      <VSpacer size={24} />
    </ScrollView>
  );
};
