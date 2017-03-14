const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  entry: "aurelia-bootstrapper",
  resolve: {
    modules: ["src", "node_modules"]
  },
  module: {
    rules: [
      { test: /\.html$/, loaders: "html-loader" }
    ]
  },
  plugins: [
    new AureliaPlugin()
  ]
};