import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "react-native-reanimated",
          "rn-placeholder",
          "react-native-linear-gradient",
          "react-native",
          "react-native-web",
          "react-native-svg",
          "react-native-gesture-handler",
          "react-native-safe-area-context",
          "react-native-haptic-feedback"
        ],
        projectRoot: "../",
        babelPlugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin"
        ]
      }
    },
    "@storybook/addon-webpack5-compiler-babel"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: [
    "../example/assets/css",
    "../example/assets/fonts/TitilliumSansPro",
    "../example/assets/fonts/Titillio",
    "../example/assets/fonts/DMMono",
    "../repo-assets",
    "../stories/assets"
  ],

  docs: {},

  core: {
    builder: "@storybook/builder-webpack5"
  },

  webpackFinal: config => {
    config.module!.rules!.push({
      test: /\.(tsx|ts|js)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              require("@babel/preset-typescript").default,
              [
                require("@babel/preset-react").default,
                { runtime: "automatic" }
              ],
              require("@babel/preset-env").default
            ],
            plugins: [
              "@babel/plugin-proposal-export-namespace-from",
              "react-native-reanimated/plugin"
            ]
          }
        }
      ]
    });

    config.resolve!.extensions!.push(".ts", ".tsx", ".js", ".jsx", ".json");
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "react-native$": "react-native-web",
      "react-native-linear-gradient$": "react-native-web-linear-gradient",
      "react-native-svg": "react-native-svg-web",
      "@react-native-community/masked-view": "react-native-web",
      "react-native-gesture-handler": "react-native-web",
      "react-native-safe-area-context": "react-native-web",
      "react-native-haptic-feedback": "react-native-web"
    };

    config.module!.rules!.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });

    config.resolve!.extensions!.push(".mjs");

    return config;
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
