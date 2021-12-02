class Movie 
{
    constructor(_movie) {
        this.movie_id= parseInt(_movie.movie_id ?? 0);
        this.movie_year = parseInt(_movie.movie_year ?? 0);
        this.movie_length = _movie.movie_length ?? 0;
        this.movie_title = _movie.movie_title ?? "";
        this.movie_subject = _movie.movie_subject ?? "";
        this.movie_actor = _movie.movie_actor ?? "";
        this.movie_actress = _movie.movie_actress ?? "";
        this.movie_director = _movie.movie_director ?? "";
        this.movie_popularity = parseInt(_movie.movie_popularity ?? 0);
        this.movie_awards = _movie.movie_awards ?? "No";

    }

    isValid() {
        return this.movie_year > 0 && this.movie_length > 0;
    }
}


export { Movie }