const express = require('express');
const applicationService = require('../services/applicationService');
var router = express.Router();
const path = require('path');
var files = path.normalize("./dist");

router.use(express.static('/dist'));

//post request to create a new subscription 
router.post("/apply", (req, res) => {  
    var info = req.body;
    console.log(req.body);
    
    applicationService.Apply(info, function(status){
        return res.status(status).end();
    });
});

//post request to create a new subscription 
router.get("/confirm/:ParticipantID", (req, res) => {  
    var id = req.params.ParticipantID;

    applicationService.CheckId(id, function(status){
        return res.status(200).sendFile("confirmation.html", {root: files});
    }, function(){
        return res.status(404).sendFile("error.html", {root: files});
    });
});

module.exports = router;