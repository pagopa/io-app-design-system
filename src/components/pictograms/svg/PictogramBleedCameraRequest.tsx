import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedCameraRequest = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M20 165.98v15.07c0 5.87 4.76 10.63 10.63 10.63h152.76c5.87 0 10.63-4.76 10.63-10.63v-14.83c0-.39-9.03-5.96-15.92-6.83-6.89-.87-18.52-5.24-18.52-5.24-10.32-3.9-.23-16.35-.23-16.35l1.09 2.1c-11.11-.83-14.35-9.17-14.35-9.17l7.68-7.01-2.88-.69-.78-5.36 2.85-2.77 1.38-.98s4.14-1.27 4.79-1.33c.65-.06 6.02.68 6.02.68l7.73.98s11.4 3.27 11.63 3.34c.23.07 9.5 4.71 9.5 4.71V80.21c0-5.87-4.76-10.63-10.63-10.63H30.63C24.76 69.57 20 74.33 20 80.21V165.98Z"
      fill={colorValues.main}
    />
    <Path
      d="M240.33 133.99c-9.7-6.57-37.08-23.63-47.18-23.63v-4.2c13.44 0 48.07 23.36 49.53 24.35l-2.36 3.48h.01ZM176.97 132.82c-19.38-2.54-29-6.34-30.27-11.94-.78-3.43 1.93-6.24 3.66-7.36 9.65-6.19 40.15 5.89 43.59 7.29l-1.58 3.89c-12.24-4.96-33.85-11.43-39.74-7.65 0 0-2.16 1.51-1.84 2.91.21.89 2.47 5.51 26.72 8.69l-.55 4.16.01.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M176.81 146.69c-28.52-5.99-32.37-11.92-32.78-15.85-.55-5.29 6.04-8.35 6.79-8.68l1.69 3.84c-1.49.66-4.5 2.61-4.31 4.41.15 1.44 2.73 6.56 29.46 12.17l-.86 4.11h.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M240.65 186.41c-38.99-17.68-53.2-21.59-71.19-26.54l-2.55-.7c-9.02-2.49-14.19-6.14-15.38-10.85-1.36-5.4 3.12-9.75 3.31-9.94l2.91 3.03s-2.92 2.88-2.14 5.9c.78 3.04 5.19 5.81 12.42 7.81l2.54.7c18.17 5 32.52 8.95 71.81 26.76l-1.73 3.82v.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M63.2699 49h-32.72c-1.5795 0-2.86 1.2805-2.86 2.86v9.97c0 1.5795 1.2805 2.86 2.86 2.86h32.72c1.5796 0 2.86-1.2805 2.86-2.86v-9.97c0-1.5795-1.2804-2.86-2.86-2.86Z"
      fill={colorValues.main}
    />
    <Path
      d="M105.01 140.34c-.83 0-1.5-.67-1.5-1.5v-36.9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v36.9c0 .83-.67 1.5-1.5 1.5ZM105.14 155.34c2.027 0 3.67-1.643 3.67-3.67s-1.643-3.67-3.67-3.67-3.67 1.643-3.67 3.67 1.643 3.67 3.67 3.67Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M105.14 166.76c-21.02 0-38.12-17.1-38.12-38.12 0-21.02 17.1-38.12 38.12-38.12 21.02 0 38.12 17.1 38.12 38.12 0 21.02-17.1 38.12-38.12 38.12Zm0-73.23c-19.36 0-35.12 15.75-35.12 35.12 0 19.37 15.75 35.12 35.12 35.12 19.37 0 35.12-15.75 35.12-35.12 0-19.37-15.75-35.12-35.12-35.12ZM180.56 95.54h-23.67c-2.78 0-5.04-2.26-5.04-5.04v-9.23c0-2.78 2.26-5.04 5.04-5.04h23.67c2.78 0 5.04 2.26 5.04 5.04v9.23c0 2.78-2.26 5.04-5.04 5.04Zm-23.67-16.32c-1.13 0-2.04.92-2.04 2.04v9.23c0 1.13.92 2.04 2.04 2.04h23.67c1.13 0 2.04-.92 2.04-2.04v-9.23c0-1.13-.92-2.04-2.04-2.04h-23.67Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedCameraRequest;
