import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore (ignore Path unused component)
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

export const IconTemplate = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    {/* SVGContent */}
  </Svg>
);
