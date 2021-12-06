import { Db } from './db.js';


class DbParking extends Db 
{

    findAll() {
        return this.data;
    }

    findByRegistration(_registration) {

        _registration = _registration.toLowerCase();

        return this.data.filter(
            (car) => car.registration.toLowerCase().includes(_registration)
        );

    }
}

export { DbParking }