import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconProfileRegistered = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6ZM10 8C7.79086 8 6 6.20914 6 4C6 1.79086 7.79086 0 10 0C12.2091 0 14 1.79086 14 4C14 6.20914 12.2091 8 10 8Z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M2 20C2 15.5817 5.58172 12 10 12C13.45 12 16.3899 14.1838 17.5128 17.2445L19.0394 15.7179C17.4352 12.3375 13.9906 10 10 10C4.47715 10 0 14.4772 0 20C0 20.5523 0.447715 21 1 21C1.55228 21 2 20.5523 2 20Z"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M23.7071 15.2929C24.0976 15.6834 24.0976 16.3166 23.7071 16.7071L17.4142 23C16.6332 23.781 15.3668 23.7811 14.5858 23L11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929C11.6834 17.9024 12.3166 17.9024 12.7071 18.2929L16 21.5858L22.2929 15.2929C22.6834 14.9024 23.3166 14.9024 23.7071 15.2929Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconProfileRegistered;
