class Fetcher 
{
    constructor() {
        this.data = [];
    }

    load() {

        return fetch('https://devoldere.net/api/data/planes.json', {})
        .then(response => {
            //console.log(response);
            return response.json();
        })
        .then(json => {
            //console.log(json);
            return json;
        })
        .catch(err => {

        });
    }
}

const myFetch = new Fetcher();

function execdata(data) {
    console.log('execData', data);
}


myFetch.load().then(execdata);

myFetch.load().then(data => {
    console.log('arrow', data);
});

myFetch.load().then(function(data) {
    console.log('func', data);
});
