const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

// const moduleFederation = new ModuleFederationPlugin({
const mfConfig = {
  name: "timetracking",
  filename: "remoteEntry.js",
  exposes: {
    "./TimetrackingApp": "./src/bootstrap",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom/client": {
      singleton: true,
      import: "react-dom/client",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          // this public path should be modified for production depending on deployment configuration
          webpackConfig.output.publicPath = "auto";

          // Module Federation configuration is passed here
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
