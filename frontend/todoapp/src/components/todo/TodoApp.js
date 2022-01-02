import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
            <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />}/>
                        <Route path="/login" element={<LoginComponent />}/>
                        <Route path="/welcome" element={<WelcomeComponent />}/>
                    </Routes>
            </Router>
            </div>  
        )
    }
}

export default TodoApp