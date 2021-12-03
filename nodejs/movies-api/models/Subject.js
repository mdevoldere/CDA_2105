const subject_sample = {
    subject_name: 'Comedy'
};

/**
 * Model for subject 
 */
class Subject 
{
    // take _subject parameter which is an literal object and build a new subject object from it 
    constructor(_subject) {
        /*if(_subject.subject_id !== undefined) {
            this.subject_id = _subject.subject_id;
        } else {
            this.subject_id = 0;
        }
        this.subject_id = (_subject.subject_id !== undefined) ? _subject.subject_id : 0; */

        // si subject_id est null ou undefined on prend la valeur après les '??'
        // sinon on prend la valeur de subject_id


        this.subject_id = _subject.subject_id ?? 0;

        this.subject_name = _subject.subject_name ?? '';
    }

    // function that we will call before inserting the new subject in the database
    isValid() {
        return true;
    }

}


module.exports = Subject;