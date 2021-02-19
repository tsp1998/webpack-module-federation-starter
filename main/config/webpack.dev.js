const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: 'http://localhost:3000/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    index: 'index.html',
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'main',
      template: path.resolve(__dirname, '..', 'public', 'index.html')
    }),
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        header: 'header@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
};
