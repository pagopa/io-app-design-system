import React from "react";
import { Svg, Rect, Path } from "react-native-svg";
import { SVGLogoProps } from "../types";

const LogoPaymentVisa = ({ size }: SVGLogoProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect
      x=".25"
      y="4.25"
      width="23.5"
      height="15.5"
      rx="2"
      fill="#fff"
      stroke="#5C6F82"
      stroke-width=".5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m16.035 10.596.232-1.333A4.436 4.436 0 0 0 14.74 9c-1.68 0-2.863.84-2.87 2.042-.014.886.847 1.379 1.49 1.675.659.301.883.499.883.768-.007.413-.532.604-1.022.604-.68 0-1.043-.098-1.596-.328l-.224-.099-.238 1.386c.399.17 1.134.321 1.897.328 1.785 0 2.947-.827 2.96-2.108.008-.702-.447-1.24-1.427-1.68-.595-.283-.96-.474-.96-.762.008-.263.309-.532.98-.532.553-.014.96.111 1.268.236l.153.066ZM2.788 9.914A7.201 7.201 0 0 0 1 9.237l.028-.125h2.737c.371.013.672.125.77.519l.595 2.836.182.854 1.666-4.21h1.799l-2.674 6.166H4.304L2.788 9.915Zm7.312 5.37H8.399l1.064-6.172h1.7L10.1 15.284Zm8.428-2.187h1.414c-.07-.308-.392-1.785-.392-1.785l-.12-.532c-.05.136-.122.325-.17.452a4.63 4.63 0 0 0-.053.139l-.68 1.726ZM22 15.284l-1.372-6.172h-1.316c-.406 0-.714.111-.89.512l-2.526 5.66h1.785l.357-.926h2.184c.049.217.203.926.203.926H22Z"
      fill="#171E6C"
    />
  </Svg>
);

export default LogoPaymentVisa;
