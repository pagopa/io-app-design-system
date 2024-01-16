# Typography

## Handling font files

The application uses the font _Titillium Web_. Fonts are handled differently than Android and iOS. To use the font, `TitilliumWeb-SemiBoldItalic` example, you must apply the following properties for Android:

```css
{
  fontFamily: 'TitilliumWeb-SemiBoldItalic'
}
```

while in iOS the code to be applied is:

```css
{
  fontFamily: 'Titillium Web',
  fontWeight: '600',
  fontStyle: 'italic'
}
```

To manage fonts and variants more easily, we have created utility functions within the file [fonts.ts](https://github.com/pagopa/io-app-design-system/blob/main/src/utils/fonts.ts).