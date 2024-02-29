import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedSearch = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M219.7 160.2L202.57 150.8L200.46 154.65L217.65 164.08"
      fill={colorValues.main}
    />
    <Path
      d="M119.784 101.777L117.673 105.626L150.173 123.456L152.285 119.607L119.784 101.777Z"
      fill={colorValues.main}
    />
    <Path
      d="M240.53 139.02C239.97 138.69 184.34 105.96 154.94 104.19C153.06 104.08 151.251 104.73 149.961 105.99C147.921 107.97 147.14 110.21 147.62 112.66C148.04 114.79 149.46 116.71 151.51 117.93L163.461 125.07L161.41 128.5L149.461 121.36C146.451 119.56 144.35 116.67 143.7 113.44C142.94 109.63 144.14 106.07 147.17 103.12C149.27 101.08 152.19 100.02 155.17 100.2C167.97 100.97 186.58 107.17 210.5 118.63C228.22 127.12 242.42 135.5 242.56 135.58L240.521 139.02H240.53Z"
      fill={colorValues.hands}
    />
    <Path
      d="M161.91 143.65C160.74 143.65 159.97 143.55 159.86 143.53L159.56 143.46C154.19 141.79 150.67 138.9 149.1 134.87C146.39 127.9 150.76 120.27 150.95 119.95L154.41 121.97L152.68 120.96L154.41 121.96C154.37 122.02 150.82 128.28 152.84 133.44C153.93 136.23 156.53 138.29 160.58 139.59C161.81 139.73 170.31 140.35 174.73 132.25C175.73 130.42 175.63 128.22 174.48 126.51C173.4 124.9 172.23 124.09 171.02 124.09C169.69 124.09 166.78 125.1 162.33 131.81L159 129.6C163.23 123.22 167.16 120.11 171 120.09C172.86 120.08 175.47 120.8 177.8 124.27C179.79 127.22 179.96 131.01 178.24 134.16C173.65 142.58 165.67 143.65 161.92 143.65H161.91Z"
      fill={colorValues.hands}
    />
    <Path
      d="M175.97 156.06C160.28 156.06 155.07 141.05 155.02 140.89L158.81 139.62L156.91 140.25L158.81 139.61C159.01 140.21 164.01 154.35 179.78 151.72C183.65 151.08 188.19 149.24 187.84 144.11C187.48 138.89 182.3 133.44 177.58 133.31L177.69 129.31C184.46 129.49 191.33 136.55 191.83 143.83C192.25 149.98 188 154.41 180.44 155.66C178.86 155.92 177.37 156.04 175.97 156.04V156.06Z"
      fill={colorValues.hands}
    />
    <Path
      d="M189.75 164.14C187.09 164.14 183.9 163.61 180.11 162.23L179.94 162.16C179.64 162.02 172.56 158.67 169.35 154.7L172.46 152.19C174.93 155.25 180.82 158.15 181.56 158.51C188.42 160.99 193.94 160.64 197.12 157.54C199.78 154.95 200.66 150.5 199.3 146.47C196.98 139.58 188.97 140.86 188.63 140.92L187.96 136.98C192.01 136.29 200.38 137.12 203.1 145.2C204.93 150.65 203.65 156.76 199.92 160.4C198.24 162.04 195.05 164.14 189.75 164.14Z"
      fill={colorValues.hands}
    />
    <Path
      d="M189.427 160.415L187.227 163.756L240.444 198.819L242.644 195.479L189.427 160.415Z"
      fill={colorValues.hands}
    />
    <Path
      d="M129.044 107.827C136.398 92.0847 116.727 67.3492 85.1084 52.5782C53.4896 37.8072 21.896 38.5943 14.542 54.3361C7.1881 70.078 26.8587 94.8135 58.4775 109.585C90.0963 124.355 121.69 123.568 129.044 107.827Z"
      fill={colorValues.main}
    />
    <Path
      d="M101.2 113.53C89.86 113.53 75.65 110.18 61.35 103.5C47.77 97.16 36.1 88.8 28.5 79.98C20.71 70.94 18.08 62.43 21.08 56C21.31 55.5 21.91 55.28 22.41 55.52C22.91 55.75 23.13 56.35 22.89 56.85C20.24 62.52 22.77 70.27 30.01 78.68C37.44 87.3 48.87 95.47 62.19 101.7C89.47 114.44 116.21 115.06 121.81 103.07C122.04 102.57 122.64 102.35 123.14 102.59C123.64 102.82 123.86 103.42 123.62 103.92C120.62 110.34 112.28 113.54 101.19 113.54L101.2 113.53Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedSearch;
