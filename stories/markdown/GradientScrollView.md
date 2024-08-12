# GradientScrollView

The `GradientScrollView` component is a template component which wraps up a ScrollView with a sticky footer, styled with a gradient background on it.

This component is mainly projected to be used as a template for the screens containing a long content with a set of actions sticky on the footer. The gradient background is used to divide the actions area by the content of the screen.

## Usage

```
import { GradientScrollView } from "@pagopa/io-app-design-system";

const MyComponent = () => (
  <GradientScrollView
    primaryActionProps={{
      label: "Primary action",
      accessibilityLabel: "",
      onPress: () => Alert.alert("Primary action pressed!")
    }};
  >
    { ...component content...}
  </GradientScrollView>
);
```

### Props

|Prop  |Type  |Required  |Description  |
|---|---|---|---|
|`children`  |`React.ReactNode`  | Y | The content to display inside the scroll view |
|`excludeSafeAreaMargins`  |`boolean`  | N | If true, the component will not apply the safe area bottom margin to the sticky footer applying app default margin from `IOAppMargin` |
|`debugMode`  |`boolean`  | N | If true, the component will apply a red border to the sticky footer (useful for debug purposes) |
| `primaryActionProps` | `ButtonSolidProps` | Y | The props to pass to the primary action button to help creating a button (for specific details see the [ButtonSolid](/docs/components-buttons-buttonsolid--docs) component documentation) |
| `secondaryActionProps` | `ButtonLinkProps` | N | The props to pass to the secondary action button to help creating a button (for specific details see the [ButtonLink](/docs/components-buttons-buttonlink--docs) component documentation) |
|`refreshControl`  |`RefreshControlProps`  | N | The props to pass to the refresh control, for specific details see the [RefreshControl](https://reactnative.dev/docs/refreshcontrol) of React Native |
<br/>

<div style="display: flex; flex-direction: column; align-items: center">
<img src="./GradientScroll.gif" />
</div>
