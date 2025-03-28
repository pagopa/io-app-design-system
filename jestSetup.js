/* globals jest, NativeModules */
/**
 * Set up of the testing environment
 */

import nodeFetch from "node-fetch";
import { NativeModules } from "react-native";

// eslint-disable-next-line functional/immutable-data
NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  forceTouchAvailable: jest.fn(),
  flushOperations: jest.fn(),
  State: {},
  Directions: {}
};

/**
 * adds as for documentation suggestion
 * https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/getting_started/#testing
 */
jest.mock("react-native-reanimated", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require("react-native-reanimated/mock");

  // The mock misses the `addWhitelistedUIProps` implementation
  // So we override it with a no-op
  // eslint-disable-next-line functional/immutable-data,@typescript-eslint/no-empty-function
  Reanimated.default.addWhitelistedUIProps = () => { };
  // eslint-disable-next-line functional/immutable-data
  Reanimated.useReducedMotion = () => false;
  // eslint-disable-next-line functional/immutable-data
  Reanimated.useAnimatedReaction = jest.fn();
  // eslint-disable-next-line functional/immutable-data
  Reanimated.useAnimatedProps = jest.fn();
  // eslint-disable-next-line functional/immutable-data
  Reanimated.useFrameCallback = jest.fn();

  return Reanimated;
});

jest.mock("react-native/Libraries/TurboModule/TurboModuleRegistry", () => {
  const turboModuleRegistry = jest.requireActual(
    "react-native/Libraries/TurboModule/TurboModuleRegistry"
  );
  return {
    ...turboModuleRegistry,
    getEnforcing: name => {
      if (name === "RNHapticFeedback") {
        return null; // or return a minimal mock
      }
      return turboModuleRegistry.getEnforcing(name);
    }
  };
});

// eslint-disable-next-line functional/immutable-data
NativeModules.PlatformConstants = NativeModules.PlatformConstants || {
  forceTouchAvailable: false
};

jest.mock('react-native/Libraries/EventEmitter/RCTDeviceEventEmitter', () => ({
  default: jest.fn()
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any,functional/immutable-data
global.fetch = nodeFetch;
// eslint-disable-next-line @typescript-eslint/no-explicit-any,functional/immutable-data
global.AbortController = AbortController;
// eslint-disable-next-line functional/immutable-data, no-underscore-dangle
global.__reanimatedWorkletInit = jest.fn();

jest.mock("./src/utils/accessibility", () => ({
  useBoldTextEnabled: () => false,
  useIOFontDynamicScale: () => ({
    dynamicFontScale: 1,
    spacingScaleMultiplier: 1
  })
}));
