var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index",
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/",
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader'],
        exclude: '/node-modules/'
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};