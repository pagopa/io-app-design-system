# Screen templates

The library provides some screen templates that you can use to build your own screen component. These templates do not provide any specific UI guideline to build your screens, but they provide some basic features to help the development of your screen components.

This is a list of the available screen templates:
* `GradientScrollView`: A template component which wraps up a ScrollView with a sticky footer and a gradient background.
  * [Docs](/docs/foundation-templates-gradientscrollview--docs)
* `ForceScrollDownView`: A template component which wraps up a ScrollView with a button to force the scroll down.
  * [Docs](/docs/foundation-templates-forcescrolldownview--docs)

Aside from these templates, the library also provides three different variant of Header components that you can integrate in the project:
* `HeaderFirstLevel`: This header is mainly projected to be used as the header of the home page section of the app.
  * [Docs](/docs/foundation-templates-headerfirstlevel--docs)
* `HeaderSecondLevel`: This header is mainly projected to be used as the header of the inner pages on the app navigation structure.
  * [Docs](/docs/foundation-templates-headersecondlevel--docs)
* `ModalBSHeader`: This header is mainly projected to be used as the header of Modals and Bottom Sheets where the title should be placed in the left corner of the element and the close button is stuck to the right.
  * [Docs](/docs/foundation-templates-modalbsheader--docs)

These headers have been developed to properly work alongside [react-navigation](https://github.com/react-navigation/react-navigation), to be integrated in the project they will be used as navigation header.

The adoption of these headers has been documented in a specific documentation page (just for internal usage) [here](https://pagopa.atlassian.net/wiki/spaces/IP/pages/805634170/Come+integrare+l+header+nelle+pagine+di+secondo+livello).