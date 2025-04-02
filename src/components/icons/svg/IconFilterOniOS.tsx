import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconFilterOniOS = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55229 5.44772 10 6 10H18C18.5523 10 19 9.55229 19 9C19 8.44772 18.5523 8 18 8H6ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM10 16C9.44771 16 9 16.4477 9 17C9 17.5523 9.44771 18 10 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H10Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconFilterOniOS;
