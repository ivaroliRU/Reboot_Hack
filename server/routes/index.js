const express = require('express');
const fs = require('fs');
var router = express.Router();

//get request on the index page
router.get("/", (req, res) => {
    //send the index file of the root "./builds"
    res.status(200).sendfile("index.html", {root: files});
});

module.exports = router