import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconTypeface = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      d="M22.56 18.8877C21.692 18.8877 21.1002 18.6115 20.7649 18.0986C19.7193 18.789 18.6541 19.1244 17.4902 19.1244C15.3597 19.1244 14.0972 17.9605 14.0972 16.0075C14.0972 14.1137 15.2019 13.1274 17.5691 12.9301L20.4887 12.6934V12.2002C20.4887 10.9969 19.7391 10.3262 18.4568 10.3262C17.431 10.3262 16.78 10.6813 16.4644 11.4506H14.0972C14.7087 9.61601 16.2869 8.59021 18.5752 8.59021C21.1594 8.59021 22.7376 10.0105 22.7376 12.3778V16.4021C22.7376 16.8952 22.9348 17.0925 23.428 17.0925H24.0001V18.8877H22.56ZM16.3066 15.9286C16.3066 16.8558 16.9378 17.3884 18.1412 17.3884C18.8908 17.3884 19.6207 17.132 20.4887 16.5993V14.2913L17.8847 14.528C16.7406 14.6266 16.3066 15.0409 16.3066 15.9286Z"
    />
    <Path
      fill="currentColor"
      d="M0 18.8877L4.912 5H8.16694L13.0789 18.8877H10.5736L9.44919 15.5736H3.5903L2.46586 18.8877H0ZM4.24128 13.6404H8.7982L6.50988 6.87406L4.24128 13.6404Z"
    />
  </Svg>
);

export default IconTypeface;
