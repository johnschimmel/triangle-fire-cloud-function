var request = require('request');

module.exports = function (cb) {
  var id = '1nxXH1zQ77WaP1npsoSpUcMurJxVBfiTzf11dRvX3NvU', 
    //url = 'https://spreadsheets.google.com/feeds/list/' + id + '/' + sheet + '/public/values?alt=json';
    url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values/${process.env.SHEET_TAB_NAME}/?alt=json&key=${process.env.SHEETS_API_KEY}`;
    //console.log('fetching', url);
 
    const data = require('./data.json');
    cb(null, data);

  // const data = require('./olddata.json');
  // var responseObj = {};
  // var rows = [];
  //   var columns = {};
  //   if (data && data.feed && data.feed.entry) {
  //     for (var i = 0; i < data.feed.entry.length; i++) {
  //       var entry = data.feed.entry[i];
  //       var keys = Object.keys(entry);
  //       var newRow = {};
  //       var queried = false;
  //       for (var j = 0; j < keys.length; j++) {
  //         var gsxCheck = keys[j].indexOf('gsx$');
  //         if (gsxCheck > -1) {
  //           var key = keys[j];
  //           var name = key.substring(4);
  //           var content = entry[key];
  //           var value = content.$t;
  //           if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
  //             queried = true;
  //           }
  //           if (useIntegers === true && !isNaN(value)) {
  //             value = Number(value);
  //           }
  //           newRow[name] = value;
  //           if (queried === true) {
  //             if (!columns.hasOwnProperty(name)) {
  //               columns[name] = [];
  //               columns[name].push(value);
  //             } else {
  //               columns[name].push(value);
  //             }
  //           }
  //         }
  //       }
  //       if (queried === true) {
  //         rows.push(newRow);
  //       }
  //     }
  //     if (showColumns === true) {
  //       responseObj['columns'] = columns;
  //     }
  //     if (showRows === true) {
  //       responseObj['rows'] = rows;
  //     }
  //     cb(null, responseObj);
  //   } else {
  //     cb(error,null);
  //   }
};



 
 
  // request(url, function (error, response, body) {
  //   if (!error && response.statusCode === 200) {
  //     var data = JSON.parse(response.body);
  //     console.log('got data', data.feed.updated);
  //     var responseObj = {};
  //     var rows = [];
  //     var columns = {};
  //     if (data && data.feed && data.feed.entry) {
  //       for (var i = 0; i < data.feed.entry.length; i++) {
  //         var entry = data.feed.entry[i];
  //         var keys = Object.keys(entry);
  //         var newRow = {};
  //         var queried = false;
  //         for (var j = 0; j < keys.length; j++) {
  //           var gsxCheck = keys[j].indexOf('gsx$');
  //           if (gsxCheck > -1) {
  //             var key = keys[j];
  //             var name = key.substring(4);
  //             var content = entry[key];
  //             var value = content.$t;
  //             if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
  //               queried = true;
  //             }
  //             if (useIntegers === true && !isNaN(value)) {
  //               value = Number(value);
  //             }
  //             newRow[name] = value;
  //             if (queried === true) {
  //               if (!columns.hasOwnProperty(name)) {
  //                 columns[name] = [];
  //                 columns[name].push(value);
  //               } else {
  //                 columns[name].push(value);
  //               }
  //             }
  //           }
  //         }
  //         if (queried === true) {
  //           rows.push(newRow);
  //         }
  //       }
  //       if (showColumns === true) {
  //         responseObj['columns'] = columns;
  //       }
  //       if (showRows === true) {
  //         responseObj['rows'] = rows;
  //       }
  //       cb(null, responseObj);
  //     } else {
  //       cb(error,null);
  //     }
  //   }
  // });
//};