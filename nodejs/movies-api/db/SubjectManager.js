const Subject = require('../models/Subject');
const connection = require('./connection');

class SubjectManager 
{
    constructor() {
        this.pool = connection;
    }

    insert(_newSubject) {
        this.pool.getConnection((err, connection) => {
            connection.query("SQL", [parameters], function(err, results) {
                
            })
        })
    }

    update() {

    }

    delete() {

    }

    select(_id) {

    }

    selectAll() {

    }

    search(_filter) {

    }
    
}