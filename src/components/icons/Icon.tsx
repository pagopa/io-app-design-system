import React from "react";
import { ColorValue, StyleProp } from "react-native";
import { IOColors } from "../../core/IOColors";

/* Icons */
import IconAbacus from "./svg/IconAbacus";
import IconAdd from "./svg/IconAdd";
import IconAgreement from "./svg/IconAgreement";
import IconAmount from "./svg/IconAmount";
import IconAnalytics from "./svg/IconAnalytics";
import IconArchive from "./svg/IconArchive";
import IconArrowBottom from "./svg/IconArrowBottom";
import IconArrowLeft from "./svg/IconArrowLeft";
import IconArrowRight from "./svg/IconArrowRight";
import IconArrowTop from "./svg/IconArrowTop";
import IconAttachment from "./svg/IconAttachment";
import IconBackAndroid from "./svg/IconBackAndroid";
import IconBackiOS from "./svg/IconBackiOS";
import IconBarcode from "./svg/IconBarcode";
import IconBattery from "./svg/IconBattery";
import IconBell from "./svg/IconBell";
import IconBiomFaceID from "./svg/IconBiomFaceID";
import IconBiomFingerprint from "./svg/IconBiomFingerprint";
import IconBonus from "./svg/IconBonus";
import IconCalendar from "./svg/IconCalendar";
import IconCancel from "./svg/IconCancel";
import IconCanceled from "./svg/IconCanceled";
import IconCategCulture from "./svg/IconCategCulture";
import IconCategFinance from "./svg/IconCategFinance";
import IconCategHome from "./svg/IconCategHome";
import IconCategJobOffers from "./svg/IconCategJobOffers";
import IconCategLearning from "./svg/IconCategLearning";
import IconCategMobility from "./svg/IconCategMobility";
import IconCategShopping from "./svg/IconCategShopping";
import IconCategSport from "./svg/IconCategSport";
import IconCategSustainability from "./svg/IconCategSustainability";
import IconCategTelco from "./svg/IconCategTelco";
import IconCategTravel from "./svg/IconCategTravel";
import IconCategWellness from "./svg/IconCategWellness";
import IconChat from "./svg/IconChat";
import IconCheckTick from "./svg/IconCheckTick";
import IconCheckTickBig from "./svg/IconCheckTickBig";
import IconChevronBottom from "./svg/IconChevronBottom";
import IconChevronLeft from "./svg/IconChevronLeft";
import IconChevronRight from "./svg/IconChevronRight";
import IconChevronRightListItem from "./svg/IconChevronRightListItem";
import IconChevronTop from "./svg/IconChevronTop";
import IconCie from "./svg/IconCie";
import IconCloseLarge from "./svg/IconCloseLarge";
import IconCloseMedium from "./svg/IconCloseMedium";
import IconCloseSmall from "./svg/IconCloseSmall";
import IconCoggle from "./svg/IconCoggle";
import IconCopy from "./svg/IconCopy";
import IconCreditCard from "./svg/IconCreditCard";
import IconDevice from "./svg/IconDevice";
import IconDocument from "./svg/IconDocument";
import IconDocumentAttachment from "./svg/IconDocumentAttachment";
import IconDocumentAttachmentPDF from "./svg/IconDocumentAttachmentPDF";
import IconDocumentSign from "./svg/IconDocumentSign";
import IconDotMenu from "./svg/IconDotMenu";
import IconEdit from "./svg/IconEdit";
import IconEmail from "./svg/IconEmail";
import IconEmailFill from "./svg/IconEmailFill";
import IconEmojiHappy from "./svg/IconEmojiHappy";
import IconEmojiSad from "./svg/IconEmojiSad";
import IconErrorFilled from "./svg/IconErrorFilled";
import IconExternalLink from "./svg/IconExternalLink";
import IconEyeHide from "./svg/IconEyeHide";
import IconEyeShow from "./svg/IconEyeShow";
import IconFiscalCodeIndividual from "./svg/IconFiscalCodeIndividual";
import IconFornitori from "./svg/IconFornitori";
import IconGallery from "./svg/IconGallery";
import IconGiacenza from "./svg/IconGiacenza";
import IconHistory from "./svg/IconHistory";
import IconHome from "./svg/IconHome";
import IconHomeFill from "./svg/IconHomeFill";
import IconHourglass from "./svg/IconHourglass";
import IconInfo from "./svg/IconInfo";
import IconInfoFilled from "./svg/IconInfoFilled";
import IconInitiatives from "./svg/IconInitiatives";
import IconInstitution from "./svg/IconInstitution";
import IconLadybug from "./svg/IconLadybug";
import IconLegalValue from "./svg/IconLegalValue";
import IconLight from "./svg/IconLight";
import IconLightFilled from "./svg/IconLightFilled";
import IconLightbulb from "./svg/IconLightbulb";
import IconLocationAndroid from "./svg/IconLocationAndroid";
import IconLocationiOS from "./svg/IconLocationiOS";
import IconLocationiOSFilled from "./svg/IconLocationiOSFilled";
import IconLockOff from "./svg/IconLockOff";
import IconLockOn from "./svg/IconLockOn";
import IconLogin from "./svg/IconLogin";
import IconLogout from "./svg/IconLogout";
import IconMagicWand from "./svg/IconMagicWand";
import IconMerchant from "./svg/IconMerchant";
import IconMessage from "./svg/IconMessage";
import IconMessageLegal from "./svg/IconMessageLegal";
import IconNavMessages from "./svg/IconNavMessages";
import IconNavMessagesFocused from "./svg/IconNavMessagesFocused";
import IconNavProfile from "./svg/IconNavProfile";
import IconNavProfileFocused from "./svg/IconNavProfileFocused";
import IconNavScan from "./svg/IconNavScan";
import IconNavServices from "./svg/IconNavServices";
import IconNavServicesFocused from "./svg/IconNavServicesFocused";
import IconNavWallet from "./svg/IconNavWallet";
import IconNavWalletFocused from "./svg/IconNavWalletFocused";
import IconNotice from "./svg/IconNotice";
import IconNoticeFilled from "./svg/IconNoticeFilled";
import IconOk from "./svg/IconOk";
import IconPEC from "./svg/IconPEC";
import IconPSP from "./svg/IconPSP";
import IconPhone from "./svg/IconPhone";
import IconPinOff from "./svg/IconPinOff";
import IconPinOn from "./svg/IconPinOn";
import IconProductIOApp from "./svg/IconProductIOApp";
import IconProductIOAppBlueBg from "./svg/IconProductIOAppBlueBg";
import IconProductPagoPA from "./svg/IconProductPagoPA";
import IconProfile from "./svg/IconProfile";
import IconProfileAlt from "./svg/IconProfileAlt";
import IconProfileFilled from "./svg/IconProfileFilled";
import IconQrCode from "./svg/IconQrCode";
import IconQuestion from "./svg/IconQuestion";
import IconRefund from "./svg/IconRefund";
import IconReload from "./svg/IconReload";
import IconSave from "./svg/IconSave";
import IconSearch from "./svg/IconSearch";
import IconSecurity from "./svg/IconSecurity";
import IconSelfCertification from "./svg/IconSelfCertification";
import IconShareAndroid from "./svg/IconShareAndroid";
import IconShareiOs from "./svg/IconShareiOs";
import IconSpid from "./svg/IconSpid";
import IconStarEmpty from "./svg/IconStarEmpty";
import IconStarFilled from "./svg/IconStarFilled";
import IconSuccess from "./svg/IconSuccess";
import IconSwitchOff from "./svg/IconSwitchOff";
import IconSystemAppsAndroid from "./svg/IconSystemAppsAndroid";
import IconSystemNotificationsInstructions from "./svg/IconSystemNotificationsInstructions";
import IconSystemSettingsAndroid from "./svg/IconSystemSettingsAndroid";
import IconSystemSettingsiOS from "./svg/IconSystemSettingsiOS";
import IconSystemToggleInstructions from "./svg/IconSystemToggleInstructions";
import IconTag from "./svg/IconTag";
import IconTransactionsBoxed from "./svg/IconTransactionsBoxed";
import IconTransactions from "./svg/IconTransactions";
import IconTrashcan from "./svg/IconTrashcan";
import IconWarningFilled from "./svg/IconWarningFilled";
import IconWebsite from "./svg/IconWebsite";
import IconOption from "./svg/IconOption";
import IconKey from "./svg/IconKey";
import IconNotification from "./svg/IconNotification";
import IconChange from "./svg/IconChange";
import LegIconCheckOff from "./svg/LegIconCheckOff";
import LegIconCheckOn from "./svg/LegIconCheckOn";
import LegIconRadioOff from "./svg/LegIconRadioOff";
import LegIconRadioOn from "./svg/LegIconRadioOn";
import IconKeyboard from "./svg/IconKeyboard";
import IconContactless from "./svg/IconContactless";
import IconDisabilityCard from "./svg/IconDisabilityCard";
import IconDriverLicense from "./svg/IconDriverLicense";
import IconHealthCard from "./svg/IconHealthCard";
import IconDocPaymentCode from "./svg/IconDocPaymentCode";
import IconNotes from "./svg/IconNotes";
import IconEntityCode from "./svg/IconEntityCode";

export const IOIcons = {
  archive: IconArchive,
  spid: IconSpid,
  cie: IconCie /* io-cie */,
  qrCode: IconQrCode,
  bell: IconBell,
  website: IconWebsite,
  abacus: IconAbacus,
  home: IconHome,
  homeFill: IconHomeFill,
  copy: IconCopy,
  selfCert: IconSelfCertification,
  institution: IconInstitution,
  merchant: IconMerchant,
  hourglass: IconHourglass,
  shareiOs: IconShareiOs,
  shareAndroid: IconShareAndroid,
  locked: IconLockOn,
  unlocked: IconLockOff,
  initiatives: IconInitiatives,
  analytics: IconAnalytics,
  fornitori: IconFornitori,
  eyeShow: IconEyeShow,
  eyeHide: IconEyeHide,
  pinOff: IconPinOff,
  pinOn: IconPinOn,
  emojiSad: IconEmojiSad,
  emojiHappy: IconEmojiHappy,
  phone: IconPhone,
  email: IconEmail,
  emailFill: IconEmailFill,
  pec: IconPEC,
  messageLegal: IconMessageLegal,
  message: IconMessage,
  chat: IconChat,
  doc: IconDocument,
  docSign: IconDocumentSign,
  docAgree: IconAgreement,
  security: IconSecurity,
  option: IconOption,
  key: IconKey,
  docGiacenza: IconGiacenza,
  docPaymentCode: IconDocPaymentCode,
  docAttach: IconDocumentAttachment,
  docAttachPDF: IconDocumentAttachmentPDF,
  notes: IconNotes,
  attachment: IconAttachment,
  add: IconAdd,
  success: IconSuccess,
  ok: IconOk,
  fiscalCodeIndividual: IconFiscalCodeIndividual,
  entityCode: IconEntityCode,
  creditCard: IconCreditCard,
  bonus: IconBonus,
  transactionsBoxed: IconTransactionsBoxed,
  transactions: IconTransactions,
  amount: IconAmount,
  psp: IconPSP,
  locationiOS: IconLocationiOS,
  locationiOSFilled: IconLocationiOSFilled,
  locationAndroid: IconLocationAndroid,
  coggle: IconCoggle,
  warningFilled: IconWarningFilled,
  notice: IconNotice,
  noticeFilled: IconNoticeFilled,
  info: IconInfo,
  infoFilled: IconInfoFilled,
  canceled: IconCanceled,
  errorFilled: IconErrorFilled,
  legalValue: IconLegalValue,
  refund: IconRefund,
  reload: IconReload,
  history: IconHistory,
  edit: IconEdit,
  battery: IconBattery,
  trashcan: IconTrashcan,
  calendar: IconCalendar,
  profile: IconProfile,
  profileFilled: IconProfileFilled,
  profileAlt: IconProfileAlt,
  lightbulb: IconLightbulb,
  magicWand: IconMagicWand,
  starFilled: IconStarFilled,
  starEmpty: IconStarEmpty,
  switchOff: IconSwitchOff,
  device: IconDevice,
  contactless: IconContactless,
  notification: IconNotification,
  keyboard: IconKeyboard,
  dotMenu: IconDotMenu,
  barcode: IconBarcode,
  save: IconSave,
  login: IconLogin,
  logout: IconLogout,
  ladybug: IconLadybug,
  tag: IconTag,
  gallery: IconGallery,
  externalLink: IconExternalLink,
  cancel: IconCancel,
  help: IconQuestion,
  search: IconSearch,
  disabilityCard: IconDisabilityCard,
  driverLicense: IconDriverLicense,
  healthCard: IconHealthCard,
  chevronRight: IconChevronRight,
  chevronLeft: IconChevronLeft,
  chevronBottom: IconChevronBottom,
  chevronTop: IconChevronTop,
  chevronRightListItem: IconChevronRightListItem,
  closeLarge: IconCloseLarge,
  closeMedium: IconCloseMedium,
  closeSmall: IconCloseSmall,
  arrowBottom: IconArrowBottom,
  arrowLeft: IconArrowLeft,
  arrowTop: IconArrowTop,
  arrowRight: IconArrowRight,
  change: IconChange,
  backiOS: IconBackiOS,
  backAndroid: IconBackAndroid,
  navMessages: IconNavMessages,
  navMessagesFocused: IconNavMessagesFocused,
  navWallet: IconNavWallet,
  navWalletFocused: IconNavWalletFocused,
  navScan: IconNavScan,
  navServices: IconNavServices,
  navServicesFocused: IconNavServicesFocused,
  navProfile: IconNavProfile,
  navProfileFocused: IconNavProfileFocused,
  navPsp: IconPSP,
  legRadioOn: LegIconRadioOn,
  legRadioOff: LegIconRadioOff,
  legCheckOn: LegIconCheckOn,
  legCheckOff: LegIconCheckOff,
  biomFingerprint: IconBiomFingerprint,
  biomFaceID: IconBiomFaceID,
  categCulture: IconCategCulture,
  categWellness: IconCategWellness,
  categLearning: IconCategLearning,
  categSport: IconCategSport,
  categHome: IconCategHome,
  categTelco: IconCategTelco,
  categFinance: IconCategFinance,
  categTravel: IconCategTravel,
  categMobility: IconCategMobility,
  categJobOffers: IconCategJobOffers,
  categShopping: IconCategShopping,
  categSustainability: IconCategSustainability,
  productIOApp: IconProductIOApp,
  productPagoPA: IconProductPagoPA,
  productIOAppBlueBg: IconProductIOAppBlueBg,
  checkTick: IconCheckTick,
  checkTickBig: IconCheckTickBig,
  light: IconLight,
  lightFilled: IconLightFilled,
  systemSettingsAndroid: IconSystemSettingsAndroid,
  systemSettingsiOS: IconSystemSettingsiOS,
  systemToggleInstructions: IconSystemToggleInstructions,
  systemAppsAndroid: IconSystemAppsAndroid,
  systemNotificationsInstructions: IconSystemNotificationsInstructions
} as const;

export type IOIcons = keyof typeof IOIcons;

/* The following values should be deleted: 12, 30 */
/* 96 is too big for an icon, it should be replaced
with a Pictogram instead */
export type IOIconSizeScale = 12 | 16 | 20 | 24 | 30 | 32 | 48 | 96;
/* Sizes used exclusively for the Checkbox component */
export type IOIconSizeScaleCheckbox = 14 | 18;

export type IOIconsProps = {
  name: IOIcons;
  color?: IOColors;
  size?: IOIconSizeScale | IOIconSizeScaleCheckbox | "100%";
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
};

export type SVGIconProps = {
  size: number | "100%";
  style: StyleProp<any>;
  accessible: boolean;
  accessibilityElementsHidden: boolean;
  accessibilityLabel: string;
  importantForAccessibility:
    | "auto"
    | "yes"
    | "no"
    | "no-hide-descendants"
    | undefined;
};

/*
Static icon component. Use it when you need an ion that doesn't
change its color values. It accepts `IOColors` values only.
*/
export const Icon = ({
  name,
  color = "bluegrey",
  size = 24,
  accessible = false,
  accessibilityLabel = "",
  ...props
}: IOIconsProps) => {
  const IconElement = IOIcons[name];
  return (
    <IconElement
      {...props}
      style={{ color: IOColors[color] }}
      size={size}
      accessible={accessible}
      accessibilityElementsHidden={true}
      accessibilityLabel={accessibilityLabel}
      importantForAccessibility={"no-hide-descendants"}
    />
  );
};

/*
Animated icon component. Use it when you need a color
transition between different states.
*/

type IOAnimatedIconsProps = {
  name: IOIcons;
  color?: ColorValue;
  size?: IOIconSizeScale | "100%";
  accessible?: boolean;
};

export const AnimatedIcon = ({
  name,
  color = IOColors.bluegrey,
  size = 24,
  accessible = false,
  ...props
}: IOAnimatedIconsProps) => {
  const IconElement = IOIcons[name];
  return (
    <IconElement
      {...props}
      style={{ color }}
      size={size}
      accessible={accessible}
      accessibilityElementsHidden={true}
      accessibilityLabel={""}
      importantForAccessibility={"no-hide-descendants"}
    />
  );
};

/* Make <Icon> component animatable. Reanimated supports class components only,
so we need to convert <Icon> into a class component first.
https://github.com/software-mansion/react-native-reanimated/discussions/1527  */
export class IconClassComponent extends React.Component<IOAnimatedIconsProps> {
  constructor(props: IOAnimatedIconsProps) {
    super(props);
  }
  render() {
    return <AnimatedIcon {...this.props} />;
  }
}

/*
░░░ VARIOUS SETS ░░░
*/

/* New icons */
// const {} = IOIcons;

// export const IOIconsNew = {};

/* Navigation */
const {
  navMessages,
  navWallet,
  navScan,
  navServices,
  navProfile,
  navPsp,
  navMessagesFocused,
  navWalletFocused,
  navServicesFocused,
  navProfileFocused
} = IOIcons;

export const IONavIcons = {
  navMessages,
  navWallet,
  navScan,
  navServices,
  navProfile,
  navPsp,
  navMessagesFocused,
  navWalletFocused,
  navServicesFocused,
  navProfileFocused
} as const;

export type IONavIcons = keyof typeof IONavIcons;

/* Biometric */
const { biomFingerprint, biomFaceID } = IOIcons;

export const IOBiometricIcons = {
  biomFingerprint,
  biomFaceID
} as const;

export type IOBiometricIcons = keyof typeof IOBiometricIcons;

/* Categories (used by CGN) */
const {
  categCulture,
  categWellness,
  categLearning,
  categSport,
  categHome,
  categTelco,
  categFinance,
  categTravel,
  categMobility,
  categJobOffers,
  categShopping,
  categSustainability
} = IOIcons;

export const IOCategoryIcons = {
  categCulture,
  categWellness,
  categLearning,
  categSport,
  categHome,
  categTelco,
  categFinance,
  categTravel,
  categMobility,
  categJobOffers,
  categShopping,
  categSustainability
} as const;

export type IOCategoryIcons = keyof typeof IOCategoryIcons;

/* Product Logos */
const { productIOApp, productPagoPA, productIOAppBlueBg } = IOIcons;

export const IOProductIcons = {
  productIOApp,
  productPagoPA,
  productIOAppBlueBg
} as const;

export type IOProductIcons = keyof typeof IOProductIcons;

/* System */
const {
  systemSettingsAndroid,
  systemSettingsiOS,
  systemToggleInstructions,
  systemAppsAndroid,
  systemNotificationsInstructions
} = IOIcons;

export const IOSystemIcons = {
  systemSettingsAndroid,
  systemSettingsiOS,
  systemToggleInstructions,
  systemAppsAndroid,
  systemNotificationsInstructions
} as const;

export type IOSystemIcons = keyof typeof IOSystemIcons;
