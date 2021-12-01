const subject_sample = {
    subject_name: 'Comedy'
};

class Subject 
{ 
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

    isValid() {

    }

}


module.exports = Subject;