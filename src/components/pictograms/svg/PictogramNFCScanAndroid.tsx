import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramNFCScanAndroid = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M131.281 117.052L107.168 80.1878C105.571 77.7475 102.299 77.0633 99.8587 78.6596L33.3953 122.135C30.955 123.732 30.2707 127.004 31.867 129.444L55.9808 166.308C57.5771 168.748 60.8494 169.433 63.2898 167.836L129.753 124.361C132.194 122.764 132.878 119.492 131.281 117.052Z"
      fill={colorValues.main}
    />
    <Path
      d="M60.5106 166.53C60.1506 166.53 59.7906 166.49 59.4406 166.42C58.0806 166.14 56.9206 165.34 56.1606 164.18L33.8906 130.14C33.1306 128.98 32.8706 127.59 33.1506 126.23C33.4306 124.87 34.2306 123.71 35.3906 122.95L99.7906 80.82C102.191 79.25 105.411 79.93 106.981 82.32L129.251 116.36C130.821 118.76 130.141 121.98 127.751 123.55L63.3506 165.68C62.4906 166.24 61.5206 166.53 60.5206 166.53H60.5106ZM102.631 82.97C102.221 82.97 101.801 83.09 101.431 83.33L37.0306 125.46C36.5406 125.78 36.2006 126.27 36.0806 126.85C35.9606 127.42 36.0806 128.01 36.3906 128.5L58.6606 162.54C58.9806 163.03 59.4706 163.37 60.0506 163.49C60.6206 163.61 61.2106 163.49 61.7006 163.18L126.101 121.05C127.111 120.39 127.401 119.02 126.741 118.01L104.471 83.97C104.051 83.33 103.351 82.98 102.631 82.98V82.97Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M60.9502 151.74C60.5502 151.74 60.1602 151.7 59.7602 151.62C58.2502 151.3 56.9602 150.42 56.1102 149.13C54.3702 146.47 55.1202 142.88 57.7802 141.14C60.4402 139.4 64.0302 140.15 65.7702 142.81C66.6102 144.1 66.9002 145.64 66.5902 147.15C66.2802 148.66 65.3902 149.95 64.1002 150.8C63.1502 151.42 62.0602 151.74 60.9502 151.74ZM60.9302 143.2C60.4002 143.2 59.8802 143.35 59.4202 143.65C58.1402 144.49 57.7802 146.21 58.6202 147.49C59.4502 148.77 61.1802 149.13 62.4502 148.29C63.0702 147.89 63.4902 147.26 63.6502 146.54C63.8002 145.82 63.6602 145.08 63.2602 144.46C62.8502 143.84 62.2302 143.42 61.5102 143.26C61.3202 143.22 61.1302 143.2 60.9402 143.2H60.9302Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M61.4992 159.64C61.0092 159.64 60.5292 159.4 60.2392 158.96C57.9192 155.41 58.9192 150.63 62.4692 148.3C64.1892 147.17 66.2492 146.79 68.2592 147.21C70.2692 147.63 71.9992 148.81 73.1292 150.53C73.5792 151.22 73.3892 152.15 72.6992 152.61C72.0092 153.06 71.0792 152.87 70.6192 152.18C69.9292 151.13 68.8792 150.41 67.6492 150.15C66.4192 149.89 65.1692 150.13 64.1192 150.82C61.9492 152.24 61.3392 155.16 62.7592 157.33C63.2092 158.02 63.0192 158.95 62.3292 159.41C62.0792 159.58 61.7892 159.65 61.5092 159.65L61.4992 159.64Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M77.5799 107.19C77.0899 107.19 76.6099 106.95 76.3199 106.51C75.8699 105.82 76.0599 104.89 76.7499 104.43L100.74 88.74C101.43 88.29 102.36 88.48 102.82 89.17C103.27 89.86 103.08 90.79 102.39 91.25L78.3999 106.94C78.1499 107.11 77.8599 107.18 77.5799 107.18V107.19Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M77.5194 113.42C77.0294 113.42 76.5494 113.18 76.2594 112.74C75.8094 112.05 75.9994 111.12 76.6894 110.66L104.169 92.69C104.859 92.24 105.789 92.43 106.249 93.12C106.699 93.81 106.509 94.74 105.819 95.2L78.3394 113.17C78.0894 113.34 77.7994 113.41 77.5194 113.41V113.42Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M119.18 136.97L126.93 135.05L144.11 131.82L154.9 126.41L163.07 119.7L164.95 111.65L169.66 96.39L171.58 84.75L172.8 83.16L146.3 42.67C141.85 35.87 132.72 33.96 125.92 38.41L85.6603 64.75C78.8603 69.2 76.9503 78.33 81.4003 85.13L117.32 140.05L119.19 136.98L119.18 136.97Z"
      fill={colorValues.main}
    />
    <Path
      d="M120.87 137.28C120.37 137.28 119.88 137.04 119.58 136.59L84.2396 83.82C82.4096 81.03 81.7896 77.71 82.4696 74.46C83.1496 71.21 85.0496 68.42 87.8296 66.6L126.75 41.14C132.49 37.39 140.21 39 143.96 44.74L171.83 87.35C172.3 88.07 172.1 89.03 171.38 89.5C170.66 89.97 169.7 89.77 169.23 89.05L141.36 46.44C140 44.36 137.9 42.93 135.46 42.42C133.02 41.91 130.53 42.38 128.45 43.74L89.5296 69.2C87.4496 70.56 86.0196 72.66 85.5096 75.1C84.9996 77.54 85.4696 80.03 86.8296 82.11L122.16 134.87C122.64 135.58 122.45 136.55 121.73 137.02C121.46 137.2 121.16 137.28 120.87 137.28Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M199.512 145.954L195.846 147.553L205.267 169.158L208.933 167.559L199.512 145.954Z"
      fill={colorValues.hands}
    />
    <Path
      d="M164.15 204.18L160.15 204.11C160.39 191.3 147.33 170.88 143.04 164.17C142.59 163.46 142.22 162.89 141.96 162.47C140.28 159.75 128.7 155.53 121.01 153.4C120.76 153.33 120.53 153.21 120.32 153.05C115.75 149.51 113.59 145.95 113.91 142.47C114.32 137.99 118.69 135.68 118.87 135.59C119.13 135.45 119.42 135.38 119.72 135.37C138.57 134.69 149.11 129.77 154.63 125.77C160.52 121.5 162.08 117.34 162.09 117.3C164.58 110.54 170.98 91.77 170.76 85.85C170.6 81.74 173.61 78.39 177.6 78.23C182.52 78.06 188.5 82.76 189.1 96.73C189.32 98.6 191.62 122.02 173.7 131.44L171.84 127.9C187.65 119.59 185.15 97.36 185.13 97.14C185.13 97.09 185.12 97.03 185.12 96.98C184.7 86.66 181.02 82.08 177.78 82.23C176 82.3 174.71 83.79 174.78 85.7C175.09 93.61 166.25 117.64 165.88 118.66C165.62 119.41 158.84 137.79 120.4 139.35C119.69 139.82 118.06 141.07 117.91 142.86C117.75 144.8 119.33 147.15 122.49 149.66C126.57 150.81 142.38 155.52 145.39 160.37C145.64 160.78 146 161.34 146.44 162.02C151.36 169.72 164.44 190.16 164.18 204.19L164.15 204.18Z"
      fill={colorValues.hands}
    />
    <Path
      d="M185.179 137.32L183.459 133.71C196.679 127.42 199.809 117.31 200.179 115.9C200.549 109.14 199.279 104.52 196.509 102.54C193.089 100.09 188.099 102.08 188.049 102.1L186.519 98.4C186.809 98.28 193.569 95.54 198.809 99.26C202.849 102.13 204.659 107.87 204.169 116.31C204.169 116.42 204.149 116.53 204.119 116.64C203.999 117.17 200.939 129.81 185.179 137.31V137.32Z"
      fill={colorValues.hands}
    />
    <Path
      d="M182.709 153.47V149.47C182.709 149.47 186.899 149.44 191.409 147.79C197.189 145.68 200.849 142.01 202.289 136.88C203.569 132.34 203.489 128.92 202.049 127.01C200.789 125.33 198.829 125.26 198.809 125.26L198.859 121.26C199.019 121.26 202.809 121.35 205.249 124.62C207.489 127.61 207.779 132.1 206.129 137.97C201.819 153.3 182.889 153.48 182.699 153.48L182.709 153.47Z"
      fill={colorValues.hands}
    />
    <Path
      d="M103.412 71.4254C102.653 70.2723 102.972 68.7219 104.125 67.9625L121.664 56.4124C122.817 55.653 124.367 55.9722 125.127 57.1253C125.886 58.2784 125.567 59.8288 124.414 60.5882L106.875 72.1383C105.722 72.8977 104.172 72.5785 103.412 71.4254Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramNFCScanAndroid;
