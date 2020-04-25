import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AuthConstant';
import history from '../history';

export default {
	login: (response) => {
        // We save the response in Storage to keep the user authenticated.
		if (response.remember) localStorage.setItem('user', JSON.stringify(response));
        else sessionStorage.setItem('user', JSON.stringify(response));
        
        // Send the action to all stores through the Dispatcher
		AppDispatcher.dispatch({
			action: Constants.LOGIN_USER,
			data: response
        });
        
        // Go to the Home page once the user is logged in
		history.push('/', { message: 'Login successfully' });
	},

	onRefresh: (response) => {
        // We save the response in Storage to keep the user authenticated.
		if (response.remember) localStorage.setItem('user', JSON.stringify(response));
		else sessionStorage.setItem('user', JSON.stringify(response));
		// Send the action to all stores through the Dispatcher
		AppDispatcher.dispatch({
			action: Constants.LOGIN_USER,
			data: response
        });
	},

	logout: (remember) => {
		// We save the response in Storage to keep the user authenticated.
		if (remember) localStorage.removeItem('user');
		else sessionStorage.removeItem('user');
		
		AppDispatcher.dispatch({
			action: Constants.LOGOUT_USER
		});

        // Go to the Login page once the user is logged out
		history.push('/login', { message: 'Logout successfully' });

	}
};
