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
            db: new DbMovies('http://localhost/movies'), // cf DbMovies.js
            page: "all", 
            cat: "",
            year: "",
            results: [],
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
        }
    }
};

// Création de l'application Vue et montage de celle-ci sur l'élément identifié #app (id="app")
Vue.createApp(moviesApp).mount('#app');
