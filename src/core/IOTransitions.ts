import { Easing, withDelay, withTiming } from "react-native-reanimated";

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
A custom enter transition designed for the `AlertEdgeToEdge` component.
*/

const alertEdgeToEdgeEnterTransitionDuration: number = 500; /* in ms */
const alertEdgeToEdgeExitTransitionDuration: number = 400; /* in ms */

export const enterTransitionAlertEdgeToEdge = (values: {
  targetHeight: number;
}) => {
  "worklet";
  const animations = {
    opacity: withTiming(1, {
      duration: alertEdgeToEdgeEnterTransitionDuration,
      easing: Easing.out(Easing.exp)
    }),
    transform: [
      {
        translateY: withTiming(0, {
          duration: alertEdgeToEdgeEnterTransitionDuration,
          easing: Easing.out(Easing.exp)
        })
      }
    ]
  };
  const initialValues = {
    opacity: 0,
    transform: [{ translateY: -values.targetHeight * 0.5 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom enter transition designed for the `AlertEdgeToEdge` content (icon and text).
*/
export const enterTransitionAlertEdgeToEdgeContent = () => {
  "worklet";
  const animations = {
    opacity: withDelay(
      alertEdgeToEdgeEnterTransitionDuration * 0.2,
      withTiming(1, {
        duration: alertEdgeToEdgeEnterTransitionDuration * 0.7,
        easing: Easing.out(Easing.ease)
      })
    ),
    transform: [
      {
        scaleY: withDelay(
          alertEdgeToEdgeEnterTransitionDuration * 0.2,
          withTiming(1, {
            duration: alertEdgeToEdgeEnterTransitionDuration * 0.7,
            easing: Easing.out(Easing.exp)
          })
        )
      }
    ]
  };
  const initialValues = {
    opacity: 0,
    transform: [{ scaleY: 0.7 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom exit transition designed for the `AlertEdgeToEdge` component.
*/
export const exitTransitionAlertEdgeToEdge = (values: {
  currentHeight: number;
}) => {
  "worklet";
  const animations = {
    opacity: withTiming(0, {
      duration: alertEdgeToEdgeExitTransitionDuration,
      easing: Easing.in(Easing.cubic)
    }),
    transform: [
      {
        translateY: withTiming(-values.currentHeight, {
          duration: alertEdgeToEdgeExitTransitionDuration,
          easing: Easing.in(Easing.cubic)
        })
      }
    ]
  };
  const initialValues = {
    opacity: 1,
    transform: [{ translateY: 0 }]
  };
  return {
    initialValues,
    animations
  };
};

/**
A custom exit transition designed for the `AlertEdgeToEdge` content (icon and text).
*/
export const exitTransitionAlertEdgeToEdgeContent = () => {
  "worklet";
  const animations = {
    opacity: withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease)
    })
  };
  const initialValues = {
    opacity: 1
  };
  return {
    initialValues,
    animations
  };
};
