const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//extract-text-webpack-plugin已经过时了 需要使用mini-css-extract-plugin
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: "build.js",
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    //压缩js代码的插件
    new UglifyJsPlugin(),
    //压缩html代码
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  mode: "development"
}
