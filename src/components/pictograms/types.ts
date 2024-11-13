import { ColorValue } from "react-native";

export type SVGPictogramProps = {
  size: number | "100%";
  color: ColorValue;
  colorValues: Record<string, ColorValue>;
};
