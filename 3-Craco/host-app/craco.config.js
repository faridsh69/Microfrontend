const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;

const mfConfig = {
  name: "cracoHostApp",
  remotes: {
    cracoRemoteApp: "cracoRemoteApp@http://localhost:3003/remoteEntry.js",
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
  devServer: {
    port: 3030,
  },
};
