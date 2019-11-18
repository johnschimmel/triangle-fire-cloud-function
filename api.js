var request = require('request');

module.exports = function (cb) {
  var id = '1nxXH1zQ77WaP1npsoSpUcMurJxVBfiTzf11dRvX3NvU', 
    sheet = 1,
    query = '',
    useIntegers = true,
    showRows = true,
    showColumns = false,
    url = 'https://spreadsheets.google.com/feeds/list/' + id + '/' + sheet + '/public/values?alt=json';

  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(response.body);
      var responseObj = {};
      var rows = [];
      var columns = {};
      if (data && data.feed && data.feed.entry) {
        for (var i = 0; i < data.feed.entry.length; i++) {
          var entry = data.feed.entry[i];
          var keys = Object.keys(entry);
          var newRow = {};
          var queried = false;
          for (var j = 0; j < keys.length; j++) {
            var gsxCheck = keys[j].indexOf('gsx$');
            if (gsxCheck > -1) {
              var key = keys[j];
              var name = key.substring(4);
              var content = entry[key];
              var value = content.$t;
              if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                queried = true;
              }
              if (useIntegers === true && !isNaN(value)) {
                value = Number(value);
              }
              newRow[name] = value;
              if (queried === true) {
                if (!columns.hasOwnProperty(name)) {
                  columns[name] = [];
                  columns[name].push(value);
                } else {
                  columns[name].push(value);
                }
              }
            }
          }
          if (queried === true) {
            rows.push(newRow);
          }
        }
        if (showColumns === true) {
          responseObj['columns'] = columns;
        }
        if (showRows === true) {
          responseObj['rows'] = rows;
        }
        cb(null, responseObj);
      } else {
        cb(error,null);
      }
    }
  });
};
