const APP_ROUTES = {
  MAIN: "DESIGN_SYSTEM_MAIN",
  FOUNDATION: {
    COLOR: { route: "DESIGN_SYSTEM_COLOR", title: "Colors" },
    TYPOGRAPHY: { route: "DESIGN_SYSTEM_TYPOGRAPHY", title: "Typography" },
    LAYOUT: { route: "DESIGN_SYSTEM_LAYOUT", title: "Layout" },
    ICONS: { route: "DESIGN_SYSTEM_ICONS", title: "Icons" },
    PICTOGRAMS: { route: "DESIGN_SYSTEM_PICTOGRAMS", title: "Pictograms" },
    LOGOS: { route: "DESIGN_SYSTEM_LOGOS", title: "Logos" },
    LOADERS: { route: "DESIGN_SYSTEM_LOADERS", title: "Loader" }
  },
  COMPONENTS: {
    BUTTONS: { route: "DESIGN_SYSTEM_BUTTONS", title: "Buttons" },
    LIST_ITEMS: { route: "DESIGN_SYSTEM_LIST_ITEMS", title: "List Items" },
    MODULES: { route: "DESIGN_SYSTEM_MODULES", title: "Modules" },
    BADGE: { route: "DESIGN_SYSTEM_BADGE", title: "Badges & Tags" },
    SELECTION: { route: "DESIGN_SYSTEM_SELECTION", title: "Selection" },
    ACCORDION: { route: "DESIGN_SYSTEM_ACCORDION", title: "Accordion" },
    ALERT: { route: "DESIGN_SYSTEM_ALERT", title: "Alert" },
    ADVICE: { route: "DESIGN_SYSTEM_ADVICE", title: "Advice & Banners" },
    TEXT_INPUT: { route: "DESIGN_SYSTEM_TEXT_INPUT", title: "Text Inputs" },
    TAB_NAVIGATION: {
      route: "DESIGN_SYSTEM_TAB_NAVIGATION",
      title: "Tab Navigation"
    },
    HEADER_FIRST_LEVEL: {
      route: "DESIGN_SYSTEM_HEADER_FIRST_LEVEL",
      title: "Header First Level"
    },
    HEADER_SECOND_LEVEL: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL",
      title: "Header Second Level"
    },
    HEADER_SECOND_LEVEL_STATIC: {
      route: "DESIGN_SYSTEM_HEADER_SECOND_LEVEL_STATIC",
      title: "Header Second Level Static"
    },
    TOASTS: {
      route: "DESIGN_SYSTEM_TOASTS",
      title: "Toasts"
    },
    FOOTER_WITH_BUTTON: {
      route: "DESIGN_SYSTEM_FOOTER_WITH_BUTTON",
      title: "Footer with button"
    }
  },
  SCREENS: {
    FULL_SCREEN_MODAL: {
      route: "DESIGN_SYSTEM_FULLSCR_MODAL",
      title: "Full screen modal"
    },
    SEARCH: { route: "DESIGN_SYSTEM_SEARCHBAR", title: "Search" }
  },
  SANDBOX: {
    SANDBOX_SCREEN: {
      route: "DESIGN_SYSYEM_SANDBOX",
      title: "Sandbox"
    }
  }
} as const;

export default APP_ROUTES;
