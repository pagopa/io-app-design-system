import { Component, ComponentType, StatelessComponent } from "react";

export type ThemeSimpleValue = undefined | number | string;

/**
 * Enhance the type with the testID that should be used to locate a view in end-to-end tests.
 */
export type TestID = { testID?: string };

export type WithTestID<T> = T & TestID;

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

/**
* Evaluates the Props type of React component
*/
export type ComponentProps<C> = C extends StatelessComponent<infer P1>
  ? P1
  : C extends Component<infer P2>
  ? P2
  : C extends ComponentType<infer P3>
  ? P3
  : never;
