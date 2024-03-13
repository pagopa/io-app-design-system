import React from "react";
import { Path, Svg } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramPayments = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M112.45 115.39C110.91 117.19 109.24 119.01 107.43 120.79C102.25 125.87 98.19 125.62 95.29 123.78C91.29 121.24 90 115.98 92.05 111.71C92.64 110.47 93.36 109.03 94.19 107.44C89.76 106.36 85.14 105.78 80.38 105.78C48.13 105.78 22 131.91 22 164.15C22 196.39 48.13 222.52 80.37 222.52C112.61 222.52 138.74 196.39 138.74 164.15C138.74 143.76 128.28 125.83 112.45 115.39Z"
      fill={colorValues.main}
    />
    <Path
      d="M80.3691 128.82C84.5491 128.82 88.6491 129.55 92.5691 130.99C97.3591 132.75 101.789 135.59 105.399 139.21L106.679 140.5V135.59C106.679 134.35 107.689 133.33 108.939 133.33C110.189 133.33 111.199 134.34 111.199 135.59V146.11C111.199 146.71 110.969 147.28 110.539 147.71C110.109 148.14 109.549 148.37 108.939 148.37H98.4191C97.1791 148.37 96.1591 147.36 96.1591 146.11C96.1591 144.86 97.1691 143.85 98.4191 143.85H103.639L102.389 142.57C99.2091 139.33 95.2791 136.79 91.0191 135.22C87.5991 133.96 84.0191 133.32 80.3791 133.32C77.4091 133.32 74.4591 133.75 71.6191 134.59C65.2991 136.47 59.6391 140.41 55.6891 145.7C51.7391 150.99 49.5691 157.53 49.5591 164.13C49.5591 165.37 48.5491 166.39 47.2991 166.39C46.6991 166.39 46.1291 166.15 45.6991 165.73C45.2691 165.3 45.0391 164.74 45.0391 164.13C45.0391 156.57 47.5391 149.07 52.0591 143.01C56.5891 136.95 63.0691 132.43 70.3191 130.28C73.5791 129.31 76.9591 128.82 80.3691 128.82ZM79.5291 149.12C81.0091 149.12 82.4691 149.34 83.8891 149.77C86.9091 150.68 89.5191 152.49 91.4391 154.99C91.9491 155.65 91.8191 156.59 91.1691 157.1C90.8991 157.3 90.5891 157.41 90.2491 157.41C89.7791 157.41 89.3391 157.2 89.0591 156.82C87.5191 154.82 85.4291 153.38 83.0191 152.65C81.8891 152.31 80.7191 152.13 79.5291 152.13C78.2191 152.13 76.9191 152.34 75.6691 152.76C73.2791 153.57 71.2391 155.08 69.7691 157.12C69.2691 157.81 68.8491 158.56 68.5091 159.34L68.0491 160.39H79.5291C80.3591 160.39 81.0391 161.07 81.0391 161.9C81.0391 162.73 80.3591 163.41 79.5291 163.41H67.4991V164.16C67.4991 164.97 67.5791 165.78 67.7391 166.57L67.8591 167.17H79.5191C80.3491 167.17 81.0291 167.85 81.0291 168.68C81.0291 169.51 80.3491 170.19 79.5191 170.19H68.9991L69.8991 171.39C71.3391 173.32 73.3091 174.75 75.5891 175.54C76.8591 175.98 78.1791 176.2 79.5191 176.2C80.6691 176.2 81.8191 176.03 82.9291 175.71C85.3491 175 87.4491 173.57 88.9991 171.58C89.2891 171.21 89.7191 171 90.1891 171C90.5291 171 90.8491 171.11 91.1191 171.32C91.7691 171.83 91.8891 172.78 91.3791 173.43C89.4391 175.91 86.8091 177.7 83.7891 178.59C82.4091 179 80.9691 179.21 79.5291 179.21C77.8491 179.21 76.1991 178.93 74.6091 178.38C71.6291 177.35 69.0891 175.44 67.2691 172.87C66.7691 172.16 66.3191 171.4 65.9491 170.61L65.7491 170.18H63.7491C62.9191 170.18 62.2391 169.5 62.2391 168.67C62.2391 167.84 62.9191 167.16 63.7491 167.16H64.7791L64.6591 166.3C64.5591 165.59 64.5091 164.87 64.5091 164.15V163.4H63.7591C62.9291 163.4 62.2491 162.72 62.2491 161.89C62.2491 161.06 62.9291 160.38 63.7591 160.38H64.9791L65.1391 159.84C65.6191 158.23 66.3591 156.72 67.3491 155.35C69.1891 152.79 71.7491 150.9 74.7291 149.89C76.2891 149.36 77.9091 149.1 79.5491 149.1M113.449 161.91C114.049 161.91 114.619 162.15 115.049 162.57C115.479 163 115.709 163.56 115.709 164.17C115.709 171.73 113.209 179.23 108.689 185.29C104.159 191.35 97.6791 195.87 90.4291 198.02C87.1691 198.99 83.7891 199.48 80.3791 199.48C76.1991 199.48 72.0991 198.75 68.1791 197.31C63.3891 195.55 58.9591 192.71 55.3491 189.09L54.0691 187.8V192.71C54.0691 193.95 53.0591 194.97 51.8091 194.97C50.5591 194.97 49.5491 193.96 49.5491 192.71V182.19C49.5491 181.59 49.7791 181.02 50.2091 180.59C50.6391 180.16 51.1991 179.93 51.8091 179.93H62.3291C63.5691 179.93 64.5891 180.94 64.5891 182.19C64.5891 183.44 63.5791 184.45 62.3291 184.45H57.1091L58.3591 185.73C61.5391 188.97 65.4691 191.51 69.7291 193.08C73.1491 194.34 76.7291 194.98 80.3691 194.98C83.3391 194.98 86.2891 194.55 89.1291 193.71C95.4491 191.83 101.109 187.89 105.059 182.6C109.009 177.31 111.179 170.77 111.189 164.17C111.189 162.93 112.199 161.91 113.449 161.91Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.2093 125.47C95.5593 126.32 97.2593 127 99.2793 127V127.01C101.949 127.01 105.179 125.81 108.829 122.23C112.135 118.989 114.988 115.631 117.388 112.465C117.638 113.254 117.988 114.035 118.44 114.8C120.88 118.94 125.82 121.81 130.48 121.81H130.54C132.221 121.799 133.724 121.202 135.053 120.255C136.637 120.672 139.804 121.36 143.45 121.36L143.47 121.37C146.62 121.37 150.13 120.86 153.28 119.2C157.061 117.217 159.69 113.94 161.101 109.469C167.384 112.782 185.378 121.347 203.699 121.35V117.35C185.449 117.35 166.886 108.048 162.029 105.428C162.517 101.865 161.836 99.2695 159.98 97.68C157.399 95.4686 153.401 96.0433 150.62 96.8547C150.65 95.2889 150.555 93.6815 150.335 92.1019C152.996 90.7846 157.891 89.0087 161.05 90.52L162.77 86.91C158.297 84.7709 152.629 86.6663 149.474 88.0869C148.951 86.3223 148.249 84.6839 147.37 83.29L143.99 85.42C147.49 90.96 147.3 101.66 144.53 104.72C143.99 105.33 143.28 105.78 141.78 105.04C135.66 102.01 131.2 86.45 130 80.71L126.08 81.53L126.086 81.5582L126.086 81.5583C126.19 82.0401 127.317 87.2954 129.46 93.12C132.124 100.39 135.16 105.28 138.495 107.71C137.182 111.357 134.13 117.783 130.52 117.8H130.48C127.27 117.8 123.58 115.64 121.88 112.76C121.03 111.32 120.31 109.06 121.74 106.51L121.61 106.437C125.002 101.19 126.766 97.3722 126.899 97.08L123.259 95.42L123.247 95.4465C122.934 96.1066 117.011 108.594 106.029 119.37C100.544 124.756 97.4044 122.763 96.3619 122.102L96.3593 122.1C93.2693 120.13 92.1893 116.04 93.8493 112.58C98.4393 103.03 111.319 79.39 131.939 66.03C137.359 62.52 143.719 60.79 150.379 61.03C166.109 61.6 195.289 64.63 213.889 78.54L216.279 75.34C196.809 60.78 166.719 57.62 150.519 57.03C143.049 56.75 135.869 58.7 129.749 62.68C108.279 76.59 94.9593 101 90.2293 110.85C87.6993 116.13 89.3993 122.42 94.2093 125.47ZM151.42 115.65C147.113 117.92 141.671 117.483 138.324 116.878C140.177 114.311 141.448 111.307 142.161 109.347C142.499 109.403 142.833 109.43 143.16 109.43L143.15 109.42C144.78 109.42 146.28 108.73 147.49 107.4C148.79 105.958 149.685 103.768 150.176 101.227C152.377 100.382 155.948 99.4958 157.37 100.72C158.45 101.65 158.45 104.28 157.37 107.95C156.3 111.58 154.35 114.1 151.42 115.65Z"
      fill={colorValues.hands}
    />
  </Svg>
);

export default PictogramPayments;