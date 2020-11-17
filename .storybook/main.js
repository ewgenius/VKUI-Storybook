const path = require("path");
const webpackConfig = require("../../VKUI/webpack.config");

module.exports = {
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },

  stories: [
    "../../VKUI/src/**/*.stories.mdx",
    "../../VKUI/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    (config.module.rules = [
      config.module.rules[0],
      ...webpackConfig.module.rules,
      {
        test: /\.tsx?$/,
        // include: path.resolve(__dirname, "../../VKUI/src/components"),
        loader: "react-docgen-typescript-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: { parser: "typescript" },
          },
        ],
        enforce: "pre",
      },
    ]),
      (config.resolve.alias = {
        "@vkontakte/vkui": path.resolve(__dirname, "../../VKUI"),
      });

    config.resolve.modules = [
      path.resolve(__dirname, "../../VKUI/node_modules"),
      "node_modules",
    ];

    config.resolveLoader = {
      ...config.resolveLoader,
      ...webpackConfig.resolveLoader,
    };

    config.resolveLoader.modules = [
      path.resolve(__dirname, "../../VKUI/node_modules"),
      path.resolve(__dirname, "../node_modules"),
    ];

    return config;
  },
};
