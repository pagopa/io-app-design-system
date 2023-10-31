import * as React from "react";
import { ButtonLinkProps, ButtonSolidProps, IconButton } from "../buttons";

export type ActionProp = Pick<
  React.ComponentProps<typeof IconButton>,
  "icon" | "onPress" | "accessibilityLabel" | "accessibilityHint" | "testID"
>;

interface ButtonLinkAction {
  type: "ButtonLink";
  actionProps: ButtonLinkProps;
}

interface ButtonSolidAction {
  type: "ButtonSolid";
  actionProps: ButtonSolidProps;
}

export type GradientBottomAction = ButtonLinkAction | ButtonSolidAction;
