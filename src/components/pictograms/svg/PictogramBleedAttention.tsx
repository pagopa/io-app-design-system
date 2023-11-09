import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedAttention = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M185.04 102.91L182.33 106.14L179.12 108.17L173.91 110.09L168.03 107.77L163.58 101.84L160.08 94.1L160.55 87.96L159.15 86.35L155.57 83.19L154.12 79.53L154.41 74.04L151.3 72.25L149.05 72.73L142.54 74.72L134.89 75.96L131.51 76.66L124.36 75.13L121.55 73.4L120.1 68.59L120.65 64.78L129.35 59.57L127.43 58.46C123.64 56.27 118.96 56.27 115.17 58.46L62.13 89.07C58.34 91.26 56 95.31 56 99.69V160.92C56 165.3 58.34 169.35 62.13 171.54L115.16 202.16C118.95 204.35 123.63 204.35 127.42 202.16L180.45 171.54C184.24 169.35 186.58 165.3 186.58 160.92V101.8L185.04 102.9V102.91Z"
      fill={colorValues.main}
    />
    <Path
      d="M186.58 94.65V92.61L186.13 92.35L186.58 94.65Z"
      fill={colorValues.main}
    />
    <Path
      d="M239.62 101.63C203.58 103.8 175.5 93.02 174.33 92.56L175.78 88.83C176.06 88.94 204.26 99.75 239.38 97.63L239.62 101.62V101.63Z"
      fill={colorValues.hands}
    />
    <Path
      d="M187.04 98.92C187.04 100.81 186.72 102.91 185.73 104.86C184.3 107.65 181.8 109.57 178.31 110.56C171.6 112.46 164.77 107.18 160.98 101.1C156.64 94.13 156.27 86.92 160.03 82.72C167.77 74.1 176.67 75.32 177.05 75.38L176.46 79.34C176.18 79.3 169.26 78.44 163.01 85.4C160.11 88.63 161.61 94.55 164.37 98.99C167.27 103.64 172.53 108.04 177.22 106.71C179.63 106.03 181.24 104.83 182.16 103.05C184.07 99.35 182.31 94.33 182.29 94.28L186.05 92.92C186.11 93.09 187.04 95.7 187.04 98.92Z"
      fill={colorValues.hands}
    />
    <Path
      d="M239.86 52.54C221.11 54.8 206.61 54.24 196.07 53.74C191.31 53.52 186.81 53.3 182.05 53.37C167.01 53.57 150.53 57.15 150.36 57.18L150.25 57.2C129.24 60.62 124.42 65.01 123.42 67.31C123.13 67.99 122.86 69.08 124 70.78C125.45 72.95 128.14 74.25 131.02 74.16C153.41 73.5 169.38 59.74 169.54 59.61L172.18 62.62C171.49 63.23 155.01 77.46 131.14 78.16C126.9 78.29 122.89 76.31 120.68 73C119.06 70.57 118.75 68.05 119.76 65.71C122.15 60.21 131.9 56.14 149.56 53.25C150.8 52.98 166.82 49.56 182 49.36C186.87 49.3 191.43 49.51 196.26 49.74C206.64 50.23 220.96 50.78 239.38 48.57L239.86 52.54Z"
      fill={colorValues.hands}
    />
    <Path
      d="M206.07 50.39L204.28 53.97C183.67 43.66 165.04 39.2 161.21 41.63C160.64 42 160.33 42.44 160.22 43.09C159.82 45.43 162.1 49.4 163.64 51.36L160.49 53.83C159.97 53.17 155.45 47.26 156.28 42.43C156.58 40.68 157.54 39.24 159.06 38.27C166.39 33.6 191.19 42.97 206.06 50.4L206.07 50.39Z"
      fill={colorValues.hands}
    />
    <Path
      d="M160.7 84.12L159.78 88.01C159.6 87.97 155.36 86.94 153.03 82.78C151.16 79.46 151.06 75.22 152.72 70.18L156.52 71.43C155.24 75.33 155.23 78.48 156.49 80.77C157.93 83.39 160.68 84.1 160.71 84.11L160.7 84.12Z"
      fill={colorValues.hands}
    />
    <Path
      d="M123.54 141.98C122.71 141.98 122.04 141.31 122.04 140.48V93.85C122.04 93.02 122.71 92.35 123.54 92.35C124.37 92.35 125.04 93.02 125.04 93.85V140.48C125.04 141.31 124.37 141.98 123.54 141.98Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M123.69 161.34C126.252 161.34 128.33 159.263 128.33 156.7C128.33 154.137 126.252 152.06 123.69 152.06C121.127 152.06 119.05 154.137 119.05 156.7C119.05 159.263 121.127 161.34 123.69 161.34Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedAttention;