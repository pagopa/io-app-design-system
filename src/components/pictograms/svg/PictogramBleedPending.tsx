import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBleedPending = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M143.95 195.53L142.28 176.3C141.92 172.16 139.39 168.52 135.64 166.73L116.77 157.74C113.02 155.95 110.49 152.31 110.13 148.17L109.97 146.32L109.81 144.47C109.45 140.33 111.31 136.31 114.69 133.9L131.72 121.78C135.11 119.37 136.96 115.35 136.6 111.21L134.93 91.98C134.42 86.13 129.69 81.67 124 81.31L117.61 81.8L115.45 86.07C115.45 86.07 111.12 87.89 110.92 87.67C110.72 87.45 106.21 86.05 106.21 86.05L103.87 82.91L68.7204 85.97C62.2704 86.53 57.4904 92.22 58.0504 98.67L59.7204 117.9C60.0804 122.04 62.6104 125.68 66.3604 127.47L85.2304 136.46C88.9804 138.25 91.5104 141.89 91.8704 146.03L92.0304 147.88L92.1904 149.73C92.5504 153.87 90.6904 157.89 87.3104 160.3L70.2804 172.42C66.8904 174.83 65.0404 178.85 65.4004 182.99L67.0704 202.22C67.6304 208.67 73.3204 213.45 79.7704 212.89L115.51 209.78L133.3 208.23C139.75 207.67 144.53 201.98 143.97 195.53H143.95Z"
      fill={colorValues.main}
    />
    <Path
      d="M134.77 95.04H134.71L134.73 91.04H134.76C136.77 91.04 142.27 90.5 144.23 88.03C144.67 87.48 145.19 86.53 144.75 84.7C142.34 74.77 131.47 72.65 122.78 72.62C120.3 72.57 118.65 73.09 118.08 73.96C117.55 74.77 117.75 76.37 118.62 78.34C119.69 80.75 119.54 83.52 118.22 85.77C116.93 87.97 114.73 89.37 112.2 89.6C110.63 89.75 108.91 89.67 107.11 89.39C106.69 89.32 106.3 89.12 106 88.82C105.6 88.41 96.21 78.77 99.09 69.05C101.09 62.29 108.4 57.49 120.81 54.77C121.61 54.6 128.61 53.22 132.8 56.06L130.55 59.37C128.18 57.76 123.2 58.35 121.65 58.68C110.79 61.06 104.49 64.93 102.93 70.18C101.02 76.61 106.74 83.67 108.41 85.54C109.64 85.69 110.79 85.72 111.85 85.62C113.08 85.51 114.15 84.83 114.78 83.75C115.45 82.61 115.52 81.19 114.98 79.96C113.48 76.58 113.4 73.83 114.74 71.77C116.11 69.68 118.79 68.62 122.73 68.62H122.8C141.14 68.68 146.97 76.89 148.64 83.76C149.43 87.02 148.39 89.24 147.37 90.52C143.92 94.88 135.96 95.05 134.78 95.05L134.77 95.04Z"
      fill={colorValues.hands}
    />
    <Path
      d="M137.92 109.5C137.26 109.5 136.58 109.49 135.9 109.47L136.03 105.47C145.99 105.8 153.01 103.61 156.89 98.96C161.68 93.22 160.06 85.43 160.04 85.35C159.91 84.74 160.07 84.1 160.47 83.63C160.87 83.16 161.47 82.89 162.09 82.92L242.59 86.94L242.39 90.93L164.28 87.03C164.5 90.38 164.18 96.43 159.99 101.47C155.57 106.8 148.15 109.49 137.92 109.49V109.5Z"
      fill={colorValues.hands}
    />
    <Path
      d="M123.57 58.38C120.05 58.38 107.5 54.63 101.9 49.88C99.8502 48.14 98.7802 46.32 98.7302 44.46C98.6502 41.74 99.8802 39.37 102.2 37.79C106.63 34.75 114.39 34.97 122.43 38.37L120.88 42.06C112.73 38.63 106.94 39.39 104.46 41.1C103.26 41.92 102.69 42.99 102.73 44.36C102.75 44.94 103.25 45.71 104.14 46.53C108.9 50.94 121.61 54.47 123.51 54.39L124.01 58.36C123.89 58.38 123.74 58.39 123.57 58.39V58.38Z"
      fill={colorValues.hands}
    />
    <Path
      d="M140.25 51.28C139.48 50.98 121.41 43.92 114.1 37.17C112.57 35.76 112.03 33.65 112.68 31.67C113.33 29.7 115.02 28.35 117.08 28.13C121.63 27.66 129.54 28.35 141.26 34.36C149.37 38.52 169.34 35.76 190.49 32.85C206.93 30.58 225.56 28.01 242.5 28.01V32.01C225.83 32.01 207.35 34.56 191.04 36.81C168.3 39.95 148.67 42.66 139.44 37.92C128.6 32.36 121.53 31.69 117.5 32.11C116.81 32.18 116.56 32.71 116.49 32.93C116.41 33.16 116.29 33.74 116.82 34.23C123.58 40.47 141.53 47.48 141.71 47.55L140.26 51.28H140.25Z"
      fill={colorValues.hands}
    />
    <Path
      d="M80.9904 171.76L73.1704 177.62C71.4304 178.92 70.4804 181.02 70.6504 183.19L72.2004 202.84C72.4704 206.29 75.5004 208.85 78.9404 208.55L132.39 203.87C135.26 203.62 137.07 200.58 135.83 197.97C133.45 192.94 127.3 185.8 111.35 182.61C95.9204 179.53 89.4304 175.28 86.7004 172.34C85.2004 170.72 82.7504 170.44 80.9804 171.76H80.9904Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedPending;
