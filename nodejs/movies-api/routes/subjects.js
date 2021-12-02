// import express from 'express';
const express = require('express');
const Subject = require('../models/Subject');
const SubjectManager = require('../db/SubjectManager');

const router = express.Router();

const manager = new SubjectManager();


router.use(function(req, res, next) {
    console.log('SUBJECT ROUTES');
    next();
});


router.get('/', function(req, res) {
    console.log('subjects GET')
});

router.post('/', (req, res) => {

    /** Catégorie à ajouter (récupérée depuis le corps de la requête POST) */
    let newSubject = new Subject({subject_name: req.body.subject})

    if(newSubject.isValid()) {
        console.log(newSubject);

        manager.insert(newSubject).then(newSubject => {
            console.log(newSubject);
            res.json(newSubject);
        }).catch(err => {
            res.json({"error": err})
        });
        
    }
   
})


module.exports = router;
