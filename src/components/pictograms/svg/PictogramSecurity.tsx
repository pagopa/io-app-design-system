import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramSecurity = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M110.53 162.33L109.36 152.05L116.13 146.4L120.96 147.02L123.88 136.31L126.49 132.47L136 129.83L142.8 133.15C142.82 132.81 142.86 132.47 142.86 132.13V68.12C142.86 60.8 138.51 54.17 131.8 51.25L93.24 34.52C88.57 32.49 83.26 32.49 78.59 34.52L40.06 51.25C33.35 54.17 29 60.79 29 68.12V132.13C29 137.55 31.39 142.7 35.54 146.2L74.07 178.65C80.91 184.41 90.91 184.41 97.76 178.65L112.39 166.33L110.52 162.34L110.53 162.33Z"
      fill={colorValues.main}
    />
    <Path
      d="M137.661 196.7C136.351 196.7 134.931 196.56 133.391 196.27C122.631 194.29 115.071 185.08 112.591 177.37C111.081 172.65 111.451 168.66 113.621 166.42L116.501 169.2C115.441 170.3 115.401 173.03 116.401 176.16C118.521 182.78 124.971 190.66 134.111 192.35C138.351 193.13 141.211 192.66 142.621 190.96C144.991 188.08 143.281 181.83 142.421 179.67L146.141 178.19C146.551 179.21 149.991 188.28 145.721 193.49C143.961 195.64 141.261 196.71 137.661 196.71V196.7Z"
      fill={colorValues.hands}
    />
    <Path
      d="M141.3 179.76C138.34 179.76 134.75 179.25 130.53 178.21C113.64 174.08 109.5 162.23 108.53 155.53C108 151.86 108.95 148.24 111.14 145.58C113.96 142.15 117.88 141.46 121.89 143.69L119.95 147.19C117.6 145.88 115.83 146.17 114.23 148.12C112.76 149.91 112.12 152.41 112.49 154.96C113.31 160.66 116.87 170.76 131.48 174.33C141.61 176.8 146.21 175.67 147.15 173.79C147.84 172.4 146.76 170.28 145.71 169.44L148.22 166.33C150.71 168.34 152.33 172.34 150.73 175.57C149.35 178.37 146.19 179.77 141.3 179.77V179.76Z"
      fill={colorValues.hands}
    />
    <Path
      d="M146.89 169.91C142.12 169.91 135.67 166.92 126.48 160.53C120.97 156.7 118.38 150.49 118.98 142.59C119.54 135.26 125.15 129.31 132.02 128.75C134.06 128.58 138.29 128.24 141.53 131.12C143.94 133.26 145.25 136.74 145.43 141.44L141.43 141.59C141.3 138.01 140.44 135.5 138.87 134.11C137.06 132.5 134.55 132.56 132.34 132.74C127.4 133.14 123.37 137.51 122.96 142.9C122.46 149.4 124.41 154.23 128.75 157.26C138.23 163.86 144.61 166.64 148.25 165.78C149.6 165.46 150.61 164.61 151.42 163.12C152.19 161.7 150.89 159.47 150.04 158.26C145.83 152.27 135.8 146.42 132.23 146.96L131.63 143.01C137.49 142.12 148.81 149.55 153.32 155.96C156.37 160.3 155.89 163.29 154.94 165.03C153.58 167.53 151.65 169.09 149.18 169.68C148.46 169.85 147.7 169.94 146.89 169.94V169.91Z"
      fill={colorValues.hands}
    />
    <Path
      d="M193.3 159.28C186.32 159.28 179.37 157.55 172.68 154.08C166.06 150.65 161.56 144.2 160.64 136.81C160.14 132.76 161 127.59 161.83 122.59C162.81 116.68 163.92 109.98 162.03 107.74C161.72 107.37 161.13 106.88 159.64 106.88C156.83 106.88 154.49 107.89 152.49 109.96C144.77 117.98 145.43 138.23 145.44 138.43L141.44 138.58C141.41 137.68 140.71 116.43 149.61 107.19C152.36 104.33 155.74 102.88 159.64 102.88C161.97 102.88 163.8 103.64 165.08 105.15C168.17 108.8 167.01 115.81 165.78 123.24C165 127.96 164.19 132.83 164.62 136.31C165.38 142.48 168.99 147.66 174.53 150.52C186.04 156.48 198.37 156.82 210.17 151.53L211.81 155.18C205.72 157.91 199.5 159.28 193.31 159.28H193.3Z"
      fill={colorValues.hands}
    />
    <Path
      d="M187.88 206.26C179.42 206.26 171.48 204.88 165.11 203.27C151.92 199.94 142.67 195.1 142.28 194.9L144.15 191.36C144.51 191.55 180.81 210.36 210.21 198.14L211.75 201.83C203.91 205.09 195.68 206.26 187.89 206.26H187.88Z"
      fill={colorValues.hands}
    />
    <Path
      d="M78.5101 128.64C78.1101 128.64 77.7201 128.48 77.4401 128.19L52.2101 102.45C51.6301 101.86 51.6401 100.91 52.2301 100.33C52.8201 99.75 53.7701 99.76 54.3501 100.35L78.4801 124.97L120.84 79.49C121.4 78.88 122.35 78.85 122.96 79.41C123.57 79.97 123.6 80.92 123.04 81.53L79.6101 128.16C79.3301 128.46 78.9401 128.63 78.5301 128.64H78.5101Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramSecurity;
