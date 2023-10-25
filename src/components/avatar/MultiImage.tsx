import { Omit } from "@pagopa/ts-commons/lib/types";
import React, { useState } from "react";
import {
  Image,
  ImageProps,
  ImageRequireSource,
  ImageURISource
} from "react-native";
import { addCacheTimestampToUri } from "../../utils/image";

interface Props extends Omit<ImageProps, "source"> {
  source: ReadonlyArray<ImageURISource | ImageRequireSource>;
}

export type MultiImageProps = Props;
/**
 * An image component that attempts to load the provided images
 * until one is available.
 *
 * Usually you want to provide a local image as last one to make sure
 * there is always an image that can be displayed.
 */
export const MultiImage = (props: MultiImageProps) => {
  // eslint-disable-next-line functional/no-let
  const [sourceIndex, setSourceIndex] = useState(
    props.source.length > 0 ? 0 : undefined
  );

  const onError = () => {
    // if current image fails loading, move to next
    setSourceIndex(prevIndex =>
      prevIndex !== undefined && prevIndex < props.source.length - 1
        ? prevIndex + 1
        : undefined
    );
  };

  if (sourceIndex === undefined) {
    return null;
  }

  const atIndex = props.source[sourceIndex];

  const source =
    typeof atIndex === "number" ? atIndex : addCacheTimestampToUri(atIndex);

  return <Image {...props} source={source} onError={onError} />;
};
