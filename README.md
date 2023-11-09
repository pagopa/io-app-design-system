<div style="display: flex; flex-direction: column; align-items: center">
<img alt="IO App Design System" src="repo-assets/io-app-design-system-github-cover.png" width="100%" style="max-width: 768px" align="center" /></br>
<h3 align="center" style="width: 100%">A comprehensive library of components specifically designed for the <a href="https://github.com/pagopa/io-app">IO App</a></h3>
<br />
<br />
</div>


## Getting started

### Installing the DS
To add the component library to the main app run:

```bash
yarn add @pagopa/io-app-design-system
```

### Launch the example app
For development purposes, a sample React Native application is included in the repository. To launch it:

```bash
# Move into `example` folder
cd example

# Install dependencies 
yarn install

# Install podfiles when targeting iOS (ignore this step for Android)
# Run this only during the first setup and when Pods dependencies change
cd iOS && bundle exec pod install

# Launch the app locally (iPhone model is optional)
yarn ios --simulator='iPhone 15 Pro'
```
Activate the toggle at the top of the application to view the experimental design system.

> [!important]
> The sample application consists of several pages with some components for testing purposes. To view the continuously updated Design System section, please refer to the [main app](https://github.com/pagopa/io-app).

## Usage
To try a component, just import it:

```tsx
import { ButtonSolid } from '@pagopa/io-app-design-system';

// [...]

const MainScreen = () => (
  <View>
    <ButtonSolid
      accessibilityLabel="Tap to trigger test alert"
      label="Hello world"
      onPress={() => Alert.alert("Alert", "Action triggered")}
    />
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
* [Text Input](./src/components/textInput/)

A part from the components, the library also exports the following core elements and styles as part of the [core attributes](./src/core/) of the design system, and common functions used to wrap up external libraries and utilities (here listed as [functions](./src/functions/)).

## External dependencies
* [react-native-svg](https://github.com/software-mansion/react-native-svg)
* [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
* [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
* [react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback)
* [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
* [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)

## Prerequisites

In order to contribute to the development of the library, you need to install nodejs and yarn. 

We recommend the usage of nvm to properly handle the supported nodejs version (see [.nvmrc](./.nvmrc)).

## Storybook

The library is provided with a [storybook](https://storybook.js.org/) instance to ease the development and the testing of the components.

To start the storybook instance, run the following command:

```sh
yarn storybook
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
