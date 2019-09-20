db = require('../data/db');

db.connect();

function GetAllSubscriptions(callback){
    const sql = 'SELECT * FROM subscriptions;';

    db.query(sql, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            callback(res.rows);
        }
    });
}

function AddSubscription(subscription, callback){
    const sql = 'INSERT INTO subscriptions(name) VALUES($1);';

    db.query(sql, [subscription], (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log("Inserted subscription: " + res.rows[0]);
            callback();
        }
    });
}