const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// To extract css file and save a file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 9000
  },
  mode: "none",
  /*
   * loader  ( to manage not JS file)
    module : {
      rules: {
        test: 'file name to read',
        use: [
          {
            loader: 'loader name to use',
            options: {  }
          }
        ]
      }
    }
  */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // Read public/index.html
      filename: 'index.html' // printed output is index.html
    }),
    new MiniCssExtractPlugin({
      filename: 'style-test.css'
    }),
    new CleanWebpackPlugin()
  ]
};