import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramAddCard = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 61.9998C23.4897 61.9998 29.9667 55.5229 29.9667 47.5331C29.9667 44.8981 29.2622 42.4277 28.0313 40.2998H66.5213L66.863 41.9699L68.4316 44.2863L62.4832 48.035L56.7314 52.368L53.8996 55.5066L53.8219 57.9936L56.1361 59.762L61.2355 58.3039L66.0605 55.1343C66.0605 55.1343 68.9959 52.5593 69.1254 52.6886C69.26 52.823 69.3532 55.6513 69.3532 55.6513C69.3532 55.6513 69.8553 58.0608 70.0469 58.0402C70.2384 58.0246 72.9253 59.1673 72.9253 59.1673L73.9193 63.0918L77.4449 66.4476L82.1613 67.1042L84.3926 65.9357L85.5988 63.3607L85.1691 59.9946L94.55 59.5138V90.3978C94.55 92.6936 92.6863 94.5498 90.3928 94.5498H8.8072C6.50857 94.5498 4.65 92.6884 4.65 90.3978V57.1022C4.84997 57.3288 5.05692 57.549 5.27052 57.7626C7.88847 60.3806 11.5051 61.9998 15.5 61.9998Z"
      fill={colorValues.main}
    />
    <Path
      d="M16.5333 40.2998H14.4667V45.9831H8.78333V48.0498H14.4667V54.2498H16.5333V48.0498H22.7333V45.9831H16.5333V40.2998Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 59.7507C7.39474 59.5249 7.04999 59.284 6.71667 59.0289V88.6472C6.71667 90.7633 8.48979 92.4829 10.6827 92.4829H88.5173C90.7053 92.4829 92.4833 90.768 92.4833 88.6472V60.1163L83.5338 60.5605L85.0365 63.8809L83.5338 67.1284H80.6642L76.1647 66.5217L73.7379 63.1216L72.4792 60.901C72.3903 60.5232 71.9602 59.9658 71.9419 59.9532L71.8529 59.7962C71.8529 59.7962 70.0689 58.5512 69.8861 58.5655C69.7034 58.5846 69.1158 56.5406 69.1158 56.5406C69.1158 56.5406 68.8296 55.5591 68.5788 54.7722L68.5775 54.7681C68.4202 54.2748 68.2771 53.8589 68.2276 53.8111C68.185 53.7698 67.8229 54.0267 67.3672 54.3806L67.3585 54.3873C66.4956 55.058 65.3037 56.0704 65.3037 56.0704L60.7005 58.9985L55.8356 60.3455L60.7005 59.2202L65.9184 56.9041L65.9731 56.8577L66.003 56.8323L66.0907 56.7582C66.1665 56.6942 66.2752 56.6028 66.4061 56.4933C66.6683 56.2741 67.0178 55.9842 67.3699 55.6988C67.4825 55.6076 67.5944 55.5177 67.7028 55.4314C67.7078 55.4473 67.8105 55.425 67.9134 55.4027C68.0166 55.3804 68.1198 55.358 68.1247 55.3741C68.1795 55.5515 68.1191 55.7727 68.0632 55.9771C68.0155 56.1515 67.9712 56.3138 68.0046 56.4262C68.0409 56.5481 68.0708 56.6494 68.0915 56.72L68.1217 56.8229L68.1227 56.8262L68.1229 56.8268L68.1233 56.8283L68.1238 56.8299L68.1247 56.8333L68.1301 56.8519L68.15 56.9199C68.1671 56.978 68.1916 57.0605 68.2215 57.1592C68.281 57.3558 68.3632 57.6206 68.4522 57.8874C68.498 58.0244 68.6128 58.091 68.7257 58.1565C68.8279 58.2157 68.9285 58.2741 68.975 58.3829C69.0214 58.4913 69.0836 58.6269 69.1591 58.7484C69.1938 58.8044 69.2614 58.9072 69.3641 59.0068C69.4066 59.048 69.5751 59.2102 69.8456 59.283C69.8536 59.2874 69.8841 59.284 69.9213 59.2798C70.0339 59.2673 70.2082 59.248 70.0083 59.4162C70.0918 59.4658 70.1471 59.521 70.2083 59.582C70.2731 59.6467 70.3446 59.718 70.4631 59.7962C70.5847 59.8765 70.9503 59.8832 71.2901 59.8894C71.5868 59.8948 71.8639 59.8998 71.9419 59.9532L72.4792 60.901C72.5342 61.1346 72.4588 61.2995 72.075 61.2245L72.8656 63.678L76.1647 66.9079L80.5948 68.1617L83.9583 67.6829L86.1729 63.8857L85.0365 60.9662L91.45 60.7079V88.6472C91.45 90.1642 90.1683 91.4495 88.5173 91.4495H10.6827C9.0285 91.4495 7.75 90.1611 7.75 88.6472V59.7507ZM29.3676 43.3995H66.6738L67.425 44.6912L61.3252 48.6457L55.7148 52.7383L52.6816 55.9936L53.6322 58.5772L53.6278 58.7119L53.7019 58.7667L53.6322 58.5772L53.7019 56.4144L56.4036 53.5149L61.8908 49.5121L68.0886 45.9098L67.5658 42.3662H29.0168C29.1462 42.7047 29.2634 43.0494 29.3676 43.3995Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M56.2443 60.9251C54.9578 60.9251 53.7592 60.2844 53.0462 59.1581C52.1678 57.7838 52.2505 56.0529 53.2528 54.7561C59.1945 47.0423 74.9993 40.4599 75.671 40.1861L75.8105 40.1396C97.6138 34.6113 107.632 28.9899 107.73 28.9331L108.753 30.7259C108.345 30.9584 98.4612 36.5229 76.3943 42.1236C75.268 42.5989 60.3105 48.9849 54.8907 56.0168C54.3275 56.7453 54.4722 57.5461 54.7925 58.0473C55.1128 58.5484 55.769 59.0083 56.6577 58.8119C61.2973 57.7786 68.0243 54.6993 73.718 45.9211L75.454 47.0423C69.3832 56.4094 62.1292 59.7058 57.1123 60.8269C56.823 60.8889 56.5388 60.9199 56.2547 60.9199L56.2443 60.9251Z"
      fill={colorValues.hands}
    />
    <Path
      d="M71.8528 60.4547C70.3648 60.1602 69.2747 59.4266 68.6237 58.2744C67.2958 55.9391 68.3963 52.7564 68.448 52.6221L70.3958 53.3092C70.1582 53.9809 69.7087 56.0011 70.4268 57.2566C70.7782 57.8662 71.3775 58.2486 72.261 58.4242L71.858 60.4496L71.8528 60.4547Z"
      fill={colorValues.hands}
    />
    <Path
      d="M81.1115 68.7062C78.9157 68.7062 76.3375 67.6573 73.935 65.1463C72.0388 63.1675 71.269 61.1009 71.641 58.9929C72.4005 54.7149 77.7325 52.0592 77.9598 51.9507L78.8692 53.8055C78.8227 53.8262 74.2502 56.115 73.6767 59.3597C73.4287 60.7753 74.0177 62.2427 75.4282 63.7152C78.5385 66.9599 81.9227 67.2233 83.5295 65.818C84.847 64.6658 84.6662 62.6147 83.0542 60.5997L84.6713 59.3132C87.3528 62.6715 86.7122 65.7819 84.8883 67.3784C83.9222 68.2257 82.6047 68.7113 81.1115 68.7113V68.7062Z"
      fill={colorValues.hands}
    />
    <Path
      d="M85.3533 61.292C81.9692 61.292 79.794 61.0647 79.6442 61.044L79.8663 58.9877C80.104 59.0135 104.036 61.4419 117.686 49.4087L119.05 50.9587C114.902 54.6167 107.162 59.2977 93.8628 60.8115C90.6233 61.1784 87.6938 61.292 85.3482 61.292H85.3533Z"
      fill={colorValues.hands}
    />
    <Path
      d="M68.262 45.2855C67.9262 45.0479 64.9967 42.8985 65.1517 40.3565C65.2292 39.0649 66.0403 37.9954 67.5645 37.1739C72.4367 34.5492 88.2157 36.218 88.8873 36.2904L88.6652 38.3467C84.2838 37.8714 72.1215 37.0654 68.5462 38.9925C67.6937 39.4524 67.2493 39.9535 67.2132 40.4805C67.146 41.5914 68.696 43.0587 69.4555 43.596L68.262 45.2855Z"
      fill={colorValues.hands}
    />
  </Svg>
);

export default PictogramAddCard;
