import React from "react";
import Svg, { Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramSuccess = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="m113.74 163 1.1-8.41 5.3-3.55 5.06-.4 1.57-4.88.83-5.55 5.66-3.03 7.35-.79 5.07 1.07 4.32 5.48 2.47-19.83 3.92-8.98 5.78-5.32 4.53-.75c.29-2.62.44-5.29.44-7.99C167.13 59.71 134.42 27 94.07 27 53.72 27 21 59.71 21 100.07c0 40.36 32.71 73.07 73.07 73.07 7.71 0 15.14-1.2 22.12-3.42l-2.45-6.72Z"
      fill={colorValues.main}
    />
    <Path
      d="M142.56 202.43c-1.34 0-2.8-.15-4.38-.44-11.03-2.03-18.79-11.47-21.33-19.38-1.55-4.83-1.17-8.91 1.04-11.2l2.88 2.78c-1.1 1.15-1.15 3.97-.11 7.2 2.19 6.81 8.83 14.93 18.24 16.67 4.38.81 7.34.32 8.79-1.45 2.45-2.98.69-9.42-.19-11.65l3.72-1.48c.42 1.04 3.94 10.34-.43 15.67-1.79 2.19-4.56 3.29-8.24 3.29l.01-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M146.3 185.03c-3.04 0-6.72-.53-11.06-1.59-17.32-4.23-21.57-16.39-22.56-23.26-.54-3.75.43-7.46 2.67-10.18 2.92-3.55 6.82-4.24 10.97-1.93l-1.94 3.5c-2.44-1.36-4.27-1.06-5.94.97-1.52 1.85-2.18 4.43-1.8 7.07.85 5.87 4.51 16.27 19.55 19.94 10.44 2.55 15.19 1.37 16.16-.59.72-1.45-.4-3.66-1.49-4.54l2.51-3.11c2.54 2.05 4.19 6.14 2.56 9.42-1.41 2.85-4.64 4.28-9.63 4.28v.02Z"
      fill={colorValues.hands}
    />
    <Path
      d="M152.04 174.91c-4.89 0-11.5-3.06-20.94-9.63-5.64-3.93-8.3-10.28-7.68-18.38.57-7.5 6.31-13.6 13.35-14.17 2.09-.17 6.42-.52 9.73 2.42 2.47 2.19 3.81 5.75 3.99 10.57l-4 .15c-.14-3.69-1.03-6.29-2.65-7.73-1.88-1.67-4.47-1.61-6.75-1.42-5.1.41-9.26 4.92-9.68 10.48-.51 6.7 1.5 11.68 5.98 14.8 9.75 6.79 16.31 9.65 20.07 8.76 1.4-.33 2.45-1.21 3.29-2.76.81-1.49-.55-3.8-1.42-5.05-4.33-6.17-14.65-12.19-18.35-11.63l-.6-3.95c6.01-.92 17.61 6.71 22.22 13.28 3.12 4.44 2.63 7.49 1.67 9.26-1.38 2.55-3.36 4.15-5.88 4.75-.73.17-1.51.26-2.34.26l-.01-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M199.72 163.99c-7.16 0-14.29-1.78-21.16-5.33-6.79-3.51-11.4-10.13-12.34-17.7-.51-4.15.37-9.46 1.22-14.59 1.01-6.09 2.16-12.98.19-15.3-.33-.39-.94-.9-2.49-.9-2.91 0-5.32 1.04-7.39 3.19-7.96 8.27-7.27 29.08-7.26 29.29l-4 .15c-.03-.92-.75-22.73 8.37-32.21 2.82-2.93 6.27-4.41 10.27-4.41 2.38 0 4.24.78 5.54 2.31 3.16 3.73 1.97 10.92.7 18.54-.8 4.85-1.64 9.86-1.2 13.44.79 6.36 4.51 11.69 10.21 14.64 11.84 6.13 24.52 6.48 36.67 1.03l1.64 3.65c-6.25 2.8-12.63 4.2-18.98 4.2h.01ZM194.04 212.26c-6.74 0-14.48-.86-23.27-3.07-13.54-3.42-23.05-8.39-23.44-8.6l1.87-3.54c.37.2 37.68 19.53 67.92 6.96l1.54 3.69c-5.69 2.36-13.86 4.55-24.61 4.55l-.01.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M88.22 123.5c-.4 0-.79-.16-1.07-.45L61.92 97.31c-.58-.59-.57-1.54.02-2.12.59-.58 1.54-.57 2.12.02l24.13 24.62 42.36-45.48c.56-.61 1.52-.64 2.12-.08.61.56.64 1.51.08 2.12l-43.43 46.63c-.28.3-.67.47-1.08.48h-.02Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramSuccess;
