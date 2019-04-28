// This file is intended to be required inside of the packages
// so their own webpack configuration can read it
let Path = require('path');

const transpileModules = [
  'react-native-vector-icons'
]

const packages = [
  'react-urlstack-playground'
]

let transpilePaths = packages.map( p => (
  Path.join( __dirname, '../..', p, 'src' )
))
transpileModules.forEach( module => {
  transpilePaths.push(
    Path.join( __dirname, '../../../node_modules', module )
  )
  packages.forEach( package => {
    transpilePaths.push(
      Path.join( __dirname, '../..', package, 'node_modules', module )
    )
  })
})

module.exports = transpilePaths;