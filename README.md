# google-spreadsheets

Reads data from a __public__ and __published__ Google Spreadsheet. To be used in Space/Time Directory ETL modules.

Run it:

    node index.js

Save it:

    node index.js > cemeteries.ndjson

Make GeoJSON:

    node index.js | pits-to-geojson | jq
