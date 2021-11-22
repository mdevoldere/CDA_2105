import { Db } from './db.js';

class DbMovies extends Db 
{
    constructor(_url) {
        super(_url);
        //this.loadData();
    }

    getCategories() {

        let cats = [];

        for(let movie of this.data) {
            if(!cats.includes(movie.movie_subject)) {
                cats.push(movie.movie_subject);
            }
        }

        return cats.filter(Boolean);

        /*this.data.forEach((movie) => {

        });*/
    }

    getMoviesByCategory(_category) {
        return this.data.filter(movie => movie.movie_subject === _category);
    }
}

export { DbMovies, Db }