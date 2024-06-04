import { ColorValue } from "react-native";

export type IOPictogramSizeScale = 48 | 64 | 72 | 80 | 120 | 180;

export type SVGPictogramProps = {
  size: IOPictogramSizeScale | "100%";
  color: ColorValue;
  colorValues: Record<string, ColorValue>;
};
