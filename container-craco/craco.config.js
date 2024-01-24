const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;

const mfConfig = {
  name: "container",
  remotes: {
    timetracking: "timetracking@http://localhost:4008/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.output.publicPath = "auto";

          webpackConfig.plugins = [
            ...webpackConfig.plugins,
            new ModuleFederationPlugin(mfConfig),
          ];
          return webpackConfig;
        },
      },
    },
  ],
};
