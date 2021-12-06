// https://devoldere.net/api/cars_park 

import { DbParking } from './dbparking.js';

const parkingApp = {
    data() { 
        return {
            title: "Vue du Parking",
            dbparking: new DbParking('https://devoldere.net/api/cars_park'),
            cars: [],
            carSearch: "",
        } 
    },

    created() { },

    mounted() {
        this.dbparking.loadData().then(result => { this.cars = result; })
    },

    computed() { },

    components: [],

    methods: {
        searchChange() {
            if(this.carSearch.length > 1){
                this.cars = this.dbparking.findByRegistration(this.carSearch);
            } else {
                this.cars = this.dbparking.findAll();
            }
            
        }
    },

    template: ``
}

const vueApp = Vue.createApp(parkingApp);

vueApp.mount('#app');