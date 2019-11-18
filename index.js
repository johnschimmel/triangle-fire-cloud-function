var api = require('./api');

var cachedData = null;
var cachedExpire = new Date(0);
var millisecondsToLive = 120*1000;

var handleCors = (res) => {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
}

var handleData = (res) => {
    if (cachedData != null && (cachedExpire > new Date().getTime()) ) {
        console.log('from cache')
        res.json(cachedData);
    } else {
        // fetch fresh data
        api((err, data) => {
            if (err) {
                console.error('oops')
                console.error(err);
            } else {
                cachedData = data;
                cachedExpire = new Date().getTime() + millisecondsToLive;
                console.log('fresh!!!!')
                res.json(data);
            }  
        })     
    }
}

exports.triangleData = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        handleCors(res);
    } else {
        handleData(res);
    }
    
    
}

