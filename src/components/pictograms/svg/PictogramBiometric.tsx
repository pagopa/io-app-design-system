import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramBiometric = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M218.553 173.156C218.443 173.026 207.573 159.946 194.963 146.476C174.123 124.216 164.773 118.046 160.603 116.786C155.303 115.196 151.353 116.086 149.463 119.296C147.503 122.646 148.333 127.366 150.383 129.356C151.043 129.986 151.183 130.986 150.733 131.776C150.283 132.566 149.353 132.956 148.473 132.716C148.293 132.666 129.933 127.746 119.463 127.086C118.413 127.026 117.403 127.376 116.613 128.076C115.803 128.796 115.333 129.796 115.293 130.886C115.203 132.956 116.683 134.716 118.723 134.996C128.563 136.326 141.183 138.446 145.473 141.026L143.413 144.456C140.573 142.746 131.383 140.746 118.193 138.966C114.083 138.416 111.113 134.866 111.293 130.716C111.393 128.546 112.333 126.556 113.943 125.106C115.533 123.676 117.583 122.966 119.713 123.096C127.383 123.576 138.683 126.146 144.943 127.686C143.923 124.316 144.223 120.316 146.013 117.266C147.373 114.956 151.623 109.896 161.753 112.956C177.623 117.736 219.843 168.436 221.633 170.596L218.553 173.146V173.156Z"
      fill={colorValues.hands}
    />
    <Path
      d="M138.314 158.916C136.004 157.186 127.414 155.926 115.324 155.546C109.484 155.366 104.854 150.456 105.004 144.606C105.114 140.126 108.044 136.166 112.284 134.736L114.394 134.026L115.664 137.816L113.554 138.526C110.894 139.416 109.064 141.896 109.004 144.696C108.914 148.356 111.804 151.426 115.454 151.546C129.104 151.976 137.614 153.376 140.724 155.716L138.324 158.916H138.314Z"
      fill={colorValues.hands}
    />
    <Path
      d="M178.404 218.096C161.414 192.976 139.404 176.966 112.984 170.496L112.484 170.376C109.634 169.676 107.334 167.606 106.334 164.846C105.294 161.986 105.834 158.726 107.734 156.346L111.024 152.246L114.144 154.746L110.854 158.846C109.814 160.146 109.524 161.916 110.094 163.486C110.644 164.996 111.894 166.116 113.444 166.506L113.944 166.626C141.354 173.336 164.164 189.906 181.724 215.876L178.414 218.116L178.404 218.096Z"
      fill={colorValues.hands}
    />
    <Path
      d="M158.243 135.668L155.658 138.72L163.679 145.512L166.264 142.46L158.243 135.668Z"
      fill={colorValues.hands}
    />
    <Path
      d="M166.503 164.356C160.493 153.936 164.323 136.766 164.493 136.036L168.393 136.926C168.353 137.086 164.743 153.306 169.973 162.356L166.513 164.356H166.503Z"
      fill={colorValues.hands}
    />
    <Path
      d="M145.977 136.455L133.402 163.682L137.034 165.359L149.608 138.133L145.977 136.455Z"
      fill={colorValues.hands}
    />
    <Circle cx="50.5" cy="111.5" r="40.5" fill="#AAEEEF" />
    <Path
      d="M37.9831 89.3429C38.8881 89.3429 39.795 89.3372 40.7 89.3448C41.1788 89.3486 41.5525 89.5638 41.8135 89.9732C41.9205 90.1427 41.9806 90.3312 41.9768 90.5331C41.9731 90.7216 41.9806 90.9158 41.9318 91.0948C41.7928 91.6071 41.4079 91.9327 40.8878 92.0032C40.7188 92.026 40.5479 92.0431 40.3771 92.0431C38.8149 92.047 37.2526 92.045 35.6923 92.0489C35.1497 92.0489 34.6258 92.1574 34.1301 92.3878C33.8259 92.5287 33.5161 92.6601 33.2269 92.8296C33.0073 92.9591 32.8007 93.1229 32.6148 93.2981C32.3182 93.5761 32.0252 93.8598 31.7924 94.2026C31.3343 94.8786 31.0676 95.6289 30.9249 96.4268C30.8855 96.6496 30.8705 96.8819 30.8705 97.1085C30.8667 98.7062 30.8667 100.304 30.8705 101.902C30.8705 102.262 30.7822 102.589 30.5438 102.863C30.1363 103.328 29.3984 103.488 28.8426 103.027C28.4915 102.736 28.3375 102.361 28.3375 101.907C28.3394 100.129 28.3244 98.3482 28.345 96.5696C28.3544 95.686 28.5046 94.8215 28.8257 93.9855C29.1374 93.1724 29.573 92.4411 30.1326 91.788C30.6564 91.1767 31.2723 90.6683 31.9764 90.2741C32.3801 90.0475 32.7876 89.8361 33.2288 89.6952C33.6156 89.5714 34.0118 89.5028 34.4099 89.4362C35.2079 89.3029 36.0115 89.3524 36.8133 89.3429C37.2038 89.3391 37.5944 89.3429 37.9849 89.3429H37.9831Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M73.3291 99.0623C73.3291 100.035 73.3366 101.008 73.3254 101.98C73.3197 102.522 73.0663 102.934 72.5837 103.174C72.1556 103.387 71.7331 103.324 71.3444 103.061C70.9614 102.804 70.8149 102.412 70.8018 101.966C70.7905 101.572 70.798 101.176 70.798 100.78C70.798 99.5155 70.798 98.2491 70.798 96.9847C70.798 96.3848 70.661 95.8116 70.4357 95.2632C70.2592 94.8348 70.0451 94.4234 69.7616 94.0502C69.4555 93.6465 69.1006 93.2999 68.6969 92.9971C68.0304 92.4963 67.2831 92.2183 66.47 92.0888C66.1546 92.0393 65.8391 92.0298 65.5218 92.0431C65.443 92.0469 65.366 92.0431 65.2871 92.045C63.9052 92.045 62.5232 92.0488 61.1412 92.045C60.9647 92.045 60.7826 92.0259 60.6099 91.9821C60.0729 91.8488 59.7236 91.3499 59.6898 90.832C59.6523 90.2683 59.8626 89.8303 60.332 89.5294C60.5404 89.3961 60.7751 89.3428 61.0211 89.3428C61.9899 89.3428 62.9569 89.3428 63.9258 89.3428C64.6205 89.3428 65.3153 89.3371 66.01 89.3447C66.3668 89.3485 66.7273 89.3542 67.0822 89.398C67.7468 89.4837 68.3928 89.6551 69.0105 89.9293C69.5701 90.1769 70.0958 90.4835 70.5727 90.87C71.2975 91.4566 71.9171 92.1345 72.379 92.9571C72.7189 93.5589 72.9461 94.2025 73.117 94.8671C73.2521 95.3927 73.3385 95.9278 73.331 96.4762C73.3197 97.3389 73.3273 98.1996 73.3273 99.0623H73.3291Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M28.3372 124.631C28.3372 123.65 28.3372 122.67 28.3372 121.689C28.3372 121.032 28.8798 120.428 29.5257 120.388C30.136 120.352 30.6598 120.782 30.81 121.325C30.8495 121.468 30.8645 121.62 30.8645 121.769C30.8682 123.344 30.8664 124.917 30.8682 126.491C30.8682 127.202 31.011 127.884 31.2832 128.537C31.4916 129.034 31.7639 129.487 32.1188 129.896C32.7816 130.658 33.589 131.174 34.5485 131.46C34.924 131.572 35.3052 131.631 35.6976 131.635C35.7821 131.635 35.8666 131.656 35.953 131.662C36.0468 131.667 36.1407 131.675 36.2327 131.671C36.4111 131.663 36.5895 131.637 36.7679 131.637C37.9395 131.633 39.1112 131.633 40.2828 131.637C40.5082 131.637 40.7372 131.644 40.9569 131.686C41.4977 131.793 41.9108 132.223 41.984 132.804C42.014 133.046 41.984 133.271 41.9033 133.495C41.7662 133.876 41.5071 134.128 41.1259 134.253C40.9532 134.31 40.7804 134.341 40.5983 134.341C38.8652 134.339 37.1302 134.349 35.3972 134.335C34.7118 134.331 34.0377 134.217 33.3768 134.023C32.4699 133.756 31.6756 133.284 30.949 132.69C29.8975 131.827 29.1727 130.73 28.7352 129.439C28.5681 128.948 28.4348 128.445 28.3822 127.925C28.3616 127.722 28.339 127.518 28.339 127.314C28.3334 126.421 28.3372 125.526 28.3372 124.633V124.631Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M63.7342 134.337C62.8593 134.337 61.9843 134.341 61.1093 134.333C60.9403 134.333 60.7675 134.309 60.6023 134.269C60.1385 134.154 59.6654 133.627 59.6841 133.065C59.6954 132.737 59.7592 132.44 59.9564 132.18C60.1742 131.892 60.4521 131.721 60.8164 131.669C61.1281 131.625 61.4379 131.635 61.7496 131.633C63.1935 131.629 64.6393 131.627 66.0832 131.633C66.3761 131.633 66.6578 131.587 66.9357 131.511C67.4407 131.374 67.9327 131.184 68.3777 130.902C69.3128 130.308 70.0188 129.508 70.43 128.455C70.6121 127.99 70.7135 127.512 70.7623 127.013C70.8018 126.602 70.7961 126.192 70.798 125.783C70.8036 124.439 70.798 123.094 70.8018 121.75C70.8018 121.356 70.9276 121.013 71.2186 120.733C71.6542 120.314 72.3715 120.251 72.8747 120.693C73.1958 120.975 73.3197 121.333 73.3272 121.742C73.3366 122.374 73.3291 123.007 73.3291 123.641C73.3291 124.559 73.3347 125.476 73.3272 126.392C73.3235 126.905 73.3197 127.419 73.2728 127.929C73.239 128.302 73.1507 128.674 73.0587 129.037C72.8278 129.953 72.3959 130.77 71.8345 131.521C71.4664 132.014 71.0346 132.444 70.552 132.827C70.1502 133.145 69.7202 133.412 69.264 133.636C68.6875 133.92 68.0792 134.124 67.4483 134.227C67.0277 134.295 66.5977 134.322 66.1715 134.329C65.3603 134.345 64.5473 134.333 63.7342 134.333V134.337Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M42.9095 121.325C42.9095 120.697 43.2831 120.154 43.8164 120.028C44.3008 119.914 44.7402 120.025 45.1045 120.394C45.3467 120.64 45.5964 120.878 45.8536 121.108C46.2217 121.438 46.6178 121.729 47.0422 121.982C47.5285 122.272 48.0392 122.506 48.5687 122.692C48.9405 122.824 49.3329 122.906 49.7197 122.991C50.069 123.069 50.4257 123.102 50.7863 123.094C50.8707 123.094 50.9552 123.111 51.0416 123.119C51.0886 123.125 51.1355 123.134 51.1806 123.13C51.466 123.104 51.7514 123.064 52.0387 123.05C52.4067 123.033 52.7616 122.95 53.1146 122.852C53.7642 122.673 54.3857 122.422 54.9622 122.07C55.3283 121.845 55.6851 121.605 56.0362 121.356C56.4399 121.07 56.7816 120.708 57.1234 120.352C57.2961 120.171 57.4989 120.053 57.7449 120C58.1579 119.908 58.5072 120.026 58.8301 120.285C59.14 120.533 59.2789 120.864 59.3071 121.249C59.3165 121.371 59.2827 121.498 59.2489 121.618C59.1775 121.872 59.048 122.094 58.8677 122.289C58.2349 122.976 57.5026 123.534 56.6953 123.993C56.3479 124.189 56.0005 124.385 55.6456 124.568C55.088 124.854 54.4946 125.048 53.8957 125.223C53.5671 125.32 53.2366 125.412 52.9024 125.48C52.6076 125.541 52.3053 125.572 52.0049 125.608C51.7119 125.642 51.419 125.669 51.1242 125.695C51.0623 125.701 50.9984 125.703 50.9365 125.695C50.0972 125.587 49.2541 125.507 48.4373 125.273C47.8308 125.098 47.2337 124.898 46.6573 124.633C45.8311 124.252 45.0631 123.774 44.344 123.214C44.1337 123.05 43.9478 122.86 43.7488 122.681C43.6436 122.586 43.5329 122.5 43.4371 122.397C43.3038 122.254 43.1705 122.108 43.0597 121.948C42.9282 121.754 42.8888 121.527 42.9095 121.331V121.325Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M53.128 110.273C53.128 111.672 53.1374 113.074 53.1243 114.474C53.1168 115.152 52.9834 115.808 52.5779 116.372C52.3375 116.707 52.0409 116.983 51.6766 117.183C51.0983 117.501 50.4768 117.646 49.8309 117.734C49.5041 117.778 49.1774 117.776 48.8507 117.772C48.1973 117.766 47.7335 117.347 47.5889 116.698C47.45 116.077 47.9232 115.395 48.4883 115.266C48.6385 115.231 48.7963 115.226 48.9502 115.211C49.1286 115.193 49.3089 115.199 49.4835 115.165C49.8703 115.085 50.0825 114.809 50.0843 114.407C50.0843 111.876 50.0843 109.345 50.0843 106.813C50.0843 106.512 50.075 106.211 50.0862 105.912C50.1087 105.35 50.3209 104.878 50.811 104.585C51.3724 104.248 51.992 104.261 52.5291 104.699C52.852 104.964 53.051 105.299 53.0867 105.723C53.1036 105.92 53.128 106.116 53.128 106.312C53.1318 107.633 53.1299 108.953 53.1299 110.275L53.128 110.273Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M43.7583 108.003C43.7583 108.517 43.7621 109.031 43.7583 109.545C43.7527 110.149 43.488 110.616 43.011 110.97C42.6768 111.219 42.305 111.335 41.8957 111.314C41.5033 111.293 41.1559 111.151 40.8592 110.882C40.5475 110.598 40.3354 110.256 40.2659 109.835C40.2283 109.61 40.2021 109.382 40.2002 109.155C40.1927 108.357 40.1889 107.557 40.2021 106.759C40.2077 106.47 40.2415 106.177 40.3053 105.895C40.3917 105.514 40.6302 105.219 40.925 104.969C41.2254 104.714 41.5765 104.632 41.9652 104.619C42.6073 104.596 43.0711 104.916 43.4391 105.392C43.6532 105.668 43.7527 106.009 43.7546 106.365C43.7583 106.912 43.7546 107.456 43.7546 108.003H43.7583Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M58.4262 107.978C58.4262 107.464 58.4224 106.95 58.4262 106.436C58.4299 106.047 58.5238 105.683 58.7604 105.373C59.1209 104.899 59.5734 104.628 60.193 104.613C61.0474 104.592 61.7721 105.282 61.9299 106.106C61.9712 106.321 61.9787 106.544 61.9806 106.765C61.9862 107.413 61.9881 108.062 61.9806 108.709C61.9768 109.048 61.9655 109.387 61.9355 109.724C61.9073 110.044 61.7872 110.341 61.59 110.591C61.3177 110.935 60.9967 111.217 60.5404 111.29C59.9865 111.377 59.4889 111.261 59.0589 110.888C58.6158 110.503 58.413 110.014 58.4243 109.425C58.4337 108.944 58.4243 108.46 58.4262 107.978Z"
      fill={colorValues.secondary}
    />
    <Circle cx="125.5" cy="51.5" r="40.5" fill="#AAEEEF" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M115.274 66.0398C115.542 66.2438 115.87 66.3543 116.207 66.3544C116.486 66.3545 116.76 66.2789 116.999 66.1355C123.958 61.9591 123.958 53.5 123.958 48.9567C123.958 48.5478 124.121 48.1557 124.41 47.8666C124.699 47.5775 125.091 47.415 125.5 47.415C125.909 47.415 126.301 47.5775 126.59 47.8666C126.879 48.1557 127.042 48.5478 127.042 48.9567C127.042 49.3656 127.204 49.7577 127.493 50.0468C127.782 50.3359 128.174 50.4984 128.583 50.4984C128.992 50.4984 129.384 50.3359 129.673 50.0468C129.963 49.7577 130.125 49.3656 130.125 48.9567C130.125 47.7301 129.638 46.5537 128.77 45.6863C127.903 44.819 126.727 44.3317 125.5 44.3317C124.273 44.3317 123.097 44.819 122.23 45.6863C121.362 46.5537 120.875 47.7301 120.875 48.9567C120.875 53.1655 120.875 60.2109 115.413 63.4915C115.124 63.6652 114.9 63.9287 114.775 64.2417C114.65 64.5547 114.632 64.9 114.722 65.2247C114.812 65.5495 115.006 65.8358 115.274 66.0398ZM129.965 53.7127C129.431 60.0135 127.376 64.9993 123.858 68.5451V68.539C123.57 68.8291 123.178 68.9928 122.769 68.9941C122.36 68.9954 121.968 68.8342 121.677 68.5459C121.387 68.2576 121.224 67.8659 121.222 67.457C121.221 67.048 121.382 66.6553 121.67 66.3652C124.706 63.3112 126.414 59.0824 126.894 53.4445C126.908 53.2416 126.962 53.0436 127.054 52.8622C127.146 52.6808 127.274 52.5198 127.429 52.3888C127.585 52.2577 127.765 52.1593 127.959 52.0994C128.153 52.0395 128.358 52.0193 128.56 52.04C128.762 52.0573 128.959 52.1143 129.139 52.2078C129.319 52.3013 129.479 52.4294 129.61 52.5848C129.74 52.7402 129.839 52.9198 129.9 53.1134C129.961 53.3069 129.983 53.5106 129.965 53.7127ZM134.2 63.3543C133.589 65.0618 132.81 66.7046 131.875 68.2584C131.77 68.4316 131.632 68.5824 131.468 68.7022C131.305 68.822 131.119 68.9085 130.923 68.9566C130.525 69.0539 130.106 68.9894 129.756 68.7771C129.583 68.6721 129.432 68.5339 129.312 68.3706C129.192 68.2072 129.106 68.0218 129.058 67.8251C129.009 67.6283 129 67.424 129.031 67.2238C129.062 67.0235 129.132 66.8313 129.237 66.6581C130.066 65.2798 130.757 63.8231 131.3 62.3091C131.445 61.9335 131.732 61.6297 132.098 61.4627C132.464 61.2956 132.881 61.2785 133.26 61.415C133.639 61.5516 133.95 61.8309 134.125 62.1933C134.301 62.5557 134.327 62.9724 134.2 63.3543ZM136.292 48.9567C136.35 52.1558 136.092 55.3529 135.521 58.5012C135.453 58.8517 135.265 59.1677 134.99 59.3951C134.714 59.6226 134.369 59.7475 134.012 59.7484C133.912 59.7485 133.812 59.7387 133.714 59.7191C133.313 59.6408 132.96 59.4065 132.731 59.0677C132.503 58.7289 132.418 58.3133 132.496 57.9123C133.027 54.9577 133.265 51.958 133.208 48.9567C133.207 47.3966 132.733 45.8735 131.848 44.5887C130.963 43.304 129.708 42.3181 128.251 41.7613C126.794 41.2045 125.202 41.103 123.685 41.4703C122.169 41.8376 120.8 42.6563 119.759 43.8183C119.626 43.9758 119.462 44.105 119.278 44.1982C119.095 44.2914 118.894 44.3468 118.688 44.3611C118.482 44.3754 118.276 44.3482 118.081 44.2813C117.886 44.2144 117.706 44.109 117.553 43.9714C117.399 43.8338 117.275 43.6668 117.187 43.4803C117.099 43.2937 117.049 43.0915 117.041 42.8855C117.033 42.6794 117.066 42.4738 117.138 42.2808C117.211 42.0878 117.321 41.9113 117.463 41.7617C118.921 40.1352 120.838 38.9893 122.961 38.4753C125.083 37.9613 127.312 38.1036 129.352 38.8832C131.392 39.6628 133.148 41.0432 134.387 42.8418C135.626 44.6404 136.29 46.7726 136.292 48.9567ZM117.898 47.6725C117.827 48.0968 117.791 48.5264 117.792 48.9567C117.792 57.8599 114.535 62.7891 108.619 62.8314C108.593 62.8327 108.567 62.8333 108.542 62.8333C107.69 62.8333 107 62.1431 107 61.2917C107 61.2914 107 61.2911 107 61.2908C107 61.2906 107 61.2903 107 61.29C107 60.8812 107.162 60.489 107.452 60.1999C107.741 59.9108 108.133 59.7484 108.542 59.7484C112.633 59.7484 114.708 56.1177 114.708 48.9567C114.709 48.3537 114.761 47.7519 114.862 47.1576C114.886 46.9495 114.952 46.7486 115.057 46.5669C115.161 46.3852 115.301 46.2266 115.468 46.1009C115.636 45.9751 115.827 45.8848 116.031 45.8354C116.234 45.786 116.445 45.7786 116.652 45.8136C116.858 45.8487 117.056 45.9254 117.231 46.0391C117.407 46.1529 117.558 46.3012 117.675 46.4752C117.791 46.6491 117.871 46.845 117.91 47.0508C117.948 47.2567 117.944 47.4682 117.898 47.6725ZM142.458 48.9567C142.659 55.5163 141.45 62.0426 138.913 68.095C138.79 68.3633 138.594 68.5911 138.346 68.7512C138.099 68.9113 137.811 68.9971 137.516 68.9984C137.296 68.9988 137.079 68.9515 136.879 68.8596C136.694 68.7763 136.528 68.6574 136.389 68.5097C136.25 68.362 136.142 68.1884 136.07 67.9989C135.999 67.8093 135.965 67.6074 135.972 67.4049C135.978 67.2024 136.025 67.0031 136.108 66.8185C138.455 61.1647 139.569 55.0752 139.375 48.9567C139.379 46.8633 138.905 44.7966 137.987 42.9149C137.899 42.7327 137.847 42.5348 137.835 42.3326C137.823 42.1304 137.851 41.9277 137.917 41.7363C137.983 41.5448 138.086 41.3682 138.221 41.2167C138.355 41.0651 138.518 40.9415 138.701 40.8529C138.883 40.7644 139.081 40.7125 139.283 40.7004C139.485 40.6883 139.688 40.7162 139.879 40.7824C140.071 40.8486 140.247 40.9519 140.399 41.0863C140.55 41.2208 140.674 41.3837 140.762 41.566C141.885 43.8675 142.465 46.3959 142.458 48.9567ZM111.625 48.9567V53.5817C111.625 53.9906 111.463 54.3827 111.173 54.6718C110.884 54.9609 110.492 55.1234 110.083 55.1234C109.674 55.1234 109.282 54.9609 108.993 54.6718C108.704 54.3827 108.542 53.9906 108.542 53.5817V48.9567C108.547 44.4607 110.335 40.1504 113.515 36.9712C116.694 33.7921 121.004 32.0037 125.5 31.9984C129.171 31.9871 132.745 33.1784 135.675 35.39C136.002 35.6354 136.218 36.0006 136.276 36.4053C136.334 36.8101 136.229 37.2213 135.983 37.5484C135.738 37.8755 135.373 38.0917 134.968 38.1495C134.563 38.2074 134.152 38.102 133.825 37.8567C131.428 36.0464 128.504 35.0717 125.5 35.0817C121.821 35.0858 118.295 36.5489 115.693 39.1501C113.092 41.7513 111.629 45.2781 111.625 48.9567Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramBiometric;
