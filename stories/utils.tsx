import React from "react";
import { Decorator } from "@storybook/react";
import { IOThemeContext, IOThemes } from "../src/core";

export const withTheme: Decorator = (StoryFn, context) => {
  const themeContext =
    context.globals.backgrounds && context.globals.backgrounds.value === "dark"
      ? IOThemes.dark
      : IOThemes.light;

  // console.log("context", context);
  return (
    <IOThemeContext.Provider value={themeContext}>
      <StoryFn />
    </IOThemeContext.Provider>
  );
};

export const withMaxWitdth: Decorator = StoryFn => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        minWidth: "400px",
        maxWidth: "420px"
      }}
    >
      <StoryFn />
    </div>
  </div>
);
