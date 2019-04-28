var Path = require('path');

console.log('WEBPAAAAAAAAAAACK')

module.exports = {
  entry: "./urlstack.js",
  output: {
    path: Path.join( __dirname, 'build' ),
    filename: 'urlstack.js',
    library: 'urlstack',
    libraryTarget: 'umd'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          presets: ['bili/babel']
        }
      }
    ]
  }
}
