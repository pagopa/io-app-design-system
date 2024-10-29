import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore (ignore Path unused component)
import { Path, Svg } from "react-native-svg";
import { SVGIconProps } from "../types";

// The `generateNewIcons.js`s script uses this template to generate
// the new `Icon…` component. Don't edit this file to avoid
// adding breaking changes to the process.

const IconSwitchCard = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.47364 6.80676C3.58714 5.35067 4.61099 4 6.1079 4H17.8904C19.3873 4 20.4112 5.35067 20.5247 6.80676H21.1C22.7027 6.80676 24 8.17682 24 9.86438C24 11.5542 22.7006 12.922 21.1 12.922H20.5352V15.924C20.5352 17.4783 19.4793 19 17.8904 19H6.1079C4.51903 19 3.46313 17.4783 3.46313 15.924V15.0689H5.36002V15.924C5.36002 16.6639 5.82216 17 6.1079 17H17.8904C18.1761 17 18.6383 16.6639 18.6383 15.924V12.922H13.3412V10.922H18.6383V7.07602C18.6383 6.33611 18.1761 6 17.8904 6H6.1079C5.82216 6 5.36002 6.33611 5.36002 7.07602V10.922H8.69395L7.53674 9.70924C7.16523 9.3199 7.16342 8.68673 7.53269 8.29503C7.90196 7.90333 8.50248 7.90142 8.87399 8.29076L11.7193 11.2727C12.0893 11.6604 12.0929 12.2903 11.7274 12.6826L8.9161 15.7007C8.54907 16.0947 7.94857 16.1004 7.57485 15.7135C7.20113 15.3265 7.19571 14.6933 7.56275 14.2993L8.84568 12.922H2.89999C1.29943 12.922 0 11.5542 0 9.86438C0 8.17682 1.29728 6.80676 2.89999 6.80676H3.47364ZM3.46313 8.80676H2.89999C2.34574 8.80676 1.89689 9.28051 1.89689 9.86438C1.89689 10.4488 2.34622 10.922 2.89999 10.922H3.46313V8.80676ZM20.5352 10.922H21.1C21.6538 10.922 22.1031 10.4488 22.1031 9.86438C22.1031 9.28051 21.6543 8.80676 21.1 8.80676H20.5352V10.922Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconSwitchCard;