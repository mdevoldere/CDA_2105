export class DbJson 
{
    /**
     * Constructor
     * @param {String} _url the JSON url (must be an https url)
     */
    constructor(_url) {
        this.url = _url;
    }

    /**
     * Load json from this.url (PROMISE VERSION)
     * usage : db.load().then(result => { // your stuff });
     * @returns {Promise} json data
     */
     load() {
        return fetch(this.url)
            .then(response => response.json())
            .then(json => json);
    }

    /**
     * Load json from this.url (ASYNC VERSION)
     * usage : let result = await db.load();
     * @returns {Promise} json data
     */
    async loadAsync() {
        let response = await fetch(this.url)
        let json = await response.json();
        return json;
    }
}
