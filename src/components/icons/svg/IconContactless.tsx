import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconContactless = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.4936 0.391611C17.1576 -0.046682 16.5299 -0.129581 16.0916 0.206451C15.6533 0.542483 15.5704 1.1702 15.9064 1.60849C18.0423 4.39441 19.0001 7.59351 19.0001 12.0001C19.0001 16.4066 18.0423 19.6057 15.9064 22.3916C15.5704 22.8299 15.6533 23.4576 16.0916 23.7937C16.5299 24.1297 17.1576 24.0468 17.4936 23.6085C19.9577 20.3944 21.0001 16.7355 21.0001 12.0001C21.0001 7.26465 19.9578 3.60569 17.4936 0.391611ZM12.8001 2.40006C12.4687 1.95823 11.8419 1.86869 11.4001 2.20006C10.9582 2.53143 10.8687 3.15823 11.2001 3.60006C12.2687 5.02488 12.9566 6.25335 13.385 7.53842C13.8133 8.8235 14.0001 10.219 14.0001 12.0001C14.0001 13.7811 13.8133 15.1766 13.385 16.4617C12.9566 17.7468 12.2687 18.9752 11.2001 20.4001C10.8687 20.8419 10.9582 21.4687 11.4001 21.8001C11.8419 22.1314 12.4687 22.0419 12.8001 21.6001C13.9543 20.061 14.7664 18.6419 15.2823 17.0942C15.7982 15.5464 16.0001 13.9239 16.0001 12.0001C16.0001 10.0762 15.7982 8.45372 15.2823 6.90597C14.7664 5.35822 13.9543 3.93911 12.8001 2.40006ZM7.40006 5.20006C7.84189 4.86869 8.46869 4.95823 8.80006 5.40006C9.58386 6.44513 10.1459 7.42298 10.5045 8.49859C10.863 9.5742 11.0001 10.6937 11.0001 12.0001C11.0001 13.3064 10.863 14.4259 10.5045 15.5015C10.1459 16.5771 9.58386 17.555 8.80006 18.6001C8.46869 19.0419 7.84189 19.1314 7.40006 18.8001C6.95823 18.4687 6.86869 17.8419 7.20006 17.4001C7.89819 16.4692 8.33612 15.682 8.6071 14.8691C8.87808 14.0561 9.00006 13.1636 9.00006 12.0001C9.00006 10.8365 8.87808 9.94398 8.6071 9.13104C8.33612 8.31811 7.89819 7.5309 7.20006 6.60006C6.86869 6.15823 6.95823 5.53143 7.40006 5.20006ZM4.80006 8.40006C4.46869 7.95823 3.84189 7.86869 3.40006 8.20006C2.95823 8.53143 2.86869 9.15823 3.20006 9.60006C3.52771 10.0369 3.71564 10.3829 3.82924 10.7237C3.94284 11.0645 4.00006 11.454 4.00006 12.0001C4.00006 12.5461 3.94284 12.9357 3.82924 13.2765C3.71564 13.6173 3.52771 13.9632 3.20006 14.4001C2.86869 14.8419 2.95823 15.4687 3.40006 15.8001C3.84189 16.1314 4.46869 16.0419 4.80006 15.6001C5.21338 15.049 5.52545 14.5124 5.7266 13.9089C5.92776 13.3054 6.00006 12.6889 6.00006 12.0001C6.00006 11.3112 5.92776 10.6947 5.7266 10.0912C5.52545 9.48774 5.21338 8.95115 4.80006 8.40006Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconContactless;
