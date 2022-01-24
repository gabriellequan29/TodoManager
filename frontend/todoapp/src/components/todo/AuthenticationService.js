import axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    loginSucceed(username, password) {
        // let username = 'gaby'
        // let password = 'hello123'

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
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

    createBasicAuthToken(username, password) {
        console.log(username)
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                console.log(token)
                if (this.isUserLogin()) {
                    config.headers.authorization = token
                    console.log(token)
                }
                console.log(config)
                return config
            }
        )
    }

}

export default new AuthenticationService()