import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCategCulture = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M9.123 20.033c0 .646-.526 1.172-1.172 1.172a1.174 1.174 0 0 1-1.171-1.172c0-.645.526-1.172 1.171-1.172.646 0 1.172.527 1.172 1.172ZM23.291 12a6.998 6.998 0 0 1-8.097 6.902v2.716A2.385 2.385 0 0 1 12.81 24h-9.72A2.385 2.385 0 0 1 .71 21.618V2.382A2.385 2.385 0 0 1 3.092 0h9.72a2.385 2.385 0 0 1 2.382 2.382v2.716A6.998 6.998 0 0 1 23.29 12ZM5.276 1.5l.224.69h4.903l.224-.69H5.276Zm8.418 16.986A7.001 7.001 0 0 1 9.31 12a7.001 7.001 0 0 1 4.384-6.486V2.382a.883.883 0 0 0-.883-.882h-.607l-.543 1.672a.75.75 0 0 1-.713.519H4.955a.75.75 0 0 1-.713-.519L3.698 1.5h-.606a.883.883 0 0 0-.883.882v19.236c0 .486.396.882.883.882h9.72a.883.883 0 0 0 .882-.882v-3.132ZM21.79 12a5.496 5.496 0 0 0-5.49-5.49A5.496 5.496 0 0 0 10.81 12a5.496 5.496 0 0 0 5.49 5.49A5.496 5.496 0 0 0 21.79 12Z"
      fill="currentColor"
    />
    <Path d="M10.595 11.25h11.41v1.5h-11.41v-1.5Z" fill="currentColor" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m17.635 7.12.007-.004a7.037 7.037 0 0 0-1.241-1.013A6.995 6.995 0 0 0 13.174 12a6.995 6.995 0 0 0 3.227 5.897c.452-.29.868-.63 1.241-1.013a.155.155 0 0 1-.007-.004A6.977 6.977 0 0 0 19.616 12c0-1.898-.755-3.62-1.981-4.88Zm-1.24.884A5.485 5.485 0 0 0 14.675 12c0 1.574.66 2.994 1.72 3.996A5.485 5.485 0 0 0 18.116 12a5.485 5.485 0 0 0-1.72-3.996Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCategCulture;
