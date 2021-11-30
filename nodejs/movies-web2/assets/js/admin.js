const appAdmin = {

    methods: {
        addCategory(e) {
            // e.preventDefault(); // annule le comportement par défaut de l'évènement
            //console.log(e.target.subject.value);
            //console.log(document.forms.addCatForm.subject.value);

            let data = {
                subject: e.target.subject.value
            }

            console.log(data);

            fetch('http://localhost/subjects', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(response => {
                return response.json();
            }).then(json => {
                console.log(json);
            }).catch(err => {

            });
        }
    }

};

Vue.createApp(appAdmin).mount('#app');