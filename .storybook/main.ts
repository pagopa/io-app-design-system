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
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "react-native-reanimated",
          "rn-placeholder",
          "react-native-linear-gradient"
        ],
        projectRoot: "../",
        // modulesToAlias: {
        //   "react-native": "react-native-web"
        // },
        babelPlugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin"
        ]
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: [
    "../example/assets/css",
    "../example/assets/fonts/TitilliumWeb",
    "../example/assets/fonts/TitilliumSansPro",
    "../example/assets/fonts/ReadexPro",
    "../example/assets/fonts/DMMono",
    "../repo-assets",
    "../stories/assets"
  ],
  docs: {
    autodocs: "tag"
  },
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
            ]
          }
        }
      ]
    });

    config.resolve!.extensions!.push(".ts", ".tsx");
    config.resolve!.alias = {
      "react-native$": "react-native-web",
      "react-native-linear-gradient$": "react-native-web-linear-gradient"
    };
    config.module!.rules!.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });

    config.resolve!.extensions!.push(".mjs");

    return config;
  }
};
export default config;
