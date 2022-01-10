import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class TodoApp extends Component {
    render() {

        return (
            <div className="TodoApp">
            <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<LoginComponent />}/>
                        <Route path="/login" element={<LoginComponent />}/>
                        <Route path="/logout" element={<LogoutComponent />}/>
                        <Route path="/welcome/:name" element={<WelcomeComponent />}/>
                        <Route path="/todos" element={<ListTodosComponent />}/>
                        <Route path="*" element={<ErrorComponent />}/>
                    </Routes>
                    <Footer />
            </Router>
            </div>  
        )
    }
}

export default TodoApp