const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    //需要npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env(babel预设的环境)
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  mode: "development"
}
