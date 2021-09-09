// test-webpack/webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const YzzWebpackTestPlugin = require("yzz-webpack-test-plugin"); // 引入线上版本插件
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
    // 邮件发送参数参见https://nodemailer.com/about/
    new YzzWebpackTestPlugin({
      fromEmail: "xx@qq.com", // 发送方邮箱
      password: "xxx", // 如果是QQ邮箱，则为QQ邮箱授权码
      toEmail: "xx@163.com", // 接收方邮箱
      host: "smtp.qq.com"
    })
  ],
  // stats: 'errors-only'
};
