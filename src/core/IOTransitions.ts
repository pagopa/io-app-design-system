import { Easing, withTiming } from "react-native-reanimated";

/**
A custom enter transition designed for the average size
inner content of a button or module (e.g. text).
The scaling effect is slight.
*/
export const enterTransitionInnerContent = () => {
  "worklet";
  const animations = {
    opacity: withTiming(1, {
      duration: 250,
      easing: Easing.in(Easing.cubic)
    }),
    transform: [
      {
        scale: withTiming(1, {
          duration: 250,
          easing: Easing.in(Easing.cubic)
        })
      }
    ]
  };
  const initialValues = {
    opacity: 0,
    transform: [{ scale: 1.05 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom enter transition designed for the small size
inner content of a button or module (e.g. loading spinner).
The scaling effect is accentuated.
*/
export const enterTransitionInnerContentSmall = () => {
  "worklet";
  const animations = {
    opacity: withTiming(1, {
      duration: 250,
      easing: Easing.in(Easing.cubic)
    }),
    transform: [
      {
        scale: withTiming(1, {
          duration: 250,
          easing: Easing.in(Easing.cubic)
        })
      }
    ]
  };
  const initialValues = {
    opacity: 0,
    transform: [{ scale: 1.25 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom exit transition designed for both small
and average size inner content of a button or module.
The scaling effect is slight.
*/
export const exitTransitionInnerContent = () => {
  "worklet";
  const animations = {
    opacity: withTiming(0, {
      duration: 350,
      easing: Easing.out(Easing.cubic)
    }),
    transform: [
      {
        scale: withTiming(0.9, {
          duration: 350,
          easing: Easing.out(Easing.cubic)
        })
      }
    ]
  };
  const initialValues = {
    opacity: 1,
    transform: [{ scale: 1 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom enter/exit transition designed for icons
in `TextInput`.
*/

const iconTransitionWithTimingConfig = {
  duration: 250,
  easing: Easing.inOut(Easing.cubic)
};

const iconTransitionScaleFactor: number = 0.75;

export const enterTransitionInputIcon = () => {
  "worklet";
  const animations = {
    opacity: withTiming(1, iconTransitionWithTimingConfig),
    transform: [
      {
        scale: withTiming(1, iconTransitionWithTimingConfig)
      }
    ]
  };
  const initialValues = {
    opacity: 0,
    transform: [{ scale: iconTransitionScaleFactor }]
  };
  return {
    initialValues,
    animations
  };
};

export const exitTransitionInputIcon = () => {
  "worklet";
  const animations = {
    opacity: withTiming(0, iconTransitionWithTimingConfig),
    transform: [
      {
        scale: withTiming(
          iconTransitionScaleFactor,
          iconTransitionWithTimingConfig
        )
      }
    ]
  };
  const initialValues = {
    opacity: 1,
    transform: [{ scale: 1 }]
  };
  return {
    initialValues,
    animations
  };
};
