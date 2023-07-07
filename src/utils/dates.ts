import I18n from "i18n-js";

export const localeDateFormat = (date: Date, format: string): string =>
  isNaN(date.getTime())
    ? I18n.t("global.date.invalid")
    : I18n.strftime(date, format);

/**
 * Generates a locale formatted timestamp,
 * used to force the refresh of the Image component cache for Android devices
 * every 24 hours.
 * @returns the actual locale date short format without slashes.
 */
export const toAndroidCacheTimestamp = () =>
  localeDateFormat(
    new Date(),
    I18n.t("global.dateFormats.shortFormat").replace(/\//g, "")
  );