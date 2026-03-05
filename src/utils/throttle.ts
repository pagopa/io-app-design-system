// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: Array<any>) => any>(
  fn: T,
  ms: number
): T => {
  // eslint-disable-next-line functional/no-let
  let lastCall = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((...args: Array<any>) => {
    const now = Date.now();
    if (now - lastCall >= ms) {
      // eslint-disable-next-line functional/immutable-data
      lastCall = now;
      return fn(...args);
    }
  }) as T;
};
