import React, { Component } from 'react'

export default class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'username',
            password: '',
            isSuccess: false,
            isLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

        

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                : event.target.value
            }
        )
    }

    loginClicked() {
        // gaby, hello123
        if(this.state.username==='gaby' && this.state.password==='hello123') {
            this.setState({ isSuccess: true })
            this.setState({ isLoginFailed: false })
        } else {
            this.setState({ isSuccess: false })
            this.setState({ isLoginFailed: true })
        }
    }
}
