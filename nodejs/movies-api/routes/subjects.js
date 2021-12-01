// import express from 'express';
const express = require('express');
const Subject = require('../models/Subject');


const router = express.Router();


router.use(function(req, res, next) {
    console.log('SUBJECT ROUTES');
    next();
});


router.get('/', function(req, res) {
    console.log('subjects GET')
});

router.post('/', (req, res) => {
    // console.log('BODY=' + req.body);
    // res.json(req.body);

    /** Catégorie à ajouter (récupérée depuis le corps de la requête POST) */
    let newSubject = req.body.subject;

    newSubject = new Subject({subject_name: req.body.subject})

    if(newSubject.isValid()) {

    }
    
    /** connexion à la base de données */
    database.connect((err) => {
        if(err) {
            res.json({error: "Erreur de connexion (serveur non lancé ou inaccessible)"}); 
        }
        /** requêtage  */
        database.query(
            "INSERT INTO subjects (subject_name) VALUES (?);", [newSubject], (err, results) => {
                // fermer la connexion dès que possible pour libérer la ressource
                //database.end();

                if(err) {
                    res.json({error: "Erreur de requête (plantage sql ou erreur de syntaxe)"})
                }

                if(results.affectedRows < 1) {
                    res.json({error: "Ligne non insérée (cause trigger; ou autre erreur non 'critique')"})
                } 

                // arrivé à ce point, tout s'est bien déroulé
                // on renvoie le nouvel objet inséré

                res.json({
                    subject_id: results.insertId,
                    subject_name: newSubject
                });

                console.log(results)
        })
    });
    
})


module.exports = router;
