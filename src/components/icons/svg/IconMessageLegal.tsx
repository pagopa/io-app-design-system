import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconMessageLegal = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5c0-1.65685 1.34315-3 3-3h9v5c0 1.65685 1.3431 3 3 3h5c0 .5523.4477 1 1 1s1-.4477 1-1v-.34315a4.99995 4.99995 0 0 0-1.4645-3.53553l-4.6568-4.65685A5.00014 5.00014 0 0 0 14.3431 0H5C2.23858 0 0 2.23858 0 5v14c0 2.7614 2.23858 5 5 5h10c.5523 0 1-.4477 1-1s-.4477-1-1-1H5c-1.65685 0-3-1.3431-3-3V5Zm19.501 3a3.00025 3.00025 0 0 0-.3797-.46447l-4.6568-4.65685A3.00388 3.00388 0 0 0 16 2.49902V7c0 .55229.4477 1 1 1h4.501ZM5 6.5C5 5.67157 5.67157 5 6.5 5h3c.8284 0 1.5.67157 1.5 1.5S10.3284 8 9.5 8h-3C5.67157 8 5 7.32843 5 6.5ZM6 13c-.55228 0-1 .4477-1 1s.44772 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1H6Zm-1 5c0-.5523.44772-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-.55228 0-1-.4477-1-1Zm15 0c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2Zm4-2c0 1.4806-.8044 2.7733-2 3.4649v3.828c0 .3905-.3166.7071-.7071.7071-.1874 0-.3674-.0747-.5-.2071l-.5-.5-.2656-.2656L20 23l-.0273.0273-.2656.2656-.5003.5003a.70704.70704 0 0 1-.4997.2068c-.3905 0-.7071-.3166-.7071-.7071v-3.828c-1.1956-.6916-2-1.9843-2-3.4649 0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconMessageLegal;
