import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedIdea = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M92.2997 134.67H113.27V114.4L125.69 89.25C134.4 71.61 128.19 49.6 110.75 40.51C105.23 37.63 98.9597 36 92.2997 36C85.6397 36 79.3697 37.63 73.8497 40.5C56.4097 49.6 50.1997 71.61 58.9097 89.25L71.3297 114.4V134.67H92.2997Z"
      fill={colorValues.main}
    />
    <Path
      d="M112.35 152.98H72.2502C69.6002 152.98 67.4502 150.83 67.4502 148.18C67.4502 145.53 69.6002 143.38 72.2502 143.38H112.35C115 143.38 117.15 145.53 117.15 148.18C117.15 150.83 115 152.98 112.35 152.98Z"
      fill={colorValues.main}
    />
    <Path
      d="M108.19 158.24C107.6 157.98 106.94 157.83 106.25 157.83H78.3498C75.6998 157.83 73.5498 159.98 73.5498 162.63C73.5498 165.28 75.6998 167.43 78.3498 167.43H103.72L108.18 158.25L108.19 158.24Z"
      fill={colorValues.main}
    />
    <Path
      d="M241.49 203.91C240.37 203.79 213.59 200.68 181.83 182.79C170.05 176.15 162.33 165.03 161.2 153.02C160.44 144.97 162.62 139.32 167.7 136.23C175.43 131.53 185.01 132.16 191.02 137.76C196.05 142.45 196.95 149.31 193.43 156.1L189.88 154.26C192.57 149.08 191.99 144.13 188.3 140.68C184.34 136.98 176.71 135.43 169.79 139.64C166.13 141.87 164.59 146.24 165.19 152.63C166.2 163.33 173.16 173.29 183.81 179.29C214.81 196.75 241.68 199.89 241.95 199.92L241.51 203.9L241.49 203.91Z"
      fill={colorValues.hands}
    />
    <Path
      d="M186.601 167.44C183.341 167.44 179.161 166.35 174.401 162.59L176.881 159.45C181.171 162.84 185.251 164.09 189.031 163.15C190.341 162.82 191.331 161.87 191.741 160.52C192.191 159.05 191.841 157.44 190.831 156.3C184.911 149.67 179.661 146.73 175.611 147.79C170.191 149.22 167.231 157.75 166.551 160.92L162.641 160.08C162.761 159.52 165.681 146.28 174.581 143.92C180.251 142.42 186.721 145.68 193.811 153.63C195.751 155.8 196.421 158.89 195.561 161.69C194.741 164.36 192.651 166.36 189.991 167.02C189.021 167.26 187.881 167.43 186.601 167.43V167.44Z"
      fill={colorValues.hands}
    />
    <Path
      d="M241.15 150.1C220.09 143.97 208.11 139.63 208 139.59C207 139.23 206.46 138.14 206.77 137.13C209.48 128.27 207.44 118.98 205.98 114.23C205.46 112.55 203.79 111.46 202.01 111.64C200.61 111.79 199.42 112.67 198.91 113.95C196.7 119.51 193.57 130.53 193.54 130.64C193.28 131.55 192.42 132.16 191.46 132.09C187.17 131.77 169.58 123.44 155.57 116.52C153.29 115.39 150.75 114.98 148.22 115.34C145.94 115.67 144.18 117.49 143.94 119.78C143.78 121.25 144.27 122.7 145.27 123.76C151.08 129.87 166.55 138.81 166.7 138.9L164.7 142.37C164.04 141.99 148.58 133.04 142.37 126.52C140.56 124.61 139.68 122.01 139.96 119.36C140.4 115.25 143.56 111.97 147.65 111.38C150.97 110.9 154.32 111.44 157.33 112.93C173.46 120.91 185.55 126.35 190.19 127.75C191.19 124.33 193.42 116.89 195.17 112.47C196.23 109.8 198.68 107.96 201.57 107.66C205.25 107.28 208.7 109.55 209.77 113.05C211.26 117.91 213.31 127.16 211.06 136.44C215.07 137.84 225.89 141.5 242.23 146.26L241.11 150.1H241.15Z"
      fill={colorValues.hands}
    />
    <Path
      d="M106.93 131.15C106.1 131.15 105.43 130.48 105.43 129.65V108.94C105.43 108.62 105.53 108.3 105.73 108.05C124.72 82.46 121.25 67.31 121.22 67.16C113.64 39.67 87.9402 44.1 86.8502 44.3C86.0402 44.45 85.2502 43.91 85.1002 43.1C84.9502 42.29 85.4902 41.5 86.3002 41.35C86.5902 41.3 115.81 36.26 124.11 66.4C124.28 67.1 127.92 82.96 108.42 109.44V129.66C108.42 130.49 107.75 131.16 106.92 131.16L106.93 131.15Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedIdea;
