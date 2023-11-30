import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramHello = ({ size, colorValues, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M67.47 125.11C67.4583 125.144 67.4474 125.178 67.4373 125.213C67.4403 125.203 67.2992 125.644 67.1195 126.364C66.9403 127.082 66.7169 128.096 66.519 129.348C66.124 131.848 65.8258 135.326 66.1965 139.314C66.9424 147.339 70.4047 157.396 81.0528 165.567C81.8604 166.193 82.8154 166.486 83.7484 166.486C85.0805 166.486 86.3868 165.886 87.2585 164.75C88.7337 162.829 88.3917 160.032 86.4337 158.541C70.0526 145.991 75.6361 128.583 75.8493 127.952L75.8493 127.952L75.8531 127.941C76.6199 125.637 75.3846 123.141 73.0936 122.347L73.0573 122.334C70.7563 121.576 68.264 122.783 67.47 125.11Z"
      fill={colorValues.secondary}
      stroke={colorValues.main}
      strokeWidth={5}
      strokeLinejoin="round"
    />
    <Path
      d="M77.0725 183.625C77.2044 183.625 77.3338 183.614 77.4601 183.595C78.6546 183.49 79.7958 182.901 80.5827 181.876C82.0578 179.955 81.7159 177.158 79.7582 175.667C45.2189 149.19 56.9812 112.426 57.5204 110.8C58.3109 108.482 57.0472 105.966 54.7507 105.191C52.4006 104.384 49.9235 105.693 49.1438 107.95L49.1346 107.977C49.0055 108.365 45.4372 119.393 46.8165 134.141C48.203 148.965 54.5992 167.542 74.378 182.706C75.1854 183.331 76.1399 183.625 77.0725 183.625Z"
      fill={colorValues.secondary}
      stroke={colorValues.main}
      strokeWidth={5}
      strokeLinejoin="round"
    />
    <Path
      d="M164.192 94.668C164.33 94.668 164.466 94.6568 164.598 94.6353C164.627 94.6331 164.655 94.6305 164.684 94.6273C167.14 94.3573 168.852 92.1304 168.59 89.7358L168.589 89.7325C168.553 89.407 167.744 83.2042 163.688 76.3378C159.59 69.3997 152.167 61.787 139.051 58.9578L139.051 58.9578L139.044 58.9564C136.699 58.4571 134.31 59.9358 133.795 62.3531C133.272 64.7501 134.805 67.107 137.193 67.6134C157.311 71.9597 159.709 90.0196 159.797 90.7518C160.063 93.0131 161.976 94.668 164.192 94.668Z"
      fill={colorValues.secondary}
      stroke={colorValues.main}
      strokeWidth={5}
      strokeLinejoin="round"
    />
    <Path
      d="M188.077 102.318C188.215 102.318 188.351 102.307 188.483 102.285C188.511 102.283 188.54 102.28 188.568 102.277C191.024 102.007 192.737 99.7802 192.474 97.3856L192.472 97.3663C192.424 96.9566 190.947 85.4595 183.411 72.7174C175.833 59.9059 162.124 45.8438 137.767 40.598L137.767 40.598L137.761 40.5968C135.415 40.0975 133.027 41.5762 132.512 43.9935C131.989 46.3906 133.522 48.7476 135.91 49.2539C178.49 58.4422 183.486 96.7894 183.682 98.4039C183.949 100.664 185.861 102.318 188.077 102.318Z"
      fill={colorValues.secondary}
      stroke={colorValues.main}
      strokeWidth={5}
      strokeLinejoin="round"
    />
    <Path
      d="M139.011 195.961C116.615 173.783 84.6579 127.807 87.5328 109.062C88.2002 104.716 90.5873 102.646 92.474 101.669C94.8868 100.422 97.4537 100.602 100.021 101.669C97.9285 96.578 96.6836 91.5252 97.1456 87.3596C97.5435 83.7982 99.1991 81.0597 101.946 79.4526C103.768 78.3855 105.886 78.1669 108.106 78.8226C111.674 79.8898 115.511 83.3611 119.144 87.7067C118.746 85.1482 118.643 82.6926 119.002 80.494C119.567 76.9841 120.876 74.5027 122.891 73.1271C124.521 72.0085 126.575 71.6742 128.795 72.1628C132.376 72.9471 135.494 75.5699 137.163 79.1955L154.22 111.183C161.651 104.626 167.734 101.515 172.354 101.901C175.011 102.119 176.346 103.456 176.731 103.919C182.404 110.682 176.859 117.997 172.816 123.333C171.045 125.673 169.21 128.09 168.658 129.903C166.361 137.514 171.597 155.308 187.088 167.586L183.905 171.623C167.349 158.497 160.56 138.98 163.755 128.412C164.577 125.712 166.592 123.05 168.735 120.222C173.137 114.423 175.614 110.643 172.842 107.288C171.79 106.491 166.451 106.645 155.272 117.2C154.694 117.753 153.886 117.997 153.103 117.869C152.307 117.74 151.627 117.252 151.255 116.545L132.607 81.574C132.607 81.574 132.555 81.4712 132.53 81.4197C131.541 79.2212 129.732 77.6527 127.704 77.2027C126.459 76.9327 125.946 77.2798 125.779 77.3955C124.996 77.9227 124.393 79.3241 124.072 81.3297C123.097 87.321 126.69 96.7708 130.22 104.086C132.735 108.445 134.48 111.903 134.981 112.906C135.597 114.14 135.135 115.632 133.929 116.3C132.735 116.969 131.221 116.57 130.502 115.4C130.284 115.04 128.115 111.492 125.702 106.555C119.824 96.4622 111.956 85.3411 106.656 83.7725C105.552 83.4511 104.962 83.6697 104.564 83.9011C103.717 84.4025 102.562 85.3668 102.267 87.9382C101.676 93.2609 105.154 101.592 109.39 108.831C114.164 113.948 117.963 119.99 119.233 122.086C119.901 123.179 119.644 124.606 118.656 125.416C117.655 126.226 116.217 126.174 115.28 125.3C112.791 122.973 108.927 118.023 105.385 112.16C101.342 107.866 97.3125 105.012 94.8355 106.285C94.0654 106.683 92.9873 107.493 92.6151 109.885C90.2921 125.004 118.656 168.602 142.63 192.349L139.024 196L139.011 195.961Z"
      fill={colorValues.hands}
    />
    <Path
      d="M149.297 127.75L144.201 128.374L145.285 137.269L150.381 136.646L149.297 127.75Z"
      fill={colorValues.hands}
    />
    <Path
      d="M139.526 110.602L109.59 127.958L112.161 132.409L142.098 115.053L139.526 110.602Z"
      fill={colorValues.hands}
    />
    <Path
      d="M137.689 155.925C135.995 141.898 151.307 131.96 151.948 131.549L154.708 135.881C154.579 135.971 141.475 144.508 142.772 155.308L137.677 155.925H137.689Z"
      fill={colorValues.hands}
    />
  </Svg>
);

export default PictogramHello;