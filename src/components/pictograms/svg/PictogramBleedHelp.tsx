import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedHelp = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M133.94 165.85c-2.88 0-5.61-1.57-7.03-4.28-1.01-1.92-1.2-4.12-.53-6.18.66-2.04 2.07-3.69 3.98-4.64 6.87-3.44 17.93-6.91 24.11-8.73-2.58-2.4-4.34-6.01-4.32-9.54 0-2.68 1.14-9.19 11.43-11.65 16.11-3.86 78.12 18.71 80.75 19.67l-1.37 3.76c-.16-.06-16.14-5.89-33.81-11.18-29.21-8.75-40.4-9.37-44.64-8.36-5.38 1.29-8.35 4.05-8.36 7.77-.01 3.88 3.08 7.55 5.86 8.23.89.22 1.51 1.01 1.52 1.92 0 .91-.6 1.71-1.48 1.95-.18.05-18.53 5.04-27.9 9.73-.94.47-1.63 1.28-1.96 2.29-.33 1.03-.24 2.13.27 3.09.96 1.83 3.13 2.61 5.04 1.82 9.09-3.77 20.95-8.25 26.02-8.25h.12l-.06 4c-3.34-.08-12.27 2.85-24.55 7.94-1.01.42-2.05.62-3.08.62l-.01.02Z"
      fill={colorValues.hands}
    />
    <Path
      d="M137.85 182.28c-3.78 0-7.45-2.01-9.39-5.54-2.16-3.92-1.62-8.82 1.33-12.19l1.47-1.68 3.01 2.63-1.47 1.68c-1.85 2.11-2.18 5.17-.83 7.63 1.76 3.21 5.81 4.41 9.02 2.67 12.01-6.5 20.06-9.57 23.94-9.11l-.47 3.97c-2.88-.34-10.93 2.9-21.57 8.66-1.6.87-3.33 1.28-5.04 1.28Z"
      fill={colorValues.hands}
    />
    <Path
      d="M240.77 205.74c-39.81-19.17-81.44-13.88-92.88-10.51-2.82.83-5.84.2-8.1-1.68-2.34-1.95-3.52-5.04-3.07-8.05l.77-5.2 3.96.59-.77 5.2c-.25 1.64.4 3.33 1.67 4.39 1.23 1.03 2.88 1.37 4.41.92 11.83-3.48 54.8-8.97 95.75 10.74l-1.73 3.6h-.01ZM169.987 142.243l-.698 3.938 10.349 1.834.698-3.938-10.349-1.834Z"
      fill={colorValues.hands}
    />
    <Path
      d="M191.551 162.85c-10.44-5.97-15.77-22.75-15.99-23.46l3.82-1.19c.05.16 5.09 15.99 14.16 21.18l-1.99 3.47ZM163.743 148.684l-3.982.379 2.843 29.855 3.982-.379-2.843-29.855Z"
      fill={colorValues.hands}
    />
    <Path
      d="M85.52 154.04c32.872 0 59.52-26.648 59.52-59.52S118.392 35 85.52 35 26 61.648 26 94.52s26.648 59.52 59.52 59.52Z"
      fill={colorValues.main}
    />
    <Path
      d="M82.4798 130.63c2.5626 0 4.64-2.077 4.64-4.64 0-2.563-2.0774-4.64-4.64-4.64-2.5626 0-4.64 2.077-4.64 4.64 0 2.563 2.0774 4.64 4.64 4.64ZM82.24 114.86c-.83 0-1.5-.67-1.5-1.5 0-18.43 5.9-22.29 12.15-26.38.95-.62 1.93-1.26 2.88-1.96 4.85-3.55 6.86-9.58 5.11-15.38-1.34-4.42-5.25-9.26-12.22-9.58h-.26c-.24 0-.54.01-.88-.04-4.42-.72-11.67 1.68-15.44 6.38-2.86 3.57-3.33 7.82-1.41 12.63.31.77-.07 1.64-.84 1.95-.77.31-1.64-.07-1.95-.84-2.93-7.34-.61-12.54 1.85-15.62 4.57-5.7 13.04-8.31 18.26-7.46.11.02.22 0 .33 0h.47c7.14.32 12.87 4.81 14.96 11.71 2.12 7.03-.32 14.36-6.22 18.67-1.01.74-2.03 1.4-3.01 2.05-5.79 3.79-10.79 7.06-10.79 23.87 0 .83-.67 1.5-1.5 1.5h.01Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedHelp;
