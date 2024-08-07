import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text
} from "react-native";
import {
  IOColors,
  IOListItemLogoMargin,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { toAndroidCacheTimestamp } from "../../utils/dates";
import { makeFontStyleObject } from "../../utils/fonts";
import {
  PressableModuleBase,
  PressableModuleBaseProps
} from "./PressableModuleBase";

interface ModuleIDP extends PressableModuleBaseProps {
  name: string;
  localLogo: ImageSourcePropType;
  logo: ImageSourcePropType;
  accessibilityLabel?: string;
}

const styles = StyleSheet.create({
  idpName: {
    fontSize: 12,
    lineHeight: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    flexShrink: 1
  },
  idpNameFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  idpLegacyNameFont: {
    ...makeFontStyleObject("Semibold", false, "TitilliumSansPro")
  },
  idpLogo: {
    marginStart: IOListItemLogoMargin,
    width: 120,
    height: 30,
    resizeMode: "contain"
  }
});

// https://github.com/facebook/react-native/issues/12606
// Image cache forced refresh for Android by appending
// the `ts` query parameter as DDMMYYYY to simulate a 24h TTL.
const androidIdpLogoForcedRefreshed = () =>
  Platform.OS === "android" ? `?ts=${toAndroidCacheTimestamp()}` : "";

export const ModuleIDP = ({
  name,
  localLogo,
  logo,
  withLooseSpacing = false,
  onPress,
  testID,
  accessibilityLabel
}: ModuleIDP) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();

  // eslint-disable-next-line no-console
  const urlLogoIDP = localLogo
    ? localLogo
    : {
        uri: `${logo}${androidIdpLogoForcedRefreshed()}`
      };
  return (
    <PressableModuleBase
      onPress={onPress}
      testID={testID}
      withLooseSpacing={withLooseSpacing}
    >
      <Text
        allowFontScaling={isExperimental}
        maxFontSizeMultiplier={IOVisualCostants.maxFontSizeMultiplier}
        style={[
          styles.idpName,
          { color: IOColors[theme["textBody-tertiary"]] },
          isExperimental ? styles.idpNameFont : styles.idpLegacyNameFont
        ]}
        accessibilityLabel={accessibilityLabel ?? name}
      >
        {name}
      </Text>
      <Image
        accessibilityIgnoresInvertColors
        source={urlLogoIDP}
        style={styles.idpLogo}
      />
    </PressableModuleBase>
  );
};

export default ModuleIDP;
