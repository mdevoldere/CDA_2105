const Subject = require('../models/Subject');
const connection = require('./connection');

/**
 * DAO for subject 
 */
class SubjectManager 
{
    
    constructor() {
        // We rapatriate the data connection object  
        this.pool = connection;
    }

    // The insert method represent the "Create" operation of the CRUD (developer.mozilla.org/en-US/docs/Glossary/CRUD)
    insert(_newSubject) {
        

        // Creation of a new promise
        return new Promise((resolve, reject) => {

            // if _newSubject is not a intance of Subject then we throw an error that we will catch in the .catch()
            if(!(_newSubject instanceof Subject)) {
                reject('SubjectManager(insert) : input is not a Subject !!!');
            }

            // launch an asynchronous request to the database to insert the new subject 
            this.pool.query(
                "INSERT INTO subjects (subject_name) VALUES (?)", 
                [_newSubject.subject_name], 
                function(err, results) {

                    // the next two "if" are defensive (see defensive programming)

                    // if something fails during the request we throw that here
                    if(err) {
                        reject('error inserting new subject');
                    }
                    
                    // if the request did not fail but our new subject was not inserted we throw that here 
                    if(results.affectedRows != 1) {
                        reject('subject was not inserted');
                    }
                    
                    // the insert was successful, we retrieve the id of the newly inserted subject
                    _newSubject.subject_id = results.insertId;
                    
                    // the promise is resolve and we pass the new subject object 
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