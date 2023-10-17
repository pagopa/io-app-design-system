import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramTime = ({ size, colorValues, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="m116.73 131.98-7.11-12.28H99.54l6.33 14.49M110.77 152.41l7.72 18.06 13.29.65-9.93-22.6"
      fill={colorValues.main}
    />
    <Path
      d="M56.2599 142.14c-.12-.51-2.72-12.5 10.58-20.76 12.44-7.72 94.8501-1.08 104.2101-.29l-.33 3.99c-25.06-2.1-92.1801-6.24-101.7601-.29-10.8 6.7-8.88 16.07-8.79 16.47l-3.9.89-.01-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M57.02 159.18c-2.94-9.01-2.66-16.03.81-20.85 4.31-5.99 11.85-6.13 12.17-6.13l.04 4c-.06 0-5.88.15-8.99 4.49-2.66 3.73-2.74 9.54-.23 17.25l-3.8 1.24Z"
      fill={colorValues.hands}
    />
    <Path
      d="M72.0502 178.26c-5.62 0-10.23-5.56-10.43-5.81-4.01-5.29-5.5-10.54-4.47-15.67 1.76-8.73 10.23-13.71 10.59-13.92l2 3.46c-.07.04-7.29 4.32-8.68 11.27-.79 3.95.45 8.11 3.69 12.38.98 1.19 4.33 4.4 7.48 4.28l.17 4h-.37l.02.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M88.9398 188.36c-2.88 0-5.83-.62-8.64-1.86-5.47-2.39-8.92-5.98-10.27-10.66-2.65-9.18 3.96-19.07 4.24-19.49l3.31 2.25-1.65-1.12 1.66 1.12c-.06.09-5.84 8.78-3.71 16.15 1.01 3.48 3.71 6.2 8.03 8.09 3.82 1.67 7.89 1.98 11.46.86 4.55-1.42 4.25-3.7 4.14-4.56-.23-1.75-1.57-3.32-3.5-4.1-2.22-.9-4.48-1.24-6.7-1.02l-.4-3.98c2.88-.29 5.77.15 8.59 1.29 3.27 1.32 5.5502 4.11 5.9702 7.29.32 2.42-.16 6.79-6.9202 8.9-1.8.56-3.69.84-5.61.84Z"
      fill={colorValues.hands}
    />
    <Path
      d="M184.7 177.18c-47.03-7.67-89.26-2.06-89.68-2.01l-.54-3.96c.43-.06 43.22-5.74 90.87 2.02l-.64 3.95h-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M116.891 152.83c4.995-1.604 7.493-7.738 5.578-13.701-1.914-5.963-7.516-9.497-12.512-7.893-4.995 1.604-7.493 7.738-5.578 13.701 1.914 5.963 7.516 9.497 12.512 7.893Z"
      fill={colorValues.main}
    />
    <Path
      d="M115.06 152.41c-1.62 0-3.26-.49-4.77-1.44-2.2-1.39-3.89-3.62-4.74-6.29-1.8-5.59.66-11.4 5.47-12.95.79-.25 1.63.18 1.89.97.25.79-.18 1.63-.97 1.89-3.24 1.04-4.82 5.15-3.53 9.17.64 1.99 1.88 3.65 3.49 4.67 1.52.96 3.2 1.22 4.72.74.79-.25 1.63.18 1.89.97.25.79-.18 1.63-.97 1.89-.81.26-1.63.39-2.47.39l-.01-.01ZM93.79 109.44c-.4 0-.8-.16-1.1-.48L62.47 76.38c-.56-.61-.53-1.56.08-2.12s1.56-.53 2.12.08l30.22 32.58c.56.61.53 1.56-.08 2.12-.29.27-.65.4-1.02.4ZM107.37 101.48c-.81 0-1.48-.65-1.5-1.46l-1.29-47.48c-.02-.83.63-1.52 1.46-1.54.81-.05 1.52.63 1.54 1.46l1.29 47.48c.02.83-.63 1.52-1.46 1.54h-.04Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramTime;
