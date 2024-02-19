import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramSearch = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fill={color}
      d="M71.698 44.23a2.309 2.309 0 0 0 0 4.616 2.308 2.308 0 0 0 0-4.616Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="m84.806 71.978 30.803 30.803a9.164 9.164 0 0 1 2.705 6.526 9.163 9.163 0 0 1-2.706 6.527 9.164 9.164 0 0 1-6.525 2.704 9.17 9.17 0 0 1-6.527-2.704L71.753 85.031c-7.558 5.017-16.311 7.661-25.44 7.661C20.864 92.692.16 71.987.16 46.538.16 21.088 20.864.384 46.314.384c25.449 0 46.153 20.705 46.153 46.154 0 9.128-2.643 17.881-7.66 25.44Zm-14.138 8.19a41.742 41.742 0 0 0 9.275-9.276c5.174-7.123 7.909-15.544 7.909-24.354C87.852 23.634 69.218 5 46.313 5 23.41 5 4.776 23.634 4.776 46.538c0 22.904 18.634 41.539 41.538 41.539 8.81 0 17.232-2.736 24.355-7.91Zm4.841 2.092a46.304 46.304 0 0 0 6.526-6.526l6.547 6.547a56.016 56.016 0 0 1-6.525 6.526L75.51 82.26Zm33.574 31.663c1.232 0 2.39-.48 3.263-1.353a4.583 4.583 0 0 0 1.352-3.263 4.58 4.58 0 0 0-1.352-3.262L91.854 85.554a60.64 60.64 0 0 1-6.525 6.525l20.491 20.491a4.582 4.582 0 0 0 3.263 1.353Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.39 46.538c0-20.36 16.564-36.923 36.923-36.923 20.36 0 36.924 16.563 36.924 36.923 0 20.36-16.564 36.923-36.923 36.923-20.36 0-36.924-16.563-36.924-36.923Zm4.616 0c0 17.815 14.493 32.308 32.307 32.308 17.815 0 32.308-14.493 32.308-32.308 0-17.814-14.493-32.308-32.307-32.308-17.815 0-32.308 14.494-32.308 32.308Z"
    />
    <Path
      fill={color}
      d="M72.175 36.632a27.693 27.693 0 0 0-10.006-12.788 27.496 27.496 0 0 0-15.855-4.998 2.308 2.308 0 0 0 0 4.615c9.484 0 18.145 5.958 21.552 14.826a2.308 2.308 0 1 0 4.309-1.655Z"
    />
  </Svg>
);

export default PictogramSearch;
