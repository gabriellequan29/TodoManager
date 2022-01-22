import axios from 'axios'

class TodoService {

    getAllTodos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    deleteTodo(username, id) {
        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
    }


}

export default new TodoService()