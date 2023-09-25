import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedFeature = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M156.2 126.24h-.29c-2.76-.16-4.87-2.52-4.71-5.28l5.89-103.24c.16-2.76 2.55-4.88 5.28-4.72 2.76.16 4.87 2.52 4.71 5.28l-5.89 103.24c-.15 2.66-2.36 4.72-4.99 4.72Z"
      fill={colorValues.main}
    />
    <Path
      d="M153.501 158.01c-.18 0-.36 0-.55-.02-2.03-.12-3.79-1.04-5.1-2.67-4.58-5.71-2.57-19.08-2.33-20.59.6-5.18 2.79-8.92 6.52-11.01 7.82-4.39 20.48-.22 29.72 4.05 6.08 2.81 12.88 4.15 19.63 3.89 8.93-.35 23.07-1.9 39.71-7.35l1.24 3.8c-17.08 5.59-31.61 7.19-40.8 7.55-7.38.29-14.82-1.18-21.46-4.26-11.87-5.49-21.14-6.98-26.09-4.2-2.58 1.45-4.06 4.09-4.52 8.07-.59 3.7-1.46 13.86 1.49 17.54.6.75 1.3 1.12 2.21 1.17 1.24.07 2.31-.3 3.25-1.15 3.12-2.81 4.1-9.88 4.21-12.36l4 .18c-.02.43-.53 10.64-5.53 15.15-1.62 1.46-3.51 2.2-5.62 2.2l.02.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M135.05 181.89c-2.99-.35-5.27-1.67-6.79-3.93-3.58-5.35-1.19-14.09-1.09-14.46l.08-.27.15-.24c1.08-1.75 10.85-17 20.37-15.36l-.68 3.94c-5.68-.97-13.58 9.26-16.14 13.28-.57 2.24-1.41 7.86.63 10.89.84 1.26 2.13 1.97 3.92 2.18l-.46 3.97h.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M165.16 201.25h-.24c-17.54-.7-29.33-1.7-33.13-8.89-2.57-4.87-2.11-8.44 1.7-13.16 3.37-4.17 9.36-9.7 18.78-12.33 6.84-1.91 13.9.03 18.01 4.94 2.73 3.27 2.71 6.08 2.21 7.87-1.1 3.94-5.5 7.18-13.47 9.91l-1.3-3.78c8.56-2.93 10.51-5.77 10.91-7.2.13-.47.53-1.88-1.43-4.22-3.1-3.71-8.54-5.14-13.86-3.65-8.4 2.35-13.74 7.27-16.75 10.99-3.04 3.76-2.98 5.57-1.28 8.78 2.77 5.25 14.48 6.15 29.51 6.75 4.76-.96 61.18-12.3 76.36-12.3h.59l-.09 4c-14.14-.32-75.68 12.14-76.3 12.26l-.24.05.02-.02Z"
      fill={colorValues.hands}
    />
    <Path
      d="m169.52 172.88-3.6-1.74c6.24-12.95-5.67-19.12-6.18-19.37l1.79-3.57c.16.08 15.92 8.23 7.99 24.69v-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M175.67 165.75c-3.52 0-6.42-1.02-6.64-1.1l1.35-3.76-.68 1.88.67-1.88c.08.03 7.67 2.66 11.57-1.41l2.89 2.77c-2.64 2.75-6.13 3.51-9.16 3.51v-.01ZM127.15 164.45c-2.38-11.4-1.06-20.32 3.9-26.51 6.49-8.1 16.75-8.34 17.19-8.34l.06 4c-.09 0-8.87.25-14.16 6.88-4.16 5.21-5.19 13-3.08 23.16l-3.92.82.01-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M152.35 226.02h-.28c-2.76-.15-4.87-2.51-4.72-5.27l1.89-34.08c.15-2.76 2.54-4.87 5.27-4.72 2.76.15 4.87 2.51 4.72 5.27l-1.89 34.08c-.15 2.66-2.35 4.72-4.99 4.72ZM161.02 26l71.02 30.46c6.69 2.87 6.45 12.44-.37 14.97l-73.66 27.36L161.02 26Z"
      fill={colorValues.main}
    />
    <Path
      d="M225.95 62.13c.57.04 1.13-.28 1.37-.83.3-.7-.02-1.52-.73-1.82l-60.7-26.1c-.71-.3-1.52.02-1.82.73-.3.7.02 1.52.73 1.82l60.7 26.1c.15.06.3.1.45.11v-.01Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedFeature;
