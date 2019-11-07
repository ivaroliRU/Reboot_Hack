const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const subscriptionRouter = require('./routes/subscription');
const applicationRouter = require('./routes/application');

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
app.use('/api/applications', applicationRouter);

// routing for error page.
// All url that returns 404 should go to error.html
app.use(function(req, res, next) {
    res.status(404).sendFile('error.html', {root: errorFiles});
});


module.exports = app;