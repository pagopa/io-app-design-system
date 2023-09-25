import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramCameraRequest = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M7 160.98v15.07c0 5.87 4.76 10.63 10.63 10.63h152.76c5.87 0 10.63-4.76 10.63-10.63v-8.43c0-.39-11.44-17.76-18.33-18.63-6.89-.87-15.91-3.54-15.91-3.54-10.32-3.9-.42-12.65-.42-12.65l2.72-.43c-11.11-.83-12.16-11.46-12.16-11.46l5.18-2.95-1.41-2.87-.67-2.83-.07-2.37 1.38-.98s4.14-1.27 4.79-1.33c.65-.06 6.02.68 6.02.68l7.73.98s11.4 3.27 11.63 3.34c.23.07 9.5 4.71 9.5 4.71V75.21c0-5.87-4.76-10.63-10.63-10.63H17.63C11.76 64.57 7 69.33 7 75.21V160.98Z"
      fill="#AAEEEF"
    />
    <Path
      d="M229.74 154.75c-14.46-19.53-40.46-50.52-48.72-50.52v-4c12.97 0 47.98 46.8 51.93 52.14l-3.21 2.38ZM165.6 125.62c-18.46-2.42-27.63-6.04-28.84-11.37-.74-3.27 1.84-5.94 3.48-7.01 9.19-5.89 38.25 5.61 41.53 6.94l-1.5 3.71c-11.66-4.73-32.25-10.89-37.85-7.29 0 0-2.06 1.44-1.75 2.77.2.85 2.36 5.25 25.46 8.28l-.52 3.97h-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M165.45 138.84c-27.17-5.71-30.83-11.35-31.22-15.1-.53-5.04 5.75-7.95 6.47-8.27l1.62 3.66c-1.42.63-4.29 2.49-4.1 4.2.15 1.37 2.6 6.25 28.07 11.6l-.82 3.91h-.02Z"
      fill={colorValues.hands}
    />
    <Path
      d="M201.77 196.03c-2.43-3.36-4.81-6.87-7.33-10.59-11.38-16.79-23.15-34.16-38.58-35.71-8.27-.83-13.23-3.3-14.76-7.35-2.06-5.44 3.13-11.13 3.35-11.37l2.94 2.71c-1.04 1.14-3.53 4.66-2.55 7.25.93 2.43 4.98 4.13 11.42 4.77 17.29 1.74 29.59 19.89 41.49 37.45 2.5 3.69 4.86 7.18 7.26 10.49l-3.24 2.34v.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M50.2699 44h-32.72c-1.5795 0-2.86 1.2805-2.86 2.86v9.97c0 1.5795 1.2805 2.86 2.86 2.86h32.72c1.5796 0 2.86-1.2805 2.86-2.86v-9.97c0-1.5795-1.2804-2.86-2.86-2.86Z"
      fill="#AAEEEF"
    />
    <Path
      d="M92.0098 135.34c-.83 0-1.5-.67-1.5-1.5v-36.9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v36.9c0 .83-.67 1.5-1.5 1.5ZM92.1402 150.34c2.0269 0 3.67-1.643 3.67-3.67s-1.6431-3.67-3.67-3.67-3.67 1.643-3.67 3.67 1.6431 3.67 3.67 3.67Z"
      fill="#00C5CA"
    />
    <Path
      d="M92.14 161.76c-21.02 0-38.12-17.1-38.12-38.12 0-21.02 17.1-38.12 38.12-38.12 21.02 0 38.12 17.1 38.12 38.12 0 21.02-17.1 38.12-38.12 38.12Zm0-73.23c-19.36 0-35.12 15.75-35.12 35.12 0 19.37 15.75 35.12 35.12 35.12 19.37 0 35.12-15.75 35.12-35.12 0-19.37-15.75-35.12-35.12-35.12ZM167.56 90.54h-23.67c-2.78 0-5.04-2.26-5.04-5.04v-9.23c0-2.78 2.26-5.04 5.04-5.04h23.67c2.78 0 5.04 2.26 5.04 5.04v9.23c0 2.78-2.26 5.04-5.04 5.04Zm-23.67-16.32c-1.13 0-2.04.92-2.04 2.04v9.23c0 1.13.92 2.04 2.04 2.04h23.67c1.13 0 2.04-.92 2.04-2.04v-9.23c0-1.13-.92-2.04-2.04-2.04h-23.67Z"
      fill="#00C5CA"
    />
  </Svg>
);

export default PictogramCameraRequest;
