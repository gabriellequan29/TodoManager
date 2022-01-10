import React, { Component } from 'react'

export default class ListTodosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {id:1, description: "todo_1", completed: false, targetDate: new Date()},
                {id:2, description: "todo_2", completed: false, targetDate: new Date()},
                {id:3, description: "todo_3", completed: true, targetDate: new Date()},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>completed</th>
                            <th>estimated date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.completed.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
