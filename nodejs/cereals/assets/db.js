class Db 
{
    constructor(_url) 
    {
        this.url = _url;
        this.data = [];
        this.options = {
            headers: {
                'accept': 'application/json',
            }
        }
    }

    loadData() 
    {
        return fetch(this.url, this.options)
        .then(response => response.json())
        //.then(response => { let a = response.json() } )
        .then(json => {
            this.data = json.data;
            return this.data;
        })
        .catch(e => {
            console.error("Fetch error: " + e);
            console.error(`Fetch error: ${e}`);
        });
    }
}

export { Db }