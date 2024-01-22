# Functions

`@pagopa/io-app-design-system` library provides a set of functions to be used in your project. These functions are mainly used to conatin the logic of the third-party libraries wrapped up in the library and exported for external usage.

The only third-party library at the moment wrapped and exported is `react-native-haptic-feedback`. The library is used to provide haptic feedback on iOS and Android devices. The DS library provides the base functions to trigger the haptic feedback on the device.


## API

### triggerHaptic

The function to invoke in order to send a haptic feedback to the device. The function accepts a string as parameter, which is the type of the haptic feedback to send. The possible values are:

  * `selection`
  * `impactLight`
  * `impactMedium`
  * `impactHeavy`
  * `rigid`
  * `soft`
  * `notificationSuccess`
  * `notificationWarning`
  * `notificationError`
  * `clockTick`
  * `contextClick`
  * `keyboardPress`
  * `keyboardRelease`
  * `keyboardTap`
  * `longPress`
  * `textHandleMove`
  * `virtualKey`
  * `virtualKeyRelease`
  * `effectClick`
  * `effectDoubleClick`
  * `effectHeavyClick`
  * `effectTick`

The function supports another parameter options, which is an object containing the options to pass to the `react-native-haptic-feedback` library. 

Complete documentation of the library can be found [here](https://github.com/mkuczera/react-native-haptic-feedback).
## Usage

```
import { triggerHaptic } from '@pagopa/io-app-design-system'

triggerHaptic('impactLight');
```