import React, { Component } from 'react'
import TodoService from '../../api/todo/TodoService'
import AuthenticationService from './AuthenticationService'

export default class ListTodosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }

        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>completed</th>
                                <th>estimated date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.completed.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoService.getAllTodos(username)
            .then(
                response => this.setState({
                    todos: response.data
                })
            )

    }
}
