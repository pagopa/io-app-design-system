# Pictograms

## Prefix
To avoid confusion with other components referenced in the codebase, just use the prefix `Pictogram…`

## Add a new pictogram
First of all, follow the instructions stated in the main README (`Vector graphics` section).

If you want to add a new pictogram, open the `Pictogram.tsx` file and import the React component:
```jsx
[…]
import PictogramAirBaloon from "./svg/PictogramAirBaloon";
[…]
```
Add the desired key to the `IOPictograms` object with the corresponding component reference:
```jsx
export const IOPictograms = {
  airBaloon: PictogramAirBaloon,
  …
}
```
You can add the recently added pictogram with the following declaration:
```jsx
// Default size: 120×120px
// Default color: Turquoise
<Pictogram name="airBaloon">
```

## View all the available pictograms
There are two ways:
- In the app, go to the `Profile → Design System → Pictograms` (you must enable `Debug Mode`)
- In the repository, go to the `svg/originals` subfolder
