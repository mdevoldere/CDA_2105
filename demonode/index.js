//importer express
const express = require('express'); 
const movies = require(`${__dirname}/movies.json`); 
const app = express(); 

// app.use((req, res, next) => {
//     console.log('Hello world');
//     next();
// });


app.get('/movies', function (req, res) {
    // res.setHeader('Content-Type', 'application/json;charset=utf-8'); 
    // res.end(JSON.stringify(movies));
    res.json(movies); 
})

app.get('/movies/:id', (req, res) => {
    let id = req.params.id; 
    res.json(movies.data.find(m => m.movie_id == id))
})

app.get('/movies/sub/:sub', (req, res) => {
    let sub = req.params.sub; 
    res.json(movies.data.filter(m => m.movie_subject == sub))
})

app.listen(80); 