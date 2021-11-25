import { Db } from './db.js';

/**
 * DbMovies represents a collection of movies
 */
class DbMovies extends Db 
{
    /**
     * Constructor
     * @param {String} _url the url to fetch 
     */
    constructor(_url) {
        super(_url);
        //this.loadData();
    }

    /**
     * Get all categories from movie collection
     * @returns {Array} All categories
     */
    getCategories() {

        let cats = [];

        for(let movie of this.data) {
            if(!cats.includes(movie.movie_subject)) {
                cats.push(movie.movie_subject);
            }
        }

        return cats.filter(Boolean);
        /*this.data.forEach((movie) => {});*/
    }

    /**
     * Get all years covered by movies 
     * @returns {Array} All years covered by movies 
     */
    getYears() {
        let years = [];

        this.data.forEach((movie) => {
            years.push(movie.movie_year);
        });

        return [...new Set(years)].sort().reverse();
    }

    /**
     * Get all referenced actors/actress
     * returns {Array} 
     */
    getActors() {

    }

    /**
     * Get movies by actor/actress
     * @param {String} _actor The actor to search
     * @returns {Array} The filtered collection
     */
    getMoviesByActor(_actor) {

    }

    /**
     * Get movies filtered by category
     * @param {String} _category the category to find
     * @returns {Array} The filtered collection
     */
    getMoviesByCategory(_category) {
        return this.data.filter(movie => movie.movie_subject === _category);
    }

    /**
     * Get movies by year
     * @param {Number} _year 
     * @returns {Array} The filtered collection 
     */
    getMoviesByYear(_year) {
        _year = parseInt(_year); 
        return this.data.filter(movie => movie.movie_year === _year);
    } 

    /** 
     * Get all movies sorted by year
     * @returns All movies sorted by year
     */
    getSortedMovies() {
        return this.data.sort((a, b) => a.movie_year - b.movie_year);
    } 

}

export { DbMovies, Db }