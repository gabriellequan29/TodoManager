import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {

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
                <div className="container">
                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.isSuccess && <div>Login Successful</div> }
                   User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                   Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
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
            AuthenticationService.loginSucceed(this.state.username, this.state.password)
            this.setState({ isSuccess: true })
            this.setState({ isLoginFailed: false })
            this.props.navigate(`/welcome/${this.state.username}`);
        } else {
            this.setState({ isSuccess: false })
            this.setState({ isLoginFailed: true })
        }
    }

}

function LoginComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginComponent {...props} navigate={navigate} />
}
 
export default LoginComponentWithNavigate;
