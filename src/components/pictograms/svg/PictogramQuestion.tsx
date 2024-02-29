import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramQuestion = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fill={color}
      d="M94.16 8.588c-4.495 0-8.151 3.656-8.151 8.15a1.758 1.758 0 1 0 3.515 0 4.64 4.64 0 0 1 4.635-4.635 4.64 4.64 0 0 1 4.636 4.636 4.64 4.64 0 0 1-4.636 4.635h-1.115c-.971 0-1.758.787-1.758 1.758v6.014a1.758 1.758 0 1 0 3.516 0v-4.281c4.195-.329 7.509-3.848 7.509-8.126 0-4.495-3.657-8.151-8.152-8.151ZM93.044 33.582c-.971 0-1.758.787-1.758 1.758v.515a1.758 1.758 0 1 0 3.516 0v-.515c0-.97-.787-1.758-1.758-1.758Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M109.583 0H78.734c-4.232 0-7.675 3.443-7.675 7.676v13.909c-5.785-8.31-15.404-13.76-26.274-13.76h-7.858c-9.19 0-17.749 4.839-22.511 12.673C7.953 22.525 3.635 28.545 3.831 35.39l.444 15.339a7.004 7.004 0 0 0-2.223 5.12v1.65c0 3.872 3.15 7.022 7.024 7.022h4.712c1.2 2.967 2.945 5.736 5.208 8.258l-1.652 2.288-6.388 8.847a1.76 1.76 0 0 0-.276.586l-8.107 31.19a3.42 3.42 0 0 0 .608 2.973A3.42 3.42 0 0 0 5.905 120h65.39a4.25 4.25 0 0 0 3.101-1.35 4.252 4.252 0 0 0 1.125-3.193l-.666-9.112a17.124 17.124 0 0 0-1.82-6.56 1.758 1.758 0 0 0-3.133 1.594 13.625 13.625 0 0 1 1.447 5.221l.666 9.111a.718.718 0 0 1-.72.774h-8.108v-7.183a1.758 1.758 0 0 0-3.515 0v7.182H21.183l4.486-17.253a.129.129 0 0 1 .124-.097h7.767a9.328 9.328 0 0 0 4.367-1.081c1.129.204 2.285.31 3.448.31 4.93 0 9.634-1.883 13.078-5.201h.007l.091.02c.141.027.283.05 1.174.189.72.112 1.93.3 4.025.63 1.91.298 3.698.978 5.316 2.02a1.756 1.756 0 0 0 2.43-.526 1.758 1.758 0 0 0-.527-2.43 17.143 17.143 0 0 0-6.675-2.537c-1.93-.324-3.11-.497-3.885-.61-1.036-.152-1.348-.197-1.761-.356a3.37 3.37 0 0 1-2.159-3.108c2.079-.892 3.546-2.924 3.565-5.282a5.824 5.824 0 0 0-.292-1.879c4.158-2.464 10.12-7.13 13.202-14.772h3.309a7.03 7.03 0 0 0 7.022-7.022v-1.65a7.013 7.013 0 0 0-2.515-5.38v-4.523a7.672 7.672 0 0 0 1.955.254h5.535c.64 0 1.16.52 1.16 1.16v4.992c0 1.241.76 2.303 1.933 2.704a2.818 2.818 0 0 0 3.182-.953l5.817-7.494a1.05 1.05 0 0 1 .834-.409h12.389c4.233 0 7.676-3.443 7.676-7.676V7.676c0-4.233-3.444-7.676-7.678-7.676ZM5.567 57.5v-1.65a3.513 3.513 0 0 1 3.509-3.51h2.852c-.12 3.057-.042 5.574.722 8.665H9.076A3.511 3.511 0 0 1 5.567 57.5Zm37.38 32.247a9.329 9.329 0 0 1-1.512 5.099c3.585-.014 7.01-1.244 9.682-3.426a6.873 6.873 0 0 1-2.124-4.482h-6.046v2.81Zm7.185-6.325H42.55a3.121 3.121 0 0 0-3.118 3.118v3.207a5.878 5.878 0 0 1-5.871 5.872h-7.767a3.645 3.645 0 0 0-3.527 2.727l-4.715 18.138H5.999L14 85.704l2.799-3.877c3.646-5.05 9.644-13.356 10.66-14.766a2.314 2.314 0 0 1 1.52-.938c.623-.1 1.25.051 1.765.425l.086.062c.558.406.889 1.032.907 1.734a2.16 2.16 0 0 1-.397 1.326l-3.276 4.681a2.828 2.828 0 0 0-.196 2.939 2.83 2.83 0 0 0 2.52 1.53h19.848c.615 0 1.194.239 1.63.674.439.44.678 1.024.672 1.648-.01 1.258-1.09 2.28-2.406 2.28Zm22.14-22.416a3.51 3.51 0 0 0 3.507-3.507v-1.65a3.512 3.512 0 0 0-3.506-3.508h-1.449c.03.763.047 1.538.047 2.322 0 2.162-.26 4.286-.768 6.343h2.17Zm0-12.181h-1.7a46.963 46.963 0 0 0-.94-5.702c-.82-3.533-3.939-6.144-7.583-6.35-6.81-.38-13.756-2.147-20.088-5.106-1.773-.827-3.914-.256-4.98 1.328-.404.6-1.25 1.035-2.005 1.018-1.23-.015-2.584-.691-4.258-2.128-1.129-.97-2.266-2.107-3.476-3.473a4.59 4.59 0 0 0-3.433-1.551h-.004c-1.305 0-2.549.559-3.415 1.535-1.691 1.909-3.159 4.1-4.361 6.513a1.758 1.758 0 0 0 3.146 1.568c1.066-2.137 2.36-4.071 3.846-5.749.272-.305.607-.351.784-.351.181.003.523.047.804.364 1.318 1.488 2.566 2.734 3.818 3.81 1.47 1.263 3.745 2.945 6.507 2.977 1.956.02 3.896-.985 4.962-2.569.106-.157.366-.205.578-.106 6.732 3.146 14.125 5.024 21.378 5.431 2.095.118 3.886 1.613 4.356 3.634a44.584 44.584 0 0 1 1.005 6.796c.094 1.268.142 2.596.142 3.95 0 2.594-.425 5.124-1.263 7.52-2.626 7.507-8.503 11.992-12.406 14.252a5.775 5.775 0 0 0-3.45-1.132H31.69l2.53-3.615a5.635 5.635 0 0 0 1.032-3.449 5.668 5.668 0 0 0-2.355-4.474l-.085-.062a5.85 5.85 0 0 0-4.388-1.052 5.807 5.807 0 0 0-3.815 2.353l-3.5 4.849c-1.995-2.352-3.488-4.925-4.448-7.671-1.354-3.866-1.43-7.338-1.12-11.472a44.372 44.372 0 0 1 1.042-6.945 1.758 1.758 0 0 0-3.421-.808 46.82 46.82 0 0 0-.981 5.867H9.076a7.02 7.02 0 0 0-1.335.13l-.396-13.666c-.156-5.449 3.411-10.216 8.675-11.594.457-.12.847-.419 1.082-.83 4.056-7.108 11.652-11.524 19.824-11.524h7.86c15.703 0 28.478 12.776 28.478 28.48v9.075a7.064 7.064 0 0 0-.991-.071Zm37.313-6.14a4.165 4.165 0 0 0 4.16-4.16V7.674a4.166 4.166 0 0 0-4.162-4.16H78.734a4.165 4.165 0 0 0-4.16 4.16v20.471A31.832 31.832 0 0 1 76.78 39.82v2.376c.596.32 1.26.488 1.955.488h5.536a4.681 4.681 0 0 1 4.676 4.676v3.07l4.64-5.978a4.545 4.545 0 0 1 3.61-1.768h12.389Z"
    />
    <Path
      fill={color}
      d="M32.493 56.404c.971 0 1.758-.787 1.758-1.758v-1.962a1.758 1.758 0 0 0-3.515 0v1.962c0 .971.787 1.758 1.757 1.758ZM58.762 56.404c.97 0 1.757-.787 1.757-1.758v-1.962a1.758 1.758 0 1 0-3.515 0v1.962c0 .971.787 1.758 1.758 1.758ZM42.596 65.053c2.397-1.398 4.629-1.398 7.025 0a1.757 1.757 0 1 0 1.771-3.037c-3.456-2.017-7.11-2.017-10.568 0a1.758 1.758 0 1 0 1.772 3.037Z"
    />
  </Svg>
);

export default PictogramQuestion;
