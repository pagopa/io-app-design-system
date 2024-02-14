import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconProductPagoPA = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" style={style} {...props}>
    <Path
      d="m22.551 11.358-.009 2.675h-1.956V5h3.617c1.163 0 1.753.314 1.762.941v4.41c0 .628-.563.933-1.697.933H22.56v.074h-.01ZM24 6.043h-1.467v4.189H24v-4.19ZM1.652 14.043l-.01 2.676H0V7.685h3.027c.978 0 1.467.314 1.476.941v4.41c0 .628-.47.933-1.421.933h-1.43v.074ZM2.87 8.737H1.642v4.19H2.87v-4.19ZM9.56 13.969H6.44c-.913 0-1.374-.314-1.374-.941l.009-1.837c0-.618.47-.932 1.421-.94h1.43V8.736H6.7l-.01.83H5.085v-.94c0-.619.48-.923 1.44-.923l1.605-.019c.95 0 1.43.314 1.43.932v5.352Zm-2.852-1.052h1.237l-.01-1.615H6.708v1.615ZM13.149 13.969h-1.44c-.95 0-1.42-.314-1.42-.932v-4.41c.009-.628.498-.942 1.476-.942h3.026v8.102c0 .627-.48.94-1.43.94h-1.633c-.95 0-1.43-.313-1.43-.94v-.932h1.633v.83h1.227v-1.642l-.01-.074Zm-1.227-1.052h1.227v-4.18h-1.227v4.18ZM19.848 13.028c-.01.627-.498.932-1.477.932h-1.587c-.96 0-1.44-.314-1.44-.932v-4.41c0-.628.48-.933 1.44-.933h1.634c.95 0 1.42.314 1.42.932v4.41h.01Zm-1.624-4.291h-1.237v4.19h1.228l.009-4.19Z"
      fill="currentColor"
    />
    <Path
      d="M31.99 5.987c0-.627-.562-.932-1.697-.932h-1.956c-1.144 0-1.716.314-1.716.932v8.065h1.956v-2.759h1.476V13.6c0 5.905-4.77 10.676-10.676 10.676a10.694 10.694 0 0 1-8.433-4.116l.978-.747-3.931-2.648.175 5.582 1.255-.996a12.614 12.614 0 0 0 9.956 4.853C26.353 26.204 32 20.548 32 13.581l-.01-7.594Zm-1.946 4.254h-1.477V6.09h1.477v4.152Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconProductPagoPA;
