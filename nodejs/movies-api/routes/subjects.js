// import express from 'express';
const express = require('express');
const Subject = require('../models/Subject');
const SubjectManager = require('../db/SubjectManager');

const router = express.Router();

// Instantiation of the data access object for subject 
// It will be accessible in all routes bellow 
const manager = new SubjectManager();

// Example of a non blocking middleware 
router.use(function(req, res, next) {
    console.log('SUBJECT ROUTES');
    next();
});

// This route will handle all GET requests on /subjects  and will console 'subjects GET'
router.get('/', function(req, res) {
    console.log('subjects GET')
});

// This route will handle all POST requests on /subjects 
router.post('/', (req, res) => {

    /** Catégorie à ajouter (récupérée depuis le corps de la requête POST) */
    /* We retrieve the name of the new subject from the request body 
    then we instantiate a new subject object */  
    let newSubject = new Subject({subject_name: req.body.subject})

    // Check that the new subject is valid before trying to insert it in the database
    if(newSubject.isValid()) {

        // We call the insert method from the SubjectManager which is our DAO for subject
        manager.insert(newSubject)
            .then(newSubject => {
                // the promise was resolve and we return the subject object formated in json to the client
                res.json(newSubject);
            })
            .catch(err => {
                // the promise is rejected and we return the error
                res.json({"error": err})
            });
        
    }
   
})


module.exports = router;
