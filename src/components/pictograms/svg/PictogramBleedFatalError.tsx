import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedFatalError = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M193.15 119.88C195.36 109.35 191.16 96.03 187.69 89.64C184.22 83.24 179.2 77.79 173.09 73.78C166.97 69.76 159.95 67.3 152.63 66.61C148.21 66.19 143.77 66.44 139.45 67.31C133.83 68.45 129.01 71.82 124.78 75.71L111.41 87.99L126.56 113.09L104.72 135.1L118.09 161.08L98.9297 182.21L107.84 203.78L163.39 156L157.36 153.24L154.61 149.97L154.22 144.74L155.19 139.85L150.68 135.1L145.93 131.1L146.07 128.39L149.64 122.96L150.49 114.74L161.65 112.48C161.65 112.48 175.5 113.89 175.72 113.89"
      fill={colorValues.main}
    />
    <Path
      d="M84.8103 68.96C90.2903 70.99 95.3103 74.07 99.5803 78.02L95.0903 86.53L113.33 113.52L95.0903 135.64L110.22 159.98L95.0903 182.1L103.54 201.13L39.0003 142.83C34.7203 138.87 31.2703 134.12 28.8403 128.83C26.4103 123.55 25.0503 117.84 24.8403 112.03C24.6303 106.22 25.5703 100.43 27.6103 94.99C29.6503 89.54 32.7403 84.55 36.7203 80.3C40.7003 76.04 45.4803 72.61 50.7903 70.19C56.1003 67.77 61.8403 66.42 67.6803 66.21C73.5203 66 79.3403 66.93 84.8203 68.96H84.8103Z"
      fill={colorValues.main}
    />
    <Path
      d="M37.2398 73.73C37.0298 73.73 36.8098 73.67 36.6298 73.54L17.4698 60.4C16.9698 60.06 16.8498 59.38 17.1898 58.89C17.5298 58.39 18.2098 58.27 18.6998 58.61L37.8498 71.75C38.3498 72.09 38.4698 72.77 38.1298 73.26C37.9198 73.57 37.5798 73.73 37.2298 73.73H37.2398Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M45.5702 65.94C45.0802 65.94 44.6402 65.61 44.5202 65.12L37.7202 38.35C37.5702 37.77 37.9202 37.18 38.5102 37.03C39.0902 36.88 39.6802 37.23 39.8302 37.82L46.6302 64.59C46.7802 65.17 46.4302 65.76 45.8402 65.91C45.7502 65.93 45.6602 65.94 45.5702 65.94Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M240.329 132.64C230.629 126.07 203.249 109.01 193.149 109.01V104.81C206.589 104.81 241.219 128.17 242.679 129.16L240.319 132.64H240.329Z"
      fill={colorValues.hands}
    />
    <Path
      d="M176.96 131.47C157.58 128.93 147.96 125.13 146.69 119.53C145.91 116.1 148.62 113.29 150.35 112.17C160 105.98 190.5 118.06 193.94 119.46L192.36 123.35C180.12 118.39 158.51 111.92 152.62 115.7C152.62 115.7 150.46 117.21 150.78 118.61C150.99 119.5 153.25 124.12 177.5 127.3L176.95 131.46L176.96 131.47Z"
      fill={colorValues.hands}
    />
    <Path
      d="M176.8 145.34C148.28 139.35 144.43 133.42 144.02 129.49C143.47 124.2 150.06 121.14 150.81 120.81L152.5 124.65C151.01 125.31 148 127.26 148.19 129.06C148.34 130.5 150.92 135.62 177.65 141.23L176.79 145.34H176.8Z"
      fill={colorValues.hands}
    />
    <Path
      d="M240.64 185.06C201.65 167.38 187.44 163.47 169.45 158.52L166.9 157.82C157.88 155.33 152.71 151.68 151.52 146.97C150.16 141.57 154.64 137.22 154.83 137.03L157.74 140.06C157.74 140.06 154.82 142.94 155.6 145.96C156.38 149 160.79 151.77 168.02 153.77L170.56 154.47C188.73 159.47 203.08 163.42 242.37 181.23L240.64 185.05V185.06Z"
      fill={colorValues.hands}
    />
    <Path
      d="M79.1803 172.28C78.8503 172.28 78.5203 172.16 78.2603 171.91L43.8503 139.2C37.5203 133.19 33.0703 124.41 32.5103 116.85C29.5703 77.28 65.4103 73.66 65.7703 73.63C66.5003 73.57 67.1503 74.11 67.2203 74.84C67.2903 75.57 66.7403 76.22 66.0103 76.29C64.6403 76.41 32.4403 79.74 35.1803 116.65C35.6903 123.59 39.8203 131.68 45.6903 137.26L80.1003 169.97C80.6403 170.48 80.6603 171.32 80.1503 171.86C79.8903 172.14 79.5303 172.28 79.1803 172.28Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBleedFatalError;
