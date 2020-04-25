import { Component } from 'react';
import when from 'when';
import request from 'reqwest';
import LoginAction from '../actions/LoginAction';

export class AuthService extends Component {

    login(username, password, remember = false) {
        // We call the server to log the user in.
        return when(request({
            url: "http://localhost:8000/login/",
            method: "POST",
            crossOrigin: true,
            type: "json",
            data: {
                username, password
            }
        }))
        // Successfully login and got the token
        .then(function(response) {
            // add boolean remember me!
            response.remember = remember;
            // LoginAction will manage the response.
            LoginAction.login(response);
        })
    }
}

export default new AuthService()
