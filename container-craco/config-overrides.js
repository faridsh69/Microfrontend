const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = function override(config, env) {
  const microservicePlugin = new ModuleFederationPlugin({
    name: "container",
    remotes: {
      timetracking: "timetracking@http://localhost:4008/remoteEntry.js",
    },

    // shared: {
    //   ...deps,
    //   react: {
    //     singleton: true,
    //     import: "react",
    //     shareScope: "default",
    //     requiredVersion: deps["react"],
    //   },
    //   "react-dom": {
    //     singleton: true,
    //     requiredVersion: deps["react-dom"],
    //   },
    // },

    // shared: {
    //   ...deps,
    //   react: {
    //     singleton: true,
    //     eager: true,
    //     requiredVersion: deps["react"],
    //   },
    //   "react-dom/client": {
    //     singleton: true,
    //     eager: true,
    //     import: "react-dom/client",
    //     requiredVersion: deps["react-dom"],
    //   },
    //   "react-dom": {
    //     singleton: true,
    //     eager: true,
    //     requiredVersion: deps["react-dom"],
    //   },
    // },
  });

  config.plugins.push(microservicePlugin);

  return config;
};
