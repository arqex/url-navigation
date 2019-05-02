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
          options: {
            "presets": [
              "@babel/react",
              ["@babel/env", {"targets": {"browsers": [ "last 2 versions" ] }} ]
            ],             
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ]
            /*
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
            */
          }
        }
      }
    ]
  }
}
