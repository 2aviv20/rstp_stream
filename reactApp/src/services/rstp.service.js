import Auth from './auth.service'
export default class Rstp {
    constructor() {
        this.auth = new Auth();
        this.config = {apiUrl : "http://localhost:3888"}; 
    }

    async getUrlByEmail(email) {
        try {
            const requestOptions = {
                method: 'GET',
                headers: this.auth.authHeader()
            };
            const response = await fetch(`${this.config.apiUrl}/rstpUrls/${email}`, requestOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }

    async getUrlAll() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: this.auth.authHeader()
            };
            const response = await fetch(`${this.config.apiUrl}/rstpUrls`, requestOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }

    async addNewUrl(_url) {
        const requestOptions = {
            method: 'POST',
            headers: {...this.auth.authHeader(),"Content-Type" :"application/json"},
            body: JSON.stringify({url: _url})
        };
        try {
            let res = await fetch(`${this.config.apiUrl}/rstpUrls`, requestOptions);
            res = await res.json();
            return res;
        } catch (error) {
            return error;
        }
    }

}
