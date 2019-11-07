const express = require('express');
const applicationService = require('../services/applicationService');
var router = express.Router();

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
        return res.status(200).send("Thank you for confirming");
    }, function(){
        return res.status(404).send("404 :(, soooo sad");
    });
});

module.exports = router;