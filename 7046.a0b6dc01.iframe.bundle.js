(self.webpackChunk_pagopa_io_app_design_system=self.webpackChunk_pagopa_io_app_design_system||[]).push([[7046],{"./stories/utils.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.withTheme=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _core=__webpack_require__("./src/core/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.withTheme=function withTheme(StoryFn,context){var themeContext=context.globals.backgrounds&&"dark"===context.globals.backgrounds.value?_core.IOThemes.dark:_core.IOThemes.light;return(0,_jsxRuntime.jsx)(_core.IOThemeContext.Provider,{value:themeContext,children:(0,_jsxRuntime.jsx)(StoryFn,{})})}}}]);