import {
  Context,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { IOTheme, IOThemeDark, IOThemeLight } from "../core/IOColors";

export type IOThemeType =
  | Exclude<ColorSchemeName, "unspecified">
  | null
  | undefined;

export const IOThemes = {
  light: IOThemeLight,
  dark: IOThemeDark
};

type IOThemeContextType = {
  themeType: IOThemeType;
  theme: IOTheme;
  setTheme: (theme: IOThemeType) => void;
};

export const IOThemeContext: Context<IOThemeContextType> =
  createContext<IOThemeContextType>({
    themeType:
      Appearance.getColorScheme() === "unspecified"
        ? null
        : (Appearance.getColorScheme() as IOThemeType),
    theme:
      Appearance.getColorScheme() === "dark" ? IOThemes.dark : IOThemes.light,
    setTheme: () => void 0
  });

export const useIOThemeContext = () => useContext(IOThemeContext);

export const useIOTheme = () => useIOThemeContext().theme;

type IOThemeContextProviderProps = {
  theme?: IOThemeType;
};

export const IOThemeContextProvider = ({
  children,
  theme
}: PropsWithChildren<IOThemeContextProviderProps>) => {
  const [currentTheme, setCurrentTheme] = useState<IOThemeType>(
    theme ??
      (Appearance.getColorScheme() === "unspecified"
        ? null
        : (Appearance.getColorScheme() as IOThemeType))
  );

  const handleThemeChange = useCallback((newTheme: IOThemeType) => {
    setCurrentTheme(newTheme);
  }, []);

  return (
    <IOThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: IOThemes[currentTheme ?? "light"],
        setTheme: handleThemeChange
      }}
    >
      {children}
    </IOThemeContext.Provider>
  );
};
