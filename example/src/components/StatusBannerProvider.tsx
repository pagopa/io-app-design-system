import {
  triggerHaptic,
  AlertEdgeToEdgeWrapper,
  AlertEdgeToEdge
} from "@pagopa/io-app-design-system";
import React, {
  ComponentProps,
  createContext,
  useCallback,
  useMemo,
  useState
} from "react";
import { HapticFeedbackTypes } from "react-native-haptic-feedback";

type AlertProviderProps = {
  children: React.ReactNode;
};

type AlertEdgeToEdgeProps = ComponentProps<typeof AlertEdgeToEdge>;

type StatusBannerContext = {
  showAlert: (alert: AlertEdgeToEdgeProps) => void;
  removeAlert: () => void;
};

export const StatusBannerContext = createContext<StatusBannerContext>({
  showAlert: (alert: AlertEdgeToEdgeProps) => alert,
  removeAlert: () => undefined
});

const hapticFeedbackMap: Record<
  NonNullable<ComponentProps<typeof AlertEdgeToEdge>["variant"]>,
  keyof typeof HapticFeedbackTypes
> = {
  error: "notificationError",
  warning: "notificationWarning",
  // There isn't a `notificationInfo` haptic feedback type, so we use a generic one
  info: "impactMedium"
};

export const StatusBannerProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<AlertEdgeToEdgeProps | undefined>();

  const show = useCallback((alert: AlertEdgeToEdgeProps) => {
    triggerHaptic(hapticFeedbackMap[alert.variant]);
    setAlert(alert);
  }, []);

  const remove = useCallback(() => {
    setAlert(undefined);
  }, []);

  const contextValue = useMemo(
    () => ({
      showAlert: show,
      removeAlert: remove
    }),
    [show, remove]
  );

  return (
    <StatusBannerContext.Provider value={contextValue as StatusBannerContext}>
      <AlertEdgeToEdgeWrapper alertProps={alert}>
        {children}
      </AlertEdgeToEdgeWrapper>
    </StatusBannerContext.Provider>
  );
};
