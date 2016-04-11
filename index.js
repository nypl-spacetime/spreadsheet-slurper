var H = require('highland')
var R = require('ramda')
var GoogleSpreadsheet = require('google-spreadsheet')

const WORKSHEET_ID = 1

module.exports.slurp = (spreadsheetKey) => {
  const doc = new GoogleSpreadsheet(spreadsheetKey)
  const getRows = H.wrapCallback(doc.getRows)

  return getRows(WORKSHEET_ID, {})
    .flatten()
    .map(R.omit(['save', 'del', '_xml', '_links']))
    .map((row) => {
      row.id = row.id
        .replace(`https://spreadsheets.google.com/feeds/list/${spreadsheetKey}/`, '')
        .replace('/', '-')

      return row
    })
}
