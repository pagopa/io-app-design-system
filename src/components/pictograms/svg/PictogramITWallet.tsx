import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const PictogramITWallet = ({
  size,
  colorValues,
  ...props
}: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 240 240" {...props}>
    <Path
      d="M8 47c0-8.8366 7.1634-16 16-16h71c8.837 0 16 7.1634 16 16v151c0 8.837-7.163 16-16 16H24c-8.8366 0-16-7.163-16-16V47Z"
      fill={colorValues.main}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 50.9292C12 42.1317 19.1317 35 27.9292 35h64.1416C100.868 35 108 42.1317 108 50.9292V195.071c0 8.797-7.132 15.929-15.9292 15.929H27.9292C19.1317 211 12 203.868 12 195.071V50.9292ZM27.9292 37C20.2363 37 14 43.2363 14 50.9292V195.071C14 202.764 20.2363 209 27.9292 209h64.1416C99.7637 209 106 202.764 106 195.071V50.9292C106 43.2363 99.7637 37 92.0708 37H27.9292Z"
      fill={colorValues.secondary}
    />
    <Path
      d="M38 45c0-1.6569 1.3431-3 3-3h37c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3H41c-1.6569 0-3-1.3431-3-3Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.1953 82.8647c0-5.1408 4.1675-9.3083 9.3083-9.3083h61.9925c5.1408 0 9.3079 4.1675 9.3079 9.3083v34.5113c0 5.141-4.1671 9.308-9.3079 9.308H29.5036c-5.1408 0-9.3083-4.167-9.3083-9.308V82.8647Zm9.3083-7.3083c-4.0363 0-7.3083 3.272-7.3083 7.3083v34.5113c0 4.036 3.272 7.308 7.3083 7.308h61.9925c4.0362 0 7.3082-3.272 7.3082-7.308V82.8647c0-4.0363-3.272-7.3083-7.3082-7.3083H29.5036Z"
      fill={colorValues.secondary}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.6784 114.82H21.0693v-2h78.6091v2ZM88.1746 80.0301c-3.3303 0-6.0301 2.6997-6.0301 6.0301 0 3.3303 2.6998 6.03 6.0301 6.03s6.0301-2.6997 6.0301-6.03c0-3.3304-2.6998-6.0301-6.0301-6.0301Zm-8.0301 6.0301c0-4.4349 3.5952-8.0301 8.0301-8.0301 4.4349 0 8.0301 3.5952 8.0301 8.0301 0 4.4349-3.5952 8.03-8.0301 8.03-4.4349 0-8.0301-3.5951-8.0301-8.03ZM48.9111 84.5038c0 .5522-.4477 1-1 1h-19.812c-.5523 0-1-.4478-1-1 0-.5523.4477-1 1-1h19.812c.5523 0 1 .4477 1 1ZM48.9111 88.9774c0 .5523-.4477 1-1 1h-19.812c-.5523 0-1-.4477-1-1 0-.5522.4477-1 1-1h19.812c.5523 0 1 .4478 1 1ZM51.1054 69.4472c-.494.247-1.0947.0468-1.3417-.4472l-5.1055-10.2111c-.247-.494-.0468-1.0947.4472-1.3417.4939-.247 1.0946-.0467 1.3416.4472l5.1056 10.2112c.247.494.0467 1.0946-.4472 1.3416ZM67.122 68.5211c-.4848-.2644-.6635-.8718-.399-1.3567l5.0423-9.2442c.2645-.4849.8719-.6635 1.3567-.3991.4849.2645.6635.8719.3991 1.3568l-5.0423 9.2442c-.2645.4849-.8719.6635-1.3568.399ZM52.942 132.336c.5202.186.7912.758.6055 1.278l-4.3274 12.117c-.1857.52-.7579.791-1.2781.605-.5201-.185-.7911-.758-.6054-1.278l4.3274-12.116c.1857-.52.7579-.791 1.278-.606ZM68.9084 131.581c.5015-.232 1.0956-.013 1.3271.489l5.1618 11.184c.2315.501.0126 1.095-.4889 1.327-.5014.231-1.0955.012-1.327-.489l-5.1619-11.184c-.2314-.502-.0125-1.096.4889-1.327Z"
      fill={colorValues.secondary}
    />
    <Path
      d="m230.646 170.292-4-.03c.15-22.75-14.42-47.52-23.12-60.26-3.67-5.38-8.74-9.39-14.65-11.6195-22.53-8.49-48.66-4.9-58.85-2.97-3.68.7-6.26 3.91-6.01 7.4695.08 1.19.34 4.81 7.74 6.01 15.25 2.46 28.76-.31 28.9-.34l.82 3.92c-.58.12-14.38 2.95-30.36.38-8.71-1.4-10.84-6.04-11.09-9.68-.39-5.5795 3.59-10.6095 9.26-11.6795 10.52-2 37.53-5.69 61 3.15 6.69 2.52 12.41 7.0495 16.54 13.1095 8.96 13.13 23.97 38.71 23.82 62.54Z"
      fill={colorValues.hands}
    />
    <Path
      d="M166.026 134.772c-.25 0-.5-.01-.74-.04-2.86-.28-4.82-2.19-5.36-5.23-.75-4.24 1.3-10.09 6.11-17.36 3.44-5.21 7.03-9.24 7.18-9.41l2.98 2.67c-3.83 4.28-13.5 16.84-12.33 23.41.28 1.59 1.04 1.88 1.81 1.95 4.02.4 12.54-5.66 14.87-11.62l3.72 1.46c-2.77 7.07-12.05 14.18-18.25 14.18l.01-.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M186.457 135.552c-.76-3.95-6.5-7.16-8.65-8.07l1.55-3.69c.4.17 9.71 4.14 11.03 11l-3.93.75v.01ZM152.287 133.012c-3.2 0-6.37-.78-8.24-3.29-2.41-3.24-3.22-8.18-2-12.31.99-3.35 3.17-5.81 6.13-6.91.74-.28 1.53-.47 2.35-.57l.5 3.97c-.52.06-1.01.18-1.46.35-2.25.84-3.25 2.8-3.69 4.29-.86 2.93-.3 6.54 1.37 8.78 2.42 3.25 11.11.99 13.96-.06l1.38 3.75c-.84.31-5.61 1.99-10.31 1.99l.01.01Z"
      fill={colorValues.hands}
    />
    <Path
      d="M165.897 147.652c-2.27 0-4.46-.51-6.55-1.52-8.18-3.97-11.68-14.35-11.83-14.79l3.8-1.25c.03.09 3.14 9.23 9.79 12.45 2.91 1.41 6.03 1.48 9.51.21 3.5-1.27 5.57-2.79 5.68-4.17.14-1.9-3.15-4.62-5.42-5.85l1.9-3.52c.81.44 7.89 4.42 7.51 9.66-.23 3.15-3.02 5.72-8.3 7.64-2.08.76-4.12 1.14-6.09 1.14Z"
      fill={colorValues.hands}
    />
    <Path
      d="M186.956 187.162c-12.94-17.55-15.65-42.07-15.76-43.1l3.98-.42c.03.24 2.71 24.48 15 41.15l-3.22 2.37Z"
      fill={colorValues.hands}
    />
  </Svg>
);

export default PictogramITWallet;
