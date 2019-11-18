var api = require('./api');

var cachedData = null;

var handleCors = (res) => {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
}

var handleData = (res) => {
    if (cachedData != null) {
        res.json(cachedData);
    } else {
        // fetch fresh data
        api((err, data) => {
            if (err) {
                console.error('oops')
                console.error(err);
            } else {
                cachedData = data;
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

