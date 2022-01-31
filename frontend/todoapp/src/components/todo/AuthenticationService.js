import axios from "axios";
import { API_URL, API_JPA_URL } from "./Constants";

export const USER_NAME_SESSION_STORAGE_KEY = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    executejwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`,
            { username, password })
    }

    loginSucceed(username, password) {
        // let username = 'gaby'
        // let password = 'hello123'

        sessionStorage.setItem(USER_NAME_SESSION_STORAGE_KEY, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    loginSucceedForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_STORAGE_KEY, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_STORAGE_KEY);
    }

    isUserLogin() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_STORAGE_KEY);
        if (user === null) return false
        return true
    }


    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_STORAGE_KEY);
        if (user === null) return ''
        return user
    }

    createBasicAuthToken(username, password) {
        // console.log(username)
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogin()) {
                    config.headers.authorization = token
                }
                // console.log(config)
                return config
            }
        )
    }

}

export default new AuthenticationService()