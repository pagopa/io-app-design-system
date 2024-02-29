import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramObjTrash = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.3584 54c-6.5805 0-11.6887 5.739-10.9259 12.2751L43.5714 230.275c.647 5.544 5.344 9.725 10.9258 9.725H185.503c5.582 0 10.279-4.181 10.926-9.725l19.139-163.9999C216.33 59.739 211.222 54 204.642 54H35.3584Z"
      fill={colorValues.main}
    />
    <Path
      d="M10.2785 40.4684c-.70612-6.0339 3.613-11.4978 9.647-12.2039L216.584 5.25229c6.034-.70607 11.497 3.61304 12.204 9.64701l.929 7.9458c.257 2.1941-1.314 4.181-3.508 4.4378L15.646 51.9222c-2.1941.2568-4.181-1.3138-4.4378-3.508l-.9297-7.9458ZM100.903 14.7614c-.706-6.03397 3.613-11.49785 9.647-12.20392l10.926-1.27846c6.034-.70607 11.498 3.61304 12.204 9.64698l.465 3.9729-32.777 3.8354-.465-3.9729Z"
      fill={colorValues.main}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.8714 65.5055c.8254-.0711 1.5521.5404 1.6232 1.3658l13 150.9997c.071.826-.5405 1.552-1.3658 1.623-.8254.071-1.5521-.54-1.6232-1.365l-13-151.0004c-.071-.8253.5405-1.552 1.3658-1.6231ZM108.092 14.8828c-.757 2.7906-.235 6.1227.203 8.8651l.247 1.5447-81.266 9.5094c-3.437.4022-5.1996 2.2791-6.1076 4.5182-.9498 2.342-.9495 5.0973-.6341 6.909.1421.8161-.4043 1.593-1.2204 1.7351-.8161.1421-1.593-.4043-1.7351-1.2205-.3804-2.1845-.4107-5.5421.8095-8.551 1.262-3.1119 3.8699-5.8241 8.5391-6.3704l78.1646-9.1465c-.367-2.4907-.678-5.6943.105-8.5789.492-1.8143 1.427-3.5555 3.069-4.92621 1.637-1.36563 3.863-2.2697 6.78-2.61112.823-.09629 1.568.49268 1.665 1.31549.096.82282-.493 1.56789-1.316 1.66417-2.486.29096-4.12 1.02787-5.206 1.93467-1.081.9018-1.732 2.0646-2.097 3.4088Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramObjTrash;
