const myApp = {
    data() {
        return {
            modalActive: false,
        }
    },
    methods: {
        showModal(event) {
            if(event.target.id !== 'stop') {
                this.modalActive = !this.modalActive
            } else {
                event.stopPropagation();
            }
        },
        stopPropagation() {

        }

    }
}

const myVueApp = Vue.createApp(myApp);

myVueApp.mount('#app');