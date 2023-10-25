// A component to provide organization logo
import * as React from "react";
import { Image, ImageURISource, StyleSheet, View } from "react-native";
import {
  IOColors,
  IOThemeContext,
  IOVisualCostants,
  hexToRgba
} from "../../core";
import { addCacheTimestampToUri } from "../../utils/image";
import { Icon } from "../icons";

type Avatar = {
  shape: "circle" | "square";
  size: "small" | "medium";
  logoUri?: ImageURISource;
};

const avatarBorderLightMode = hexToRgba(IOColors.black, 0.1);
const internalSpaceDefaultSize: number = 6;
const internalSpaceLargeSize: number = 9;
const radiusDefaultSize: number = 8;

const dimensionsMap = {
  small: {
    size: IOVisualCostants.avatarSizeSmall,
    internalSpace: internalSpaceDefaultSize,
    radius: radiusDefaultSize
  },
  medium: {
    size: IOVisualCostants.avatarSizeMedium,
    internalSpace: internalSpaceLargeSize,
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
    borderWidth: 1,
    backgroundColor: IOColors.white
  },
  avatarImage: {
    height: "100%",
    width: "100%"
  }
});

export const Avatar = ({ logoUri, shape, size }: Avatar) => {
  const theme = React.useContext(IOThemeContext);
  const [imageSource, setImageSource] = React.useState(
    logoUri ? addCacheTimestampToUri(logoUri) : undefined
  );

  const onError = () => {
    setImageSource(_ => undefined);
  };

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
          padding: dimensionsMap[size].internalSpace
        }
      ]}
    >
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.avatarImage}
          onError={onError}
        />
      ) : (
        <Icon name="placeholder" color={theme["icon-default"]} size="100%" />
      )}
    </View>
  );
};
