// eslint-disable-next-line @typescript-eslint/no-var-requires
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// eslint-disable-next-line functional/immutable-data
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
