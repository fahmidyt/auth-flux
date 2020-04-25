import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import LoginStore from './stores/LoginStores';
import routes from './routes';
import history from './history';
import LoginAction from './actions/LoginAction';

let user = localStorage.getItem("user") ? localStorage.getItem("user") : sessionStorage.getItem("user");
if(user) {
	const userJson = JSON.parse(user);
	LoginAction.onRefresh(userJson);
}

// This function to prevent user for to access the root and redirect them to /login root.
function UserRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				LoginStore.isLoggedIn() ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
		/>
	);
}

function App() {
	return (
		<Router history={history}>
			<Switch>
				{routes.miscRoutes.map((route, i) => <Route key={i} path={route.path} component={route.component} />)}
				<UserRoute>
					{routes.routes.map((route, i) => (
						<Route key={i} exact={route.exact} path={route.path} component={route.component} />
					))}
				</UserRoute>
			</Switch>
		</Router>
	);
}

export default App;
