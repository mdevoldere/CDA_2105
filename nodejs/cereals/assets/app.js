import { DbCereals } from "./dbCereals.js";

var cerealsApp = {
    data() {
        return {
            db: new DbCereals('/cereals.json'),
        }
    },

    computed: {

    },

    mounted() {
        this.db.loadData().then(data => {
            console.log(data);
        })
    },

    methods: {
        findByName(event) {

        },

        findByCategory(event) {

        }, 

        findByNutriscore(event) {

        },

        deleteById(event) {

        }
    }
}


Vue.createApp(cerealsApp).mount('#app');