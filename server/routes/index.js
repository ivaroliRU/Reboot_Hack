const express = require('express');
const fs = require('fs');
const path = require('path');
const subscriptionService = require('../services/subscriptionService');
var files = path.normalize("./dist");
var router = express.Router();

//get request on the index page
router.get("/", (req, res) => {
    //send the index file of the root "./builds"
    res.status(200).sendFile("index.html", {root: files});
});

//get request on the about page
router.get("/about", (req, res) => {
    //send the about file of the root "./builds"
    res.status(200).sendFile("about.html", {root: files});
});

//get request on the faq page
router.get("/faq", (req, res) => {
    //send the faq file of the root "./builds"
    res.status(200).sendFile("faq.html", {root: files});
});

//get request on the reboot team page
router.get("/team", (req, res) => {
    //send the team file of the root "./builds"
    res.status(200).sendFile("team.html", {root: files});
});

//get request on the board of advisors page
router.get("/board", (req, res) => {
    //send the team file of the root "./builds"
    res.status(200).sendFile("board.html", {root: files});
});


//get request on the sponsor page
router.get("/sponsors", (req, res) => {
    //send the team file of the root "./builds"
    res.status(200).sendFile("sponsors.html", {root: files});
});


//get request on the event page
router.get("/event", (req, res) => {
    //send the event file of the root "./builds"
    res.status(200).sendFile("event.html", {root: files});
});

//get request on the conduct page
router.get("/conduct", (req, res) => {
    //send the conduct file of the root "./builds"
    res.status(200).sendFile("conduct.html", {root: files});
});

//get request on the conduct page
router.get("/code", (req, res) => {
    //send the conduct file of the root "./builds"
    res.status(200).sendFile("code.html", {root: files});
});

//get request on the involved_personnel page
router.get("/involvedPersonnel", (req, res) => {
    //send the involved_personnel file of the root "./builds"
    res.status(200).sendFile("involvedPersonnel.html", {root: files});
});


//get request on the confirmation page
/*
router.get("/confirmation", (req, res) => {
    //send the team file of the root "./builds"
    res.status(200).sendFile("confirmation.html", {root: files});
});
*/







// get request on the error page
/**
 * It's better to delete this route!
 * Was mainly here for testing
 * Else /error will be accessable url to visit
router.get("/error", (req, res) => {
    // send the error file of the root "./builds"
    res.status(200).sendFile("error.html", {root: files});
});
*/

//get request to all js files in the dist folder
router.get(/^\/([A-Za-z])+.js$/, (req, res) => {
    var file = req.path;
    //send the js file of the root "./builds"
    res.status(200).sendFile(file, {root: files});
});

module.exports = router