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
    BUTTONS_LEGACY: {
      route: "DESIGN_SYSTEM_BUTTONS_LEGACY",
      title: "Buttons (legacy)"
    },
    LIST_ITEMS: { route: "DESIGN_SYSTEM_LIST_ITEMS", title: "List Items" },
    MODULES: { route: "DESIGN_SYSTEM_MODULES", title: "Modules" },
    BADGE: { route: "DESIGN_SYSTEM_BADGE", title: "Badges & Tags" },
    SELECTION: { route: "DESIGN_SYSTEM_SELECTION", title: "Selection" },
    COLLAPSIBLE: { route: "DESIGN_SYSTEM_COLLAPSIBLE", title: "Collapsible" },
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
    HEADER_SECOND_LEVEL_DISCRETE_TRANSITION: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_DISCRETE_TRANSITION",
      title: "Header Second Level (Discrete transition, default)"
    },
    HEADER_SECOND_LEVEL_DISCRETE_TRANSITION_CUSTOM_BG: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_DISCRETE_TRANSITION_CUSTOM_BG",
      title: "Header Second Level (Discrete transition, custom background)"
    },
    HEADER_SECOND_LEVEL_CUSTOM_BG: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_CUSTOM_BG",
      title: "Header Second Level (Custom Background)"
    },
    HEADER_SECOND_LEVEL_STATIC: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_STATIC",
      title: "Header Second Level (Static)"
    },
    HEADER_SECOND_LEVEL_STEPPER: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_STEPPER",
      title: "Header Second Level (Stepper)"
    },
    TOASTS: {
      route: "DESIGN_SYSTEM_TOASTS",
      title: "Toasts"
    },
    TOOLTIPS: {
      route: "DESIGN_SYSTEM_TOOLTIPS",
      title: "Tooltips"
    },
    SKELETON: {
      route: "DESIGN_SYSTEM_SKELETON",
      title: "Skeleton"
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
    FOOTER_ACTIONS: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS",
      title: "Footer actions"
    },
    FOOTER_ACTIONS_STICKY: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS_STICKY",
      title: "Footer actions (sticky)"
    },
    FOOTER_ACTIONS_NOT_FIXED: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS_NOT_FIXED",
      title: "Footer actions (not fixed)"
    },
    FOOTER_ACTIONS_EMPTY_STATE: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS_EMPTY_STATE",
      title: "Footer actions (Empty state)"
    },
    FOOTER_ACTIONS_INLINE: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS_INLINE",
      title: "Footer actions (inline)"
    },
    FOOTER_ACTIONS_INLINE_NOT_FIXED: {
      route: "DESIGN_SYSTEM_FOOTER_ACTIONS_INLINE_NOT_FIXED",
      title: "Footer actions (inline, not fixed)"
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
