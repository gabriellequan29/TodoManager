import axios from 'axios'
import { API_URL, API_JPA_URL } from '../../components/todo/Constants'

class TodoService {

    getAllTodos(username) {
        return axios.get(`${API_JPA_URL}/users/${username}/todos`)
    }

    getTodo(username, id) {
        return axios.get(`${API_JPA_URL}/users/${username}/todos/${id}`)
    }

    updateTodo(username, id, todo) {
        return axios.put(`${API_JPA_URL}/users/${username}/todos/${id}`, todo)
    }

    createTodo(username, todo) {
        return axios.post(`${API_JPA_URL}/users/${username}/todos`, todo)
    }

    deleteTodo(username, id) {
        return axios.delete(`${API_JPA_URL}/users/${username}/todos/${id}`)
    }


}

export default new TodoService()