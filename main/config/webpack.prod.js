const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Main App',
      description: 'Main App',
      template: path.resolve(__dirname, '..', 'public', 'index.html')
    }),
    new ModuleFederationPlugin({
      name: 'main',
      filename: 'remoteEntry.js',
      remotes: {
        header: 'header@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
};
