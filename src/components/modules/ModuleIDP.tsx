import * as React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import {
  IOListItemLogoMargin,
  useIONewTypeface,
  useIOTheme,
  useIOThemeContext
} from "../../core";
import { addCacheTimestampToUri } from "../../utils/image";
import { IOText } from "../typography";
import {
  PressableModuleBase,
  PressableModuleBaseProps
} from "./PressableModuleBase";

type IDPLogoSource = {
  local: ImageSourcePropType;
  url: ImageSourcePropType;
};

type IDPLogoColorMode = {
  light: IDPLogoSource;
  dark?: IDPLogoSource;
};
interface ModuleIDP extends PressableModuleBaseProps {
  name: string;
  logo: IDPLogoColorMode;
  accessibilityLabel?: string;
}

const styles = StyleSheet.create({
  idpLogo: {
    marginStart: IOListItemLogoMargin,
    width: 120,
    height: 30,
    resizeMode: "contain"
  }
});

const useIDPLogo = (logo: IDPLogoColorMode): ImageSourcePropType => {
  const { themeType } = useIOThemeContext();

  const {
    light: { url: urlLogoLightMode, local: localLogoLightMode }
  } = logo;

  const logoIDPLightMode =
    localLogoLightMode ?? addCacheTimestampToUri(urlLogoLightMode);

  if (!logo.dark) {
    return logoIDPLightMode;
  }

  const {
    dark: { url: urlLogoDarkMode, local: localLogoDarkMode }
  } = logo;

  const logoIDPDarkMode =
    localLogoDarkMode ?? addCacheTimestampToUri(urlLogoDarkMode);

  return themeType === "dark" ? logoIDPDarkMode : logoIDPLightMode;
};

export const ModuleIDP = ({
  name,
  logo,
  withLooseSpacing = false,
  onPress,
  testID,
  accessibilityLabel
}: ModuleIDP) => {
  const { newTypefaceEnabled } = useIONewTypeface();
  const theme = useIOTheme();
  const IDPLogoSource = useIDPLogo(logo);

  return (
    <PressableModuleBase
      onPress={onPress}
      testID={testID}
      withLooseSpacing={withLooseSpacing}
    >
      <IOText
        font={newTypefaceEnabled ? "Titillio" : "TitilliumSansPro"}
        weight={"Semibold"}
        size={12}
        lineHeight={16}
        color={theme["textBody-tertiary"]}
        textStyle={{
          alignSelf: "center",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          flexShrink: 1
        }}
        accessibilityLabel={accessibilityLabel ?? name}
      >
        {name}
      </IOText>
      <Image
        accessibilityIgnoresInvertColors
        source={IDPLogoSource}
        style={styles.idpLogo}
      />
    </PressableModuleBase>
  );
};

export default ModuleIDP;
