import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from "react";
import { Appearance, ColorSchemeName, useColorScheme } from "react-native";
import { IOTheme, IOThemeDark, IOThemeLight } from "../core/IOColors";

export const IOThemes = { light: IOThemeLight, dark: IOThemeDark };

type IOThemeContextType = {
  themeType: ColorSchemeName;
  theme: IOTheme;
  themePreference: ColorSchemeName;
  setTheme: (theme: ColorSchemeName | null) => void;
};

export const IOThemeContext: React.Context<IOThemeContextType> =
  createContext<IOThemeContextType>({
    themeType: Appearance.getColorScheme(),
    theme:
      Appearance.getColorScheme() === "dark" ? IOThemes.dark : IOThemes.light,
    themePreference: undefined,
    setTheme: () => void 0
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
  const systemColorScheme = useColorScheme();

  const [themePreference, setThemePreference] =
    useState<ColorSchemeName>(theme);

  const resolvedTheme = themePreference ?? systemColorScheme ?? "light";

  const handleThemeChange = useCallback((newTheme: ColorSchemeName) => {
    setThemePreference(newTheme ?? undefined);
  }, []);

  return (
    <IOThemeContext.Provider
      value={{
        themeType: resolvedTheme,
        theme: IOThemes[resolvedTheme],
        themePreference,
        setTheme: handleThemeChange
      }}
    >
      {children}
    </IOThemeContext.Provider>
  );
};
