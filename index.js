var H = require('highland')
var R = require('ramda')
var GoogleSpreadsheet = require('google-spreadsheet')
var parse = require('wellknown')

var sheet = require('./sheet.json')

var doc = new GoogleSpreadsheet(sheet.key)

var getRows = H.wrapCallback(doc.getRows)

var id = 0
getRows(1, {})
  .flatten()
  .map(R.pick(sheet.columns))
  .map((row) => {
    id += 1
    return {
      id: id,
      name: row.name,
      validSince: row.yearfrom,
      validUntil: row.yearto,
      data: {
        history: row.history,
        url: row.url,
        records: row.records
      },
      geometry: row.geometry ? parse(row.geometry) : parse(`POINT (${row.longitude} ${row.latitude})`)
    }
  })
  .map(JSON.stringify)
  .intersperse('\n')
  .append('\n')
  .pipe(process.stdout)
