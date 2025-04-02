import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconMessage = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 0C2.23858 0 0 2.23858 0 5v10c0 2.7614 2.23858 5 5 5h2.17157c.26522 0 .51957.1054.70711.2929l2.65842 2.6584c.8181.8181 2.1575.7735 2.9193-.0972l2.1986-2.5126A.99985.99985 0 0 1 16.4075 20H19c2.7614 0 5-2.2386 5-5V5c0-2.76142-2.2386-5-5-5H5ZM2 5c0-1.65685 1.34315-3 3-3h14c1.6569 0 3 1.34315 3 3v10c0 1.6569-1.3431 3-3 3h-2.5925c-.8651 0-1.688.3734-2.2577 1.0245l-2.1985 2.5126-2.65841-2.6584A3.00006 3.00006 0 0 0 7.17157 18H5c-1.65685 0-3-1.3431-3-3V5Zm4 8c-.55228 0-1 .4477-1 1s.44772 1 1 1h6.0269c.5523 0 1-.4477 1-1s-.4477-1-1-1H6ZM5 5.99808C5 5.44686 5.44686 5 5.99808 5H18.0019c.5512 0 .9981.44686.9981.99808 0 .55123-.4469.99808-.9981.99808H5.99808C5.44686 6.99616 5 6.54931 5 5.99808ZM5.99808 9C5.44686 9 5 9.44686 5 9.99808s.44686.99812.99808.99812H18.0019c.5512 0 .9981-.4469.9981-.99812S18.5531 9 18.0019 9H5.99808Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconMessage;
