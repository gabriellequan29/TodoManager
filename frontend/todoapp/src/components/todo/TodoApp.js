import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
            <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />}/>
                        <Route path="/login" element={<LoginComponent />}/>
                        <Route path="/welcome/:name" element={<WelcomeComponent />}/>

                        <Route path="*" element={<ErrorComponent />}/>
                    </Routes>
            </Router>
            </div>  
        )
    }
}

export default TodoApp