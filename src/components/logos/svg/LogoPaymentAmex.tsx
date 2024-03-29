import React from "react";
import { Svg, Rect, Path } from "react-native-svg";
import { SVGLogoProps } from "../types";

const LogoPaymentAmex = ({ size }: SVGLogoProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect y="4" width="24" height="16" rx="2" fill="#016FD0" />
    <Path
      d="M13.764 17.394v-5.702l10.148.01v1.574l-1.173 1.254 1.173 1.265v1.608h-1.873l-.995-1.098-.988 1.102-6.292-.013Z"
      fill="#FFFFFE"
    />
    <Path
      d="M14.442 16.769v-4.45h3.772v1.026h-2.55v.695h2.49v1.008h-2.49v.684h2.55v1.037h-3.772Z"
      fill="#016FD0"
    />
    <Path
      d="m18.195 16.769 2.088-2.227-2.088-2.222h1.616l1.275 1.41 1.28-1.41h1.546v.035l-2.043 2.187 2.043 2.164v.063H22.35l-1.298-1.424-1.285 1.424h-1.572Z"
      fill="#016FD0"
    />
    <Path
      d="M14.237 6.632h2.446l.86 1.95v-1.95h3.02l.52 1.461.523-1.461h2.306v5.701H11.725l2.512-5.701Z"
      fill="#FFFFFE"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.726 11.697 14.7 7.25h1.565l1.965 4.446h-1.387l-.372-.89h-2.018l-.373.89h-1.354Zm2.736-3.303-.592 1.415h1.184l-.592-1.415Z"
      fill="#016FD0"
    />
    <Path
      d="M18.212 11.696V7.25l1.903.006.98 2.733.985-2.74h1.832v4.446l-1.179.01V8.653l-1.113 3.043h-1.075l-1.136-3.054v3.054h-1.197Z"
      fill="#016FD0"
    />
  </Svg>
);

export default LogoPaymentAmex;
