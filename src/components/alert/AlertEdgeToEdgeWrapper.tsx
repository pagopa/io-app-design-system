import React, { ComponentProps } from "react";
import Animated, { LinearTransition } from "react-native-reanimated";
import { WithTestID } from "../../utils/types";
import { IOStyles } from "../../core";
import { AlertEdgeToEdge } from "./AlertEdgeToEdge";

type AlertEdgeToEdgeWrapperProps = React.PropsWithChildren<
  WithTestID<{
    alertProps?: ComponentProps<typeof AlertEdgeToEdge>;
  }>
>;
export const AlertEdgeToEdgeWrapper = ({
  children,
  alertProps
}: AlertEdgeToEdgeWrapperProps) => (
  <>
    {alertProps && <AlertEdgeToEdge {...alertProps} />}
    <Animated.View layout={LinearTransition} style={IOStyles.flex}>
      {children}
    </Animated.View>
  </>
);
