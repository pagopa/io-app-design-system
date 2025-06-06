import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconEyeHide = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.707.293A1 1 0 0 0 .293 1.707l4.483 4.484A13.063 13.063 0 0 0 .63 10.696a2.686 2.686 0 0 0 0 2.609A12.997 12.997 0 0 0 12 20c1.931 0 3.763-.42 5.41-1.176l4.883 4.883a1 1 0 0 0 1.414-1.414l-22-22Zm19.099 16.27c1.02-.939 1.888-2.039 2.566-3.259.45-.812.45-1.797 0-2.609A12.997 12.997 0 0 0 12.001 4c-1.15 0-2.266.15-3.329.43l1.691 1.691a10.997 10.997 0 0 1 11.26 5.545.686.686 0 0 1 0 .667 11.05 11.05 0 0 1-2.233 2.815l1.416 1.416Zm-3.856-3.855a5 5 0 0 0-5.658-5.658l2.804 2.803.05.051 2.804 2.804Zm-14.573-1.04a11.055 11.055 0 0 1 3.846-4.03l1.605 1.605a5 5 0 0 0 6.929 6.929l1.125 1.124A10.977 10.977 0 0 1 12 18a10.997 10.997 0 0 1-9.623-5.666.686.686 0 0 1 0-.667ZM9 12c0-.463.105-.902.292-1.293l4.001 4A3 3 0 0 1 9 12Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconEyeHide;
