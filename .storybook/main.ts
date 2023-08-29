import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: ["react-native-reanimated"],
        projectRoot: '../',
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
  docs: {
    autodocs: "tag"
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    config.module!.rules!.push({
      test: /\.(tsx|ts|js)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              [require('@babel/preset-react').default, { runtime: 'automatic' }],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    })

    config.resolve!.extensions!.push('.ts', '.tsx')

    config.module!.rules!.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })

    config.resolve!.extensions!.push('.mjs')

    return config
  }
};
export default config;
