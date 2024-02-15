import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconProductIOApp = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path d="M2.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5 14c0 4.418-3.582 8-7.619 8-4.8 0-8.381-3.582-8.381-8s3.582-8 8.381-8c4.037 0 7.619 3.582 7.619 8Zm-6.035-.84h1.065v-1.048h-1.057v-1.267h-1.157v4.216c0 .667.092 1.122.283 1.365.184.252.537.374 1.058.374.2 0 .498-.049.881-.138l-.054-.975-.659.016c-.114 0-.199-.024-.252-.081a.328.328 0 0 1-.092-.195 4.118 4.118 0 0 1-.016-.39V13.16Zm-3.486-1.04v4.574h1.157v-4.573h-1.157Zm-1.737-.113c.203 0 .374.068.506.204a.692.692 0 0 1 .194.507.675.675 0 0 1-.194.5.684.684 0 0 1-.498.189.693.693 0 0 1-.708-.704.72.72 0 0 1 .195-.5.672.672 0 0 1 .505-.196Z"
      fill="currentColor"
    />
    <Path
      d="M4.5 11.5a2 2 0 1 0-4 0V20a2 2 0 1 0 4 0v-8.5ZM2.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5 14c0 4.418-3.582 8-7.619 8-4.8 0-8.381-3.582-8.381-8s3.582-8 8.381-8c4.037 0 7.619 3.582 7.619 8Zm-6.035-.84h1.065v-1.048h-1.057v-1.267h-1.157v4.216c0 .667.092 1.122.283 1.365.184.252.537.374 1.058.374.2 0 .498-.049.881-.138l-.054-.975-.659.016c-.114 0-.199-.024-.252-.081a.328.328 0 0 1-.092-.195 4.118 4.118 0 0 1-.016-.39V13.16Zm-3.486-1.04v4.574h1.157v-4.573h-1.157Zm-1.737-.113c.203 0 .374.068.506.204a.692.692 0 0 1 .194.507.675.675 0 0 1-.194.5.684.684 0 0 1-.498.189.693.693 0 0 1-.708-.704.72.72 0 0 1 .195-.5.672.672 0 0 1 .505-.196Z"
      fill="currentColor"
    />
    <Path
      d="M4.5 11.5a2 2 0 1 0-4 0V20a2 2 0 1 0 4 0v-8.5Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconProductIOApp;
