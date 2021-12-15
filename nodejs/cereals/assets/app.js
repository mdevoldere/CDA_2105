import { DbCereals } from "./dbCereals.js";

var cerealsApp = {
    data() {
        return {
            db: new DbCereals('/cereals.json'),
            cereals: [],
            searchInput: "",
            categorySelect: "",
            nutriCheckbox: ["A", 'B', 'C', 'D', 'E'],
        }
    },

    computed: {

    },

    mounted() {
        this.db.loadData().then(data => {
            this.cereals = data;
            console.log(data);
        });
    },

    methods: {

        sortBy(event) {
            let column = event.target.dataset.col;
            this.cereals.sort((a, b) => a[column] - b[column]);
        },

        findByName(event) {
            this.searchInput = event.target.value;
            this.db.filter(this.searchInput, this.categorySelect, this.nutriCheckbox);
        },

        findByCategory(event) {

            this.db.filter(this.searchInput, this.categorySelect, this.nutriCheckbox);
        }, 

        findByNutriscore(event) {
            
            this.db.filter(this.searchInput, this.categorySelect, this.nutriCheckbox);
        },

        deleteById(event) {

        }
    }
}


Vue.createApp(cerealsApp).mount('#app');