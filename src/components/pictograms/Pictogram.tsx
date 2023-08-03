import React from "react";
import { ColorValue } from "react-native";
import { IOColors } from "../../core/IOColors";

import PictogramAbacus from "./svg/PictogramAbacus";
import PictogramAirBaloon from "./svg/PictogramAirBaloon";
import PictogramAirship from "./svg/PictogramAirship";
import PictogramAttention from "./svg/PictogramAttention";
import PictogramBaloons from "./svg/PictogramBaloons";
import PictogramBeerMug from "./svg/PictogramBeerMug";
import PictogramCameraRequest from "./svg/PictogramCameraRequest";
import PictogramCompleted from "./svg/PictogramCompleted";
import PictogramDonation from "./svg/PictogramDonation";
import PictogramEmailToValidate from "./svg/PictogramEmailToValidate";
import PictogramEmailValidation from "./svg/PictogramEmailValidation";
import PictogramEmptyArchive from "./svg/PictogramEmptyArchive";
import PictogramError from "./svg/PictogramError";
import PictogramFeedback from "./svg/PictogramFeedback";
import PictogramFireworks from "./svg/PictogramFireworks";
import PictogramFollowMessage from "./svg/PictogramFollowMessage";
import PictogramHeart from "./svg/PictogramHeart";
import PictogramHourglass from "./svg/PictogramHourglass";
import PictogramIBANCard from "./svg/PictogramIBANCard";
import PictogramInProgress from "./svg/PictogramInProgress";
import PictogramInbox from "./svg/PictogramInbox";
import PictogramManual from "./svg/PictogramManual";
import PictogramNotAvailable from "./svg/PictogramNotAvailable";
import PictogramPiggyBank from "./svg/PictogramPiggyBank";
import PictogramPin from "./svg/PictogramPin";
import PictogramPlaces from "./svg/PictogramPlaces";
import PictogramProcessing from "./svg/PictogramProcessing";
import PictogramPuzzle from "./svg/PictogramPuzzle";
import PictogramQuestion from "./svg/PictogramQuestion";
import PictogramSearch from "./svg/PictogramSearch";
import PictogramSetup from "./svg/PictogramSetup";
import PictogramSms from "./svg/PictogramSms";
import PictogramTeaBreak from "./svg/PictogramTeaBreak";
import PictogramTimeout from "./svg/PictogramTimeout";
import PictogramUmbrella from "./svg/PictogramUmbrella";
import PictogramUmbrellaNew from "./svg/PictogramUmbrellaNew";
import PictogramUnrecognized from "./svg/PictogramUnrecognized";
import PictogramUploadFile from "./svg/PictogramUploadFile";
import PictrogramSuccess from "./svg/PictrogramSuccess";

export const IOPictograms = {
  airBaloon: PictogramAirBaloon,
  abacus: PictogramAbacus,
  emailValidation: PictogramEmailValidation /* io-email-validated */,
  emailToValidate: PictogramEmailToValidate /* io-email-to-validate */,
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
  fireworks: PictogramFireworks /* io-fireworks */,
  puzzle: PictogramPuzzle,
  question: PictogramQuestion,
  pin: PictogramPin,
  timeout: PictogramTimeout,
  uploadFile: PictogramUploadFile,
  hourglass: PictogramHourglass,
  teaBreak: PictogramTeaBreak,
  beerMug: PictogramBeerMug,
  sms: PictogramSms,
  heart: PictogramHeart /* io-heart */,
  completed: PictogramCompleted,
  ibanCard: PictogramIBANCard,
  followMessage: PictogramFollowMessage,
  manual: PictogramManual,
  setup: PictogramSetup,
  donation: PictogramDonation,
  attention: PictogramAttention,
  emptyArchive: PictogramEmptyArchive,
  umbrellaNew: PictogramUmbrellaNew,
  feedback: PictogramFeedback,
  cameraRequest: PictogramCameraRequest,
  success: PictrogramSuccess
};

export type IOPictograms = keyof typeof IOPictograms;
export type IOPictogramSizeScale = 48 | 64 | 72 | 80 | 120 | 240;

type IOPictogramsProps = {
  name: IOPictograms;
  color?: IOColors;
  size?: IOPictogramSizeScale | "100%";
};

export type SVGPictogramProps = {
  size: IOPictogramSizeScale | "100%";
  color: ColorValue;
};

export const Pictogram = ({
  name,
  color = "aqua",
  size = 120,
  ...props
}: IOPictogramsProps) => {
  const PictogramElement = IOPictograms[name];
  return <PictogramElement {...props} size={size} color={IOColors[color]} />;
};

/*
░░░ VARIOUS SETS ░░░
*/

/* Bleed pictograms
    Used in the <Banner /> component
*/
const { donation, feedback } = IOPictograms;

const IOPictogramsBleed = {
  donation,
  feedback
} as const;

export type IOPictogramsBleed = keyof typeof IOPictogramsBleed;
