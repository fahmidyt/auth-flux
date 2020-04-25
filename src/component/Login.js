import React, { Component } from 'react';
import Auth from '../services/AuthService';
export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}
	// This will be called when the user clicks on the login button
	login(e) {
		e.preventDefault();
		// Here, we call an external AuthService. We’ll create it in the next step
		Auth.login(this.state.username, this.state.password).catch(function(err) {
			console.log('Error logging in', err);
		});
	}

	render() {
		return (
			<div>
				<form>
					<input required onChange={ e => this.setState({username: e.target.value}) } type="text" name="username" placeholder="username" />
					<input required onChange={ e => this.setState({password: e.target.value}) } type="password" name="password" placeholder="password" />
                    <button type="submit" onClick={this.login.bind(this)}>Submit</button>
				</form>
			</div>
		);
	}
}
