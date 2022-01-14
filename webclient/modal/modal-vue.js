const myApp = {
    data() {
        return {
            modalActive: false,
        }
    },
    methods: {
        showModal(event) {
            console.log(event);
            event.stopPropagation();
            if(event.target.dataset.id !== 'stop') {
                this.modalActive = !this.modalActive
            }
        }
    }
}

const myVueApp = Vue.createApp(myApp);

myVueApp.mount('#app');