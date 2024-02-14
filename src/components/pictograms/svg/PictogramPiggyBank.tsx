import React from "react";
import { Svg, Path } from "react-native-svg";

import { SVGPictogramProps } from "../types";

const PictogramPiggyBank = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.522 58.596-5.36.672a6.733 6.733 0 0 0-5.887 6.67v11.635a6.733 6.733 0 0 0 5.887 6.67l4.797.6a36.614 36.614 0 0 0 10.314 15.159v11.691a6.7 6.7 0 0 0 6.691 6.692h13.387a6.7 6.7 0 0 0 6.691-6.692v-2.553h14.773v2.553a6.7 6.7 0 0 0 6.691 6.692h13.387a6.7 6.7 0 0 0 6.691-6.692v-7.663a36.682 36.682 0 0 0 17.737-35.942h.838c5.663 0 10.27-4.606 10.27-10.269 0-5.662-4.607-10.269-10.27-10.269a2.307 2.307 0 0 0 0 4.616 5.66 5.66 0 0 1 5.654 5.653 5.66 5.66 0 0 1-5.654 5.654h-1.691c-4.016-15.9-18.44-27.704-35.57-27.704h-2.893a2.308 2.308 0 0 0 0 4.616h2.892c17.684 0 32.07 14.386 32.07 32.07a32.073 32.073 0 0 1-16.792 28.203 2.308 2.308 0 0 0-1.207 2.028v9.007a2.078 2.078 0 0 1-2.076 2.076H69.506a2.078 2.078 0 0 1-2.076-2.076v-4.861a2.308 2.308 0 0 0-2.308-2.308H45.734a2.308 2.308 0 0 0-2.308 2.308v4.861a2.078 2.078 0 0 1-2.076 2.076H27.964a2.078 2.078 0 0 1-2.076-2.076V98.938c0-.688-.306-1.339-.835-1.778a32.018 32.018 0 0 1-10.166-15.115 2.307 2.307 0 0 0-1.916-1.6l-6.236-.782a2.11 2.11 0 0 1-1.845-2.09V65.938a2.11 2.11 0 0 1 1.845-2.09l6.73-.843a2.308 2.308 0 0 0 1.882-1.502 32.115 32.115 0 0 1 6.934-11.2c.221-.16.41-.355.56-.576a31.955 31.955 0 0 1 15.245-8.482 2.307 2.307 0 1 0-1.062-4.491c-1.72.406-3.406.943-5.047 1.595-2.319-6.037-8.215-10.154-14.758-10.154h-.512a2.308 2.308 0 0 0-2.245 2.838l3.941 16.697a36.857 36.857 0 0 0-6.88 10.867Zm16.262-18.265a36.795 36.795 0 0 0-5.505 3.727L19.69 33.09c3.709.85 6.819 3.576 8.094 7.24Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.566 58.83a2.324 2.324 0 0 1 1.632-.676c.606 0 1.202.247 1.631.676.43.43.676 1.025.676 1.632 0 .606-.246 1.202-.676 1.631-.43.43-1.025.676-1.631.676a2.324 2.324 0 0 1-1.632-.676 2.325 2.325 0 0 1-.676-1.631c0-.607.247-1.203.676-1.632ZM50.757 13.692A2.308 2.308 0 0 1 53.065 16v9.154a2.308 2.308 0 0 1-4.615 0V16a2.308 2.308 0 0 1 2.307-2.308ZM49.126 5.996a2.324 2.324 0 0 1 1.632-.677c.607 0 1.202.247 1.631.677.43.429.676 1.024.676 1.631a2.32 2.32 0 0 1-.676 1.632c-.43.429-1.024.676-1.632.676a2.324 2.324 0 0 1-1.63-.676 2.326 2.326 0 0 1-.677-1.632c0-.607.247-1.2.676-1.631ZM69.505.231a2.308 2.308 0 0 1 2.308 2.308v3.923a2.308 2.308 0 0 1-4.615 0V2.539A2.308 2.308 0 0 1 69.505.23ZM92.135 72.454a2.308 2.308 0 0 1 4.615 0v.123a2.308 2.308 0 0 1-2.307 2.293h-.015a2.308 2.308 0 0 1-2.293-2.322v-.094ZM81.92 90.612a21.391 21.391 0 0 0 8.817-10.561 2.307 2.307 0 1 1 4.31 1.651 26.027 26.027 0 0 1-10.728 12.853 2.307 2.307 0 1 1-2.4-3.943Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M79.198 21.012c0-5.344-4.348-9.692-9.693-9.692-5.344 0-9.692 4.348-9.692 9.692 0 5.345 4.348 9.692 9.692 9.692 5.345 0 9.693-4.348 9.693-9.692Zm-4.616 0c0 2.8-2.277 5.077-5.077 5.077a5.083 5.083 0 0 1-5.076-5.077c0-2.8 2.277-5.077 5.076-5.077 2.8 0 5.077 2.278 5.077 5.077ZM42.505 49.154h-2.077a2.308 2.308 0 0 0 0 4.615h30a2.308 2.308 0 0 0 0-4.615H59.01a9.63 9.63 0 0 0 1.44-5.077c0-5.344-4.347-9.692-9.692-9.692-5.344 0-9.692 4.348-9.692 9.692 0 1.86.528 3.6 1.44 5.077Zm13.33-5.077c0 2.8-2.278 5.077-5.078 5.077a5.083 5.083 0 0 1-5.077-5.077c0-2.8 2.278-5.077 5.077-5.077 2.8 0 5.077 2.278 5.077 5.077Z"
      fill={color}
    />
  </Svg>
);

export default PictogramPiggyBank;
