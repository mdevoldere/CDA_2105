import { Db } from "./db.js";


const moviesApp = {
    data() {
        return {
            title: "Mes films",
            db: new Db('http://localhost/movies'),
            page: "all"
        };
    },

    mounted() {
        this.db.loadData();
    },

    methods: {
        tabClick(event) {
            console.log(event.target);
            this.page = event.target.dataset.tab;
        }
    }
};

Vue.createApp(moviesApp).mount('#app');
