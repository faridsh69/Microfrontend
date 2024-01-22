const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = function override(config, env) {
  const microservicePlugin = new ModuleFederationPlugin({
    name: "container",
    remotes: {
      timetracking: "timetracking@http://localhost:4008/remoteEntry.js",
    },
  });

  config.plugins.push(microservicePlugin);

  return config;
};
