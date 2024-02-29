import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCompare = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0567 1.97175C13.0567 1.40396 12.5959 0.943665 12.0281 0.943665C11.4603 0.943665 11 1.40396 11 1.97175V3H7C4.23858 3 2 5.23858 2 8V18C2 20.7614 4.23858 23 7 23H11V23.9763C11 24.5441 11.4608 25.0044 12.0286 25.0044C12.5964 25.0044 13.0567 24.5441 13.0567 23.9763V23H17C19.7614 23 22 20.7614 22 18V8C22 5.23858 19.7614 3 17 3H13.0567V1.97175ZM11 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H11V5ZM13.0567 21V5H17C18.6569 5 20 6.34315 20 8V18C20 19.6569 18.6569 21 17 21H13.0567Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCompare;
