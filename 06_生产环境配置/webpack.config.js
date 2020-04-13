const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//将css文件单独提取到一个文件中而不是通过js生成style标签插入head中
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
          //这里不是使用style-loader而是使用MiniCssExtractPlugin.loader
          MiniCssExtractPlugin.loader,
          'css-loader',

        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    //压缩js代码的插件
    new UglifyJsPlugin(),
    //压缩html代码
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      minify: {
        //将空格取消
        collapseWhitespace: true,
        //移除注释
        removeComments: true,
        //移除多余的属性
        removeRedundantAttributes: true
      }
    }),
    //将css文件单独提取到一个文件中而不是通过js生成style标签插入head中
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  mode: "development"
}
