import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramHello = ({ size, colorValues, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M116.64 149.35C106.89 144.59 101.21 138.91 101.06 133.78C100.99 131.54 102.04 129.65 103.94 128.58C106.73 127.01 111.4 128.32 116.77 130.06C117.53 130.31 118.21 130.53 118.74 130.68C122.11 131.64 125.79 131.67 128.59 131.56V113.78C124.19 113.85 118.01 114.86 113.8 115.54C112.14 115.81 110.63 116.06 109.4 116.23C107.17 116.54 104.8 115.21 103.21 112.77C101.57 110.26 100.67 106.21 103.04 102.38C105.56 98.31 112.12 94.03 128.59 94.33V90.9C126.64 89.96 124.7 88.63 123.48 86.55C122.06 84.13 121.77 80.03 124.04 77.2C124.94 76.08 126.36 74.99 128.59 74.53V45L76.98 32V206.78L128.59 186.08V153.04C126.21 152.43 124.07 151.88 122.45 151.46C120.35 150.92 118.4 150.21 116.64 149.36V149.35Z"
      fill={colorValues.main}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29 48.76C29 46.2747 31.0147 44.26 33.5 44.26H76.98V53.26H38V186.2H29V48.76Z"
      fill={colorValues.main}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M83.1916 37.4051C83.5302 37.1428 83.9712 37.0519 84.3859 37.159L124.486 47.509C125.227 47.7001 125.672 48.4555 125.481 49.1961C125.29 49.9368 124.534 50.3822 123.794 50.1911L85.4248 40.2879V193.911L123.63 178.772C124.341 178.491 125.146 178.839 125.427 179.55C125.709 180.261 125.361 181.066 124.65 181.348L84.55 197.238C84.1235 197.407 83.641 197.353 83.2615 197.096C82.882 196.838 82.6548 196.409 82.6548 195.95V38.5C82.6548 38.0717 82.853 37.6674 83.1916 37.4051Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.2459 115.752C98.5781 117.025 98.1199 118.889 98.1199 121.03C98.1199 123.171 98.5781 125.035 99.2459 126.309C99.9509 127.653 100.664 127.98 101.05 127.98C101.436 127.98 102.149 127.653 102.854 126.309C103.522 125.035 103.98 123.171 103.98 121.03C103.98 118.889 103.522 117.025 102.854 115.752C102.149 114.407 101.436 114.08 101.05 114.08C100.664 114.08 99.9509 114.407 99.2459 115.752ZM96.5889 114.359C97.4873 112.645 98.9896 111.08 101.05 111.08C103.11 111.08 104.612 112.645 105.511 114.359C106.446 116.143 106.98 118.504 106.98 121.03C106.98 123.556 106.446 125.917 105.511 127.702C104.612 129.415 103.11 130.98 101.05 130.98C98.9896 130.98 97.4873 129.415 96.5889 127.702C95.6534 125.917 95.1199 123.556 95.1199 121.03C95.1199 118.504 95.6534 116.143 96.5889 114.359Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M89.5098 121.09C89.5098 120.262 90.1814 119.59 91.0098 119.59H96.0398C96.8682 119.59 97.5398 120.262 97.5398 121.09C97.5398 121.918 96.8682 122.59 96.0398 122.59H91.0098C90.1814 122.59 89.5098 121.918 89.5098 121.09Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M181.65 106.48C175.86 88.6201 168.86 72.1601 156.87 72.4601C153.16 72.5601 151.35 74.2201 150.48 75.5901C149.46 77.1901 149.25 79.1201 149.38 80.9101C146.37 78.7901 142.61 77.1101 137.47 75.4601C133.6 74.2201 130.73 74.0901 128.6 74.5301C126.38 74.9901 124.95 76.0801 124.05 77.2001C121.78 80.0301 122.07 84.1301 123.49 86.5501C124.71 88.6401 126.64 89.9701 128.6 90.9001C129.51 91.3301 130.42 91.6901 131.26 91.9901C133.62 92.8101 135.47 93.8101 136.92 94.8101C133.9 94.5301 131.14 94.3801 128.6 94.3301C112.13 94.0301 105.57 98.3101 103.05 102.38C100.68 106.21 101.58 110.26 103.22 112.77C104.81 115.22 107.18 116.54 109.41 116.23C110.64 116.06 112.15 115.81 113.81 115.54C118.02 114.85 124.21 113.85 128.6 113.78C130.51 113.75 132.08 113.89 133 114.32C136.99 116.16 138.05 120.99 137.35 124.69C136.76 127.82 134.72 131.24 130.79 131.45H130.58C130 131.49 129.32 131.53 128.59 131.56C125.79 131.67 122.11 131.64 118.74 130.68C118.21 130.53 117.53 130.31 116.77 130.06C111.4 128.32 106.73 127 103.94 128.58C102.05 129.65 101 131.54 101.06 133.78C101.21 138.92 106.89 144.59 116.64 149.35C118.4 150.21 120.35 150.92 122.45 151.45C124.07 151.87 126.21 152.42 128.59 153.03C136.43 155.05 146.84 157.73 149.54 158.48C153.49 159.57 172.12 172.05 180.62 181.08L183.53 178.34C174.78 169.05 155.58 156 150.6 154.63C147.75 153.84 136.53 150.95 128.58 148.9C126.6 148.39 124.83 147.94 123.44 147.58C121.61 147.11 119.91 146.5 118.39 145.76C108.67 141.01 105.13 136.28 105.05 133.67C105.03 132.93 105.3 132.4 105.89 132.07C107.38 131.23 113.3 133.15 115.52 133.87C116.34 134.13 117.06 134.37 117.63 134.53C121.5 135.63 125.52 135.68 128.58 135.57C129.39 135.54 130.14 135.5 130.79 135.47H131C136.13 135.17 140.16 131.24 141.27 125.45C142.26 120.26 140.61 113.43 134.66 110.7C133.2 110.03 131.12 109.78 128.58 109.81C124.42 109.86 119.04 110.66 113.15 111.62C111.52 111.89 110.05 112.13 108.84 112.29C108.31 112.37 107.32 111.8 106.55 110.61C105.58 109.13 105.05 106.74 106.43 104.51C107.76 102.35 112.47 98.0401 128.58 98.3501C131.79 98.4101 135.45 98.6501 139.63 99.1301C140.65 99.3701 149.52 101.69 149.83 110.05L153.83 109.9C153.56 102.79 148.64 98.6001 144.31 96.5501C143.21 94.9201 139.8 90.7401 132.56 88.2201C131.19 87.7501 129.75 87.1601 128.59 86.3101C127.92 85.8201 127.34 85.2401 126.93 84.5401C126.29 83.4401 126.01 81.1501 127.16 79.7101C127.51 79.2701 128 78.9301 128.59 78.7001C130.29 78.0201 132.92 78.2101 136.24 79.2801C148.63 83.2601 151.85 86.9701 157.21 98.5801L160.84 96.9001C158.5 91.8401 156.45 88.0901 153.93 85.1101L154.42 84.9001C153.88 83.6501 152.63 79.6701 153.86 77.7501C154.05 77.4501 154.63 76.5401 156.99 76.4801C157.07 76.4801 157.14 76.4801 157.22 76.4801C164.47 76.4801 170.85 86.1401 177.85 107.74C184.36 127.8 200.61 144.52 208.94 147.22L210.17 143.41C203.89 141.38 188.14 126.51 181.65 106.5V106.48Z"
      fill={colorValues.hands}
    />
  </Svg>
);

export default PictogramHello;
