import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramCie = ({ size, colorValues, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M7 150.41v15.07c0 5.87 4.76 10.63 10.63 10.63h152.76c5.87 0 10.63-4.76 10.63-10.63v-8.43c0-.39-11.44-17.76-18.33-18.63-6.89-.87-15.91-3.54-15.91-3.54-10.32-3.9-.42-12.65-.42-12.65l2.72-.43c-11.11-.83-12.16-11.46-12.16-11.46l5.18-2.95-1.41-2.87-.67-2.83-.07-2.37 1.38-.98s4.14-1.27 4.79-1.33c.65-.06 6.02.68 6.02.68l7.73.98s11.4 3.27 11.63 3.34c.23.07 9.5 4.71 9.5 4.71V64.63c0-5.87-4.76-10.63-10.63-10.63H17.63C11.76 54 7 58.76 7 64.63V150.41Z"
      fill="#AAEEEF"
    />
    <Path
      d="M168.31 172.12H18.9201c-4.6 0-8.34-3.74-8.34-8.34V65.41c0-4.59 3.74-8.33 8.34-8.33H169.51c4.6 0 8.34 3.74 8.34 8.34v37.71c0 .75-.61 1.35-1.35 1.35-.74 0-1.35-.61-1.35-1.35V65.41c0-3.1-2.53-5.63-5.63-5.63H18.9201c-3.1 0-5.63 2.53-5.63 5.63v98.37c0 3.1 2.53 5.63 5.63 5.63H168.31c3.1 0 5.63-2.53 5.63-5.63v-16.29c0-.75.61-1.35 1.35-1.35.74 0 1.35.61 1.35 1.35v16.29c0 4.6-3.74 8.34-8.34 8.34h.01Z"
      fill="#00C5CA"
    />
    <Path
      d="M229.74 144.18c-14.45-19.53-40.46-50.52-48.71-50.52v-4c12.97 0 47.98 46.8 51.93 52.14l-3.22 2.38ZM165.6 115.05c-18.46-2.42-27.63-6.04-28.84-11.37-.74-3.26 1.84-5.94 3.48-7.01 9.19-5.9 38.25 5.61 41.53 6.94l-1.5 3.71c-11.66-4.73-32.25-10.89-37.85-7.29 0 0-2.06 1.44-1.75 2.77.2.85 2.36 5.25 25.45 8.28l-.52 3.97Z"
      fill={colorValues.hands}
    />
    <Path
      d="M165.45 128.27c-27.17-5.71-30.83-11.35-31.22-15.1-.52-5.04 5.75-7.95 6.47-8.27l1.62 3.66c-1.42.63-4.29 2.49-4.1 4.2.15 1.37 2.6 6.25 28.07 11.6l-.82 3.91h-.02Z"
      fill={colorValues.hands}
    />
    <Path
      d="M201.77 185.46c-2.43-3.36-4.81-6.87-7.33-10.59-11.38-16.79-23.15-34.16-38.58-35.71-8.27-.83-13.23-3.3-14.76-7.35-2.06-5.44 3.13-11.13 3.35-11.37l2.94 2.72c-1.04 1.14-3.53 4.66-2.55 7.25.93 2.43 4.98 4.13 11.42 4.77 17.29 1.74 29.59 19.89 41.49 37.45 2.5 3.69 4.86 7.18 7.26 10.49l-3.24 2.34Z"
      fill={colorValues.hands}
    />
    <Path
      d="M43.6602 138.19c-8.36 0-15.17-6.8-15.17-15.17 0-8.37 6.8-15.17 15.17-15.17 8.37 0 15.17 6.8 15.17 15.17 0 8.37-6.8 15.17-15.17 15.17Zm0-27.33c-6.71 0-12.17 5.46-12.17 12.17s5.46 12.17 12.17 12.17 12.17-5.46 12.17-12.17-5.46-12.17-12.17-12.17Z"
      fill="#00C5CA"
    />
    <Path
      d="M63.5003 158.12c-.83 0-1.5-.67-1.5-1.5 0-10.11-8.23-18.34-18.34-18.34s-18.34 8.23-18.34 18.34c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-11.77 9.57-21.34 21.34-21.34s21.34 9.57 21.34 21.34c0 .83-.67 1.5-1.5 1.5ZM118.02 139.21H75.4902c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H118.02c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5ZM104.62 77H29.9902c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5H104.62c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5ZM71.6702 88.77h-41.68c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5h41.67c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h.01ZM107.18 153.73H75.4902c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H107.18c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5ZM124.2 146.66H75.4902c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H124.2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z"
      fill="#00C5CA"
    />
  </Svg>
);

export default PictogramCie;
