const express = require('express');
const fs = require('fs');
var router = express.Router();

//get request on the index page
router.get("/", (req, res) => {
    console.log('HALLO');
    //send the index file of the root "./builds"
    res.status(200).sendfile("index.html", {root: files});
});

router.get("/about", (req, res) => {
    console.log('HER ER EG');
    //send the about file of the root "./builds"
    res.status(200).sendfile("about.html", {root: files});
});

module.exports = router