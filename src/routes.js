import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';

const routes = [
	{
		path: '/',
        component: Dashboard,
        exact: true
	},
	{
		path: "/logout",
		component: Logout
	}
];

const miscRoutes = [
    {
		path: '/login',
		component: Login
	},
]

export default {
    routes,
    miscRoutes
};
