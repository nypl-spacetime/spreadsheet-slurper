#!/usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))

var slurper = require('./')

if (!argv._[0]) {
  console.error('Usage: spreadsheet-slurper [-o file] spreadsheetKey\n' +
    '  -o    output file - if not present, spreadsheet-slurper uses stdout')

  process.exit(1)
}

var spreadsheetKey = argv._[0]

slurper.slurp(spreadsheetKey)
  .map(JSON.stringify)
  .intersperse('\n')
  .append('\n')
  .pipe(argv.o ? fs.createWriteStream(argv.o) : process.stdout)
