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
            return data;
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
            const data = await JSON.stringify(user);
            localStorage.setItem('user', data);
            return user;
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
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }

    }

    // async logout() {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: this.auth.authHeader(),
    //         body: JSON.stringify({ email, password })
    //     };
    //     try {
    //         localStorage.removeItem('user');
    //         const res = await fetch(`${this.config.apiUrl}/users/me/logout`, requestOptions)
    //         localStorage.setItem('user', JSON.stringify(user));
    //     } catch (error) {
    //         return error;
    //     }
    //     // remove user from local storage to log user out
    // }

    async register(user) {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type" :"application/json"},
            body: JSON.stringify(user)
        };
        try {
            let res = await fetch(`${this.config.apiUrl}/users`, requestOptions);
            res = await res.json();
            return res;
        } catch (error) {
            return error;
        }
    }

}
