const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

config.module.rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    outputPath: 'assets/images',
    name: '[name].[ext]'
  },
})

module.exports = config
