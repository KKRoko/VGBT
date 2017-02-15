

import App from './App';
import LoginPage from './container/homepage/LoginPage';
import DashboardPage from './container/DashboardPage';

import Auth from './modules/auth';

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, App);
        }
      }
    },
        {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;
