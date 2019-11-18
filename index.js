var api = require('./api');

var cachedData = null;

exports.triangleData = (req, res) => {
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
                res.json(data)
            }
            
        })
        
    }
    
}