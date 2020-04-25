import React, { Component } from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import { Link } from 'react-router-dom';

export default AuthenticatedComponent(
	class Dashboard extends Component {
		render() {
			return (
				<div>
					<h1>Hello {this.props.user.username}!</h1>
					<Link to="/logout">Logout</Link>
				</div>
			);
		}
	}
);
