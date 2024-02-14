import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconLadybug = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.8728 0H4.12723C3.50396 0 3 0.509642 3 1.13994V4.38868C3 4.70383 3.12822 5.00458 3.35615 5.21888L7.14385 8.81519C7.37 9.03129 7.5 9.33203 7.5 9.64538V22.8601C7.5 23.4904 8.00396 24 8.62723 24H15.3728C15.996 24 16.5 23.4904 16.5 22.8601V9.64538C16.5 9.33023 16.6282 9.02949 16.8562 8.81519L20.6438 5.21888C20.87 5.00278 21 4.70203 21 4.38868V1.13994C21 0.509642 20.496 0 19.8728 0ZM12.9883 9.82492C12.9883 10.3712 12.5454 10.8141 11.9991 10.8141C11.4528 10.8141 11.0099 10.3712 11.0099 9.82492V8.07378C11.0099 7.52745 11.4528 7.08457 11.9991 7.08457C12.5454 7.08457 12.9883 7.52745 12.9883 8.07378V9.82492Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconLadybug;
