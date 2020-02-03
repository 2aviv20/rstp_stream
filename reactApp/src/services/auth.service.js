export default class Auth{
    
    constructor(){

    }

    authHeader() {
        // return authorization header with jwt token
        let user = JSON.parse(localStorage.getItem('user'));
        
        if (user && user.token) {
            return { 'Authorization': 'Bearer ' + user.token };
        } else {
            return {};
        }
    }

    isLoggedIn() {
        // return authorization header with jwt token
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return true;
        } else {
            return false;
        }
    }

    userEmail() {
        // return authorization header with jwt token
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return user.email;
        } else {
            return {};
        }
    }
}