import {
  trigger,
  HapticFeedbackTypes,
  HapticOptions
} from "react-native-haptic-feedback";

const triggerHaptic = (
  type: string | HapticFeedbackTypes,
  options?: HapticOptions
) => trigger(type, options);

export { triggerHaptic, HapticFeedbackTypes as HapticTypes };
export type { HapticOptions };
