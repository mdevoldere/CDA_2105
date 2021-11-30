const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const router = express.Router(); 
const app = express();


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:10000',
    optionsSuccessStatus: 200
}));

var json = require(__dirname + '/movies.json');

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

// console.log(database);



/* app.get('/', function(req, res) {
//     res.setHeader('Content-Type', 'application/json; charset=utf-8');
//     res.setHeader('X-toto', 'salut les copains');
//     res.end(JSON.stringify(json));
// });*/

//npm install nodemon -g 
//nodemon app.js pour lancer l'app

app.get('/movies', (req, res) => {
    res.json(json)
})

app.get('/movies/:id', (req, res) => {
    //recupérer la partie variable 
    let id = req.params.id
    //trouver le premier resultat pour un film avec cet id 
    let movie = json.data.find(m => m.movie_id == id)
    //renvoyer le resultat en json 
    res.json(movie)
})

app.post('/subjects', (req, res) => {
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


app.listen(80);

