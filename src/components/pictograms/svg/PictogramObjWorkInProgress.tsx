import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramObjWorkInProgress = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M113.61 112.67L111.73 109.14C120.18 104.63 125.42 99.11 127.29 92.76C129.52 85.19 126.1 78.91 126.07 78.84C125.55 77.9 125.86 76.71 126.78 76.15L157.71 57.41L159.78 60.83L130.37 78.64C131.47 81.41 133.09 87.14 131.15 93.8C128.98 101.26 123.08 107.6 113.61 112.66V112.67Z"
      fill="white"
    />
    <Path
      d="M76.5195 76.78C71.8795 77.77 66.2495 78.41 62.3295 77.7C59.8095 77.24 58.0495 76.24 57.1195 74.72C55.7495 72.51 55.6395 69.95 56.7995 67.53C58.9995 62.93 65.4595 59.44 73.6595 58.42L74.1595 62.39C65.9495 63.42 61.6295 66.74 60.4095 69.26C59.8395 70.46 59.8695 71.56 60.5295 72.62C60.7895 73.04 61.5395 73.43 62.5895 73.67C68.4495 75.02 80.4995 71.96 82.0295 70.99L84.4395 74.18C83.4995 74.91 80.3495 75.96 76.5295 76.78H76.5195Z"
      fill="white"
    />
    <Path
      d="M94.2796 60.79C93.5196 60.91 75.4396 63.65 66.2796 61.59C64.3196 61.15 62.8496 59.65 62.4496 57.68C62.0496 55.72 62.7996 53.78 64.4196 52.61C67.9296 50.07 74.7196 46.91 87.1196 46.29C97.4796 45.78 106.08 38.89 117.97 29.35C123.4 25 129.55 20.07 136.82 15L139.11 18.28C131.95 23.27 125.86 28.15 120.48 32.46C108 42.47 98.9796 49.69 87.3296 50.27C75.9096 50.84 69.8496 53.61 66.7796 55.83C66.2996 56.17 66.3496 56.66 66.3796 56.86C66.4196 57.06 66.5796 57.54 67.1796 57.67C75.5996 59.57 93.5096 56.85 93.6896 56.82L94.2996 60.77L94.2796 60.79Z"
      fill="white"
    />
    <Path
      d="M126.579 128.37L89.4395 139.72L89.5695 165.28L140.759 149.63L126.579 128.37ZM122.729 133.21L95.6695 141.48L95.6495 149.62C95.6495 150.34 95.1395 150.94 94.4595 151.08C94.3595 151.1 94.2495 151.11 94.1395 151.11C93.3095 151.11 92.6395 150.44 92.6395 149.61L92.6595 139.25L121.829 130.33C122.619 130.08 123.459 130.53 123.699 131.33C123.939 132.12 123.499 132.96 122.699 133.2L122.729 133.21Z"
      fill={colorValues.main}
    />
    <Path
      d="M97.4098 92.49L93.5598 93.67C91.7898 94.21 90.4198 95.52 89.7298 97.15L95.5398 99.58L93.9898 107.01L89.2598 106.59L89.3298 120.56L115.94 112.43L104.29 94.95C102.79 92.7 99.9898 91.7 97.4098 92.49Z"
      fill={colorValues.main}
    />
    <Path
      d="M181.769 186.08C181.119 183.97 178.889 182.78 176.779 183.42L165.569 186.85L151.389 165.59L89.6592 184.45L89.7892 210.01L79.0792 213.28C76.9692 213.93 75.7792 216.16 76.4192 218.27L77.6592 222.33C78.3092 224.44 80.5392 225.63 82.6492 224.99L180.349 195.13C182.459 194.48 183.649 192.25 183.009 190.14L181.769 186.08ZM146.809 170.64L95.8792 186.21L95.9092 198.57C95.9092 199.29 95.3992 199.9 94.7192 200.04C94.6192 200.06 94.5192 200.07 94.4092 200.07C93.5792 200.07 92.9092 199.4 92.9092 198.57L92.8792 183.98L145.939 167.76C146.729 167.52 147.569 167.96 147.809 168.76C148.049 169.55 147.609 170.39 146.809 170.63V170.64Z"
      fill={colorValues.main}
    />
    <Path
      d="M140.758 149.64L89.5684 165.29L89.6684 184.46L151.398 165.6L140.768 149.65L140.758 149.64ZM92.5784 167.5L139.498 153.16L146.658 163.9L92.6484 180.41L92.5784 167.51V167.5Z"
      fill={colorValues.main}
    />
    <Path
      d="M115.94 112.42L89.3301 120.55L89.4301 139.72L126.57 128.37L115.94 112.42ZM92.3401 122.77L114.68 115.94L121.84 126.68L92.4101 135.68L92.3401 122.78V122.77Z"
      fill={colorValues.main}
    />
    <Path
      d="M126.58 128.37L89.4297 139.73L126.58 128.37Z"
      fill={colorValues.main}
    />
    <Path
      d="M145.939 167.78L92.8789 184L92.9089 198.59C92.9089 199.42 93.5789 200.09 94.4089 200.09C94.5189 200.09 94.6189 200.08 94.7189 200.06C95.3989 199.92 95.9089 199.31 95.9089 198.59L95.8789 186.23L146.809 170.66C147.599 170.42 148.049 169.58 147.809 168.79C147.569 168 146.729 167.55 145.939 167.79V167.78Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M121.848 130.34L92.6782 139.26L92.6582 149.62C92.6582 150.45 93.3282 151.12 94.1582 151.12C94.2682 151.12 94.3782 151.11 94.4782 151.09C95.1582 150.95 95.6582 150.35 95.6682 149.63L95.6882 141.49L122.748 133.22C123.538 132.98 123.988 132.14 123.748 131.35C123.508 130.56 122.668 130.1 121.878 130.35L121.848 130.34Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M89.4102 109.34C89.1002 109.41 88.7702 109.4 88.4602 109.31C87.9402 109.17 71.1902 103.89 68.9502 94.55C67.3902 88.06 71.1002 80.66 79.9702 72.58C80.5502 72.06 85.6502 67.61 90.4402 67.96L90.1502 71.95C87.5102 71.75 83.8402 74.48 82.6502 75.54C75.0702 82.46 71.6702 88.7 72.8402 93.6C74.2802 99.64 86.6302 104.49 88.9102 105.25C89.9602 104.8 90.8902 104.29 91.6902 103.73C92.6102 103.08 93.1502 102.06 93.1502 100.92C93.1502 99.71 88.0802 96.75 87.0802 96.03C84.2402 93.96 82.8602 91.72 82.9902 89.37C83.1202 86.96 84.8502 84.79 88.1402 82.91C103.18 74.3 111.85 78.27 116.47 83.11C117.96 84.67 118.59 86.57 118.31 88.6C117.43 94.97 109.16 99.94 108.04 100.61L105.86 97.26C109.48 95.12 113.89 91.42 114.35 88.05C114.46 87.22 114.23 86.55 113.58 85.87C108.29 80.32 100.4 80.49 90.1302 86.38C88.1902 87.49 87.0402 88.66 86.9902 89.59C86.9402 90.46 87.8402 91.63 89.4402 92.8C91.4702 94.28 97.1702 98.46 97.1502 100.95C97.1302 103.39 95.9802 105.59 93.9902 107C92.7702 107.86 91.3302 108.62 89.7102 109.24C89.6102 109.28 89.5102 109.31 89.4102 109.33V109.34Z"
      fill="white"
    />
  </Svg>
);

export default PictogramObjWorkInProgress;
