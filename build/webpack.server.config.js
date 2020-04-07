const path = require('path')
const webpack = require('webpack')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals');
const base = require('./webpack.base.config')


const config = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/server-entry.js'),
  target: 'node',
  devtool: 'source.map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2'
  },
  externals : nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new MiniCssExtractPlugin('server/styles.css'),
    new VueSSRServerPlugin()
  ]
})

module.exports = config
