import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconTrashcan = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.17071 4h7.65859C15.4175 2.83481 14.3062 2 13 2h-2c-1.30622 0-2.41746.83481-2.82929 2ZM17.9 4c-.4633-2.28224-2.481-4-4.9-4h-2C8.58104 0 6.56329 1.71776 6.10002 4H3c-.55228 0-1 .44772-1 1s.44772 1 1 1h18c.5523 0 1-.44772 1-1s-.4477-1-1-1h-3.1ZM6 9c0-.55228-.44772-1-1-1s-1 .44772-1 1v10c0 2.7614 2.23858 5 5 5h6c2.7614 0 5-2.2386 5-5V9c0-.55228-.4477-1-1-1s-1 .44772-1 1v10c0 1.6569-1.3431 3-3 3H9c-1.65685 0-3-1.3431-3-3V9Zm5 2c0-.5523-.4477-1-1-1-.55228 0-1 .4477-1 1v7c0 .5523.44772 1 1 1 .5523 0 1-.4477 1-1v-7Zm3-1c.5523 0 1 .4477 1 1v7c0 .5523-.4477 1-1 1s-1-.4477-1-1v-7c0-.5523.4477-1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconTrashcan;
