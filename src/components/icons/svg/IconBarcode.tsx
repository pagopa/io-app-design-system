import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconBarcode = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 2c-.55229 0-1 .44772-1 1v14c0 .5523.44771 1 1 1h1c.55228 0 1-.4477 1-1V3c0-.55228-.44772-1-1-1H1Zm21 0c-.5523 0-1 .44772-1 1v14c0 .5523.4477 1 1 1h1c.5523 0 1-.4477 1-1V3c0-.55228-.4477-1-1-1h-1ZM0 21c0-.5523.44771-1 1-1h1c.55228 0 1 .4477 1 1s-.44772 1-1 1H1c-.55229 0-1-.4477-1-1Zm22-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1ZM9 3c0-.55228.44772-1 1-1h1c.5523 0 1 .44772 1 1v14c0 .5523-.4477 1-1 1h-1c-.55229 0-1-.4477-1-1V3Zm1 17c-.55228 0-1 .4477-1 1s.44771 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1ZM5 3c0-.55228.44772-1 1-1s1 .44772 1 1v14c0 .5523-.44772 1-1 1s-1-.4477-1-1V3Zm10-1c-.5523 0-1 .44772-1 1v14c0 .5523.4477 1 1 1h3c.5523 0 1-.4477 1-1V3c0-.55228-.4477-1-1-1h-3ZM5 21c0-.5523.44772-1 1-1s1 .4477 1 1-.44772 1-1 1-1-.4477-1-1Zm10-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c.5523 0 1-.4477 1-1s-.4477-1-1-1h-3Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconBarcode;
