import axios from 'axios'

class TodoService {

    getAllTodos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }
}

export default new TodoService()