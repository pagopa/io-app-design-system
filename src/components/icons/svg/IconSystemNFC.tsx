import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconSystemNFC = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M4.10583 0.0167503C3.24528 0.0928879 2.41824 0.418755 1.71914 0.95933C1.54551 1.09333 1.12362 1.51056 0.981969 1.69025C0.732182 2.00393 0.464118 2.46532 0.320948 2.82469C0.193008 3.14599 0.103146 3.47948 0.040699 3.86016L0.00566796 4.07335L0.0010987 11.847C-0.00194748 17.4948 0.00109869 19.6815 0.0132834 19.8414C0.1199 21.2195 0.84946 22.4666 1.99939 23.2356C2.54314 23.5995 3.18436 23.8477 3.83167 23.9452C4.15 23.9939 4.447 24 6.02187 23.9954L7.59065 23.9909L7.5145 23.9467C6.79408 23.5325 6.14372 22.4544 5.78579 21.0839C5.57865 20.2906 5.48118 19.6343 5.38674 18.3948C5.37304 18.2181 5.36694 16.0147 5.3639 9.68619L5.35933 1.21363L5.44919 1.29586C5.49945 1.34154 7.65767 3.47795 10.2469 6.0453L14.9548 10.7125V12.1744V13.6362L14.7004 13.3834C14.2801 12.9692 9.12288 7.84519 8.16943 6.89499L7.28604 6.01485L7.28147 10.6257C7.2769 15.2792 7.28147 15.7833 7.33325 16.6512C7.44901 18.614 7.72469 20.0789 8.18314 21.1707C8.27148 21.3809 8.48014 21.7859 8.59589 21.9732C8.8335 22.3554 9.25692 22.826 9.58286 23.0681C10.1266 23.4731 10.7693 23.7518 11.5933 23.9376L11.8629 24L15.8732 23.9939C20.281 23.9893 19.9353 23.997 20.4166 23.8995C21.8803 23.6041 23.1384 22.5397 23.6882 21.1342C23.8192 20.7977 23.9014 20.4794 23.9669 20.0546C23.9913 19.8901 23.9943 19.4257 23.9989 12.1591C24.0019 6.89956 23.9989 4.36724 23.9867 4.21496C23.9578 3.79164 23.8938 3.46881 23.7674 3.08356C23.1978 1.36895 21.6701 0.169024 19.8668 0.0152264C19.7571 0.00609016 19.0214 0 18.0391 0H16.3941L16.4825 0.050251C16.6348 0.135525 16.7551 0.231457 16.9348 0.41114C17.643 1.11617 18.1655 2.3496 18.4259 3.92868C18.5082 4.42967 18.5615 4.92456 18.6133 5.67223C18.6254 5.86257 18.6315 8.14974 18.6361 14.358L18.6422 22.7833L18.5828 22.7331C18.5493 22.7041 16.947 21.119 15.0218 19.2094C13.0966 17.2999 10.9628 15.1863 10.2835 14.5118L9.04521 13.286V11.818V10.3516L11.8675 13.158C13.418 14.7021 15.1452 16.4213 15.7057 16.9771L16.7216 17.9897V13.3834C16.7216 10.7201 16.7155 8.5822 16.7063 8.31419C16.6195 5.58239 16.289 3.75814 15.6478 2.46989C15.4148 2.00089 15.1741 1.6537 14.8482 1.3187C14.5116 0.973034 14.1765 0.730917 13.7287 0.510118C13.3236 0.31064 12.9123 0.170547 12.3838 0.0517731L12.1493 0L8.19532 0.00152206C6.01883 0.00304413 4.18046 0.0091362 4.10583 0.0167503Z"
      fill="#17324D"
    />
  </Svg>
);

export default IconSystemNFC;