// https://devoldere.net/api/cars_park 

import { Db } from './db.js';

const myDb = new Db("https://devoldere.net/api/cars_park");


myDb.loadData().then(result => { 
    console.warn(result); 
    return true;
}).then();

const parkingApp = {
    data() { return {} },
    created() { },
    mounted() { },
    computed() { },
    components: [],
    methods: { },
    template: ``
}


