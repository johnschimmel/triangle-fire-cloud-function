# Cloud Function w/ [GSX2JSON](https://github.com/55sketch/gsx2json) - Google Spreadsheet to JSON API service.

## About

Cloud function to parse Google Sheet JSON into a more usable format. Based off of [GSX2JSON](https://github.com/55sketch/gsx2json) to make google sheets usable.

[Regular Google Sheet JSON when published](https://spreadsheets.google.com/feeds/cells/1nxXH1zQ77WaP1npsoSpUcMurJxVBfiTzf11dRvX3NvU/1/public/full?alt=json)

Meh, forget that...

Now, after cloud function cleans it up with GSX2JSON, https://us-central1-triangle-fire-data.cloudfunctions.net/triangleData

## Cloud function test locally

```npm run local-function```

### deploy

```gcloud functions deploy triangleData --runtime nodejs10 --trigger-http```


## Github Actions

Workflow will deploy cloud function on new published release.