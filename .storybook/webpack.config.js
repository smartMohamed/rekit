const path = require('path')
const srcPath = path.resolve(__dirname, '../src')
module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?resolve url',
        include: [srcPath]
      },
    ]
  },
  resolve: {
    alias: {
      '@': srcPath
    }
  }
}

