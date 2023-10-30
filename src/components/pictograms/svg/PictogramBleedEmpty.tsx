import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedEmpty = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M99.6405 90.04C123.69 76.03 154.54 84.17 168.55 108.22C169.46 109.78 170.27 111.36 170.99 112.97L166.53 112.53L162.18 112.94C162.18 112.94 157.7 116.34 156.57 116.21C155.44 116.08 153.71 117.96 153.52 118.28C153.33 118.6 152.28 122.56 152.28 122.56L152.96 126.27L154.94 129.68L157.51 131.55L158.46 133.18L152.96 134.79C152.96 134.79 152.16 135.04 150.31 135.61C148.45 136.18 143.58 139.51 142.99 138.87C142.4 138.23 142.44 138.12 141.11 138.69C139.79 139.26 136.42 140.48 136.42 140.48L133.85 141.57L131.38 142.73C131.38 142.73 128.86 145.16 128.74 145.41C128.62 145.65 129.62 152.21 129.62 152.21L130.61 153.92L130.58 155.72L129.16 158.12L128.14 163.03L132.6 169.83L138.45 171.89L137.78 178.73L140.56 181.53C118.48 188.72 93.6205 179.84 81.4605 158.96C67.4505 134.91 75.5905 104.06 99.6405 90.05V90.04Z"
      fill={colorValues.main}
    />
    <Path
      d="M134.08 156C131.2 156 128.47 154.43 127.05 151.72C126.04 149.8 125.85 147.6 126.52 145.54C127.18 143.5 128.59 141.85 130.5 140.9C137.37 137.46 148.43 133.99 154.61 132.17C152.03 129.77 150.27 126.16 150.29 122.63C150.29 119.95 151.43 113.44 161.72 110.98C177.83 107.12 239.84 129.69 242.47 130.65L241.1 134.41C240.94 134.35 224.96 128.52 207.29 123.23C178.08 114.48 166.89 113.86 162.65 114.87C157.27 116.16 154.3 118.92 154.29 122.64C154.28 126.52 157.37 130.19 160.15 130.87C161.04 131.09 161.66 131.88 161.67 132.79C161.67 133.7 161.07 134.5 160.19 134.74C160.01 134.79 141.66 139.78 132.29 144.47C131.35 144.94 130.66 145.75 130.33 146.76C130 147.79 130.09 148.89 130.6 149.85C131.56 151.68 133.73 152.46 135.64 151.67C144.73 147.9 156.59 143.42 161.66 143.42C161.7 143.42 161.74 143.42 161.78 143.42L161.72 147.42C161.72 147.42 161.66 147.42 161.64 147.42C158.26 147.42 149.35 150.31 137.17 155.36C136.16 155.78 135.12 155.98 134.09 155.98L134.08 156Z"
      fill={colorValues.hands}
    />
    <Path
      d="M137.99 172.44C134.21 172.44 130.54 170.43 128.6 166.9C126.44 162.98 126.98 158.08 129.93 154.71L131.4 153.03L134.41 155.66L132.94 157.34C131.09 159.45 130.76 162.51 132.11 164.97C133.87 168.18 137.92 169.38 141.13 167.64C153.14 161.14 161.2 158.07 165.07 158.53L164.6 162.5C161.72 162.16 153.67 165.4 143.03 171.16C141.43 172.03 139.7 172.44 137.99 172.44Z"
      fill={colorValues.hands}
    />
    <Path
      d="M240.91 195.9C201.1 176.73 159.47 182.02 148.03 185.39C145.21 186.22 142.19 185.59 139.93 183.71C137.59 181.76 136.41 178.67 136.86 175.66L137.63 170.46L141.59 171.05L140.82 176.25C140.57 177.89 141.22 179.58 142.49 180.64C143.72 181.67 145.37 182.01 146.9 181.56C158.73 178.08 201.7 172.59 242.65 192.3L240.92 195.9H240.91Z"
      fill={colorValues.hands}
    />
    <Path
      d="M170.116 132.404L169.418 136.343L179.767 138.177L180.465 134.238L170.116 132.404Z"
      fill={colorValues.hands}
    />
    <Path
      d="M191.69 153.01C181.25 147.04 175.92 130.26 175.7 129.55L179.52 128.36C179.57 128.52 184.61 144.35 193.68 149.54L191.69 153.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M163.879 138.846L159.897 139.225L162.741 169.08L166.723 168.701L163.879 138.846Z"
      fill={colorValues.hands}
    />
    <Path
      d="M137.15 97.47C136.76 97.47 136.36 97.32 136.07 97.01C135.5 96.41 135.52 95.46 136.12 94.89L167.38 64.97C167.98 64.4 168.93 64.42 169.5 65.02C170.07 65.62 170.05 66.57 169.45 67.14L138.19 97.06C137.9 97.34 137.53 97.48 137.15 97.48V97.47Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M120.62 88.54C119.8 88.54 119.13 87.88 119.12 87.06L118.67 45.52C118.67 44.69 119.33 44.01 120.15 44H120.17C120.99 44 121.66 44.66 121.67 45.48L122.12 87.02C122.12 87.85 121.46 88.53 120.64 88.54H120.62Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M101.86 95.24C101.47 95.24 101.08 95.09 100.79 94.79L73.9901 67.32C73.4101 66.73 73.4201 65.78 74.0201 65.2C74.6101 64.62 75.5601 64.63 76.1401 65.23L102.94 92.7C103.52 93.29 103.51 94.24 102.91 94.82C102.62 95.1 102.24 95.25 101.86 95.25V95.24Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M96.0598 113.99C95.9998 113.99 95.9398 113.99 95.8798 113.98L50.3298 108.62C49.5098 108.52 48.9198 107.78 49.0198 106.95C49.1198 106.13 49.8598 105.54 50.6798 105.64L96.2398 111C97.0598 111.1 97.6498 111.84 97.5498 112.67C97.4598 113.43 96.8098 113.99 96.0598 113.99Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedEmpty;
