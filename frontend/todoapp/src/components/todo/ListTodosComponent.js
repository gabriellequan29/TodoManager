import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            message: null
        }

        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.completed.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className='btn btn-danger' onClick={() => this.updateTodo(todo.id)}>Edit</button></td>
                                            <td><button className='btn btn-danger' onClick={() => this.deleteTodo(todo.id)}>Remove</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                    </div>
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

    updateTodo(id) {
        this.props.navigate(`/todos/${id}`)
    }

    addTodo() {
        this.props.navigate(`/todos/-1`)
    }



    deleteTodo(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TodoService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message: `Todo with id ${id} was deleted`})
                    this.refreshTodos()
                }
            )
    }
}

function ListTodosComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <ListTodosComponent {...props} navigate={navigate} />
}

export default ListTodosComponentWithNavigate