import * as React from "react";
import { Image, ImageURISource, StyleSheet, View } from "react-native";
import { Icon } from "../../components/icons";
import {
  IOColors,
  IOSpacingScale,
  IOVisualCostants,
  hexToRgba,
  useIOTheme
} from "../../core";
import { addCacheTimestampToUri } from "../../utils/image";

type Avatar = {
  imageSource?: ImageURISource | ReadonlyArray<ImageURISource>;
  /**
   * @deprecated Only `square` shape variant accepted
   */
  shape?: "circle" | "square";
  size: "small" | "medium";
  logoUri?: ImageURISource | ReadonlyArray<ImageURISource>;
};

const internalSpaceDefaultSize: number = 6;
const internalSpaceLargeSize: number = 9;
const internalSpacePlaceholderDefaultSize: IOSpacingScale = 12;
const internalSpacePlaceholderLargeSize: IOSpacingScale = 16;
const avatarBorderLightMode = hexToRgba(IOColors.black, 0.1);

const dimensionsMap = {
  small: {
    size: IOVisualCostants.avatarSizeSmall,
    internalSpace: internalSpaceDefaultSize,
    internalSpacePlaceholder: internalSpacePlaceholderDefaultSize,
    radius: IOVisualCostants.avatarRadius
  },
  medium: {
    size: IOVisualCostants.avatarSizeMedium,
    internalSpace: internalSpaceLargeSize,
    internalSpacePlaceholder: internalSpacePlaceholderLargeSize,
    radius: IOVisualCostants.avatarRadius
  }
};

const styles = StyleSheet.create({
  avatarWrapper: {
    overflow: "hidden",
    borderColor: avatarBorderLightMode,
    borderWidth: 1,
    borderCurve: "continuous"
  },
  avatarInnerWrapper: {
    overflow: "hidden",
    resizeMode: "contain",
    backgroundColor: IOColors.white,
    borderCurve: "continuous"
  },
  avatarImage: {
    height: "100%",
    width: "100%"
  }
});

/**
 * Avatar component is used to display the logo of an organization. It accepts the following props:
 * - `logoUri`: the uri of the image to display. If not provided, a placeholder icon will be displayed. It can be a single uri or an array of uris, in which case the first one that is available will be used.
 * - `shape`: the shape of the avatar, can be "circle" or "square"
 * - `size`: the size of the avatar, can be "small" or "medium"
 * @param AvatarProps
 * @returns
 */
export const Avatar = ({ logoUri, size }: Avatar) => {
  const theme = useIOTheme();
  const indexValue = React.useRef<number>(0);

  const [imageSource, setImageSource] = React.useState(
    logoUri === undefined
      ? undefined
      : Array.isArray(logoUri)
      ? addCacheTimestampToUri(logoUri[0])
      : addCacheTimestampToUri(logoUri as ImageURISource)
  );

  const onError = () => {
    if (Array.isArray(logoUri) && indexValue.current + 1 < logoUri.length) {
      // eslint-disable-next-line functional/immutable-data
      indexValue.current = indexValue.current + 1;
      setImageSource(addCacheTimestampToUri(logoUri[indexValue.current]));
      return;
    }
    setImageSource(undefined);
  };

  return (
    <View
      style={[
        styles.avatarWrapper,
        {
          height: dimensionsMap[size].size,
          width: dimensionsMap[size].size,
          borderRadius: dimensionsMap[size].radius,
          backgroundColor:
            imageSource === undefined ? IOColors["grey-50"] : IOColors.white,
          padding:
            imageSource === undefined
              ? dimensionsMap[size].internalSpacePlaceholder
              : dimensionsMap[size].internalSpace
        }
      ]}
    >
      {imageSource === undefined ? (
        <Icon
          name="institution"
          color={theme["icon-decorative"]}
          size={"100%"}
        />
      ) : (
        <View
          style={[
            styles.avatarInnerWrapper,
            {
              borderRadius:
                dimensionsMap[size].radius - dimensionsMap[size].internalSpace
            }
          ]}
        >
          <Image
            source={imageSource}
            style={styles.avatarImage}
            onError={onError}
          />
        </View>
      )}
    </View>
  );
};
