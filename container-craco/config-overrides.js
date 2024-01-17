const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = function override(config, env) {
  const microservicePlugin = new ModuleFederationPlugin({
    name: "MicroService",
    remotes: {
      TIME_APP: "TIME_APP@http://localhost:9001/remoteEntry.js",
    },
  });

  config.plugins.push(microservicePlugin);

  return config;
};
