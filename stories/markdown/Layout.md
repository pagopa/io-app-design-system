# Layout

There are different kinds of layout components:
* **ContentWrapper**: it is a simple `<View>` component with a default `paddingHorizontal` of `16` (defined as a style constant in `IOVisualConstants`). It is used to wrap the content of a screen to the fixed spacing. The value of the padding can be overridden by passing a `margin` prop that accepts values defined in `IOAppMargin`.
* **Spacer**: there are two spacer components, `VSpacer` and `HSpacer`, which are used to add vertical and horizontal spacing between components. They are defined as `<View>` components with a fixed height or width, respectively.
* **Divider**: there are two divider components, `Divider` and `VDivider`, which are used to add a dividing bar between components.

## Examples
<br />

### ContentWrapper

```
import { ContentWrapper } from '@pagopa/io-app-design-system';

const Component = () => (
  <ContentWrapper>
   {// your content here}
  </ContentWrapper>
);

const ComponentWithMargin = () => (
  <ContentWrapper margin={24}>
   {// your content here}
  </ContentWrapper>
);
```
Example for **ContentWrapper** can be found in related stories of [ContentWrapper](/docs/foundation-layout-contentwrapper--docs).

### Spacer

```
import { VSpacer, HSpacer } from '@pagopa/io-app-design-system';

const Component = () => (
  <>
    {// your content here}
    <VSpacer />
    {// your content here}
  </>
);

const ComponentWithHSpacer = () => (
  <View style={{
    flexDirection: 'row'
  }}>
    {// your content here}
    <HSpacer />
    {// your content here}
  </ View>
);
```
Example for **Spacers** can be found in related stories of [HSpacer](/docs/foundation-layout-hspacer--docs) and [VSpacer](/docs/foundation-layout-vspacer--docs).

### Divider

```
import { Divider, VDivider } from '@pagopa/io-app-design-system';

const Component = () => (
  <>
    {// your content here}
    <Divider />
    {// your content here}
  </>
);

const ComponentWithVDivider = () => (
  <View style={{
    flexDirection: 'row'
  }}>
    {// your content here}
    <VDivider />
    {// your content here}
  </ View>
);
```
Example for **Dividers** can be found in related stories of [Divider](/docs/foundation-layout-divider--docs) and [VDivider](/docs/foundation-layout-vdivider--docs).