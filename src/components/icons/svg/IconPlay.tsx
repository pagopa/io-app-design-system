import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconPlay = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" style={style} {...props}>
    <Path
      d="M0 12.8513V3.14895C0 .638117 3.23654-.859495 5.65284.533264l8.72806 5.030866c2.2027 1.26965 2.1479 4.08388-.1031 5.28867L5.54977 15.5243C3.12752 16.8208 0 15.3144 0 12.8513Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconPlay;
