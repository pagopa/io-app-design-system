import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { SVGLogoProps } from "../types";

const LogoPaymentSatispay = ({ size }: SVGLogoProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect width="24" height="24" y="0" fill="#FF3D00" rx="4" />
    <Path
      fill="#fff"
      d="M7.57 20h4.226l6.678-6.274c.334-.314.526-.761.526-1.226 0-.465-.191-.912-.526-1.226L11.796 5H7.569a.317.317 0 0 0-.3.212.333.333 0 0 0 .083.364l7.154 6.721a.28.28 0 0 1 0 .407l-7.154 6.721a.333.333 0 0 0-.083.365.317.317 0 0 0 .3.211V20Z"
    />
    <Path
      fill="#fff"
      d="m8.856 8.145-3.33 3.13c-.334.313-.526.76-.526 1.225 0 .465.191.912.526 1.226l3.33 3.128 2.528-2.375-1.89-1.776a.28.28 0 0 1 0-.407l1.89-1.776-2.528-2.375ZM16.43 5h-3.402l2.116 1.988 1.504-1.412a.333.333 0 0 0 .083-.365.317.317 0 0 0-.3-.212V5ZM15.144 18.012 13.028 20h3.403c.162 0 .26-.11.3-.212a.333.333 0 0 0-.083-.364l-1.504-1.413v.001Z"
    />
  </Svg>
);

export default LogoPaymentSatispay;
