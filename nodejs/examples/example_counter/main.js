const appData = {
    data() {
        return {
            product: 'Cafetière Nespresso',
            price: 150,
            tax: 20.6 
        }
    },

    computed: {
        fullprice() {
            return (this.price + (this.price * this.tax / 100));
        }
    }
}

const myApp = Vue.createApp(appData);

myApp.mount('#app');