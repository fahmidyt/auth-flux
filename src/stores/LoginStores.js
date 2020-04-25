import BaseStore from './BaseStores';
import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AuthConstant';

class LoginStore extends BaseStore {
	constructor() {
		super();

		this._dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
		this._token = null;
		this._user = null;
	}

	_registerToActions(payload) {
		switch (payload.action) {
			case Constants.LOGIN_USER:
				// We get the token from the action and save it locally.
				this._token = payload.data.token;
				// Then we get all data to get the user information.
				this._user = payload.data;
				// And we emit a change to all components that are listening.
				// This method is implemented in the `BaseStore`.
				this.emitChange();
				break;

			case Constants.LOGOUT_USER:
				// We remove the token to prevent user still log in.
				this._token = null;
				// We also remove the user data to prevent user still log in.
				this._user = null;
				// And we emit a change to all components that are listening.
				// This method is implemented in the `BaseStore`.
				this.emitChange();
				break;

			default:
				break;
		}
	}

	get user() {
		return this._user;
	}

	get token() {
		return this._token;
	}

	isLoggedIn() {
		return !!this._user;
	}
}

export default new LoginStore();
