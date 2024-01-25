# Typography
## Components

The library provides a set of components to manage the text rendering. Components have a predefined set of styles that can't be customized using the props. In case of need to create a new custom text component it is possible to use the `BaseTypography` component and apply the customization using its props.

Each component has its own font size and line height and a set of accepted weight.

## Fonts

The app uses `TitilliumWeb` as main font. Font object mapping and definition can be located at [fonts.ts](https://github.com/pagopa/io-app-design-system/blob/main/src/utils/fonts.ts).

The library supports three different font families:
- `TitilliumWeb`
- `ReadexPro`
- `DMMono`

The `ReadexPro` font is visible only enabling the experimental features of the library for more information see the [IODSExperimentalContext](/docs/core-core--docs#iodsexperimentalcontext) section.