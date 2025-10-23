/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-var-requires */
// "rnpm" is deprecated and support for it will be removed in next major version of the CLI.
// Migration guide https://github.com/react-native-community/cli/blob/master/docs/configuration.md
const path = require('path');
const pak = require('../package.json');

module.exports = {
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
  },
  assets: [
    "./assets/fonts/TitilliumSansPro",
    "./assets/fonts/Titillio",
    "./assets/fonts/FiraCode"
  ]
};
