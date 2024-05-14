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

type AlertEdgeToEdgeContext = {
  showAlert: (alert: AlertEdgeToEdgeProps) => void;
  removeAlert: () => void;
};
export const AlertEdgeToEdgeContext = createContext<AlertEdgeToEdgeContext>({
  showAlert: (alert: AlertEdgeToEdgeProps) => alert,
  removeAlert: () => undefined
});

export const AlertEdgeToEdgeProvider = ({ children }: AlertProviderProps) => {
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
    <AlertEdgeToEdgeContext.Provider
      value={contextValue as AlertEdgeToEdgeContext}
    >
      {alert && (
        <View style={styles.container} pointerEvents="box-none">
          <AlertEdgeToEdge {...alert} />
        </View>
      )}
      {children}
    </AlertEdgeToEdgeContext.Provider>
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
