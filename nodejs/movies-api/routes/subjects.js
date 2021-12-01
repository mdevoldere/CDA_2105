// import express from 'express';
const express = require('express');
const mysql = require('mysql');

/**
 * Crée l'objet qui permettra la connexion à la base de données
 * @var mysql.Connection database
 */
 const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_movies', // nom de la base de données
    // port: 3306
});

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
    
    /** connexion à la base de données */
    database.connect((err) => {
        if(err) {
            res.json({error: "Erreur de connexion (serveur non lancé ou inaccessible)"}); 
        }
        /** requêtage  */
        database.query(
            "INSERT INTO subjects (subject_name) VALUES (?);", [newSubject], (err, results) => {
                // fermer la connexion dès que possible pour libérer la ressource
                database.end();

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
