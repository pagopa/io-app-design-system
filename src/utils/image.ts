import { ImageURISource, Platform } from "react-native";

/**
 * Adds a locale timestamp to the image URI to invalidate cache on the following day if the current platform is Android.
 * Useful to bypass React Native Image component aggressive cache on Android.
 * @param source - the source of the image.
 * @returns a new source with a modified URI which includes the actual timestamp in the locale format without slashes
 * if the platform is Android and the source contains an URI. The same source otherwise.
 */
export const addCacheTimestampToUri = (source: ImageURISource) => {
  if (source === undefined) {
    return undefined;
  }

  if (Platform.OS === "android" && source.uri) {
    const date = new Date();
    const cacheBurstParam = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    return source.uri
      ? {
          ...source,
          uri: `${source.uri}?ts=${cacheBurstParam}`
        }
      : source;
  }

  return source;
};
