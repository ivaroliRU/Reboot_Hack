const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const subscriptionRouter = require('./routes/subscription');

const app = express();

//location of all static files such as "index.html"
var files = path.normalize("./public");

// location of error page
var errorFiles = path.normalize("./dist");


//setup
//app is able to get static files such as CSS files
app.use('/', express.static(files));


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* indexRouter references routes/index
    in that file we have all of the router.get
    for all HTML sites.
*/
app.use('/', indexRouter);
app.use('/api/subscriptions', subscriptionRouter);

// error page attempts
app.use(function(req, res, next) {
    res.status(404).sendFile('error.html', {root: errorFiles});
});


module.exports = app;