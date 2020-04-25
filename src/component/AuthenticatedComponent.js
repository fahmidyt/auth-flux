import React from 'react';
import LoginStores from '../stores/LoginStores';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends React.Component {
		constructor() {
			super();
            this.state = {
                userLoggedIn: LoginStores.isLoggedIn(),
				token: LoginStores.token,
				user: LoginStores.user,
            };

            this._getLoginState = this._getLoginState.bind(this);
		}

		_getLoginState() {
			const state = {
				userLoggedIn: LoginStores.isLoggedIn(),
				token: LoginStores.token,
				user: LoginStores.user,
            };
            this.setState(state)   
		}

        // Here, we’re subscribing to changes in the LoginStore we created before.
		componentDidMount() {
			LoginStores.addChangeListener(this._onChange.bind(this));
		}

		_onChange() {
			this.setState(this._getLoginState);
		}

        // After any change, we update the component’s state so that it’s rendered again.
		componentWillUnmount() {
			LoginStores.removeChangeListener(this._onChange.bind(this));
		}

		render() {
			return (
				<ComposedComponent
					{...this.props}
					user={this.state.user}
					token={this.state.token}
					userLoggedIn={this.state.userLoggedIn}
				/>
			);
		}
	};
};
