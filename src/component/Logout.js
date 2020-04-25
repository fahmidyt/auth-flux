import React, { Component } from 'react';
import LoginAction from '../actions/LoginAction';
import AuthenticatedComponent from './AuthenticatedComponent';

export default AuthenticatedComponent(
	class Logout extends Component {
		// This will be called when the user clicks on the logout button
		logout() {
			// Here, we call an LoginAction to logout the user.
			LoginAction.logout(this.props.user.remember);
		}

		render() {
			return (
				<div>
					<h5>Are you sure want to logout?</h5>
					<button onClick={this.logout.bind(this)}>Logout</button>
				</div>
			);
		}
	}
);
