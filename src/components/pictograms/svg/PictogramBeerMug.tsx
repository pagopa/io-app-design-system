import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBeerMug = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      d="M98.686 22.979H85.278v-5.745a1.915 1.915 0 0 0-1.915-1.915H6.746a1.915 1.915 0 0 0-1.916 1.915V95l-1.696 15.261c-.286 2.574.47 5.012 2.13 6.865 1.659 1.854 4 2.874 6.59 2.874h66.4c2.591 0 4.931-1.021 6.59-2.874 1.66-1.854 2.416-4.292 2.13-6.865l-1.696-15.26v-5.64h13.408c9.506 0 17.239-7.73 17.239-17.233V40.213c0-9.503-7.733-17.234-17.239-17.234Zm13.408 49.149c0 7.39-6.015 13.404-13.408 13.404H83.363a1.915 1.915 0 0 0-1.916 1.915v7.66c0 .07.004.14.012.21l1.708 15.367c.164 1.476-.254 2.857-1.177 3.888-.922 1.031-2.25 1.598-3.735 1.598H11.854c-1.486 0-2.813-.568-3.735-1.598-.923-1.031-1.341-2.412-1.177-3.888L8.65 95.318c.008-.07.012-.141.012-.212V19.15h3.83v60.638a1.915 1.915 0 0 0 3.831 0V19.15h57.463v66.383H14.408a1.915 1.915 0 0 0-1.915 1.915v7.66c0 1.057.857 1.914 1.915 1.914H75.7a1.915 1.915 0 0 0 1.916-1.915V19.15h3.83v5.745c0 1.057.858 1.915 1.916 1.915h15.323c7.394 0 13.408 6.013 13.408 13.404v31.915ZM73.786 89.362v3.83H16.322v-3.83h57.462Z"
      fill={color}
    />
    <Path
      d="M98.686 30.638H83.363a1.915 1.915 0 0 0-1.916 1.915v47.234c0 1.058.858 1.915 1.916 1.915h15.323c5.281 0 9.577-4.295 9.577-9.575V40.213c0-5.28-4.296-9.575-9.577-9.575Zm5.746 41.49a5.752 5.752 0 0 1-5.746 5.745H85.278V34.468h13.408a5.752 5.752 0 0 1 5.746 5.745v31.915ZM61.488.729a1.915 1.915 0 0 0-2.502 1.036l-2.932 7.077a1.915 1.915 0 1 0 3.539 1.465l2.932-7.076A1.914 1.914 0 0 0 61.488.729ZM34.054 8.842l-2.931-7.077a1.916 1.916 0 0 0-3.54 1.466l2.932 7.076a1.915 1.915 0 1 0 3.54-1.465ZM45.054 0a1.915 1.915 0 0 0-1.915 1.915v7.66a1.915 1.915 0 0 0 3.83 0v-7.66A1.915 1.915 0 0 0 45.054 0Z"
      fill={color}
    />
  </Svg>
);

export default PictogramBeerMug;
