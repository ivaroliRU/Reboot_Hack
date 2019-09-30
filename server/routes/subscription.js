const express = require('express');
const subscriptionService = require('../services/subscriptionService');
var router = express.Router();

//get request on all subscriptions
router.get("/", (req, res) => {
    subscriptionService.GetAllSubscriptions(function(db_res){
        res.status(200).json(db_res);
    })
});

//post request to create a new subscription 
router.post("/", (req, res) => {    
    if(req.body.email == undefined){
        console.log('hallohallo', req.body.email);
        res.status(400).end();
    }

    var email = req.body.email;
    subscriptionService.AddSubscription(email, function(){
        res.status(201).end();
    });
});

module.exports = router;