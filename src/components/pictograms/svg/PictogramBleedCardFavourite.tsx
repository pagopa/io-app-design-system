import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedCardFavourite = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M188.53 119.39L189.36 125.9L187.03 130.88L182.72 133.14L173.61 131.87L166.8 125.38L164.88 117.79C164.88 117.79 159.69 115.58 159.32 115.61C158.95 115.65 157.98 110.99 157.98 110.99C157.98 110.99 157.8 105.52 157.54 105.26C157.29 105.01 151.62 109.99 151.62 109.99L142.3 116.12L132.45 118.94L127.98 115.52L128.13 110.71L133.6 104.64L144.71 96.26L156.2 89.01L153.17 84.53L152.51 81.3H41.03C36.6 81.3 33 84.89 33 89.33V178.19C33 182.62 36.59 186.22 41.03 186.22H198.62C203.05 186.22 206.65 182.63 206.65 178.19V118.46L188.53 119.39Z"
      fill={colorValues.main}
    />
    <Path
      d="M132.86 120.66C130.37 120.66 128.05 119.42 126.67 117.24C124.97 114.58 125.13 111.23 127.07 108.72C138.57 93.79 169.17 81.05 170.46 80.52L170.73 80.43C213.07 69.7 244.38 54.16 244.69 54L246.48 57.58C246.17 57.74 214.54 73.44 171.85 84.27C169.67 85.19 140.72 97.55 130.23 111.16C129.14 112.57 129.42 114.12 130.04 115.1C130.34 115.57 131.48 117.06 133.65 116.58C142.63 114.58 155.65 108.62 166.66 91.63L170.02 93.8C158.27 111.93 144.23 118.31 134.52 120.48C133.96 120.6 133.41 120.66 132.86 120.66Z"
      fill={colorValues.hands}
    />
    <Path
      d="M163.07 119.75C160.19 119.18 158.08 117.76 156.82 115.53C154.25 111.01 156.38 104.85 156.47 104.59L160.24 105.93L158.36 105.26L160.25 105.92C159.79 107.22 158.92 111.13 160.31 113.56C160.98 114.74 162.14 115.48 163.86 115.82L163.08 119.74L163.07 119.75Z"
      fill={colorValues.hands}
    />
    <Path
      d="M180.99 135.72C176.74 135.72 171.75 133.69 167.1 128.83C163.43 125 161.94 121 162.66 116.92C164.13 108.64 174.45 103.5 174.89 103.29L176.65 106.88C176.56 106.92 167.71 111.35 166.6 117.63C166.12 120.37 167.26 123.21 169.99 126.06C176.01 132.35 182.56 132.85 185.67 130.13C188.22 127.9 187.87 123.93 184.75 120.03L187.88 117.54C193.07 124.04 191.83 130.06 188.3 133.15C186.43 134.79 183.88 135.73 180.99 135.73V135.72Z"
      fill={colorValues.hands}
    />
    <Path
      d="M178.88 120.91C178.6 120.91 178.42 120.91 178.34 120.91L178.39 116.91C178.75 116.91 216.21 117.18 244.61 101.29L246.56 104.78C218.76 120.34 183.84 120.91 178.88 120.91Z"
      fill={colorValues.hands}
    />
    <Path
      d="M156.12 90.4C155.47 89.94 149.8 85.78 150.1 80.86C150.25 78.36 151.82 76.29 154.77 74.7C164.2 69.62 194.75 72.85 196.04 72.99L195.61 76.97C187.13 76.05 163.59 74.49 156.67 78.22C155.03 79.11 154.16 80.08 154.1 81.1C153.96 83.41 157.27 86.31 158.44 87.14L156.13 90.4H156.12Z"
      fill={colorValues.hands}
    />
    <Path
      d="M206.65 162.48H33V165.48H206.65V162.48Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M58.8199 91.39L63.2699 100.41L73.2199 101.86L66.0199 108.87L67.7199 118.78L58.8199 114.1L49.9199 118.78L51.6199 108.87L44.4199 101.86L54.3699 100.41L58.8199 91.39Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedCardFavourite;