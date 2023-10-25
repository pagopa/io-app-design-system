import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

export const IconInstitution = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.402 2.685a2.997 2.997 0 0 1 3.219 0l7.918 5.04a.999.999 0 0 1 .463.842l-.023 1.423H1.999l.022-1.423c0-.342.174-.66.463-.843l7.918-5.039ZM14.693.999A4.995 4.995 0 0 0 9.33 1L1.41 6.04A2.997 2.997 0 0 0 .024 8.566L0 10.989a1 1 0 0 0 .999 1h1v9.99h-1a.999.999 0 1 0 0 1.998H22.978a1 1 0 0 0 0-1.998h-.999v-9.99h1a1 1 0 0 0 .998-1L24 8.567a2.997 2.997 0 0 0-1.388-2.529L14.693 1ZM5.994 21.98H3.996v-9.99h1.998v9.99Zm9.99-9.99v9.99H7.993v-9.99h7.993Zm3.997 9.99h-1.998v-9.99h1.998v9.99ZM13.51 6.471a1.499 1.499 0 1 1-2.997 0 1.499 1.499 0 0 1 2.997 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
