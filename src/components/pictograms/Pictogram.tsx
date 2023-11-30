import React, { useMemo } from "react";
import { ColorValue } from "react-native";
import {
  IOColors,
  IOThemeDark,
  IOThemeLight,
  useIOTheme
} from "../../core/IOColors";

import PictogramAbacus from "./svg/PictogramAbacus";
import PictogramAccessDenied from "./svg/PictogramAccessDenied";
import PictogramAirBaloon from "./svg/PictogramAirBaloon";
import PictogramAirship from "./svg/PictogramAirship";
import PictogramAttention from "./svg/PictogramAttention";
import PictogramBaloons from "./svg/PictogramBaloons";
import PictogramBeerMug from "./svg/PictogramBeerMug";
import PictogramCameraDenied from "./svg/PictogramCameraDenied";
import PictogramCameraRequest from "./svg/PictogramCameraRequest";
import PictogramCharity from "./svg/PictogramCharity";
import PictogramCie from "./svg/PictogramCie";
import PictogramCompleted from "./svg/PictogramCompleted";
import PictogramEmailToValidate from "./svg/PictogramEmailToValidate";
import PictogramEmailValidation from "./svg/PictogramEmailValidation";
import PictogramEmpty from "./svg/PictogramEmpty";
import PictogramEmptyArchive from "./svg/PictogramEmptyArchive";
import PictogramError from "./svg/PictogramError";
import PictogramFatalError from "./svg/PictogramFatalError";
import PictogramFeature from "./svg/PictogramFeature";
import PictogramFeedback from "./svg/PictogramFeedback";
import PictogramFireworks from "./svg/PictogramFireworks";
import PictogramHeart from "./svg/PictogramHeart";
import PictogramHelp from "./svg/PictogramHelp";
import PictogramHourglass from "./svg/PictogramHourglass";
import PictogramITWallet from "./svg/PictogramITWallet";
import PictogramIdentity from "./svg/PictogramIdentity";
import PictogramIdentityAdd from "./svg/PictogramIdentityAdd";
import PictogramIdentityCheck from "./svg/PictogramIdentityCheck";
import PictogramIdentityRefresh from "./svg/PictogramIdentityRefresh";
import PictogramInProgress from "./svg/PictogramInProgress";
import PictogramInbox from "./svg/PictogramInbox";
import PictogramMessages from "./svg/PictogramMessages";
import PictogramNotAvailable from "./svg/PictogramNotAvailable";
import PictogramNotification from "./svg/PictogramNotification";
import PictogramObjClock from "./svg/PictogramObjClock";
import PictogramObjFlyingMessage from "./svg/PictogramObjFlyingMessage";
import PictogramObjFollowMessage from "./svg/PictogramObjFollowMessage";
import PictogramObjIbanCard from "./svg/PictogramObjIbanCard";
import PictogramObjKey from "./svg/PictogramObjKey";
import PictogramObjManual from "./svg/PictogramObjManual";
import PictogramObjTrash from "./svg/PictogramObjTrash";
import PictogramPasscode from "./svg/PictogramPasscode";
import PictogramPiggyBank from "./svg/PictogramPiggyBank";
import PictogramPin from "./svg/PictogramPin";
import PictogramPlaces from "./svg/PictogramPlaces";
import PictogramProcessing from "./svg/PictogramProcessing";
import PictogramPuzzle from "./svg/PictogramPuzzle";
import PictogramQuestion from "./svg/PictogramQuestion";
import PictogramSearch from "./svg/PictogramSearch";
import PictogramSecurity from "./svg/PictogramSecurity";
import PictogramSms from "./svg/PictogramSms";
import PictogramStopSecurity from "./svg/PictogramStopSecurity";
import PictogramSuccess from "./svg/PictogramSuccess";
import PictogramTeaBreak from "./svg/PictogramTeaBreak";
import PictogramTime from "./svg/PictogramTime";
import PictogramTimeout from "./svg/PictogramTimeout";
import PictogramUmbrella from "./svg/PictogramUmbrella";
import PictogramUmbrellaNew from "./svg/PictogramUmbrellaNew";
import PictogramUnrecognized from "./svg/PictogramUnrecognized";
import PictogramUpdateOS from "./svg/PictogramUpdateOS";
import PictogramUploadFile from "./svg/PictogramUploadFile";
/* Bleed Pictograms */
import PictogramActivate from "./svg/PictogramActivate";
import PictogramAttachment from "./svg/PictogramAttachment";
import PictogramBiometric from "./svg/PictogramBiometric";
import PictogramBleedAccessDenied from "./svg/PictogramBleedAccessDenied";
import PictogramBleedAttention from "./svg/PictogramBleedAttention";
import PictogramBleedCameraDenied from "./svg/PictogramBleedCameraDenied";
import PictogramBleedCameraRequest from "./svg/PictogramBleedCameraRequest";
import PictogramBleedCardAdd from "./svg/PictogramBleedCardAdd";
import PictogramBleedCardFavourite from "./svg/PictogramBleedCardFavourite";
import PictogramBleedCardIssue from "./svg/PictogramBleedCardIssue";
import PictogramBleedCardQuestion from "./svg/PictogramBleedCardQuestion";
import PictogramBleedCharity from "./svg/PictogramBleedCharity";
import PictogramBleedCie from "./svg/PictogramBleedCie";
import PictogramBleedDoc from "./svg/PictogramBleedDoc";
import PictogramBleedEmpty from "./svg/PictogramBleedEmpty";
import PictogramBleedEnded from "./svg/PictogramBleedEnded";
import PictogramBleedFatalError from "./svg/PictogramBleedFatalError";
import PictogramBleedFeature from "./svg/PictogramBleedFeature";
import PictogramBleedFeedback from "./svg/PictogramBleedFeedback";
import PictogramBleedHelp from "./svg/PictogramBleedHelp";
import PictogramBleedITWallet from "./svg/PictogramBleedITWallet";
import PictogramBleedIdea from "./svg/PictogramBleedIdea";
import PictogramBleedIdentity from "./svg/PictogramBleedIdentity";
import PictogramBleedIdentityAdd from "./svg/PictogramBleedIdentityAdd";
import PictogramBleedIdentityCheck from "./svg/PictogramBleedIdentityCheck";
import PictogramBleedIdentityRefresh from "./svg/PictogramBleedIdentityRefresh";
import PictogramBleedLostConnection from "./svg/PictogramBleedLostConnection";
import PictogramBleedMessage from "./svg/PictogramBleedMessage";
import PictogramBleedNotification from "./svg/PictogramBleedNotification";
import PictogramBleedPasscode from "./svg/PictogramBleedPasscode";
import PictogramBleedPending from "./svg/PictogramBleedPending";
import PictogramBleedQrCode from "./svg/PictogramBleedQrCode";
import PictogramBleedSearch from "./svg/PictogramBleedSearch";
import PictogramBleedSecurity from "./svg/PictogramBleedSecurity";
import PictogramBleedStar from "./svg/PictogramBleedStar";
import PictogramBleedStopSecurity from "./svg/PictogramBleedStopSecurity";
import PictogramBleedSuccess from "./svg/PictogramBleedSuccess";
import PictogramBleedTime from "./svg/PictogramBleedTime";
import PictogramBleedTiming from "./svg/PictogramBleedTiming";
import PictogramCardAdd from "./svg/PictogramCardAdd";
import PictogramCardFavourite from "./svg/PictogramCardFavourite";
import PictogramCardIssue from "./svg/PictogramCardIssue";
import PictogramCardQuestion from "./svg/PictogramCardQuestion";
import PictogramDoc from "./svg/PictogramDoc";
import PictogramEmailDotCheck from "./svg/PictogramEmailDotCheck";
import PictogramEmailDotNotif from "./svg/PictogramEmailDotNotif";
import PictogramEnded from "./svg/PictogramEnded";
import PictogramEventClose from "./svg/PictogramEventClose";
import PictogramIdea from "./svg/PictogramIdea";
import PictogramLostConnection from "./svg/PictogramLostConnection";
import PictogramMessage from "./svg/PictogramMessage";
import PictogramMoneyCheck from "./svg/PictogramMoneyCheck";
import PictogramNFCScanAndroid from "./svg/PictogramNFCScanAndroid";
import PictogramNFCScaniOS from "./svg/PictogramNFCScaniOS";
import PictogramPending from "./svg/PictogramPending";
import PictogramQrCode from "./svg/PictogramQrCode";
import PictogramReactivate from "./svg/PictogramReactivate";
import PictogramSearchLens from "./svg/PictogramSearchLens";
import PictogramStar from "./svg/PictogramStar";
import PictogramTiming from "./svg/PictogramTiming";

export const IOPictograms = {
  // Start legacy pictograms //
  messages: PictogramMessages,
  airBaloon: PictogramAirBaloon,
  abacus: PictogramAbacus,
  emailValidation: PictogramEmailValidation,
  emailToValidate: PictogramEmailToValidate,
  inbox: PictogramInbox,
  piggyBank: PictogramPiggyBank,
  processing: PictogramProcessing,
  baloons: PictogramBaloons,
  places: PictogramPlaces,
  notAvailable: PictogramNotAvailable,
  airship: PictogramAirship,
  search: PictogramSearch,
  unrecognized: PictogramUnrecognized,
  error: PictogramError,
  umbrella: PictogramUmbrella,
  inProgress: PictogramInProgress,
  fireworks: PictogramFireworks,
  puzzle: PictogramPuzzle,
  question: PictogramQuestion,
  pin: PictogramPin,
  timeout: PictogramTimeout,
  uploadFile: PictogramUploadFile,
  hourglass: PictogramHourglass,
  teaBreak: PictogramTeaBreak,
  beerMug: PictogramBeerMug,
  sms: PictogramSms,
  heart: PictogramHeart,
  completed: PictogramCompleted,
  // End legacy pictograms
  empty: PictogramEmpty,
  feature: PictogramFeature,
  charity: PictogramCharity,
  attention: PictogramAttention,
  message: PictogramMessage,
  emptyArchive: PictogramEmptyArchive,
  umbrellaNew: PictogramUmbrellaNew,
  feedback: PictogramFeedback,
  idea: PictogramIdea,
  cameraRequest: PictogramCameraRequest,
  cameraDenied: PictogramCameraDenied,
  success: PictogramSuccess,
  fatalError: PictogramFatalError,
  help: PictogramHelp,
  itWallet: PictogramITWallet,
  updateOS: PictogramUpdateOS,
  identity: PictogramIdentity,
  identityAdd: PictogramIdentityAdd,
  identityRefresh: PictogramIdentityRefresh,
  identityCheck: PictogramIdentityCheck,
  accessDenied: PictogramAccessDenied,
  stopSecurity: PictogramStopSecurity,
  security: PictogramSecurity,
  cie: PictogramCie,
  pending: PictogramPending,
  ended: PictogramEnded,
  time: PictogramTime,
  timing: PictogramTiming,
  searchLens: PictogramSearchLens,
  passcode: PictogramPasscode,
  notification: PictogramNotification,
  star: PictogramStar,
  doc: PictogramDoc,
  cardAdd: PictogramCardAdd,
  cardFavourite: PictogramCardFavourite,
  cardQuestion: PictogramCardQuestion,
  cardIssue: PictogramCardIssue,
  moneyCheck: PictogramMoneyCheck,
  reactivate: PictogramReactivate,
  activate: PictogramActivate,
  nfcScanAndroid: PictogramNFCScanAndroid,
  nfcScaniOS: PictogramNFCScaniOS,
  attachment: PictogramAttachment,
  lostConnection: PictogramLostConnection,
  qrCode: PictogramQrCode,
  emailDotNotif: PictogramEmailDotNotif,
  emailDotCheck: PictogramEmailDotCheck,
  biometric: PictogramBiometric,
  eventClose: PictogramEventClose,
  // Start Objects Pictogram
  ibanCard: PictogramObjIbanCard,
  followMessage: PictogramObjFollowMessage,
  manual: PictogramObjManual,
  trash: PictogramObjTrash,
  clock: PictogramObjClock,
  key: PictogramObjKey,
  flyingMessage: PictogramObjFlyingMessage
  // End Objects Pictogram
};

export type IOPictograms = keyof typeof IOPictograms;
export type IOPictogramSizeScale = 48 | 64 | 72 | 80 | 120 | 180;

type IOPictogramsProps = {
  name: IOPictograms;
  color?: IOColors;
  /* Not too happy about the API choice,
  but at least we have the same <StatusBar …>
  component props. */
  pictogramStyle?: "default" | "light-content" | "dark-content";
  size?: IOPictogramSizeScale | "100%";
};

export type SVGPictogramProps = {
  size: IOPictogramSizeScale | "100%";
  color: ColorValue;
  colorValues: Record<string, ColorValue>;
};

type PictogramPalette = {
  hands: ColorValue;
  main: ColorValue;
  secondary: ColorValue;
};

export const Pictogram = ({
  name,
  color = "aqua",
  pictogramStyle = "default",
  size = 120,
  ...props
}: IOPictogramsProps) => {
  const PictogramElement = IOPictograms[name];
  const theme = useIOTheme();

  const themeObj = useMemo(() => {
    switch (pictogramStyle) {
      case "dark-content":
        return IOThemeLight;
      case "light-content":
        return IOThemeDark;
      case "default":
        return theme;
    }
  }, [pictogramStyle, theme]);

  const colorValues: PictogramPalette = useMemo(
    () => ({
      hands: IOColors[themeObj["pictogram-hands"]],
      main: IOColors[themeObj["pictogram-tint-main"]],
      secondary: IOColors[themeObj["pictogram-tint-secondary"]]
    }),
    [themeObj]
  );

  return (
    <PictogramElement
      {...props}
      size={size}
      color={IOColors[color]}
      colorValues={colorValues}
    />
  );
};

/*
░░░ VARIOUS SETS ░░░
*/

/* Bleed pictograms
    Used in the <Banner /> component
*/

export type IOPictogramsBleed = Extract<
  | "empty"
  | "charity"
  | "attention"
  | "message"
  | "help"
  | "feedback"
  | "idea"
  | "itWallet"
  | "security"
  | "feature"
  | "cie"
  | "identity"
  | "identityAdd"
  | "identityCheck"
  | "identityRefresh"
  | "cameraRequest"
  | "cameraDenied"
  | "cardAdd"
  | "cardFavourite"
  | "cardQuestion"
  | "cardIssue"
  | "accessDenied"
  | "stopSecurity"
  | "time"
  | "pending"
  | "ended"
  | "timing"
  | "searchLens"
  | "passcode"
  | "success"
  | "fatalError"
  | "notification"
  | "star"
  | "doc"
  | "notification"
  | "star"
  | "qrCode"
  | "lostConnection",
  IOPictograms
>;

export const IOPictogramsBleed: {
  [key in IOPictogramsBleed]: ({ size }: SVGPictogramProps) => JSX.Element;
} = {
  empty: PictogramBleedEmpty,
  charity: PictogramBleedCharity,
  help: PictogramBleedHelp,
  attention: PictogramBleedAttention,
  message: PictogramBleedMessage,
  feedback: PictogramBleedFeedback,
  idea: PictogramBleedIdea,
  itWallet: PictogramBleedITWallet,
  security: PictogramBleedSecurity,
  feature: PictogramBleedFeature,
  cie: PictogramBleedCie,
  identity: PictogramBleedIdentity,
  identityAdd: PictogramBleedIdentityAdd,
  identityCheck: PictogramBleedIdentityCheck,
  identityRefresh: PictogramBleedIdentityRefresh,
  cameraRequest: PictogramBleedCameraRequest,
  cameraDenied: PictogramBleedCameraDenied,
  cardAdd: PictogramBleedCardAdd,
  cardFavourite: PictogramBleedCardFavourite,
  cardQuestion: PictogramBleedCardQuestion,
  cardIssue: PictogramBleedCardIssue,
  accessDenied: PictogramBleedAccessDenied,
  stopSecurity: PictogramBleedStopSecurity,
  time: PictogramBleedTime,
  pending: PictogramBleedPending,
  ended: PictogramBleedEnded,
  timing: PictogramBleedTiming,
  searchLens: PictogramBleedSearch,
  passcode: PictogramBleedPasscode,
  success: PictogramBleedSuccess,
  fatalError: PictogramBleedFatalError,
  notification: PictogramBleedNotification,
  star: PictogramBleedStar,
  doc: PictogramBleedDoc,
  qrCode: PictogramBleedQrCode,
  lostConnection: PictogramBleedLostConnection
};

export const PictogramBleed = ({
  name,
  color = "aqua",
  size = 80,
  pictogramStyle = "default",
  ...props
}: IOPictogramsProps) => {
  const PictogramElement = IOPictogramsBleed[name as IOPictogramsBleed];

  const theme = useIOTheme();

  const themeObj = useMemo(() => {
    switch (pictogramStyle) {
      case "dark-content":
        return IOThemeLight;
      case "light-content":
        return IOThemeDark;
      case "default":
        return theme;
    }
  }, [pictogramStyle, theme]);

  const colorValues: PictogramPalette = useMemo(
    () => ({
      hands: IOColors[themeObj["pictogram-hands"]],
      main: IOColors[themeObj["pictogram-tint-main"]],
      secondary: IOColors[themeObj["pictogram-tint-secondary"]]
    }),
    [themeObj]
  );

  return (
    <PictogramElement
      {...props}
      size={size}
      color={IOColors[color]}
      colorValues={colorValues}
    />
  );
};

/* Object Pictograms */

const { ibanCard, followMessage, manual, trash, clock, key, flyingMessage } =
  IOPictograms;

export const IOPictogramsObject = {
  ibanCard,
  followMessage,
  manual,
  trash,
  clock,
  key,
  flyingMessage
} as const;

export type IOPictogramsObject = keyof typeof IOPictogramsObject;

/* Legacy pictograms */

const {
  messages,
  airBaloon,
  abacus,
  emailValidation,
  emailToValidate,
  inbox,
  piggyBank,
  processing,
  baloons,
  places,
  notAvailable,
  airship,
  search,
  unrecognized,
  error,
  umbrella,
  inProgress,
  fireworks,
  puzzle,
  question,
  pin,
  timeout,
  uploadFile,
  hourglass,
  teaBreak,
  beerMug,
  sms,
  heart,
  completed
} = IOPictograms;

export const IOPictogramsLegacy = {
  messages,
  airBaloon,
  abacus,
  emailValidation,
  emailToValidate,
  inbox,
  piggyBank,
  processing,
  baloons,
  places,
  notAvailable,
  airship,
  search,
  unrecognized,
  error,
  umbrella,
  inProgress,
  fireworks,
  puzzle,
  question,
  pin,
  timeout,
  uploadFile,
  hourglass,
  teaBreak,
  beerMug,
  sms,
  heart,
  completed
} as const;

export type IOPictogramsLegacy = keyof typeof IOPictogramsLegacy;
