import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramTiming = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M108.33 99C106.31 99 104.61 98.32 103.26 97.47C98.4602 94.42 96.7502 88.13 99.2902 82.85C104.02 73 117.33 48.6 138.81 34.68C144.92 30.7 152.09 28.76 159.57 29.02C175.77 29.61 205.86 32.77 225.34 47.33L222.95 50.53C204.35 36.62 175.17 33.59 159.43 33.02C152.79 32.79 146.41 34.51 140.99 38.02C120.37 51.39 107.49 75.03 102.9 84.57C101.24 88.03 102.32 92.12 105.41 94.09C106.45 94.75 109.6 96.74 115.08 91.36C126.34 80.32 132.25 67.54 132.31 67.41L135.95 69.07C135.7 69.62 129.67 82.66 117.88 94.22C114.23 97.8 111 99 108.33 99Z"
      fill={colorValues.hands}
    />
    <Path
      d="M152.21 81.43C151.2 81.43 150.13 81.17 149.05 80.63C145.12 78.68 141.57 73.47 138.51 65.12C136.31 59.14 135.18 53.76 135.13 53.53L139.05 52.71C140.25 58.45 144.71 74.02 150.83 77.04C152.33 77.78 153.04 77.33 153.58 76.73C156.35 73.67 156.54 62.97 153.04 57.43L156.42 55.3C160.71 62.1 160.77 74.72 156.54 79.41C155.33 80.75 153.83 81.43 152.2 81.43H152.21Z"
      fill={colorValues.hands}
    />
    <Path
      d="M158.19 64.73L156.14 61.3C156.52 61.08 165.39 55.84 171.82 58.91L170.1 62.52C166.38 60.74 160.25 63.52 158.2 64.74L158.19 64.73Z"
      fill={colorValues.hands}
    />
    <Path
      d="M139.53 93.81C134.87 93.81 129.93 90.93 127.49 86.8C125.53 83.48 125.47 79.85 127.31 76.56L130.8 78.51C129.37 81.06 130.09 83.32 130.94 84.76C132.64 87.64 136.33 89.8 139.54 89.8H139.58C143.74 89.78 147.16 81.25 148.03 78.27L151.87 79.39C151.44 80.86 147.47 93.76 139.6 93.81H139.54H139.53Z"
      fill={colorValues.hands}
    />
    <Path
      d="M152.5 93.36C147.45 93.36 143.32 92.04 143.04 91.95L144.29 88.15C144.38 88.18 153.79 91.17 160.47 87.65C163.4 86.1 165.35 83.58 166.42 79.95C167.5 76.28 167.5 73.65 166.42 72.72C164.77 71.3 160.23 72.72 158.29 73.62L156.59 70C157.44 69.6 164.98 66.21 169.03 69.68C171.47 71.77 171.88 75.6 170.27 81.08C168.89 85.75 166.22 89.16 162.33 91.2C159.18 92.85 155.67 93.37 152.52 93.37L152.5 93.36Z"
      fill={colorValues.hands}
    />
    <Path
      d="M212.76 93.35C190.52 93.35 168.76 80.74 167.84 80.2L169.86 76.75C170.07 76.88 191.62 89.35 212.75 89.35V93.35H212.76Z"
      fill={colorValues.hands}
    />
    <Path
      d="M72.37 211.05C104.607 211.05 130.74 184.917 130.74 152.68C130.74 120.443 104.607 94.31 72.37 94.31C40.1331 94.31 14 120.443 14 152.68C14 184.917 40.1331 211.05 72.37 211.05Z"
      fill={colorValues.main}
    />
    <Path
      d="M103.08 170.73C102.84 170.73 102.6 170.67 102.37 170.55L71.6601 154C71.1701 153.74 70.8701 153.23 70.8701 152.68V118.79C70.8701 117.96 71.5401 117.29 72.3701 117.29C73.2001 117.29 73.8701 117.96 73.8701 118.79V151.79L103.79 167.92C104.52 168.31 104.79 169.22 104.4 169.95C104.13 170.45 103.61 170.74 103.08 170.74V170.73Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramTiming;
