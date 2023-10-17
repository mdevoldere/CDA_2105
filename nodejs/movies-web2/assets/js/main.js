import { DbMovies } from "./dbMovies.js";
import { movieComponent } from "./components/movie.js";

/**
 * Application VueJS :
 * components = composants d'interface (voir le répertoire "components"
 * data() = les attributs de notre application VueJS (accessibles via this.)
 * mounted() = code exécuté lorsque l'application a été initialisée et prête
 * computed : contient les accesseurs vers des données calculées
 * methods: contient les méthodes qui gèrent les évènements d'interface
 */
const moviesApp = {
    components: {
        'movie': movieComponent // cf components/movie.js
    },

    data() {
        return {
            title: "Mes films",
            db: new DbMovies('./movies.json'), // cf DbMovies.js
            page: "all", 
            cat: "",
            year: "",
            results: [],
            currentPage: 1,
        };
    },

    mounted() {
        this.db.loadData(); // chargement des données de la couche DAO
    },

    computed: {
        categories() {
            return this.db.getCategories();
        }, 
        moviesByCat() {
            return this.db.getMoviesByCategory(this.cat); 
        },
        years() {
            return this.db.getYears();
        },
        moviesByYear() {
            return this.db.getMoviesByYear(this.year);
        },
        actors() {
            return this.db.getActors();
        },
        moviesByActor(_actor) {

        },
        totalPages() {
            return Math.ceil(this.db.data.length / 16);
        },
        moviesPerPage() {
            let from;

            if(this.currentPage > 1) {
                from = ((this.currentPage-1)*16);
            } else {
                from = 0;
            }
            return this.db.data.slice(from, from+16);
        }
    },

    methods: {
        tabClick(event) {
            //console.log(event.target.dataset);
            this.page = event.target.dataset.tab;
        },

        catSelect(event) {
            let options = event.target.options;
            let val = options[options.selectedIndex];
            this.cat = val.value;
        },

        yearClick(event) {
            this.year = event.target.innerText;
        },

        searchInput(event) { 
            let val = event.target.value; // attribut "value" de l'input search

            if(val.length < 1 || val.length > 2) {
                this.results = this.db.getMoviesByActor(val);
                //console.log(val, results);
            }
        },

        changePageClick(event) {
            this.currentPage = parseInt(event.target.innerText);
        }
    }
};

// Création de l'application Vue et montage de celle-ci sur l'élément identifié #app (id="app")
Vue.createApp(moviesApp).mount('#app');
