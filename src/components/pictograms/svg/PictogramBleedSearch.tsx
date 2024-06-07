import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramBleedSearch = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      fill={colorValues.main}
      d="m138.27 122.768-19.549-4.786c3.357-13.224-16.924-23.616-43.851-31.923-24.894-7.689-47.064-8.897-52.451-3.237l.022-.036s-9.939 12.01-2.37 19.796c0 0 27.2 28.059 78.33 27.418 0 0 5.842-.223 11.071-1.615 2.822-.756 6.679-4.069 8.166-6.467l19.501 5.097 1.143-4.239-.012-.008Zm-27.878-9.259c-1.906 6.184-21.444 5.644-43.623-1.201-22.178-6.845-38.612-17.409-36.706-23.592 1.907-6.184 21.444-5.644 43.623 1.2 22.178 6.846 38.624 17.417 36.708 23.603l-.002-.01Z"
    />
    <Path
      fill={colorValues.secondary}
      d="M116.007 114.431a1.266 1.266 0 0 0-1.73.461c-3.253 5.595-19.808 7.594-48.458-1.242-29.812-9.212-40.928-19.872-41.389-26.778a1.26 1.26 0 0 0-1.345-1.176 1.265 1.265 0 0 0-1.176 1.345c.664 10.036 16.807 20.887 43.168 29.022 18.51 5.718 33.935 7.461 43.157 5.224 3.975-.964 6.803-2.669 8.227-5.113a1.267 1.267 0 0 0-.461-1.731l.007-.012ZM91.146 98.647c-7.425-3.292-14.412-5.117-14.412-5.117l-2.52 1.62c7.577 2.772 13.469 5.212 18.064 7.318l-1.14-3.809.008-.012ZM107.848 111.636c-2.022-4.86-8.152-8.92-14.432-11.945l1.423 3.956c10.921 5.234 13.009 7.989 13.009 7.989Z"
    />
    <Path
      fill={colorValues.hands}
      d="m243.431 173.921-54.611-19.61c2.478-1.362 3.977-3.074 4.821-4.431 2.774-4.429 2.571-10.656-.493-15.521-4.065-6.454-11.164-6.193-15.306-4.9-3.154-3.032-7.46-4.92-11.425-4.72a9.42 9.42 0 0 0-2.797-4.745c-3.08-2.813-5.817-2.9-7.576-2.473l-.029.007c-2.595.629-4.871 2.745-6.9 6.386l-12.541-3.893c-2.28-.703-4.102-2.236-5.022-4.205-1.054-2.265-.814-4.628.701-7.033.959-1.519 2.565-2.578 4.416-2.924 28.988-5.21 119.274 20.758 99.831 15.551l10.5-1.878c-.155-.045-33.701-8.665-52.923-12.739-25.948-5.498-45.495-7.137-58.113-4.858-2.968.535-5.536 2.248-7.086 4.723-2.252 3.572-2.577 7.324-.94 10.848 1.383 2.988 4.105 5.301 7.465 6.339l.689.213c-.517 2.914-.95 8.555 2.155 12.998 1.739 2.501 4.312 4.202 7.643 5.123 1.653 2.233 7.64 9.312 17.254 9.748 4.159 2.85 11.202 4.311 11.505 4.371l.181.028c3.003.331 5.565.286 7.745-.016l59.515 21.373 1.351-3.765-.01.003ZM141.525 134.79c-2.125-3.035-1.946-7.132-1.582-9.536l7.444 2.31a61.432 61.432 0 0 0-.793 2.035l3.758 1.362c2.745-7.56 5.325-9.225 6.625-9.551 1.185-.287 2.504.227 3.933 1.537a5.515 5.515 0 0 1 1.596 5.519c-2.379 8.902-10.795 10.305-12.021 10.469-4.24-.299-7.255-1.698-8.972-4.153l.012.008Zm10.175 8.007c.296-.051.648-.126 1.046-.223 3.654-.886 11.157-3.807 13.624-13.07.069-.263.11-.52.148-.787 4.492-.276 10.053 3.561 11.529 8.204 1.549 4.903-2.429 7.761-6.039 9.295-9.801 4.178-16.704-.013-20.321-3.426l.013.007Zm18.744 8.213a28.47 28.47 0 0 0 3.148-1.103c7.053-2.997 10.148-8.306 8.281-14.182a13.78 13.78 0 0 0-1.278-2.808c2.611-.479 6.651-.409 9.174 3.589 2.26 3.588 2.463 8.118.491 11.272-2.359 3.762-7.651 5.406-14.902 4.613a47.767 47.767 0 0 1-4.912-1.371l-.002-.01Z"
    />
  </Svg>
);

export default PictogramBleedSearch;
