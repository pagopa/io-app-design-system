import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramMessages = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 48 48" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 35.49a4.491 4.491 0 0 1-1.315 3.189 4.451 4.451 0 0 1-3.176 1.32L7.806 40c-2.477 0-4.491-2.023-4.491-4.51V25.03h-2.29C.459 25.028 0 24.567 0 24a1.028 1.028 0 0 1 1.024-1.029h2.29v-2.637H2.258c-.566 0-1.024-.46-1.024-1.029a1.028 1.028 0 0 1 1.024-1.029h1.058v-5.765c0-1.244.503-2.371 1.317-3.188A4.467 4.467 0 0 1 7.806 8h35.703C45.985 8 48 10.024 48 12.51v22.98ZM5.636 36.61l13.53-13.588L6.588 10.387a2.454 2.454 0 0 0-1.224 2.123v22.978c0 .405.1.785.272 1.122Zm18.295-11.713-5.935-5.96h4.297c.565 0 1.024-.462 1.024-1.03 0-.568-.459-1.029-1.024-1.029h-6.346l-2.11-2.12h13.098c.566 0 1.025-.46 1.025-1.029 0-.568-.459-1.029-1.025-1.029H11.788l-2.63-2.642h33L27.384 24.897a2.437 2.437 0 0 1-3.453 0Zm19.578 13.045c.183 0 .363-.02.537-.06l-2.994-3.007H30.62c-.565 0-1.024-.46-1.024-1.029a1.028 1.028 0 0 1 1.024-1.029h8.385l-8.304-8.34-1.867 1.875a4.482 4.482 0 0 1-6.351 0l-1.867-1.875L7.27 37.88c.173.039.351.061.536.061h35.703Zm2.171-1.33L32.15 23.023l12.578-12.634a2.454 2.454 0 0 1 1.224 2.123v22.978c0 .398-.094.78-.27 1.124Z"
      fill={color}
    />
  </Svg>
);

export default PictogramMessages;
