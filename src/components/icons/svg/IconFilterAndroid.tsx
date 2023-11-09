import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconFilterAndroid = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5ZM4.12602 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H4.12602C4.57006 2.27477 6.13616 1 8 1C9.86384 1 11.4299 2.27477 11.874 4H23C23.5523 4 24 4.44772 24 5C24 5.55228 23.5523 6 23 6H11.874C11.4299 7.72523 9.86384 9 8 9C6.13616 9 4.57006 7.72523 4.12602 6ZM1 18C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H4.12602C4.57006 21.7252 6.13616 23 8 23C9.86384 23 11.4299 21.7252 11.874 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H11.874C11.4299 16.2748 9.86384 15 8 15C6.13616 15 4.57006 16.2748 4.12602 18H1ZM23.9995 12C23.9998 12.5523 23.5523 13.0002 23 13.0005L20.8736 13.0015C20.429 14.726 18.8633 16 17 16C15.141 16 13.5782 14.7318 13.1295 13.0134L0.998317 12.9889C0.446034 12.9878 -0.000777765 12.5392 0.000335934 11.9869C0.00144963 11.4346 0.450067 10.9878 1.00235 10.9889L13.1226 11.0134C13.562 9.28135 15.1314 8 17 8C18.8644 8 20.4309 9.27552 20.8744 11.0015L22.999 11.0005C23.5513 11.0002 23.9992 11.4477 23.9995 12ZM17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10ZM6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21C6.89543 21 6 20.1046 6 19Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconFilterAndroid;