const childComponent = {
    emits: ['my-custom-event'],
    props: {
        firstname: String
    },
    methods: {
        childEvent(event) {
            this.$emit('my-custom-event', event);
        }
    },
    template: `<p @click="childEvent">{{ firstname }}</p>`
}

const parentComponent = {
    data() {
        return {
            firstLetter: ''
        }
    },
    components: {
        'child': childComponent
    },
    methods: {
        parentEvent(event) {
            console.log(event);
            this.firstLetter = 'A';
        }
    },
    template: `<div><h2>{{ firstLetter }}</h2>
        <child @my-custom-event="parentEvent" firstname="Olivier"></child>
    </div>`
}


const myApp = {
    components: {
        'parent': parentComponent
    },
    data() {
        return {
            name: "Mike",
        }
    }
}


Vue.createApp(myApp).mount('#toto');