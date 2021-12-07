const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: [...["./src/js/index.js"], "./src/css/styles.scss"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js"
  },
  mode: "production",
  // only watch if we are in development mode
  watch: process.env.NODE_ENV === "production" ? false : true,
  module: {
    rules: [
      {
        // copy and minimize HTML files
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    })
  ]
}
