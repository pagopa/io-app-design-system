import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCreditCardOff = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.76944 3.18365C0.687055 4.10081 1.49012e-08 5.47017 1.49012e-08 7V17C1.49012e-08 19.7614 2.23858 22 5 22H19C19.4823 22 19.9487 21.9317 20.39 21.8042L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM18.5858 20L14.9974 16.4117C14.9991 16.4409 15 16.4703 15 16.5C15 17.3284 14.3284 18 13.5 18H10.5C9.67157 18 9 17.3284 9 16.5C9 15.6716 9.67157 15 10.5 15H13.5C13.5297 15 13.5591 15.0009 13.5883 15.0026L8.58579 10H2V17C2 18.6569 3.34315 20 5 20H18.5858ZM6.58579 8L3.19177 4.60598C2.46779 5.15368 2 6.02221 2 7V8H6.58579ZM22 8H12.214L14.214 10H22V17C22 17.2421 21.9713 17.4776 21.9171 17.7031L23.4656 19.2516C23.8074 18.5749 24 17.8099 24 17V7C24 4.23858 21.7614 2 19 2H6.21402L8.21402 4H19C20.6569 4 22 5.34315 22 7V8ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCreditCardOff;
