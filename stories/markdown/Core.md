# Core Elements

The library defines and exports the core elements of the visual language of the design system.

## Colors

**IOColors** defines the main color palette, themes (light/dark) and other color-related utilities. It contains the definition of all the colors used in the app and the type definition for the color key to be used.

The list of colors can be found in the [IOColors.ts](https://github.com/pagopa/io-app-design-system/blob/main/src/core/IOColors.ts) file.

## Spacings

**IOSpacing** defines the spacing scale values and various component spacing attributes. It contains the definition of all the spacings used in the app and the type definition for the spacing key to be used.

## Styles

**IOStyles** defines the common styles shared across components. It contains the definition of all the styles commonly used in the app.

## Shapes

**IOShapes** defines the common styles to be used for shapes. It contains the mainly used shapes for components like Tag, Badges, Avatar.

## Animations

**IOAnimations** defines a set of reusable values and utilities compatible with [reanimated](https://docs.swmansion.com/react-native-reanimated/) library. It contains the mainly used animations for components like Button, Switch, Checkbox.

## Contexts

The library defines and exports two different React Contexts:
* `IODSExperimentalContext` is the context used to enable/disable experimental features of the library. It is used to change the visual attributes of the components and to enable/disable new fonts and colors' palette.
* `IOThemeContext` is the context to be used to change the theme of the app. It is used to change the theme of the app from light to dark and viceversa.

### IODSExperimentalContext

The context is defined in the [IODSExperimentalContext.tsx](https://github.com/pagopa/io-app-design-system/blob/main/src/core/IODSExperimentalContextProvider.tsx).

It both exports the context and the provider to be used to wrap the app and it can be changed at runtime. The provider accepts a boolean value to enable/disable the experimental features. There is a utility hook to invoke in react components to get the value of the context and the callback to change the inner context value.

```
import { IODSExperimentalContextProvider, useIODSExperimentalContext } from "@pagopa/io-app-design-system";

const App = () => (
  <IODSExperimentalContextProvider isExperimentaEnabled={true}>
    { ... App code ... }
  </IODSExperimentalContextProvider>
);

const MyComponent = () => {
  const { isExperimentalEnabled, setIsExperimentalEnabled } = useIODSExperimentalContext();

  return (
    <View>
      <Text>Experimental features are {isExperimentalEnabled ? "enabled" : "disabled"}</Text>
      <Button onPress={() => setIsExperimentalEnabled(!isExperimentalEnabled)}>
        <Text>Toggle experimental features</Text>
      </Button>
    </View>
  );
};
```
### IOThemeContext

The context is defined in the [IOThemeContext.tsx](https://github.com/pagopa/io-app-design-system/blob/main/src/core/IOColors.ts#L406).

It exports the context to be used to wrapp the main app code to handle the app light/dark theme. The provider accepts the theme value definition.

```
import { IOThemeContext, useIOTheme } from "@pagopa/io-app-design-system";

const App = () => (
  <IOThemeContext.Provider value={IOThemes.light}>
    { ... App code ... }
  </IOThemeContext.Provider>
);

const MyComponent = () => {
  const theme = useIOTheme();

  return (
    <View style={{
      backgroundColor: theme["appBackground-primary"]
    }}>
      {// ... Use the theme to change the visual attributes of the components ...}
    </View>
  );
};
```

The definition of the theme's objects can be found in the [IOColors.ts](https://github.com/pagopa/io-app-design-system/blob/main/src/core/IOColors.ts#L301).


A playground is available both on DS example app and on IO app developer section.