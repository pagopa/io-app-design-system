import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconChevronLeft = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.7071 5.29289c-.3905-.39052-1.0237-.39052-1.4142 0L8.29289 11.2929c-.39052.3905-.39052 1.0237 0 1.4142l6.00001 6c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L10.4142 12l5.2929-5.29289c.3905-.39053.3905-1.02369 0-1.41422Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconChevronLeft;
