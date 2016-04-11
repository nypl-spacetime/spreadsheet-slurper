# spreadsheet-slurper

Reads data from a __public__ and __published__ Google Spreadsheet. To be used in Space/Time Directory ETL modules.

## Usage

Stand-alone CLI tool:

    npm install -g nypl-spacetime/spreadsheet-slurper

    node cli.js 1yiIaR24sJnhOO_QOJA-4KggcBhTNPGWp8atkkiveKTU

As a Node.js module

```js
const slurper = require('./')
// const slurper = require('spreadsheet-slurper')
const spreadsheetKey = '1yiIaR24sJnhOO_QOJA-4KggcBhTNPGWp8atkkiveKTU'

// slurper.slurp returns a Highland stream
var stream = slurper.slurp(spreadsheetKey)

// Each row is an object in the stream -
// The HTTP URI prefix (e.g. https://spreadsheets.google.com/feeds/list/<key>)
// is stripped from each row ID
stream.each(console.log)
```
