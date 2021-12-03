const mysql = require('mysql');
const config = require('./conf');

/**
 * Crée l'objet qui permettra la connexion à la base de données
 * @var mysql.Connection database
 */ 
 const dbConnection = mysql.createPool(config);

 dbConnection.getConnection((err, connection) => {
     if(err) {
         
     }
 } )
 // const database = mysql.createConnection(config);

module.exports = dbConnection;