import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconOption = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6c0-1.65685 1.34315-3 3-3s3 1.34315 3 3-1.34315 3-3 3-3-1.34315-3-3Zm3-5C3.23858 1 1 3.23858 1 6s2.23858 5 5 5 5-2.23858 5-5-2.23858-5-5-5Zm12.0009 12c.5491 0 .9991.4477 1 1v3h2.9999c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2.9999v3.0008c0 .5522-.4477 1-1 1s-1-.4478-1-1V19H14.002c-.5523 0-1-.4477-1-1s.4477-1 1-1h2.9989v-3c-.0009-.5523.4491-1 1-1ZM6 15c-1.65685 0-3 1.3431-3 3s1.34315 3 3 3 3-1.3431 3-3-1.34315-3-3-3Zm-5 3c0-2.7614 2.23858-5 5-5s5 2.2386 5 5-2.23858 5-5 5-5-2.2386-5-5ZM15 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3-1.3431 3-3 3-3-1.34315-3-3Zm3-5c-2.7614 0-5 2.23858-5 5s2.2386 5 5 5 5-2.23858 5-5-2.2386-5-5-5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconOption;
