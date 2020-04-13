const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(txt|svg)$/,
        use: ['raw-loader']
      },
      /*{
        test: '/\.svg$/',
        use: ['file-loader']
      }*/
    ]
  },
  plugins: [],
  mode: 'development'
}
