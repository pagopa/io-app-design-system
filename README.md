# @pagopa/io-app-design-system

The library defining the core components of the design system of io-app

## Installation

```sh
yarn add @pagopa/io-app-design-system
```

## Usage

```js
import { IOStyles } from '@pagopa/io-app-design-system';

// ...

const Component = () => (
  <View style={IOStyles.flex}>
    // ... Further component code
  </View>
);
```

The list of the component exported by the library is the following:

* [Accordion](./src/components/accordion/)
* [Advice](./src/components/advice/)
* [Alert](./src/components/alert/)
* [Avatar](./src/components/avatar/)
* [Badge](./src/components/badge/)
* [Banner](./src/components/banner/)
* [Buttons](./src/components/buttons/) 
* [Checkbox](./src/components/checkbox/)
* [contentWrapper](./src/components/contentWrapper/)
* [Divider](./src/components/divider/)
* [Icons](./src/components/icons/)
* [List Items](./src/components/listitems/)
* [Logos](./src/components/logos/)
* [Pictograms](./src/components/pictograms/)
* [Radio](./src/components/radio/)
* [Spacer](./src/components/spacer/)
* [Switch](./src/components/switch/)
* [Tag](./src/components/tag/)
* [Typography](./src/components/typography/)

A part from the components, the library also exports the following core elements and styles as part of the [core attributes](./src/core/) of the design system, and common functions used to wrap up external libraries and utilities (here listed as [functions](./src/functions/)).

## External dependencies
* [react-native-svg](https://github.com/software-mansion/react-native-svg)
* [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
* [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
* [react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
