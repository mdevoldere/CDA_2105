class Db 
{
    constructor(_url) { 
        this.url = _url; 
        this.data = [];
    }

    loadData() {
        return fetch(this.url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            this.data = json.data;
            return this.data;
        })
        .catch(error => {
            return "Fetch failed !";
        });
    }
}

export { Db }