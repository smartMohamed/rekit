const path = require('path')
const srcPath = path.resolve(__dirname, '../src')
const demoPath = path.resolve(__dirname, '../demo')

module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?resolve url',
        include: [srcPath, demoPath]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|svg)(\?.*)?$/,
         include: [srcPath],
         loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': srcPath,
      '@demo': demoPath
    }
  }
}

