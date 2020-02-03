import Auth from './auth.service'
export default class Users {
    constructor() {
        this.auth = new Auth();
        this.config = {apiUrl : "http://localhost:3888"}; 
    }

    async getUsers() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: this.auth.authHeader()
            };
            const response = await fetch(`${this.config.apiUrl}/users`, requestOptions);
            const data = await response.json();
            if(data.ok){
                return data.data;
            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type" :"application/json"},
            body: JSON.stringify({ email, password })
        };
        try {
            const res = await fetch(`${this.config.apiUrl}/users/login`, requestOptions);
            const user = await res.json();
            if(user.ok){
                const data = await JSON.stringify(user.data);
                localStorage.setItem('user', data);
                return user.data;
            }else{
                return null;
            }
        } catch (error) {
            return error;
        }
    }

    async getCurrentUser() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: this.auth.authHeader()
            };
            const response = await fetch(`${this.config.apiUrl}/users/me`, requestOptions);
            const data = await response.json();
            if(data.ok){
                return data.data;
            }else{
                return null;
            }
        } catch (error) {
            console.log(error);
            return error;
        }

    }

    async register(user) {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type" :"application/json"},
            body: JSON.stringify(user)
        };
        try {
            let res = await fetch(`${this.config.apiUrl}/users`, requestOptions);
            res = await res.json();
            if(res.ok){
                const data = await JSON.stringify(res.data);
                localStorage.setItem('user', data);
                return res.data;
            }else{
                return null;
            }
        } catch (error) {
            return error;
        }
    }

}
