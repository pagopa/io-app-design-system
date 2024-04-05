import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCategTravel = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M0.348971 12.0644L2.91373 14.1928C3.85392 14.973 4.99406 15.4429 6.21094 15.5517C6.39135 15.5679 6.57148 15.5759 6.75096 15.5759C7.78213 15.5759 8.79093 15.3112 9.6969 14.7992L22.5598 7.53064C23.2199 7.15603 23.6945 6.54682 23.8964 5.81518C24.0983 5.08363 24.0031 4.31716 23.6286 3.65709C22.8639 2.30958 21.1386 1.82313 19.7862 2.57095L15.5589 4.8839L10.0863 3.70223C7.93995 3.22966 5.68432 3.53532 3.73467 4.56268C3.42287 4.72697 3.22956 5.05232 3.23435 5.40476C3.23913 5.75724 3.4412 6.0772 3.75736 6.23296L8.77781 8.70665L6.07824 10.1735L5.53235 9.98628C3.83676 9.40454 1.98733 9.6075 0.458279 10.5434C0.200242 10.7012 0.0342643 10.974 0.012562 11.2758C-0.0090934 11.5775 0.116152 11.8712 0.348971 12.0644ZM4.92399 11.7598L5.85962 12.0808C6.108 12.1659 6.38071 12.1432 6.61142 12.0177L11.2638 9.48966C11.5716 9.32242 11.7605 8.99749 11.7535 8.64721C11.7465 8.29697 11.5448 7.97988 11.2306 7.82501L6.55316 5.5203C7.58015 5.30445 8.649 5.30557 9.68687 5.53408L15.5047 6.79024C15.7249 6.83777 15.9549 6.80449 16.1525 6.6963L20.6898 4.21366C21.1511 3.95872 21.7378 4.12414 21.9979 4.58242C22.1253 4.80684 22.1577 5.0676 22.089 5.3164C22.0203 5.56521 21.8589 5.77243 21.6359 5.89904L8.77448 13.1669C7.29389 14.0035 5.41986 13.836 4.11106 12.7499L2.75108 11.6213C3.46548 11.4728 4.21432 11.5163 4.92399 11.7598ZM23.9991 21.0608C23.9991 21.5786 23.5794 21.9983 23.0616 21.9983H0.937464C0.419703 21.9983 0 21.5786 0 21.0608C0 20.5431 0.419703 20.1234 0.937464 20.1234H23.0616C23.5794 20.1234 23.9991 20.5431 23.9991 21.0608Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCategTravel;
