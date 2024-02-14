import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCategShopping = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      d="M.703 5.719h3.59l.02-1.505A4.223 4.223 0 0 1 8.53 0a4.224 4.224 0 0 1 4.219 4.219v.009l-.02 1.49h3.582c.389 0 .704.316.704.704v4.922h6.28c.39 0 .704.315.704.703v9.844C24 23.054 23.054 24 21.89 24H2.11A2.112 2.112 0 0 1 0 21.89V6.423c0-.388.315-.703.703-.703Zm7.828-4.313A2.816 2.816 0 0 0 5.72 4.22v.009l-.02 1.49h5.625l.02-1.504A2.816 2.816 0 0 0 8.53 1.406Zm-.094 20.485c0 .387.316.703.704.703h12.75a.704.704 0 0 0 .703-.703V12.75H8.437v9.14Zm-7.03 0c0 .387.315.703.702.703h5.043a2.1 2.1 0 0 1-.12-.703v-9.844c0-.388.314-.703.702-.703h7.875V7.125h-2.897L12.7 9.243a.703.703 0 0 1-.703.694h-.01a.703.703 0 0 1-.693-.712l.012-2.1H5.681l-.01 2.11a.703.703 0 0 1-.702.693h-.01a.703.703 0 0 1-.693-.712l.009-2.091H1.406v14.766Z"
      fill="currentColor"
    />
    <Path
      d="M12 14.156c.388 0 .703.315.703.703v.704a2.816 2.816 0 0 0 2.813 2.812 2.816 2.816 0 0 0 2.812-2.813v-.703a.703.703 0 1 1 1.406 0v.704a4.224 4.224 0 0 1-4.218 4.218 4.223 4.223 0 0 1-4.22-4.218v-.704c0-.388.316-.703.704-.703Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconCategShopping;
