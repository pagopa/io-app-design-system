import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconSignal = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 22C1.55228 22 2 22.4477 2 23C2 23.5523 1.55228 24 1 24C0.447715 24 0 23.5523 0 23C0 22.4477 0.447715 22 1 22ZM1 15C0.447715 15 0 15.4477 0 16C0 16.5523 0.447715 17 1 17C1.78793 17 2.56815 17.1552 3.2961 17.4567C4.02405 17.7583 4.68549 18.2002 5.24264 18.7574C5.79979 19.3145 6.24175 19.9759 6.54328 20.7039C6.84481 21.4319 7 22.2121 7 23C7 23.5523 7.44771 24 8 24C8.55229 24 9 23.5523 9 23C9 21.9494 8.79307 20.9091 8.39104 19.9385C7.989 18.9679 7.39972 18.086 6.65685 17.3431C5.91399 16.6003 5.03207 16.011 4.06147 15.609C3.09086 15.2069 2.05057 15 1 15ZM0 9C0 8.44772 0.447716 8 1 8C2.96983 8 4.92037 8.38799 6.74025 9.14181C8.56014 9.89563 10.2137 11.0005 11.6066 12.3934C12.9995 13.7863 14.1044 15.4399 14.8582 17.2597C15.612 19.0796 16 21.0302 16 23C16 23.5523 15.5523 24 15 24C14.4477 24 14 23.5523 14 23C14 21.2928 13.6637 19.6023 13.0104 18.0251C12.3571 16.4479 11.3996 15.0148 10.1924 13.8076C8.98523 12.6005 7.55212 11.6429 5.97488 10.9896C4.39765 10.3363 2.70718 10 1 10C0.447716 10 0 9.55229 0 9ZM0.999998 1C0.447714 1 0 1.44772 0 2C0 2.55228 0.447714 3 1 3C3.62644 3 6.22716 3.51731 8.65367 4.52241C11.0802 5.5275 13.285 7.00069 15.1421 8.85786C16.9993 10.715 18.4725 12.9198 19.4776 15.3463C20.4827 17.7728 21 20.3736 21 23C21 23.5523 21.4477 24 22 24C22.5523 24 23 23.5523 23 23C23 20.1109 22.431 17.2501 21.3253 14.581C20.2197 11.9118 18.5992 9.48654 16.5564 7.44365C14.5135 5.40076 12.0882 3.78025 9.41903 2.67465C6.74987 1.56905 3.88908 1 0.999998 1Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconSignal;
