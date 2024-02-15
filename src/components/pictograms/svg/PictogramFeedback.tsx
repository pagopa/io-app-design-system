import React from "react";
import Svg, { Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramFeedback = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="m114.24 60.39-26.41 33.4 3.46 2.32 3.8 3.66 3.27 5.19v3.94l-4 2.71-4.08-.07 3.06 1.9 1.02 3.28-1.13 2.72-2.95 1.31s-.26 1.11-.34 1.41c-.08.3.98 3.38.98 3.38l-1.46 7.32-2.53 2.93-3.67.83-6.06-1.24-5.09-2.47-4.9-4.58L56.9 140.2l-.9 47.91 45.66-17.42 35.63-52.16-1.69-1.46-9.46-5.56-10.25-4.39-6.4-8.19.78-5.97 6.21-6.99 8.99-1.87 14.31 3.67 9.85 7.83 3.79-5.06c8.42-11.23 5.8-27.21-5.75-35.18-10.72-7.4-25.35-5.2-33.43 5.02v.01ZM71.81 178.11c-3.15-9.61-12.77-8.86-12.77-8.86l1.01-24.84c20.88-1.35 36.99 23.48 36.99 23.48L71.81 178.1v.01Z"
      fill={colorValues.main}
    />
    <Path
      d="M100.22 160.11c-.3102 0-.6202-.09-.8902-.29-.67-.49-.81-1.43-.32-2.1l32.2002-43.91c.49-.67 1.43-.81 2.1-.32.67.49.81 1.43.32 2.1l-32.2 43.91c-.29.4-.75.61-1.21.61ZM145.19 93.58c-.33 0-.66-.11-.94-.33-.65-.52-.75-1.46-.23-2.11.04-.05 3.76-4.75 5.46-10.99 2.21-8.1.11-14.91-6.25-20.25-.63-.53-.72-1.48-.18-2.11.53-.63 1.48-.72 2.11-.18 17.49 14.69 1.37 35.21 1.2 35.42-.3.37-.73.56-1.17.56v-.01Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M91.7298 113.89h-.32c-9.06-.16-19.97-8-23.82-17.13-2.57-6.1-1.66-11.94 2.57-16.43 3.23-3.43 7.03-5.21 11.29-5.27h.25c8.78 0 16.25 7.33 16.56 7.64l-2.82 2.83c-.07-.07-6.63-6.48-13.74-6.48h-.2c-3.17.06-5.93 1.37-8.42 4.02-3.94 4.19-3.15 8.91-1.79 12.13 3.24 7.69 12.68 14.56 20.2 14.69 2.03.03 4.5-.33 4.84-2.28.62-3.53-4.83-11.05-14.45-14.33l1.29-3.79c10.25 3.5 18.2402 12.29 17.1002 18.81-.3002 1.69-1.7202 5.59-8.5302 5.59h-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M83.8496 123.72c-5.34 0-14.79-1.83-21.61-13.29-4.24-7.12-5.27-12.63-3.06-16.37 2.66-4.52 8.79-4.38 9.04-4.38l-.12 4 .06-2-.05 2s-4.05-.06-5.49 2.42c-1.36 2.33-.27 6.69 3.06 12.28 3.88 6.52 9.06 10.27 15.4 11.15 5.72.79 10.19-1.09 11.09-1.77.22-.53.3-1.38.02-2.24-.19-.58-.62-1.37-1.6-1.83l1.72-3.61c1.76.84 3.07 2.33 3.68 4.2.62 1.89.48 3.96-.38 5.54-1.08 2.01-6.24 3.79-11.27 3.9h-.5.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M83.3394 138.63c-1.97 0-4.24-.45-6.8-1.35-19.8-6.99-14.57-28.16-14.52-28.37l3.87 1s-1.15 4.64-.19 9.85c1.25 6.72 5.34 11.35 12.16 13.76 2.94 1.04 6.85 1.89 8.78.04 2.69-2.56 1.36-9.65.68-11.93l3.83-1.15c.34 1.14 3.2 11.25-1.75 15.97-1.53 1.46-3.56 2.19-6.08 2.19l.02-.01ZM166.88 178.05c-10.96-1.06-23.28-5.82-36.6-14.16-9.87-6.17-16.45-11.96-16.73-12.2l2.65-3c.26.23 26.34 22.99 51.07 25.38l-.38 3.98h-.01ZM136.97 125.59l-3.54-1.85c.02-.05.91-1.93-.13-4.43-1.01-2.44-4.08-5.98-12.92-9.02-8.06-2.77-12.68-6.39-13.73-10.76-1-4.14 1.61-7.31 2.11-7.87 13.8-17.12 31.88-4.55 32.06-4.42.03.02.06.04.08.06 21.25 16.88 43.78 20.01 44.01 20.04l-.52 3.97c-.96-.13-23.83-3.3-45.93-20.83-1.01-.7-15.37-10.26-26.62 3.74-.04.05-.08.09-.12.13-.06.07-1.77 1.94-1.18 4.28.72 2.86 4.67 5.65 11.14 7.88 8.33 2.86 13.5 6.71 15.38 11.42 1.68 4.22 0 7.52-.08 7.66h-.01Z"
      fill={colorValues.hands}
    />
  </Svg>
);
export default PictogramFeedback;
