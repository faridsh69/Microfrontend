const HtmlWebpackPlugin = require("html-webpack-plugin"); // rendering html
const { ModuleFederationPlugin } = require("@rspack/core").container; // main part of microfrontends

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3001, // port that this remote will be available to use in host
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "rspackRemoteApp", // you can rename it if you want
      filename: "remoteEntry.js", // 99% of the time it is named remoteEntry.js
      exposes: {
        "./RspackRemoteComponent": "./src/RspackRemoteComponent", // Address of components you want to export
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
