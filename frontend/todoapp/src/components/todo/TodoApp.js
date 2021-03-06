import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import TodoComponent from './TodoComponent'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {

        return (
            <div className="TodoApp">
            <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<LoginComponent />}/>
                        <Route path="/login" element={<LoginComponent />}/>
                        <Route path="/logout" element={<AuthenticatedRoute />}>
                            <Route path="/logout" element={<LogoutComponent />}/>
                        </Route>
                        <Route path="/welcome/:name" element={<AuthenticatedRoute />}>
                            <Route path="/welcome/:name" element={<WelcomeComponent />}/>
                        </Route>
                        <Route path="/todos" element={<AuthenticatedRoute />}>
                            <Route path="/todos" element={<ListTodosComponent />}/> 
                        </Route>
                        <Route path="/todos/:id" element={<AuthenticatedRoute />}>
                            <Route path="/todos/:id" element={<TodoComponent />}/> 
                        </Route>
                        
                        <Route path="*" element={<ErrorComponent />}/>
                    </Routes>
                    <Footer />
            </Router>
            </div>  
        )
    }
}

export default TodoApp