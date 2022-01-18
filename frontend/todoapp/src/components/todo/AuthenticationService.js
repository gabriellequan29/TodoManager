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

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return ''
        return user
    }

}

export default new AuthenticationService()