import { StyleProp } from "react-native";

export type SVGIconProps = {
  size: number | "100%";
  style: StyleProp<any>;
  accessible: boolean;
  accessibilityElementsHidden: boolean;
  accessibilityLabel: string;
  importantForAccessibility:
    | "auto"
    | "yes"
    | "no"
    | "no-hide-descendants"
    | undefined;
};
