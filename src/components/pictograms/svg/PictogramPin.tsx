import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramPin = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fill={color}
      d="M41.202 24.844c1.297 0 2.35-1.05 2.35-2.344a2.35 2.35 0 0 0-4.7 0 2.35 2.35 0 0 0 2.35 2.344Z"
    />
    <Path
      fill={color}
      d="M60 13.125c16.844 0 30.546 13.668 30.546 30.469 0 16.8-13.702 30.468-30.546 30.468S29.454 60.395 29.454 43.594c0-5.215 1.307-10.216 3.884-14.862a2.353 2.353 0 0 1 3.193-.916A2.341 2.341 0 0 1 37.45 31c-2.187 3.945-3.297 8.18-3.297 12.593 0 14.215 11.595 25.781 25.847 25.781s25.847-11.566 25.847-25.781c0-14.216-11.595-25.782-25.847-25.782-3.44 0-6.496.608-9.91 1.97a2.353 2.353 0 0 1-3.055-1.305 2.343 2.343 0 0 1 1.31-3.047c3.941-1.573 7.645-2.305 11.655-2.305Z"
    />
    <Path
      fill={color}
      d="M60 55.313a2.348 2.348 0 0 0-2.35 2.343A2.348 2.348 0 0 0 60 60c1.297 0 2.35-1.05 2.35-2.344A2.348 2.348 0 0 0 60 55.313ZM63.804 45.438c-.584.404-1.046.725-1.195.967-.118.194-.26.677-.26 1.876A2.347 2.347 0 0 1 60 50.625a2.347 2.347 0 0 1-2.35-2.344c0-3.997 1.312-5.194 3.472-6.692.569-.395 1.213-.843 1.953-1.48a4.683 4.683 0 0 0 1.624-3.547c0-2.584-2.108-4.687-4.699-4.687a4.693 4.693 0 0 0-4.7 4.688 2.346 2.346 0 0 1-2.35 2.343 2.347 2.347 0 0 1-2.349-2.343c0-5.18 4.207-9.376 9.399-9.376 5.182 0 9.399 4.206 9.399 9.375a9.365 9.365 0 0 1-3.248 7.09c-.928.801-1.715 1.347-2.347 1.786Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M61.854 119.096a2.352 2.352 0 0 1-3.708 0C56.466 116.945 17 66.145 17 43.594 17 20.754 36.192 0 60 0c23.832 0 43 20.779 43 43.594 0 22.551-39.466 73.351-41.146 75.502ZM60 4.687c-20.403 0-38.3 18.181-38.3 38.907 0 17.396 27.685 56.168 38.3 70.199 10.539-13.933 38.3-52.76 38.3-70.2C98.3 22.869 80.404 4.688 60 4.688Z"
    />
  </Svg>
);

export default PictogramPin;
