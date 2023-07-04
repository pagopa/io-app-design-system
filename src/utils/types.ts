export type ThemeSimpleValue = undefined | number | string;

// A generic recursive type for the theme
export type Theme = {
  [key: string]: ThemeSimpleValue | Theme;
};

/**
 * Ensure that all the keys of type T are required, transforming all optional field of kind T | undefined to T
 */
export type RequiredAll<T> = { [K in keyof T]-?: T[K] };

/**
 * Return a type that prohibits the use of keys that are present only in T but not in U
 */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * Ensure that the types T and U are mutually exclusive
 */
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
