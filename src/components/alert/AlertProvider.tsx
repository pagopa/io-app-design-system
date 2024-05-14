import React, {
  ComponentProps,
  createContext,
  useCallback,
  useMemo,
  useState
} from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  SlideInUp,
  SlideOutUp
} from "react-native-reanimated";
import { AlertEdgeToEdge } from "./AlertEdgeToEdge";

type AlertProviderProps = {
  children: React.ReactNode;
};

type AlertEdgeToEdgeProps = ComponentProps<typeof AlertEdgeToEdge>;

type AlertContext = {
  showAlert: (alert: AlertEdgeToEdgeProps) => void;
  removeAlert: () => void;
};
export const AlertContext = createContext<AlertContext>({
  showAlert: (alert: AlertEdgeToEdgeProps) => alert,
  removeAlert: () => undefined
});

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<AlertEdgeToEdgeProps | null>(null);

  const show = useCallback((alert: AlertEdgeToEdgeProps) => {
    setAlert(alert);
  }, []);

  const remove = useCallback(() => {
    setAlert(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      showAlert: show,
      removeAlert: remove
    }),
    [show, remove]
  );

  return (
    <AlertContext.Provider value={contextValue as AlertContext}>
      {alert && (
        <View style={styles.container} pointerEvents="box-none">
          <Animated.View
            entering={SlideInUp.duration(300).easing(Easing.inOut(Easing.exp))}
            exiting={SlideOutUp.duration(300).easing(Easing.inOut(Easing.exp))}
          >
            <AlertEdgeToEdge {...alert} />
          </Animated.View>
        </View>
      )}
      {children}
    </AlertContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    overflow: "visible"
  }
});
