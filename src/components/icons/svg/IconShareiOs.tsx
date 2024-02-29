import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconShareiOs = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.768 6.338a1 1 0 0 1-1.408.129L12.984 2.82c.01.058.016.119.016.18v12a1 1 0 1 1-2 0V3c0-.061.006-.122.016-.18L6.64 6.467A1 1 0 1 1 5.36 4.93L10.72.464a2 2 0 0 1 2.56 0l5.36 4.466a1 1 0 0 1 .128 1.408ZM12 2Zm12 6.007a1 1 0 0 0-2-.014l-.08 11.029a3 3 0 0 1-3 2.978H5a3 3 0 0 1-3-3V8a1 1 0 1 0-2 0v11a5 5 0 0 0 5 5h13.92a5 5 0 0 0 5-4.963L24 8.007Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconShareiOs;
