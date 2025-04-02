import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconReceiptOff = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.70718 0.292969L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.76944 3.18365C0.687055 4.10081 1.86265e-08 5.47017 1.86265e-08 7V10V17V22L3.55279 20.2236C3.83431 20.0828 4.16569 20.0828 4.44721 20.2236L8 22L11.5528 20.2236C11.8343 20.0828 12.1657 20.0828 12.4472 20.2236L16 22L19.0572 20.4714L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6835 23.7072 22.293L23.707 22.2931L1.70703 0.29312L1.70718 0.292969ZM24 19.7577V17V10V7C24 4.23858 21.7614 2 19 2H6.24234L8.24234 4H19C20.6569 4 22 5.34315 22 7V10V17V17.7577L24 19.7577ZM13.2385 8.99616H18.0019C18.5531 8.99616 19 8.54931 19 7.99808C19 7.44686 18.5531 7 18.0019 7H11.2423L13.2385 8.99616ZM11.5791 12.9933L17.5665 18.9807L16 19.7639L13.3416 18.4348C12.4971 18.0125 11.5029 18.0125 10.6584 18.4348L8 19.7639L5.34164 18.4348C4.49706 18.0125 3.50294 18.0125 2.65836 18.4348L2 18.7639V17V10V7C2 6.02221 2.46779 5.15368 3.19177 4.60598L5.64866 7.06287C5.26977 7.2045 5 7.56979 5 7.99808C5 8.54931 5.44686 8.99616 5.99808 8.99616H7.58195L9.58579 11H5.99665C5.44621 11 5 11.4462 5 11.9966C5 12.5471 5.44621 12.9933 5.99665 12.9933H11.5791Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconReceiptOff;
