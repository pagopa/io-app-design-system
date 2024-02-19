import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../types";

const PictogramObjManual = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M218 43.2264c0-2.8129-1.802-5.2921-4.529-5.9848-7.953-2.0206-25.405-5.5643-44.471-3.7317-26 2.4992-49 19.4983-49 19.4983V53S97 36.5013 71 34.0021c-19.0657-1.8326-36.5182 1.7111-44.4714 3.7317C23.8023 38.4265 22 40.9057 22 43.7186V55H6.49869C2.90956 55 0 57.9096 0 61.4987V199.501C0 203.09 2.90956 206 6.49869 206H234.501c3.589 0 6.499-2.91 6.499-6.499V61.4987C241 57.9096 238.09 55 234.501 55H218V43.2264Z"
      fill={colorValues.main}
    />
    <Path
      d="M72.1985 50.0308c-11.5522-1.5392-24.0476.5243-33.5649 2.924-.8033.2025-1.2903 1.0179-1.0877 1.8212.2025.8032 1.0179 1.2903 1.8212 1.0877 9.3744-2.3636 21.4376-4.3244 32.4351-2.8591 12.8374 1.7104 27.1483 9.1422 36.9158 15.1107.707.432 1.63.2091 2.062-.4978.432-.7069.209-1.6301-.498-2.0621-9.82-6.0009-24.5852-13.7261-38.0835-15.5246ZM21.5 168.497V90.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v88.779c0 3.544 3.6962 6.184 7.239 5.097 9.7602-2.996 25.8743-6.794 40.4591-4.851 13.484 1.796 28.2319 9.507 38.0519 15.505l.057.035c.147.089 1.063.633 5.437 3.133 1.201.686 1.773.76 1.967.737.036-.004.04-.008.044-.013l.003-.003c.027-.026.115-.125.219-.391.22-.566.37-1.503.447-2.926.076-1.393.076-3.088.076-5.102V139c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V191.011c-.001 1.783-.007 3.391-.08 4.753-.079 1.461-.242 2.809-.647 3.851-.432 1.111-1.259 2.124-2.703 2.298-1.212.147-2.515-.368-3.814-1.111-4.367-2.495-5.316-3.058-5.499-3.169l-.053-.032-.017-.011c-9.7676-5.965-24.0616-13.383-36.8851-15.091-13.9208-1.855-29.5224 1.78-39.1827 4.745-5.3162 1.631-11.1192-2.243-11.1192-7.965v-10.782Zm17.1336-99.5422c9.5173-2.3997 22.0127-4.4632 33.5649-2.924 7.4671.995 15.2956 3.7974 22.4308 7.0928.7521.3474 1.0802 1.2386.7328 1.9907-.3473.7521-1.2386 1.0802-1.9907.7329-6.9987-3.2324-14.5196-5.9034-21.5692-6.8426-10.9975-1.4653-23.0607.4955-32.4351 2.8591-.8033.2026-1.6187-.2845-1.8212-1.0877-.2026-.8033.2844-1.6187 1.0877-1.8212ZM216.5 139.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v39.779c0 5.722-5.803 9.596-11.119 7.965-9.66-2.965-25.262-6.6-39.183-4.745-6.552.873-13.513 3.242-20.088 6.17-.756.337-1.643-.003-1.98-.76-.337-.757.003-1.643.76-1.98 6.714-2.991 13.968-5.479 20.912-6.404 14.585-1.943 30.699 1.855 40.459 4.851 3.543 1.087 7.239-1.553 7.239-5.097V139.5Z"
      fill={colorValues.secondary}
    />
  </Svg>
);

export default PictogramObjManual;
