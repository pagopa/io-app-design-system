import React from "react";
import Svg, { Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramHelp = ({ size, colorValues, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M220.46 181.2c-.11-.13-10.98-13.21-23.59-26.68-20.84-22.26-30.19-28.43-34.36-29.69-5.3-1.59-9.25-.71-11.14 2.51-1.96 3.35-1.13 8.07.92 10.06.66.63.8 1.63.35 2.42-.45.79-1.38 1.18-2.26.94-.18-.05-18.54-4.97-29.01-5.63-1.05-.07-2.06.29-2.85.99-.81.72-1.28 1.72-1.32 2.81-.09 2.07 1.39 3.83 3.43 4.11 9.84 1.33 22.46 3.45 26.75 6.03l-2.06 3.43c-2.84-1.71-12.03-3.71-25.22-5.49-4.11-.55-7.08-4.1-6.9-8.25.1-2.17 1.04-4.16 2.65-5.61 1.59-1.43 3.64-2.14 5.77-2.01 7.67.48 18.97 3.05 25.23 4.59-1.02-3.37-.72-7.37 1.07-10.42 1.36-2.31 5.61-7.37 15.74-4.31 15.87 4.78 58.09 55.48 59.88 57.64l-3.08 2.55v.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M140.22 166.97c-2.3-1.73-10.9-2.99-22.99-3.37-5.84-.18-10.47-5.09-10.32-10.94.11-4.48 3.04-8.44 7.28-9.87l2.11-.71 1.27 3.79-2.11.71c-2.66.89-4.49 3.37-4.55 6.17-.09 3.66 2.8 6.73 6.45 6.85 13.65.43 22.16 1.83 25.27 4.17l-2.4 3.2h-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M180.309 226.14c-16.99-25.12-39-41.13-65.42-47.6l-.5-.12c-2.85-.7-5.15-2.77-6.15-5.53-1.04-2.86-.5-6.12 1.4-8.5l3.29-4.1 3.12 2.5-3.29 4.1c-1.04 1.3-1.33 3.07-.76 4.64.55 1.51 1.8 2.63 3.35 3.02l.5.12c27.41 6.71 50.22 23.28 67.78 49.25l-3.31 2.24-.01-.02ZM160.152 143.719l-2.585 3.053 8.021 6.792 2.585-3.052-8.021-6.793Z"
      fill={colorValues.hands}
    />
    <Path
      d="M168.409 172.4c-6.01-10.42-2.18-27.59-2.01-28.32l3.9.89c-.04.16-3.65 16.37 1.58 25.42l-3.46 2-.01.01ZM147.883 144.507l-12.574 27.227 3.631 1.677 12.575-27.227-3.632-1.677Z"
      fill={colorValues.hands}
    />
    <Path
      d="M76.52 132.04c32.872 0 59.52-26.648 59.52-59.52S109.392 13 76.52 13 17 39.648 17 72.52s26.648 59.52 59.52 59.52Z"
      fill={colorValues.main}
    />
    <Path
      d="M73.4798 108.63c2.5626 0 4.64-2.077 4.64-4.64 0-2.563-2.0774-4.64-4.64-4.64-2.5626 0-4.64 2.077-4.64 4.64 0 2.563 2.0774 4.64 4.64 4.64ZM73.24 92.86c-.83 0-1.5-.67-1.5-1.5 0-18.43 5.9-22.29 12.15-26.38.95-.62 1.93-1.26 2.88-1.96 4.85-3.55 6.86-9.58 5.11-15.38-1.34-4.42-5.25-9.26-12.22-9.58h-.26c-.24 0-.54.01-.88-.04-4.42-.71-11.67 1.68-15.44 6.38-2.86 3.57-3.33 7.82-1.41 12.63.31.77-.07 1.64-.84 1.95-.77.31-1.64-.07-1.95-.84-2.93-7.34-.61-12.54 1.85-15.62 4.57-5.7 13.04-8.31 18.26-7.46.11.02.22 0 .33 0h.47c7.14.32 12.87 4.81 14.96 11.71 2.12 7.03-.32 14.36-6.22 18.67-1.01.74-2.03 1.4-3.01 2.05-5.79 3.79-10.79 7.06-10.79 23.87 0 .83-.67 1.5-1.5 1.5h.01Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramHelp;
