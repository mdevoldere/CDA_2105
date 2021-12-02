const Subject = require('../models/Subject');
const connection = require('./connection');

class SubjectManager 
{

    constructor() {
        this.pool = connection;
        //console.log(this.pool);
    }

    insert(_newSubject) {
        
        return new Promise((resolve, reject) => {

            if(!(_newSubject instanceof Subject)) {
                reject('SubjectManager(insert) : input is not a Subject !!!');
            }

            this.pool.query(
                "INSERT INTO subjects (subject_name) VALUES (?)", 
                [_newSubject.subject_name], 
                function(err, results) {
                    if(err) {
                        reject('error inserting new subject');
                    }
    
                    if(results.affectedRows != 1) {
                        reject('subject was not inserted');
                    }
    
                    _newSubject.subject_id = results.insertId;
    
                   resolve(_newSubject);
            })
        });

        


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

module.exports = SubjectManager;