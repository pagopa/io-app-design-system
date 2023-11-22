# Pictograms
There are different sets:
* **General** 
* **Bleed**: Pictograms used near the edge of the component's block (w/o inner margins)
* **Objects**: Pictograms that represent object without hands

## Add a new pictogram

### Prerequisites

In your user interface design app (Figma/Sketch) export your SVG with `1×` preset. The name usually consists of a specific prefix followed by the associated key:
  - **General**: `Pictogram…`
  - **Objects**: `PictogramObj…`
  - **Bleed**: `PictogramBleed…`

> [!important]
> The pictogram must be contained within a `240×240` frame.

> [!tip]
> If you want to add a new `key` object pictogram, your pictogram will have a `PictogramObjKey` filename. If it doesn't belong to a specific set, you just put the name after the prefix `Pictogram…`, so `PictogramKey`

> [!caution]
> This filename will be the same as the React component, so make sure you don't already have a component with that filename

### Create the corresponding React component

#### Using `generateNewPictograms.js`
1. Move the exported file to the `pictograms/svg/originals` folder
2. In your terminal, in the same folder, run the command: `node generateNewPictograms.js`
3. The script will process `timestamp.txt`, generate the new React components (with `*.tsx` extension) following exactly the steps listed in the manual process (see below), and process **only the files added after this timestamp value**
4. If the `generateNewPictograms` script accidentally overwrites older React components, remember to discard the changes before committing

> [!caution] 
> If your pictogram **contains** other shapes than `path`, you should use the manual process because the script doesn't support this specific case yet

#### Manual process (alternative)

1. Move the exported file to the `pictograms/svg/originals` folder
2. In your original SVG file, delete `width` and `height` attributes and leave the original `viewBox` attribute. You could easily process the image using online editors like [SVGOmg](https://jakearchibald.github.io/svgomg/) (enable `Prefer viewBox to width/height`)
3. In the `pictograms/svg` folder, create a new React component (with a `.tsx` extension) of the same name
4. Copy all the `<path>` elements into a new React component and replace the original `<path>` with the element `<Path>` (capital P) from the `react-native-svg` package. Replace all the harcoded fill values with the following corresponding values:
    * `#0B3EE3` → `{colorValues.hands}`
    * `#AAEEEF` → `{colorValues.main}`
    * `#00C5CA` → `{colorValues.secondary}`
5. Add the dynamic size, replacing the hardcoded values with the corresponding props. The final result should be similar to the following:
```tsx
import { Svg, Path } from "react-native-svg";
// [...]

const PictogramAttention = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="m137.89 157.04…"
      fill={colorValues.main}
    />
    <Path
      d="M139.17 211.6…"
      fill={colorValues.hands}
    />
  </Svg>
);
```
6. Repeat the previous steps for each pictogram
7. Once you have finished processing all the new pictograms, run `node generateNewTimestamp` to avoid overwriting these files with the `generateNewPictograms` process.

### Add the corresponding key to the `Pictogram` component

Add the desired key to the `IOPictograms` object with the corresponding component reference:
```jsx
export const IOPictograms = {
  feedback: PictogramFeedback,
  …
}
```
> [!important]
> To keep the pictograms grouped by sets, remember to put the key above the pictograms with a specific prefix

If the pictogram belongs to a specific set, add the key to the relative pictogram set as well:
```tsx
// Destructuring starting from `IOPictograms`
const { NEW_PICTOGRAM, ibanCard, manual, trash, clock, key, flyingMessage } =
  IOPictograms;

// Add the new key to the associated object
export const IOPictogramsObject = {
  NEW_PICTOGRAM, // ←
  ibanCard,
  followMessage,
  manual,
  trash,
  clock,
  key,
  flyingMessage
} as const;
```
### Use the new icon in a different component

You can add the recently added pictogram with the following declaration:
```tsx
// Default size: 120×120
<Pictogram name="feedback">
```

## View all the available pictograms
There are two ways:
- In the app, go to the `Profile → Design System → Pictograms` (you must enable `Debug Mode`)
- In the repository, go to the `svg/originals` subfolder
