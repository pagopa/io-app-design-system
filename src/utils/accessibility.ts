import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import I18n from "i18n-js";

/**
 * This function is used to get the text that will be read by the screen reader
 * with the correct minus symbol pronunciation.
 */
export const getAccessibleAmountText = (amount?: string) =>
  pipe(
    amount,
    O.fromNullable,
    O.map(amount =>
      amount.replace("-", I18n.t("global.accessibility.minusSymbol"))
    ),
    O.getOrElseW(() => undefined)
  );
