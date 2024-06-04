import { constVoid } from "fp-ts/function";
import React, { useMemo } from "react";
import { Appearance } from "react-native";
import {
  IOTheme,
  IOThemeDark,
  IOThemeLight,
  IOThemeLightLegacy
} from "./IOColors";
import { useIOExperimentalDesign } from "./IODSExperimentalContextProvider";

export const IOThemes = { light: IOThemeLight, dark: IOThemeDark };
export const legacyIOThemes = { light: IOThemeLightLegacy, dark: IOThemeDark };
type IOThemeType = keyof typeof IOThemes;

type IOThemeContextType = {
  themeType: IOThemeType;
  theme: IOTheme;
  setTheme: (theme: IOThemeType) => void;
};

export const IOThemeContext: React.Context<IOThemeContextType> =
  React.createContext<IOThemeContextType>({
    themeType: Appearance.getColorScheme() === "dark" ? "dark" : "light",
    theme:
      Appearance.getColorScheme() === "dark" ? IOThemes.dark : IOThemes.light,
    setTheme: constVoid
  });

export const useIOThemeContext = () => React.useContext(IOThemeContext);

export const useIOTheme = () => useIOThemeContext().theme;

type IOThemeContextProviderProps = {
  theme?: IOThemeType;
};

export const IOThemeContextProvider = ({
  children,
  theme
}: React.PropsWithChildren<IOThemeContextProviderProps>) => {
  const [currentTheme, setCurrentTheme] = React.useState<IOThemeType>(
    theme ?? "light"
  );
  const { isExperimental } = useIOExperimentalDesign();

  const themeMap = useMemo(
    () => (isExperimental ? IOThemes : legacyIOThemes),
    [isExperimental]
  );

  return (
    <IOThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: themeMap[currentTheme],
        setTheme: setCurrentTheme
      }}
    >
      {children}
    </IOThemeContext.Provider>
  );
};
