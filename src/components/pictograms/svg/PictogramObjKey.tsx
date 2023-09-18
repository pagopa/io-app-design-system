import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramObjKey = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M205.558 116.024c23.689-15.042 30.699-46.4401 15.657-70.1294-15.042-23.6893-46.439-30.6995-70.129-15.6576-21.47 13.6329-29.24 40.7012-19.308 63.289L7.2705 172.584l10.7207 16.883 13.9341-8.847 18.8831 29.739 16.8839-10.721-18.8831-29.739 6.4264-4.08 25.3962 39.996 16.8839-10.721-25.3962-39.996 71.1445-45.174c16.498 15.744 42.175 18.874 62.294 6.1Z"
      fill="#AAEEEF"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M141.896 51.8743c-7.104 13.7827-7.088 30.9232-1.533 42.9989l.549 1.1936L16.3012 174.768c-.7004.443-1.6269.233-2.0692-.467-.4424-.7-.2332-1.627.4672-2.069L137.107 94.9219c-5.407-12.8294-5.168-30.2783 2.122-44.4221 7.584-14.7126 22.762-25.7787 46.851-24.4968.827.0441 1.462.7504 1.418 1.5776-.044.8273-.75 1.4622-1.578 1.4182-22.911-1.2193-36.982 9.2135-44.024 22.8755ZM50.7094 203.765c-.7127.422-1.6328.187-2.0552-.526L34.1836 178.82c-.4223-.713-.1869-1.633.5258-2.055.7127-.423 1.6328-.187 2.0551.525l14.4706 24.42c.4224.712.187 1.632-.5257 2.055ZM83.7168 200.777c-.7087.429-1.6309.202-2.0599-.507l-21.4466-35.433c-.429-.709-.2022-1.631.5065-2.06.7088-.429 1.631-.202 2.06.506l21.4466 35.434c.429.709.2022 1.631-.5066 2.06Z"
      fill="#00C5CA"
    />
  </Svg>
);

export default PictogramObjKey;
