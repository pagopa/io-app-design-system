import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconPause = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" style={style} {...props}>
    <Path
      d="M0 2C0 .895431.895431 0 2 0h2c1.10457 0 2 .895431 2 2v12c0 1.1046-.89543 2-2 2H2c-1.10457 0-2-.8954-2-2V2Z"
      fill="currentColor"
    />
    <Path
      d="M10 2c0-1.104569.8954-2 2-2h2c1.1046 0 2 .895431 2 2v12c0 1.1046-.8954 2-2 2h-2c-1.1046 0-2-.8954-2-2V2Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconPause;
