import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCanceled = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12Zm4.7071 7.29289c.3905.39053.3905 1.02369 0 1.41422L13.4142 12l3.2929 3.2929c.3905.3905.3905 1.0237 0 1.4142-.3905.3905-1.0237.3905-1.4142 0L12 13.4142l-3.29289 3.2929c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142L10.5858 12 7.29289 8.70711c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0L12 10.5858l3.2929-3.29291c.3905-.39052 1.0237-.39052 1.4142 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCanceled;
