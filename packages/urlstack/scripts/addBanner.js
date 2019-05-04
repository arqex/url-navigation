let p = require('../package.json')
let banner = `/* ${p.name} ${p.version} by ${p.author}. ${p.license} licensed. ${p.repository.url} */\n`;
let fs = require('fs')
let Path = require('path')

let filePath = Path.join( __dirname, '../dist/urlstack.js');
let contents = fs.readFileSync( filePath )

contents = banner + contents;

fs.writeFileSync(filePath, contents)

