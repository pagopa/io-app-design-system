import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconSystemSettingsAndroid = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Rect width={size} height={size} fill="#418DAF" rx="8" />
    <Path
      fill="#fff"
      d="M17.95 12.784c.033-.25.05-.509.05-.784a4.81 4.81 0 0 0-.058-.783L19.633 9.9a.409.409 0 0 0 .1-.508l-1.6-2.767a.407.407 0 0 0-.491-.183l-1.992.8a5.885 5.885 0 0 0-1.35-.783L14 4.342A.403.403 0 0 0 13.6 4h-3.2c-.2 0-.358.142-.392.342l-.3 2.117c-.491.2-.941.475-1.35.783l-1.991-.8a.398.398 0 0 0-.492.183L4.283 9.392c-.1.175-.066.392.1.508l1.692 1.317A4.89 4.89 0 0 0 6 12c0 .259.017.534.058.784L4.367 14.1a.409.409 0 0 0-.1.509l1.6 2.766c.1.184.308.242.491.184l1.992-.8c.417.316.858.583 1.35.783l.3 2.117c.042.2.2.341.4.341h3.2c.2 0 .367-.141.392-.341l.3-2.117c.491-.2.941-.467 1.35-.783l1.991.8c.184.066.392 0 .492-.184l1.6-2.766c.1-.184.058-.392-.1-.509l-1.675-1.316ZM12 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"
    />
  </Svg>
);

export default IconSystemSettingsAndroid;
