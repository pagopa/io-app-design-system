const APP_ROUTES = {
  MAIN: "DESIGN_SYSTEM_MAIN",
  FOUNDATION: {
    COLOR: { route: "DESIGN_SYSTEM_COLOR", title: "Colors" },
    TYPOGRAPHY: { route: "DESIGN_SYSTEM_TYPOGRAPHY", title: "Typography" },
    LAYOUT: { route: "DESIGN_SYSTEM_LAYOUT", title: "Layout" },
    LOADERS: { route: "DESIGN_SYSTEM_LOADERS", title: "Loaders" },
    ICONS: { route: "DESIGN_SYSTEM_ICONS", title: "Icons" },
    PICTOGRAMS: { route: "DESIGN_SYSTEM_PICTOGRAMS", title: "Pictograms" },
    LOGOS: { route: "DESIGN_SYSTEM_LOGOS", title: "Logos" }
  },
  COMPONENTS: {
    NUMBER_PAD: { route: "DESIGN_SYSTEM_NUMBER_PAD", title: "Number Pad" },
    IMAGE: { route: "DESIGN_SYSTEM_IMAGE", title: "Image" },
    OTP_INPUT: { route: "DESIGN_SYSTEM_OTP_INPUT", title: "OTP Input" },
    BUTTONS: { route: "DESIGN_SYSTEM_BUTTONS", title: "Buttons" },
    LIST_ITEMS: { route: "DESIGN_SYSTEM_LIST_ITEMS", title: "List Items" },
    MODULES: { route: "DESIGN_SYSTEM_MODULES", title: "Modules" },
    BADGE: { route: "DESIGN_SYSTEM_BADGE", title: "Badges & Tags" },
    SELECTION: { route: "DESIGN_SYSTEM_SELECTION", title: "Selection" },
    ACCORDION: { route: "DESIGN_SYSTEM_ACCORDION", title: "Accordion" },
    ALERT: { route: "DESIGN_SYSTEM_ALERT", title: "Alert" },
    STEPPER: { route: "DESIGN_SYSTEM_STEPPER", title: "Stepper" },
    ADVICE: { route: "DESIGN_SYSTEM_ADVICE", title: "Advice & Banners" },
    TEXT_INPUT: { route: "DESIGN_SYSTEM_TEXT_INPUT", title: "Text Inputs" },
    SEARCH_INPUT: {
      route: "DESIGN_SYSTEM_SEARCH_INPUT",
      title: "Search Input"
    },
    TAB_NAVIGATION: {
      route: "DESIGN_SYSTEM_TAB_NAVIGATION",
      title: "Tab Navigation"
    },
    HEADER_FIRST_LEVEL: {
      route: "DESIGN_SYSTEM_HEADER_FIRST_LEVEL",
      title: "Header First Level"
    },
    FORCE_SCROLL_DOWN: {
      route: "DESIGN_SYSTEM_FORCE_SCROLL_DOWN",
      title: "Force Scroll Down"
    },
    HEADER_SECOND_LEVEL: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL",
      title: "Header Second Level"
    },
    HEADER_SECOND_LEVEL_CUSTOM_BG: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_CUSTOM_BG",
      title: "Header Second Level (Custom Background)"
    },
    HEADER_SECOND_LEVEL_STATIC: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_STATIC",
      title: "Header Second Level (Static)"
    },
    HEADER_SECOND_LEVEL_BANNER: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_BANNER",
      title: "Header Second Level (Banner)"
    },
    HEADER_SECOND_LEVEL_STEPPER: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_STEPPER",
      title: "Header Second Level (Stepper)"
    },
    TOASTS: {
      route: "DESIGN_SYSTEM_TOASTS",
      title: "Toasts"
    }
  },
  SCREENS: {
    FULL_SCREEN_MODAL: {
      route: "DESIGN_SYSTEM_FULLSCR_MODAL",
      title: "Full screen modal"
    },
    FULL_SCREEN_MODAL_2: {
      route: "DESIGN_SYSTEM_FULLSCR_MODAL_2",
      title: "Full screen modal (second example)"
    },
    SEARCH: { route: "DESIGN_SYSTEM_SEARCHBAR", title: "Search" },
    FOOTER_WITH_BUTTON_EMPTY: {
      route: "DESIGN_SYSTEM_FOOTER_WITH_BUTTON_EMPTY",
      title: "Footer with button (Empty state)"
    },
    FOOTER_WITH_BUTTON: {
      route: "DESIGN_SYSTEM_FOOTER_WITH_BUTTON",
      title: "Footer with button"
    },
    GRADIENT_SCROLLVIEW: {
      route: "DESIGN_SYSTEM_GRADIENT_SCROLLVIEW",
      title: "Gradient ScrollView"
    }
  },
  SANDBOX: {
    SANDBOX_SCREEN: {
      route: "DESIGN_SYSYEM_SANDBOX",
      title: "Sandbox"
    }
  }
} as const;

export default APP_ROUTES;
