import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconPinOff = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="m17.122 2.293 4.596 4.596a1 1 0 0 1 0 1.414.847.847 0 0 1-.54.27 1.205 1.205 0 0 1-.692-.173c-.97-.55-2.664-.808-3.9.428l-1.154 1.154c-.943.943-1.079 2.29-.65 3.345a6.572 6.572 0 0 1-1.438 7.129.43.43 0 0 1-.61 0l-9.29-9.29a.43.43 0 0 1 0-.61 6.572 6.572 0 0 1 7.224-1.4c1.062.453 2.433.329 3.39-.629l-1.414-1.414 1.415 1.414 1.113-1.113c1.236-1.236.976-2.928.433-3.895a1.194 1.194 0 0 1-.167-.687.853.853 0 0 1 .27-.54 1 1 0 0 1 1.414 0ZM6.018 16.567 2.03 12.58a2.43 2.43 0 0 1 0-3.437 8.572 8.572 0 0 1 9.422-1.825c.405.172.881.107 1.192-.204L13.757 6c.39-.39.375-1.02.104-1.501-.648-1.154-.601-2.587.432-3.62a3 3 0 0 1 4.243 0l4.596 4.596a3 3 0 0 1 0 4.243c-1.04 1.04-2.477 1.077-3.632.422-.48-.272-1.11-.288-1.5.102l-1.154 1.154c-.306.307-.375.774-.211 1.176a8.572 8.572 0 0 1-1.877 9.298 2.43 2.43 0 0 1-3.437 0l-3.888-3.888-5.726 5.725a1 1 0 0 1-1.414-1.414l5.725-5.726Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconPinOff;
