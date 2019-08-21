const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/test.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // Read public/index.html
      filename: 'index.html' // printed output is index.html
    })
  ]
};