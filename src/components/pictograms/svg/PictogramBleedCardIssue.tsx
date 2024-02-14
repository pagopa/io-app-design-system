import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedCardIssue = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M18 155.41V170.48C18 176.35 22.76 181.11 28.63 181.11H181.39C187.26 181.11 192.02 176.35 192.02 170.48V162.05C192.02 161.66 180.3 146.62 173.4 145.75C166.5 144.88 157.77 139.88 157.77 139.88C147.45 135.98 157.35 127.23 157.35 127.23L160.07 126.8C148.96 125.97 147.31 116.43 147.31 116.43L153.1 112.4L151.69 109.53L149.86 107.05L150.95 104.34L152.33 103.36C152.33 103.36 156.47 102.09 157.12 102.03C157.77 101.97 163.14 102.71 163.14 102.71L170.87 103.69C170.87 103.69 182.27 106.96 182.5 107.03C182.73 107.1 192 111.74 192 111.74V69.63C192 63.76 187.24 59 181.37 59H28.63C22.76 59 18 63.76 18 69.63V122.9V155.4V155.41Z"
      fill={colorValues.main}
    />
    <Path
      d="M240.38 121.8C230.68 115.23 203.3 98.17 193.2 98.17V93.97C206.64 93.97 241.27 117.33 242.73 118.32L240.37 121.8H240.38Z"
      fill={colorValues.hands}
    />
    <Path
      d="M177.01 120.62C157.63 118.08 148.01 114.28 146.74 108.68C145.96 105.25 148.67 102.44 150.4 101.32C160.05 95.1299 190.55 107.21 193.99 108.61L192.41 112.5C180.17 107.54 158.56 101.07 152.67 104.85C152.67 104.85 150.51 106.36 150.83 107.76C151.04 108.65 153.3 113.27 177.55 116.45L177 120.61L177.01 120.62Z"
      fill={colorValues.hands}
    />
    <Path
      d="M176.85 134.5C148.33 128.51 144.48 122.58 144.07 118.65C143.52 113.36 150.11 110.3 150.86 109.97L152.55 113.81C151.06 114.47 148.05 116.42 148.24 118.22C148.39 119.66 150.97 124.78 177.7 130.39L176.84 134.5H176.85Z"
      fill={colorValues.hands}
    />
    <Path
      d="M240.69 174.22C201.7 156.54 187.49 152.63 169.5 147.68L166.95 146.98C157.93 144.49 152.76 140.84 151.57 136.13C150.21 130.73 154.69 126.38 154.88 126.19L157.79 129.22C157.79 129.22 154.87 132.1 155.65 135.12C156.43 138.16 160.84 140.93 168.07 142.93L170.61 143.63C188.78 148.63 203.13 152.58 242.42 170.39L240.69 174.21V174.22Z"
      fill={colorValues.hands}
    />
    <Path
      d="M101.95 129.81C101.12 129.81 100.45 129.14 100.45 128.31V81.68C100.45 80.85 101.12 80.18 101.95 80.18C102.78 80.18 103.45 80.85 103.45 81.68V128.31C103.45 129.14 102.78 129.81 101.95 129.81Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M102.11 149.17C104.673 149.17 106.75 147.093 106.75 144.53C106.75 141.967 104.673 139.89 102.11 139.89C99.5476 139.89 97.4702 141.967 97.4702 144.53C97.4702 147.093 99.5476 149.17 102.11 149.17Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedCardIssue;
