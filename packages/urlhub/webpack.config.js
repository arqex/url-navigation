var Path = require('path');

module.exports = {
  entry: {
    urlhub: "./urlhub.js", 
    pushStrategy: "./pushStrategy.js",
    hashStrategy: "./hashStrategy.js", 
    nodeStrategy: "./nodeStrategy.js"
  },
  output: {
    path: Path.join( __dirname, 'dist' ),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
