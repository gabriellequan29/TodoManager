import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from './AuthenticationService'

export default class AuthenticatedRoute extends Component {
    render() {

        if (AuthenticationService.isUserLogin()) {
            return <Outlet />
        } else {
            return <Navigate to="/login" />
        }

    }
}
