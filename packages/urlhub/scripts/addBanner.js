let p = require('../package.json')
let banner = `/* ${p.name} ${p.version} by ${p.author.name}. ${p.license} licensed. ${p.repository.url} */\n`;
let fs = require('fs')
let Path = require('path')

let filePath = Path.join( __dirname, '../dist/urlhub.js');
let contents = fs.readFileSync( filePath )
if( contents.slice(0, banner.length) !== banner ){
  contents = banner + contents;
}

fs.writeFileSync(filePath, contents)

