import React from "react";
import { Appearance } from "react-native";
import { IOTheme, IOThemeDark, IOThemeLight } from "./IOColors";

export const IOThemes = { light: IOThemeLight, dark: IOThemeDark };
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
    setTheme: () => void 0
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

  return (
    <IOThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: IOThemes[currentTheme],
        setTheme: setCurrentTheme
      }}
    >
      {children}
    </IOThemeContext.Provider>
  );
};
