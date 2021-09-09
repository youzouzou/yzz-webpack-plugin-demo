// test-webpack/webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const YzzWebpackTestPlugin = require(path.resolve("../yzz-webpack-test-plugin")); // 这里用的是本地的相对路径引入

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack~",
    }),
    new YzzWebpackTestPlugin()
  ],
  // stats: 'errors-only'
};
