class AuthenticationService {

    loginSucceed(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogin() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false
        return true
    }

}

export default new AuthenticationService()