# Layout

Different layout components are available to help with screen composition:
* **`ContentWrapper`**: a basic `View` component with horizontal spacing applied to all screens by default. It is used to wrap the main content.
* **Stack**: `VStack` and `HStack` are used to add **uniform** vertical and horizontal spacing between components, respectively. They take advantage of the `flex` properties combined with the new `gap` property.
* **Spacer**: `VSpacer` and `HSpacer` are used to add **not-uniform** vertical and horizontal spacing between components, respectively. They are defined as `View` components with a fixed height or width.
* **`Divider`**: used to add a divider between screen blocks.

## Usage

### ContentWrapper

```jsx
import { ContentWrapper } from '@pagopa/io-app-design-system';

const Component = () => (
  <ContentWrapper>
   {/* […] */}
  </ContentWrapper>
);

const ComponentWithLargerMargin = () => (
  <ContentWrapper margin={24}>
   {/* […] */}
  </ContentWrapper>
);
```

### Stack

```jsx
import { VStack } from '@pagopa/io-app-design-system';

const ComponentWithInnerSpacing = () => (
  {/* The inner components are arranged with
  an equal uniform space of 16 between them. */}
  <VStack space={16}>
   {/* […] */}
  </VStack>
);
```

### Spacer

```jsx
import { VSpacer, HSpacer } from '@pagopa/io-app-design-system';

const Component = () => (
  <View>
    {/* […] */}
    <VSpacer space={8} />
    {/* […] */}
    <VSpacer space={16} />
    {/* […] */}
  </View>
);

const ComponentWithHSpacer = () => (
  <View style={{
    flexDirection: 'row'
  }}>
    {/* […] */}
    <HSpacer />
    {/* […] */}
  </ View>
);
```

### Divider

```jsx
import { Divider } from '@pagopa/io-app-design-system';

const Component = () => (
  <Screen>
    {/* [First block] */}
    <Divider />
    {/* [Second block] */}
  </Screen>
);
```