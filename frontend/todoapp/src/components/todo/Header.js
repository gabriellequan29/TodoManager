import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class Header extends Component {

    render() {
        const isUserLogin = AuthenticationService.isUserLogin();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        {isUserLogin && <li><Link className="nav-link" to="/welcome/gaby">Home</Link></li>}
                        {isUserLogin && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogin && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLogin && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export const withRouter = (Component) => {
    const Wrapper = (props) => {
      const history = useNavigate();
      
      return (
        <Component
          history={history}
          {...props}
          />
      );
    };
    
    return Wrapper;
  };
 
 
export default withRouter(Header);