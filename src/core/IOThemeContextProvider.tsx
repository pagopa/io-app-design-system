import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import {
  IOTheme,
  IOThemeDark,
  IOThemeLight,
  IOThemeLightLegacy
} from "./IOColors";
import { useIOExperimentalDesign } from "./IODSExperimentalContextProvider";

export const IOThemes = { light: IOThemeLight, dark: IOThemeDark };
export const legacyIOThemes = { light: IOThemeLightLegacy, dark: IOThemeDark };
// type IOThemeType = keyof typeof IOThemes | null;

type IOThemeContextType = {
  themeType: ColorSchemeName;
  theme: IOTheme;
  setTheme: (theme: ColorSchemeName) => void;
};

export const IOThemeContext: React.Context<IOThemeContextType> =
  createContext<IOThemeContextType>({
    themeType: Appearance.getColorScheme(),
    theme:
      Appearance.getColorScheme() === "dark" ? IOThemes.dark : IOThemes.light,
    setTheme: (theme: ColorSchemeName) => Appearance.setColorScheme(theme)
  });

export const useIOThemeContext = () => useContext(IOThemeContext);

export const useIOTheme = () => useIOThemeContext().theme;

type IOThemeContextProviderProps = {
  theme?: ColorSchemeName;
};

export const IOThemeContextProvider = ({
  children,
  theme
}: PropsWithChildren<IOThemeContextProviderProps>) => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName>(
    theme ?? Appearance.getColorScheme()
  );
  const { isExperimental } = useIOExperimentalDesign();

  const handleThemeChange = useCallback((newTheme: ColorSchemeName) => {
    setCurrentTheme(newTheme);
    Appearance.setColorScheme(newTheme);
  }, []);

  const themeMap = useMemo(
    () => (isExperimental ? IOThemes : legacyIOThemes),
    [isExperimental]
  );

  return (
    <IOThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: themeMap[currentTheme ?? "light"],
        setTheme: handleThemeChange
      }}
    >
      {children}
    </IOThemeContext.Provider>
  );
};
