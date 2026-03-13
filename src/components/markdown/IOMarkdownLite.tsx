import { constant } from "lodash";
import { useCallback, useMemo } from "react";
import { Linking, View } from "react-native";
import { useIOTheme } from "../../context";
import { parseLite } from "./parser";
import { RenderContext, renderAST } from "./renderer";
import type { IOMarkdownLiteProps } from "./types";

export const IOMarkdownLite = ({
  content,
  onLinkPress,
  testID
}: IOMarkdownLiteProps) => {
  const theme = useIOTheme();
  const ast = useMemo(() => parseLite(content), [content]);

  const handleLinkPress = useCallback(
    (url: string) => {
      if (onLinkPress) {
        onLinkPress(url);
      } else {
        Linking.openURL(url).catch(constant(null));
      }
    },
    [onLinkPress]
  );

  const context = useMemo<RenderContext>(
    () => ({
      onLinkPress: handleLinkPress,
      headingColor: theme["textHeading-default"],
      bodyColor: theme["textBody-default"],
      linkColor: theme["interactiveElem-default"]
    }),
    [handleLinkPress, theme]
  );

  const rendered = renderAST(ast, context);

  return (
    <View style={{ gap: 8 }} testID={testID}>
      {rendered}
    </View>
  );
};
