const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

//location of all static files such as "index.html"
var files = path.normalize("./dist");

//setup
//app is able to get static files such as CSS files
app.use('/', express.static(files));


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// app.use('/', indexRouter);
app.use('/pages', express.static('./pages/'));

module.exports = app;