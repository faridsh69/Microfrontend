const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

const mfConfig = {
  name: 'timetracking',
  filename: 'remoteEntry.js',
  exposes: {
    './TimetrackingApp': './src/TimetrackingApp',
  },

  // shared: {
  //   ...deps,
  //   react: {
  //     singleton: true,
  //     requiredVersion: deps['react'],
  //   },
  //   'react-dom/client': {
  //     singleton: true,
  //     import: 'react-dom/client',
  //   },
  //   'react-dom': {
  //     singleton: true,
  //     requiredVersion: deps['react-dom'],
  //   },
  // },
}

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.output.publicPath = 'auto'

          webpackConfig.plugins = [...webpackConfig.plugins, new ModuleFederationPlugin(mfConfig)]
          return webpackConfig
        },
      },
    },
  ],
}
