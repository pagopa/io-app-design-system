import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCalendar = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 0c.55228 0 1 .44771 1 1v1h8V1c0-.55229.4477-1 1-1s1 .44771 1 1v1h1c2.7614 0 5 2.23858 5 5v11c0 2.7614-2.2386 5-5 5H5c-2.76142 0-5-2.2386-5-5V7c0-2.76142 2.23858-5 5-5h1V1c0-.55229.44772-1 1-1Zm9 4v1c0 .55228.4477 1 1 1s1-.44772 1-1V4h1c1.6569 0 3 1.34315 3 3v1H2V7c0-1.65685 1.34315-3 3-3h1v1c0 .55228.44772 1 1 1s1-.44772 1-1V4h8Zm6 6H2v8c0 1.6569 1.34315 3 3 3h14c1.6569 0 3-1.3431 3-3v-8Zm-4 9c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCalendar;
