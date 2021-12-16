
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
            //console.log(data); 
        }); 
    },

    methods: {

        applyFilters() {
            this.db.filterCereals(this.searchInput, this.categorySelect, this.nutriCheckbox)
            .then(result => {
                this.cereals = result;
            });
        },

        sortBy(event) { 
            let column = event.target.dataset.col;
            this.cereals.sort((a, b) => a[column] - b[column]);
        },

        findByName(event) { 
            this.searchInput = event.target.value;
            //this.cereals = this.db.filterCereals(this.searchInput, this.categorySelect, this.nutriCheckbox);
            this.applyFilters();
            
        },

        findByCategory(event) {
            let options = event.target.options;

            this.categorySelect = options[event.target.selectedIndex].value;
            this.applyFilters();
            
        }, 

        findByNutriscore(event) {
            let val = event.target.value;
            let checked = event.target.checked;

            if(checked) {
                this.nutriCheckbox.push(val);
            } else {
                this.nutriCheckbox = this.nutriCheckbox.filter(elem => val != elem);
            }

            this.applyFilters();
        },

        deleteById(event) {

        }
    }
}


Vue.createApp(cerealsApp).mount('#app');