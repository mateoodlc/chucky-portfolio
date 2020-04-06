const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin(
        {
            filename: './public/index.html'
        }
  )],
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
}