# Layout

Different layout components are available to help with screen composition:
* **`ContentWrapper`**: a basic `View` component with horizontal spacing applied to all screens by default. It is used to wrap the main content.
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

### Spacer

```jsx
import { VSpacer, HSpacer } from '@pagopa/io-app-design-system';

const Component = () => (
  <View>
    {/* […] */}
    <VSpacer />
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