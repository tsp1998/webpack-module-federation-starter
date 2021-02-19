const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: 'http://localhost:3001/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    index: 'index.html',
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'header',
      description: 'header',
      template: 'public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './bootstrap': './src/index.js',
      }
    })
  ]
};
