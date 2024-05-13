import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedActivate = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      fill={colorValues.main}
      d="m144.48 143.66 1.16-5.41 2.04-2.6 3.33-.83c.16-.46.31-.92.44-1.39l-3.11.47-6.8-.96h-9.24s-3.35-.93-5.35-1.75c-2-.82-1.78-1.35-2.36-2.01-.57-.66-1.43-.82-1.43-.82l.02-3.01-.86-1.79 3.25-4.74 2.17-1.69 2.84-1.05 4.03-.7 13.72-1.48 3.15-.11c-4.23-14.53-17.63-25.15-33.52-25.15H42.91C23.63 88.65 8 104.28 8 123.57c0 19.28 15.63 34.91 34.91 34.91h75.05c10.86 0 20.56-4.96 26.96-12.73l-.45-2.08.01-.01Z"
    />
    <Path
      fill={colorValues.secondary}
      d="M43.13 149.97c14.58 0 26.4-11.82 26.4-26.4 0-14.58-11.82-26.4-26.4-26.4-14.58 0-26.4 11.82-26.4 26.4 0 14.58 11.82 26.4 26.4 26.4Z"
    />
    <Path
      fill={colorValues.hands}
      d="M133.026 116.075c10.19-1.93 81.474-6.41 109.474 9.089l1.41-3.74c-24.41-15.763-101.104-11.269-111.624-9.269-5.67 1.07-9.65 6.1-9.26 11.68.25 3.64 2.38 8.28 11.09 9.68 15.98 2.57 29.78-.26 30.36-.38l-.82-3.92c-.14.03-13.65 2.8-28.9.34-7.4-1.2-7.66-4.82-7.74-6.01-.25-3.56 2.33-6.77 6.01-7.47Z"
    />
    <Path
      fill={colorValues.hands}
      d="M169.026 155.434c-.25 0-.5-.01-.74-.04-2.86-.28-4.82-2.19-5.36-5.23-.75-4.24 1.3-10.09 6.11-17.36 3.44-5.21 7.03-9.24 7.18-9.41l2.98 2.67c-3.83 4.28-13.5 16.84-12.33 23.41.28 1.59 1.04 1.88 1.81 1.95 4.02.4 12.54-5.66 14.87-11.62l3.72 1.46c-2.77 7.07-12.05 14.18-18.25 14.18l.01-.01Z"
    />
    <Path
      fill={colorValues.hands}
      d="M189.457 156.214c-.76-3.95-6.5-7.16-8.65-8.07l1.55-3.69c.4.17 9.71 4.14 11.03 11l-3.93.75v.01ZM155.287 153.674c-3.2 0-6.37-.78-8.24-3.29-2.41-3.24-3.22-8.18-2-12.31.99-3.35 3.17-5.81 6.13-6.91.74-.28 1.53-.47 2.35-.57l.5 3.97c-.52.06-1.01.18-1.46.35-2.25.84-3.25 2.8-3.69 4.29-.86 2.93-.3 6.54 1.37 8.78 2.42 3.25 11.11.99 13.96-.06l1.38 3.75c-.84.31-5.61 1.99-10.31 1.99l.01.01Z"
    />
    <Path
      fill={colorValues.hands}
      d="M168.896 168.314c-2.27 0-4.46-.51-6.55-1.52-8.18-3.97-11.68-14.35-11.83-14.79l3.8-1.25c.03.09 3.14 9.23 9.79 12.45 2.91 1.41 6.03 1.48 9.51.21 3.5-1.27 5.57-2.79 5.68-4.17.14-1.9-3.15-4.62-5.42-5.85l1.9-3.52c.81.44 7.89 4.42 7.51 9.66-.23 3.15-3.02 5.72-8.3 7.64-2.08.76-4.12 1.14-6.09 1.14Z"
    />
    <Path
      fill={colorValues.hands}
      d="M241 177.662c-35.5 4.5-64.721-10.34-65.647-10.804l1.798-3.576c.218.105 30.849 14.38 63.595 10.39l.254 3.99Z"
    />
    <Path
      fill={colorValues.secondary}
      d="M132.6 73.11c-.26 0-.53-.07-.77-.21-.71-.43-.94-1.35-.51-2.06l22.86-38.11c.43-.71 1.35-.94 2.06-.51.71.43.94 1.35.51 2.06l-22.87 38.11a1.5 1.5 0 0 1-1.29.73l.01-.01ZM144.04 83.94c-.63 0-1.22-.41-1.43-1.04-.25-.79.18-1.63.97-1.89l45.23-14.47c.79-.25 1.63.18 1.89.97.25.79-.18 1.63-.97 1.89L144.5 83.87c-.15.05-.31.07-.46.07Z"
    />
  </Svg>
);

export default PictogramBleedActivate;