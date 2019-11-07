db = require('../data/db');


module.exports.GetAllSubscriptions = function(callback){
    const sql = 'SELECT * FROM subscriptions;';

    db.query(sql, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            callback(res.rows);
        }
    });
}

module.exports.AddSubscription = function(subscription, callback){
    // console.log('pulsa', callback);
    //console.log();
    
    const sql = 'INSERT INTO subscriptions(email) VALUES($1);';

    db.query(sql, [subscription], (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log("Inserted subscription: " + res.rows[0]);
            callback();
        }
    });
}