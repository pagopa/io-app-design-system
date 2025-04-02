import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCategJobOffers = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 3C8.5 2.44772 8.94772 2 9.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V4H8.5V3ZM6.5 4L5 4C2.23858 4 0 6.23858 0 9V12V14V19C0 21.7614 2.23858 24 5 24H19C21.7614 24 24 21.7614 24 19V14V12V9C24 6.23858 21.7614 4 19 4L17.5 4V3C17.5 1.34315 16.1569 0 14.5 0H9.5C7.84315 0 6.5 1.34315 6.5 3V4ZM2 14L2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V14H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V14H2ZM22 12V9C22 7.34315 20.6569 6 19 6L5 6C3.34315 6 2 7.34315 2 9L2 12H22Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCategJobOffers;
