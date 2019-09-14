const express = require('express');
const fs = require('fs');
const path = require('path');
var files = path.normalize("./dist");
var router = express.Router();

//get request on the index page
router.get("/", (req, res) => {
    console.log('HALLO');
    //send the index file of the root "./builds"
    res.status(200).sendfile("index.html", {root: files});
});

//get request on the about page
router.get("/about", (req, res) => {
    //send the about file of the root "./builds"
    res.status(200).sendFile("about.html", {root: files});
});

//get request on the about page
router.get("/faq", (req, res) => {
    //send the about file of the root "./builds"
    res.status(200).sendFile("faq.html", {root: files});
});

module.exports = router