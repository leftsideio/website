const path = require("path")
const webpack = require("webpack")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/app.jsx"],
  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/
      },
      { loader: "file-loader", test: /\.(jpe?g|png|gif)$/ },
      { loader: "svg-sprite-loader", test: /\.svg$/ }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    publicPath: "/dist",
    proxy: [
      {
        context: [],
        target: "http://[::1]:3000",
        secure: false
      }
    ]
  }
}
