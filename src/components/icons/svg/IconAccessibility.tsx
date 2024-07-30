import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconAccessibility = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6ZM6.09958 9.00504C5.55003 8.95008 5.05999 9.35103 5.00504 9.90057C4.95008 10.4501 5.35103 10.9402 5.90057 10.9951L9.09958 11.315L9.10008 11.3151C9.61103 11.3664 10.0001 11.7965 10.0001 12.3101V13.2297C10.0001 13.6113 9.9273 13.9893 9.78566 14.3435L9.78551 14.3439L8.0716 18.6287C7.86648 19.1415 8.1159 19.7234 8.62868 19.9286C9.0604 20.1012 9.54115 19.9518 9.80477 19.5942C9.85436 19.527 9.89627 19.4524 9.92874 19.3712L11.8393 14.5948C11.848 14.573 11.8611 14.5532 11.8777 14.5366C11.9454 14.4689 12.0552 14.4689 12.1229 14.5366C12.1366 14.5504 12.148 14.5664 12.1564 14.5839L12.3573 15.0861L12.3575 15.0867L14.0714 19.3715C14.2766 19.8843 14.8585 20.1337 15.3713 19.9286C15.4565 19.8945 15.5344 19.85 15.6042 19.7971C15.9547 19.532 16.0998 19.0561 15.9287 18.6284L14.1964 14.2975C14.0665 13.9566 13.9999 13.5948 13.9999 13.2297V12.3101C13.9999 11.7965 14.3889 11.3665 14.8998 11.3151L14.9004 11.315L18.0994 10.9951C18.649 10.9402 19.0499 10.4501 18.995 9.90057C18.94 9.35103 18.45 8.95008 17.9004 9.00504L14.7014 9.32494L13.4289 9.45219C12.9219 9.48202 12.4343 9.50013 12 9.50013C11.5658 9.50013 11.0781 9.48201 10.571 9.45218L9.29859 9.32494L6.09958 9.00504Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconAccessibility;