# Typography

## Handling font files

The application uses the font _Titillium Sans Pro_. Fonts are handled differently than Android and iOS. To use the font, `TitilliumSansPro-Semibold` example, you must apply the following properties for Android:

```css
{
  fontFamily: 'TitilliumSansPro-Semibold'
}
```

while in iOS the code to be applied is:

```css
{
  fontFamily: 'Titillium Sans Pro',
  fontWeight: '600',
}
```

To manage fonts and variants more easily, we have created utility functions within the file [fonts.ts](../../utils/fonts.ts).