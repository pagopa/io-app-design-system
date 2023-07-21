import { Platform, StyleSheet } from "react-native";
import { IOIconSizeScale } from "../components/icons";
import { IOColors } from "./IOColors";
import { IOAppMargin, IOSpacer, IOSpacingScale } from "./IOSpacing";

/**
 * A collection of default styles used within IO App.
 */

interface IOVisualCostants {
  appMarginDefault: IOAppMargin;
  // Dimensions
  avatarSizeSmall: number;
  avatarSizeMedium: number;
}

export const IOVisualCostants: IOVisualCostants = {
  appMarginDefault: 24,
  avatarSizeSmall: 44,
  avatarSizeMedium: 66
};

export const IOStyles = StyleSheet.create({
  flex: {
    flex: 1
  },
  selfCenter: {
    alignSelf: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  horizontalContentPadding: {
    paddingHorizontal: IOVisualCostants.appMarginDefault
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  centerJustified: {
    justifyContent: "center"
  },
  // The following styles come from the original
  // NativeBase's `View`. They are moved here to
  // prevent UI regressions.
  footer: {
    backgroundColor: IOColors.white,
    paddingBottom: 16,
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    paddingTop: 16,
    // iOS shadow
    shadowColor: IOColors.black,
    shadowOffset: {
      width: 0,
      height: 50
    },
    shadowOpacity: 0.5,
    shadowRadius: 37,
    elevation: 20 // Prop supported on Android only
  },
  bgWhite: {
    backgroundColor: IOColors.white
    // https://github.com/pagopa/io-app/pull/4387
  },
  topListBorderBelowTabsStyle: {
    borderTopWidth: Platform.OS === "android" ? 0.1 : undefined,
    elevation: 0.1
  }
});

/**
 * BUTTON STYLES
 */

/* SIZE
- Height for classic buttons
- Width and height for icon buttons
*/
const btnLegacySizeDefault = 40;
const btnLegacySizeSmall = 39;
const btnSizeLarge = 56;
// NEW Design System
const btnBorderRadius = 8;
const btnSizeDefault = 48;
// TODO: Replace the number type with the new IOIconSizeScale
const iconBtnSizeSmall: number = 24;

export const IOButtonLegacyStyles = StyleSheet.create({
  /* BaseButton, used in the:
  ButtonSolid, ButtonOutline
  */
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center", // Prop supported on Android only
    /* Legacy visual properties. They will be replaced with
    dynamic ones once NativeBase is gone */
    borderRadius: 4,
    paddingHorizontal: 16,
    // Reset default visual parameters
    elevation: 0
    // Visual parameters based on the FontScale
    // paddingVertical: PixelRatio.getFontScale() * 10,
    // paddingHorizontal: PixelRatio.getFontScale() * 16,
    // borderRadius: PixelRatio.getFontScale() * 8
  },
  /* Labels */
  label: {
    alignSelf: "center"
  },
  labelSizeDefault: {
    fontSize: 16
  },
  labelSizeSmall: {
    fontSize: 14
  },
  /* Heights
  Must be replaced with dynamic values, depending on the
  fontScale parameter */
  buttonSizeDefault: {
    height: btnLegacySizeDefault
  },
  buttonSizeSmall: {
    height: btnLegacySizeSmall
  }
});

export const IOButtonStyles = StyleSheet.create({
  /* BaseButton, used in the:
  ButtonSolid, ButtonOutline
  */
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center", // Prop supported on Android only
    /* Legacy visual properties. They will be replaced with
    dynamic ones once NativeBase is gone */
    borderRadius: btnBorderRadius,
    paddingHorizontal: 24,
    // Reset default visual parameters
    elevation: 0
    // Visual parameters based on the FontScale
    // paddingVertical: PixelRatio.getFontScale() * 10,
    // paddingHorizontal: PixelRatio.getFontScale() * 16,
    // borderRadius: PixelRatio.getFontScale() * 8
  },
  buttonLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center", // Prop supported on Android only
    // Reset default visual parameters
    elevation: 0
  },
  /* Labels */
  label: {
    alignSelf: "center"
  },
  labelSizeDefault: {
    fontSize: 16
  },
  labelSizeSmall: {
    fontSize: 16
  },
  /* Heights
  Must be replaced with dynamic values, depending on the
  fontScale parameter */
  buttonSizeDefault: {
    height: btnSizeDefault
  },
  buttonSizeSmall: {
    height: btnSizeDefault
  },
  /* Widths */
  dimensionsDefault: {
    alignSelf: "flex-start"
  }
});

export const IOIconButtonStyles = StyleSheet.create({
  /* IconButton */
  button: {
    alignItems: "center",
    justifyContent: "center",
    // Reset default visual parameters
    elevation: 0
  },
  buttonSizeSmall: {
    width: iconBtnSizeSmall,
    height: iconBtnSizeSmall
  },
  buttonSizeDefault: {
    width: btnSizeDefault,
    height: btnSizeDefault,
    borderRadius: btnSizeDefault
  },
  buttonSizeLarge: {
    width: btnSizeLarge,
    height: btnSizeLarge,
    borderRadius: btnSizeLarge
  }
});

/**
 * LIST ITEM STYLES
 */

interface IOListItemVisualParams {
  paddingVertical: IOSpacingScale;
  paddingHorizontal: IOAppMargin;
  iconMargin: IOSpacingScale;
  actionMargin: IOSpacingScale;
  iconSize: IOIconSizeScale;
  chevronSize: IOIconSizeScale;
}

export const IOListItemVisualParams: IOListItemVisualParams = {
  paddingVertical: 12,
  paddingHorizontal: IOVisualCostants.appMarginDefault,
  iconMargin: 16,
  actionMargin: 16,
  iconSize: 24,
  chevronSize: 24
};

export const IOListItemStyles = StyleSheet.create({
  listItem: {
    paddingVertical: IOListItemVisualParams.paddingVertical,
    paddingHorizontal: IOListItemVisualParams.paddingHorizontal,
    marginHorizontal: -IOListItemVisualParams.paddingHorizontal
  },
  listItemInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

/**
 * SELECTION ITEM STYLES
 */

interface IOSelectionTickVisualParams {
  size: IOIconSizeScale;
  borderWidth: number;
  borderColorOffState: IOColors;
  bgColorOnState: IOColors;
  tickColor: IOColors;
}

interface IOSwitchVisualParams {
  width: number;
  height: number;
  bgColorOffState: IOColors;
  bgColorOnState: IOColors;
  tickColor: IOColors;
  bgCircle: IOColors;
  padding: number;
}

interface IOSelectionTickLegacyVisualParams {
  borderColorOffState: IOColors;
  bgColorOnState: IOColors;
}

export const IOSelectionTickVisualParams: IOSelectionTickVisualParams = {
  size: 24,
  borderWidth: 2,
  borderColorOffState: "grey-650",
  bgColorOnState: "blueIO-500",
  tickColor: "white"
};

export const IOSwitchVisualParams: IOSwitchVisualParams = {
  width: 40,
  height: 28,
  bgColorOffState: "grey-700",
  bgColorOnState: "blueIO-500",
  tickColor: "blueIO-500",
  bgCircle: "white",
  // Space between the circle and the main shape
  padding: 2
};

export const IOSelectionTickLegacyVisualParams: IOSelectionTickLegacyVisualParams =
  {
    borderColorOffState: "bluegrey",
    bgColorOnState: "blue"
  };

interface IOSelectionListItemVisualParams {
  paddingVertical: IOSpacingScale;
  paddingHorizontal: IOAppMargin;
  iconMargin: IOSpacingScale;
  iconSize: IOIconSizeScale;
  descriptionMargin: IOSpacer;
}

export const IOSelectionListItemVisualParams: IOSelectionListItemVisualParams =
  {
    paddingVertical: 16,
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    iconMargin: 8,
    iconSize: 24,
    descriptionMargin: 4
  };

export const IOSelectionListItemStyles = StyleSheet.create({
  listItem: {
    paddingVertical: IOListItemVisualParams.paddingVertical,
    paddingHorizontal: IOListItemVisualParams.paddingHorizontal,
    marginHorizontal: -IOListItemVisualParams.paddingHorizontal
  },
  listItemInner: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  }
});
