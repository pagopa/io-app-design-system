import * as React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { addCacheTimestampToUri } from "../../utils/image";
import {
  IOListItemLogoMargin,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { IOText } from "../typography";
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
  idpLogo: {
    marginStart: IOListItemLogoMargin,
    width: 120,
    height: 30,
    resizeMode: "contain"
  }
});

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
  const urlLogoIDP = localLogo ? localLogo : addCacheTimestampToUri(logo);

  return (
    <PressableModuleBase
      onPress={onPress}
      testID={testID}
      withLooseSpacing={withLooseSpacing}
    >
      <IOText
        font={isExperimental ? "ReadexPro" : "TitilliumSansPro"}
        weight={isExperimental ? "Regular" : "Semibold"}
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
        source={urlLogoIDP}
        style={styles.idpLogo}
      />
    </PressableModuleBase>
  );
};

export default ModuleIDP;
