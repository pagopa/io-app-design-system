// A component to provide organization logo
import * as React from "react";
import {
  ImageRequireSource,
  ImageURISource,
  StyleSheet,
  View
} from "react-native";
import {
  IOColors,
  IOSpacingScale,
  IOThemeContext,
  IOVisualCostants,
  hexToRgba
} from "../../core";
import { Icon } from "../../components/icons";
import { MultiImage } from "./MultiImage";

type Avatar = {
  shape: "circle" | "square";
  size: "small" | "medium";
  logoUri?: ReadonlyArray<ImageURISource | ImageRequireSource>;
};

const avatarBorderLightMode = hexToRgba(IOColors.black, 0.1);
const internalSpaceDefaultSize: number = 6;
const internalSpaceLargeSize: number = 9;
const radiusDefaultSize: number = 8;
const internalSpacePlaceholderDefaultSize: IOSpacingScale = 12;
const internalSpacePlaceholderLargeSize: IOSpacingScale = 16;

const dimensionsMap = {
  small: {
    size: IOVisualCostants.avatarSizeSmall,
    internalSpace: internalSpaceDefaultSize,
    internalSpacePlaceholder: internalSpacePlaceholderDefaultSize,
    radius: radiusDefaultSize
  },
  medium: {
    size: IOVisualCostants.avatarSizeMedium,
    internalSpace: internalSpaceLargeSize,
    internalSpacePlaceholder: internalSpacePlaceholderLargeSize,
    radius: radiusDefaultSize
  }
};

const getAvatarCircleShape = (size: Avatar["size"]) =>
  dimensionsMap[size].size / 2;

const styles = StyleSheet.create({
  avatarWrapper: {
    overflow: "hidden",
    resizeMode: "contain",
    borderColor: avatarBorderLightMode,
    borderWidth: 1
  },
  avatarImage: {
    height: "100%",
    width: "100%"
  }
});

export const Avatar = ({ logoUri, shape, size }: Avatar) => {
  const theme = React.useContext(IOThemeContext);
  const isPlaceholder = !logoUri;

  return (
    <View
      style={[
        styles.avatarWrapper,
        {
          height: dimensionsMap[size].size,
          width: dimensionsMap[size].size,
          borderRadius:
            shape === "circle"
              ? getAvatarCircleShape(size)
              : dimensionsMap[size].radius,
          backgroundColor: isPlaceholder ? IOColors["grey-50"] : IOColors.white,
          padding: isPlaceholder
            ? dimensionsMap[size].internalSpacePlaceholder
            : dimensionsMap[size].internalSpace
        }
      ]}
    >
      {isPlaceholder ? (
        <Icon
          name="institution"
          color={theme["icon-decorative"]}
          size={"100%"}
        />
      ) : (
        <MultiImage style={styles.avatarImage} source={logoUri} />
      )}
    </View>
  );
};
