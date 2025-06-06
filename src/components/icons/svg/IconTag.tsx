import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconTag = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.8287 1.41417A4.99995 4.99995 0 0 0 9.29318-.05029H5.05054c-2.76143 0-5 2.23857-5 5v4.24264A5.00013 5.00013 0 0 0 1.515 12.7279l9.6066 9.6066c1.9526 1.9526 5.1185 1.9526 7.0711 0l4.2426-4.2427c1.9526-1.9526 1.9526-5.1184 0-7.071l-9.6066-9.60663Zm-3.53552.53554a3.00003 3.00003 0 0 1 2.12132.87868l9.6066 9.60661c1.1716 1.1716 1.1716 3.0711 0 4.2426l-4.2426 4.2427c-1.1716 1.1715-3.0711 1.1715-4.2427 0l-9.60658-9.6066a3.00005 3.00005 0 0 1-.87868-2.12135V4.94971c0-1.65686 1.34314-3 3-3h4.24264Zm-1.2932 4.05028c0 1.10457-.89543 2-2 2s-2-.89543-2-2 .89543-2 2-2 2 .89543 2 2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconTag;
