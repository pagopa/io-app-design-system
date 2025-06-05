# ForceScrollDownView

The `ForceScrollDownView` component is a template component which wraps up a ScrollView with a sticky button to scroll directly to the bottom of the content when pressed. The button is hidden when the scroll view reaches a certain threshold from the bottom, which is configurable by the `threshold` prop. The button, and the scrolling, can also be disabled by setting the `scrollEnabled` prop to `false`.

## Usage

```
import { ForceScrollDownView } from "@pagopa/io-app-design-system";

const MyComponent = () => (
  <ForceScrollDownView>
    { ...component content...}
  </ForceScrollDownView>
);
```

### Props

|Prop  |Type  |Required  |Description  |
|---|---|---|---|
|`children`  |`React.ReactNode`  | Y | The content to display inside the scroll view |
|`threshold`  |`number`  | N | The distance from the bottom of the scrollable content at which the "scroll to bottom" button should become hidden. Defaults to **100** |
|`onThresholdCrossed`  |`(crossed: boolean) => void`  | N | A callback that will be called whenever the scroll view crosses the threshold. The callback is passed a boolean indicating whether the threshold has been crossed (`true`) or not (`false`) |
| `style` `contentContainerStyle` `scrollEnabled` `testID` | `ScrollView` component props  | N | The same props as the [ScrollView](https://reactnative.dev/docs/scrollview) component |
<br/>
