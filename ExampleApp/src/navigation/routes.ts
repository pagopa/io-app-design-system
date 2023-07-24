const APP_ROUTES = {
  MAIN: "DESIGN_SYSTEM_MAIN",
  FOUNDATION: {
    COLOR: { route: "DESIGN_SYSTEM_COLOR", title: "Colors" },
    TYPOGRAPHY: { route: "DESIGN_SYSTEM_TYPOGRAPHY", title: "Typography" },
    LAYOUT: { route: "DESIGN_SYSTEM_LAYOUT", title: "Layout" },
    ICONS: { route: "DESIGN_SYSTEM_ICONS", title: "Icons" },
    PICTOGRAMS: { route: "DESIGN_SYSTEM_PICTOGRAMS", title: "Pictograms" },
    LOGOS: { route: "DESIGN_SYSTEM_LOGOS", title: "Logos" }
  },
  COMPONENTS: {
    BUTTONS: { route: "DESIGN_SYSTEM_BUTTONS", title: "Buttons" },
    LIST_ITEMS: { route: "DESIGN_SYSTEM_LIST_ITEMS", title: "List Items" },
    BADGE: { route: "DESIGN_SYSTEM_BADGE", title: "Badges & Tags" },
    SELECTION: { route: "DESIGN_SYSTEM_SELECTION", title: "Selection" },
    ACCORDION: { route: "DESIGN_SYSTEM_ACCORDION", title: "Accordion" },
    ALERT: { route: "DESIGN_SYSTEM_ALERT", title: "Alert" },
    ADVICE: { route: "DESIGN_SYSTEM_ADVICE", title: "Advice & Banners" }
  }
} as const;

export default APP_ROUTES;
